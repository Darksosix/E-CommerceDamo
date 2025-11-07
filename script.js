// Sample Product Data
const products = [
    {
        id: 1,
        name: 'Air Jordan 1 Retro High',
        brand: 'Nike',
        price: 6500,
        image: 'https://images.unsplash.com/photo-1556906781-9cba4c1e6b01?w=500',
        category: 'basketball',
        rating: 4.9,
        stock: 15,
        colors: ['Black/Red', 'White/Blue', 'Grey/White'],
        sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11]
    },
    {
        id: 2,
        name: 'Nike Air Max 270',
        brand: 'Nike',
        price: 5200,
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500',
        category: 'lifestyle',
        rating: 4.8,
        stock: 25,
        colors: ['Black/White', 'Blue/Orange', 'Red/White'],
        sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5]
    },
    {
        id: 3,
        name: 'Adidas Ultraboost 22',
        brand: 'Adidas',
        price: 7200,
        image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500',
        category: 'running',
        rating: 4.7,
        stock: 20,
        colors: ['Black', 'White', 'Grey/Blue'],
        sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11]
    },
    {
        id: 4,
        name: 'Yeezy Boost 350 V2',
        brand: 'Adidas',
        price: 8900,
        image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500',
        category: 'limited',
        rating: 5.0,
        stock: 5,
        colors: ['Zebra', 'Cream White', 'Black/Red'],
        sizes: [7, 8, 9, 10, 11]
    },
    {
        id: 5,
        name: 'New Balance 574',
        brand: 'New Balance',
        price: 4200,
        image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=500',
        category: 'lifestyle',
        rating: 4.6,
        stock: 30,
        colors: ['Grey/Navy', 'Black/White', 'Burgundy'],
        sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12]
    },
    {
        id: 6,
        name: 'Converse Chuck 70',
        brand: 'Converse',
        price: 3200,
        image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500',
        category: 'lifestyle',
        rating: 4.5,
        stock: 40,
        colors: ['Black', 'White', 'Navy', 'Red'],
        sizes: [6, 7, 8, 9, 10, 11, 12]
    },
    {
        id: 7,
        name: 'Nike Zoom Pegasus 39',
        brand: 'Nike',
        price: 5500,
        image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500',
        category: 'running',
        rating: 4.8,
        stock: 18,
        colors: ['Black/White', 'Blue/Yellow', 'Grey'],
        sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11]
    },
    {
        id: 8,
        name: 'Puma RS-X',
        brand: 'Puma',
        price: 4800,
        image: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=500',
        category: 'lifestyle',
        rating: 4.4,
        stock: 22,
        colors: ['White/Multi', 'Black/Red', 'Blue/Orange'],
        sizes: [7, 8, 9, 10, 11]
    },
    {
        id: 9,
        name: 'Air Force 1 Low',
        brand: 'Nike',
        price: 3900,
        image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500',
        category: 'lifestyle',
        rating: 4.9,
        stock: 35,
        colors: ['Triple White', 'Triple Black', 'White/Black'],
        sizes: [6, 7, 8, 9, 10, 11, 12]
    },
    {
        id: 10,
        name: 'Jordan 4 Retro',
        brand: 'Nike',
        price: 7800,
        image: 'https://images.unsplash.com/photo-1612902376606-1d747c3e90e8?w=500',
        category: 'basketball',
        rating: 5.0,
        stock: 8,
        colors: ['Bred', 'White Cement', 'Black Cat'],
        sizes: [7, 8, 9, 10, 11]
    },
    {
        id: 11,
        name: 'Vans Old Skool',
        brand: 'Vans',
        price: 2800,
        image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500',
        category: 'lifestyle',
        rating: 4.7,
        stock: 45,
        colors: ['Black/White', 'Navy/White', 'Red/White'],
        sizes: [6, 7, 8, 9, 10, 11, 12]
    },
    {
        id: 12,
        name: 'Asics Gel-Kayano 29',
        brand: 'Asics',
        price: 6200,
        image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500',
        category: 'running',
        rating: 4.6,
        stock: 12,
        colors: ['Black/Blue', 'Grey/Orange', 'White/Red'],
        sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11]
    }
];

// Cart State
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    renderProducts(products);
    updateCartUI();
    initEventListeners();
    initNavScroll();
});

// Render Products
function renderProducts(productsToRender) {
    const productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = '';

    productsToRender.forEach(product => {
        const productCard = `
            <div class="bg-white rounded-2xl overflow-hidden shadow-lg card-hover animate-fade-in" data-category="${product.category}">
                <div class="relative group cursor-pointer" onclick="window.location.href='product.html?id=${product.id}'">
                    <img src="${product.image}" 
                         alt="${product.name}" 
                         class="w-full h-72 object-cover product-image">
                    ${product.stock < 10 ? '<span class="absolute top-4 left-4 bg-red-500 text-white text-xs px-3 py-1 rounded-full font-bold">เหลือน้อย!</span>' : ''}
                    ${product.rating >= 4.8 ? '<span class="absolute top-4 right-4 bg-yellow-400 text-black text-xs px-3 py-1 rounded-full font-bold">⭐ HOT</span>' : ''}
                    
                    <!-- Quick View Overlay -->
                    <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <button class="bg-white text-black px-6 py-3 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-all">
                            ดูรายละเอียด
                        </button>
                    </div>
                </div>

                <div class="p-6">
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-xs text-gray-500 uppercase tracking-wider">${product.brand}</span>
                        <div class="flex items-center text-yellow-400 text-sm">
                            <i class="fas fa-star mr-1"></i>
                            <span class="font-bold">${product.rating}</span>
                        </div>
                    </div>
                    
                    <h3 class="font-bold text-lg mb-3 hover:text-primary transition cursor-pointer" 
                        onclick="window.location.href='product.html?id=${product.id}'">
                        ${product.name}
                    </h3>
                    
                    <div class="flex items-center justify-between mb-4">
                        <span class="text-2xl font-black gradient-text">฿${product.price.toLocaleString()}</span>
                        <span class="text-sm text-gray-500">คงเหลือ ${product.stock} คู่</span>
                    </div>

                    <!-- Color Options -->
                    <div class="flex gap-2 mb-4">
                        ${product.colors.slice(0, 3).map(color => `
                            <div class="w-6 h-6 rounded-full border-2 border-gray-300 bg-gradient-to-br from-gray-700 to-gray-900" 
                                 title="${color}"></div>
                        `).join('')}
                        ${product.colors.length > 3 ? `<span class="text-xs text-gray-500 self-center">+${product.colors.length - 3}</span>` : ''}
                    </div>

                    <button onclick="addToCart(${product.id})" 
                            class="w-full accent-gradient text-white py-3 rounded-full font-bold hover:shadow-xl transform hover:scale-105 transition">
                        <i class="fas fa-shopping-cart mr-2"></i>ใส่ตะกร้า
                    </button>
                </div>
            </div>
        `;
        productGrid.innerHTML += productCard;
    });
}

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        if (existingItem.quantity < product.stock) {
            existingItem.quantity++;
        } else {
            showNotification('สินค้าในคลังไม่เพียงพอ', 'error');
            return;
        }
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
    showNotification('เพิ่มสินค้าลงตะกร้าแล้ว!', 'success');
}

// Update Cart UI
function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');

    // Update count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    // Update cart items
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="text-gray-500 text-center py-8">ตะกร้าสินค้าว่างเปล่า</p>';
        cartTotal.textContent = '฿0';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <img src="${item.image}" alt="${item.name}" class="w-20 h-20 object-cover rounded-lg">
                <div class="flex-1">
                    <h4 class="font-bold text-sm">${item.name}</h4>
                    <p class="text-gray-600 text-sm">฿${item.price.toLocaleString()}</p>
                    <div class="flex items-center gap-2 mt-2">
                        <button onclick="updateQuantity(${item.id}, -1)" class="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300">
                            <i class="fas fa-minus text-xs"></i>
                        </button>
                        <span class="font-bold">${item.quantity}</span>
                        <button onclick="updateQuantity(${item.id}, 1)" class="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300">
                            <i class="fas fa-plus text-xs"></i>
                        </button>
                    </div>
                </div>
                <button onclick="removeFromCart(${item.id})" class="text-red-500 hover:text-red-700">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `).join('');

        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotal.textContent = `฿${total.toLocaleString()}`;
    }
}

// Update Quantity
function updateQuantity(productId, change) {
    const item = cart.find(i => i.id === productId);
    const product = products.find(p => p.id === productId);
    
    if (item) {
        item.quantity += change;
        
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else if (item.quantity > product.stock) {
            item.quantity = product.stock;
            showNotification('สินค้าในคลังไม่เพียงพอ', 'error');
        } else {
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartUI();
        }
    }
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
    showNotification('ลบสินค้าออกจากตะกร้าแล้ว', 'info');
}

// Show Notification
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    const bgColor = type === 'success' ? 'bg-green-500' : type === 'error' ? 'bg-red-500' : 'bg-blue-500';
    
    notification.className = `fixed top-24 right-6 ${bgColor} text-white px-6 py-4 rounded-lg shadow-2xl z-50 animate-fade-in`;
    notification.innerHTML = `
        <div class="flex items-center gap-3">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'} text-xl"></i>
            <span class="font-semibold">${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Filter Products
function filterProducts(category) {
    const filtered = category === 'all' ? products : products.filter(p => p.category === category);
    renderProducts(filtered);

    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('bg-black', 'text-white');
        btn.classList.add('bg-white', 'text-black');
    });
    event.target.classList.remove('bg-white', 'text-black');
    event.target.classList.add('bg-black', 'text-white');
}

// Sort Products
function sortProducts(sortBy) {
    let sorted = [...products];
    
    switch(sortBy) {
        case 'price-low':
            sorted.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            sorted.sort((a, b) => b.price - a.price);
            break;
        case 'newest':
            sorted.reverse();
            break;
        default:
            // featured - default order
            break;
    }
    
    renderProducts(sorted);
}

// Search Products
function searchProducts(query) {
    const filtered = products.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.brand.toLowerCase().includes(query.toLowerCase())
    );
    renderProducts(filtered);
}

// Initialize Event Listeners
function initEventListeners() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Cart Sidebar
    const cartIcon = document.getElementById('cartIcon');
    const cartSidebar = document.getElementById('cartSidebar');
    const closeCart = document.getElementById('closeCart');
    const cartOverlay = document.getElementById('cartOverlay');

    cartIcon.addEventListener('click', () => {
        cartSidebar.classList.remove('translate-x-full');
        cartOverlay.classList.remove('hidden');
    });

    closeCart.addEventListener('click', () => {
        cartSidebar.classList.add('translate-x-full');
        cartOverlay.classList.add('hidden');
    });

    cartOverlay.addEventListener('click', () => {
        cartSidebar.classList.add('translate-x-full');
        cartOverlay.classList.add('hidden');
    });

    // Filter Buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const category = e.target.dataset.category;
            filterProducts(category);
        });
    });

    // Sort Select
    const sortSelect = document.getElementById('sortSelect');
    sortSelect.addEventListener('change', (e) => {
        sortProducts(e.target.value);
    });

    // Search Input
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        searchProducts(e.target.value);
    });

    // Chat Button
    const chatBtn = document.getElementById('chatBtn');
    chatBtn.addEventListener('click', () => {
        showNotification('ระบบแชทกำลังเชื่อมต่อ...', 'info');
        setTimeout(() => {
            showNotification('แอดมินพร้อมให้บริการแล้ว! 👋', 'success');
        }, 1500);
    });
}

// Navigation Scroll Effect
function initNavScroll() {
    const nav = document.querySelector('.nav-sticky');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

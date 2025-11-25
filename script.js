// Cart data stored in localStorage
let cart = [];

// Product catalog
const categoryOrder = ['men', 'women', 'kids', 'toys'];

const products = {
    men: [
        { name: "Men's Watch", price: 2499, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400" },
        { name: "Men's Shirt", price: 1299, image: "https://images.unsplash.com/photo-1589234217365-08d3e0e5cf42?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVucyUyMHNoaXJ0fGVufDB8fDB8fHww" },
        { name: "Men's Shoes", price: 3999, image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400" },
        { name: "Men's Jacket", price: 4499, image: "https://images.unsplash.com/photo-1715608720717-ac3d1b638e44?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWVucyUyMGphY2tldHxlbnwwfHwwfHx8MA%3D%3D" },
        { name: "Men's Jeans", price: 1899, image: "https://images.unsplash.com/photo-1594938291221-94c1b4c0e0c0?w=400" },
        { name: "Men's T-Shirt", price: 799, image: "https://plus.unsplash.com/premium_photo-1689629728966-0d248b5aeda2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVucyUyMHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D" },
        { name: "Men's Sunglasses", price: 1599, image: "https://images.unsplash.com/photo-1590526599411-42bcd63d50fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVucyUyMHN1bmdsYXNzZXN8ZW58MHx8MHx8fDA%3D" },
        { name: "Men's Belt", price: 999, image: "https://images.unsplash.com/photo-1705493655920-20c572928501?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVucyUyMGJlbHR8ZW58MHx8MHx8fDA%3D" },
        { name: "Men's Wallet", price: 1199, image: "https://plus.unsplash.com/premium_photo-1666739389067-ff71ad748f3e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWVucyUyMHdhbGxldHxlbnwwfHwwfHx8MA%3D%3D" }
    ],
    women: [
        { name: "Women's Handbag", price: 3999, image: "https://images.unsplash.com/photo-1751522925876-79bfeae6fbfb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29tZW5zJTIwJTIwaGFuZGJhZ3xlbnwwfHwwfHx8MA%3D%3D" },
        { name: "Women's Dress", price: 2799, image: "https://images.unsplash.com/photo-1616313253719-c46514cddee1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvbWVucyUyMCUyMGRyZXNzfGVufDB8fDB8fHww" },
        { name: "Women's Shoes", price: 3499, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400" },
        { name: "Women's Jewelry", price: 5999, image: "https://images.unsplash.com/photo-1694062045776-f48d9b6de57e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdvbWVucyUyMCUyMGpld2VsbGVyeXxlbnwwfHwwfHx8MA%3D%3D" },
        { name: "Women's Top", price: 1299, image: "https://plus.unsplash.com/premium_photo-1690038784056-715b684ce6ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvbWVucyUyMCUyMHRvcHxlbnwwfHwwfHx8MA%3D%3D" },
        { name: "Women's Jeans", price: 2199, image: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29tZW5zJTIwJTIwamVhbnN8ZW58MHx8MHx8fDA%3D" },
        { name: "Women's Sunglasses", price: 1499, image: "https://images.unsplash.com/photo-1531335843837-11353e3c87c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW5zJTIwJTIwc3VuZ2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D" },
        { name: "Women's Scarf", price: 899, image: "https://media.istockphoto.com/id/897271658/photo/beautiful-woman-with-cancer-smiles.webp?a=1&b=1&s=612x612&w=0&k=20&c=99cMk-JKyu0dIgNJOHpdVGGTlJpK6Q8laaZEEIs-fOY=" },
        { name: "Women's Watch", price: 2999, image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29tZW5zJTIwd2F0Y2h8ZW58MHx8MHx8fDA%3D" }
    ],
    kids: [
        { name: "Kids T-Shirt", price: 599, image: "https://images.unsplash.com/photo-1754639488181-7eae9f6c06e0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGtpZHMlMjB0c2hpcnR8ZW58MHx8MHx8fDA%3D" },
        { name: "Kids Shoes", price: 1299, image: "https://images.unsplash.com/photo-1678192568478-9488ee55def6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2lkcyUyMHNob2VzfGVufDB8fDB8fHww" },
        { name: "Kids Jeans", price: 899, image: "https://images.unsplash.com/photo-1714074566016-4200bfb6f88a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGtpZHMlMjBqZWFuc3xlbnwwfHwwfHx8MA%3D%3D" },
        { name: "Kids Backpack", price: 1499, image: "https://plus.unsplash.com/premium_photo-1687128298225-fab96b21c771?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2lkcyUyMGJhY2twYWNrfGVufDB8fDB8fHww" },
        { name: "Kids Dress", price: 1199, image: "https://images.unsplash.com/photo-1578897367107-2828e351c8a8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2lkcyUyMGRyZXNzfGVufDB8fDB8fHww" },
        { name: "Kids Cap", price: 499, image: "https://images.unsplash.com/photo-1732041101308-b231eacf8767?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2lkcyUyMGNhcHxlbnwwfHwwfHx8MA%3D%3D" },
        { name: "Kids Jacket", price: 1799, image: "https://plus.unsplash.com/premium_photo-1707816501228-1d814ad62d7b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2lkcyUyMGphY2tldHxlbnwwfHwwfHx8MA%3D%3D" },
        { name: "Kids Socks", price: 299, image: "https://plus.unsplash.com/premium_photo-1663099237349-c07dece464be?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2lkcyUyMHNvY2tzfGVufDB8fDB8fHww" },
        { name: "Kids Hat", price: 399, image: "https://images.unsplash.com/photo-1620508458727-85ff8a78d160?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2lkcyUyMGhhdHxlbnwwfHwwfHx8MA%3D%3D" }
    ],
    toys: [
        { name: "Toy Car", price: 899, image: "https://images.unsplash.com/photo-1609708536965-6e5b915b195b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG95JTIwY2FyfGVufDB8fDB8fHww" },
        { name: "Teddy Bear", price: 699, image: "https://images.unsplash.com/photo-1602734846297-9299fc2d4703?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVkZHklMjBiZWFyfGVufDB8fDB8fHww" },
        { name: "Building Blocks", price: 1299, image: "https://images.unsplash.com/photo-1638802538115-041e14d28d6a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVpbGRpbmclMjBibG9ja3N8ZW58MHx8MHx8fDA%3D" },
        { name: "Puzzle Game", price: 599, image: "https://plus.unsplash.com/premium_photo-1726783362305-0582cc6dceef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHV6emxlJTIwZ2FtZXxlbnwwfHwwfHx8MA%3D%3D" },
        { name: "Robot Toy", price: 1599, image: "https://images.unsplash.com/photo-1546776230-bb86256870ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9ib3QlMjB0b3l8ZW58MHx8MHx8fDA%3D" },
        { name: "Doll House", price: 2499, image: "https://plus.unsplash.com/premium_photo-1661274044376-d372f897757a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZG9sbCUyMGhvdXNlfGVufDB8fDB8fHww" },
        { name: "Action Figure", price: 799, image: "https://images.unsplash.com/photo-1606663889134-b1dedb5ed8b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWN0aW9uJTIwZmlndXJlfGVufDB8fDB8fHww" },
        { name: "Board Game", price: 999, image: "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym9hcmQlMjBnYW1lfGVufDB8fDB8fHww" },
        { name: "Remote Control Car", price: 1899, image: "https://images.unsplash.com/photo-1758964087156-0eac97044f84?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVtb3RlJTIwY29udHJvbCUyMGNhcnxlbnwwfHwwfHx8MA%3D%3D" }
    ]
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    renderAllProducts();
    loadCartFromStorage();
    updateCartCount();
    setupNavigation();
    setupModal();
    setupPaymentForm();
    renderCart();
});

// Load cart from localStorage
function loadCartFromStorage() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

// Save cart to localStorage
function saveCartToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Update cart count in navbar
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

// Add to cart function
function addToCart(productName, price, image) {
    const existingItem = cart.find(item => item.name === productName);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            name: productName,
            price: price,
            image: image,
            quantity: 1
        });
    }
    
    saveCartToStorage();
    updateCartCount();
    renderCart();
    
    // Show notification
    showNotification('Item added to cart!');
}

// Render all product sections
function renderAllProducts() {
    const homeContainer = document.getElementById('home-products');
    if (homeContainer) {
        homeContainer.innerHTML = '';
    }

    categoryOrder.forEach(category => {
        const cardsHTML = products[category].map(createProductCard).join('');
        if (homeContainer) {
            homeContainer.innerHTML += cardsHTML;
        }
        const sectionContainer = document.getElementById(`${category}-products`);
        if (sectionContainer) {
            sectionContainer.innerHTML = cardsHTML;
        }
    });
}

function createProductCard(product) {
    const formattedPrice = formatPrice(product.price);
    const escapedName = escapeQuotes(product.name);
    const escapedImage = escapeQuotes(product.image);
    return `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">₹${formattedPrice}</p>
                <div class="product-buttons">
                    <button class="btn btn-add-cart" onclick="addToCart('${escapedName}', ${product.price}, '${escapedImage}')">Add to Cart</button>
                    <button class="btn btn-buy-now" onclick="buyNow('${escapedName}', ${product.price}, '${escapedImage}')">Buy Now</button>
                </div>
            </div>
        </div>
    `;
}

function formatPrice(value) {
    return value.toLocaleString('en-IN');
}

function escapeQuotes(text) {
    return text.replace(/'/g, "\\'");
}

// Buy now function
function buyNow(productName, price, image) {
    // Add item to cart first
    addToCart(productName, price, image);
    
    // Open payment modal with this item
    const totalAmount = price;
    openPaymentModal(totalAmount);
}

// Show notification
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background-color: #28a745;
        color: white;
        padding: 1rem 2rem;
        border-radius: 5px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        z-index: 4000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 2000);
}

// Navigation setup
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links and sections
            navLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Show corresponding section
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
            }
            
            // Close mobile menu if open
            const navbarCollapse = document.getElementById('navbarNav');
            if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                    toggle: false
                });
                bsCollapse.hide();
            }
        });
    });
}

// Handle nav click for Bootstrap navbar
function handleNavClick(e, element) {
    e.preventDefault();
    
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    
    // Remove active class from all links and sections
    navLinks.forEach(l => l.classList.remove('active'));
    sections.forEach(s => s.classList.remove('active'));
    
    // Add active class to clicked link
    element.classList.add('active');
    
    // Show corresponding section
    const targetId = element.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    // Close mobile menu if open
    const navbarCollapse = document.getElementById('navbarNav');
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) {
            bsCollapse.hide();
        }
    }
}

// Make handleNavClick globally accessible
window.handleNavClick = handleNavClick;

// Setup modal
function setupModal() {
    const modal = document.getElementById('payment-modal');
    const closeModal = document.querySelector('.close-modal');
    
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Open payment modal
function openPaymentModal(totalAmount) {
    const modal = document.getElementById('payment-modal');
    const totalAmountInput = document.getElementById('total-amount');
    
    totalAmountInput.value = `₹${totalAmount.toLocaleString('en-IN')}`;
    modal.style.display = 'block';
}

// Setup payment form
function setupPaymentForm() {
    const paymentForm = document.getElementById('payment-form');
    
    paymentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const address = document.getElementById('address').value;
        const card = document.getElementById('card').value;
        const expiry = document.getElementById('expiry').value;
        const cvv = document.getElementById('cvv').value;
        
        // Validate form
        if (!name || !email || !phone || !address || !card || !expiry || !cvv) {
            alert('Please fill in all fields');
            return;
        }
        
        // Close payment modal
        const modal = document.getElementById('payment-modal');
        modal.style.display = 'none';
        
        // Show thank you popup
        showThankYouPopup();
        
        // Clear cart if it was a buy now
        // For regular checkout, you might want to keep items in cart
        // cart = [];
        // saveCartToStorage();
        // updateCartCount();
        
        // Reset form
        paymentForm.reset();
    });
}

// Show thank you popup
function showThankYouPopup() {
    const popup = document.getElementById('thank-you-popup');
    popup.style.display = 'flex';
    
    const closePopup = document.querySelector('.close-popup');
    closePopup.addEventListener('click', function() {
        popup.style.display = 'none';
    });
    
    // Auto close after 5 seconds
    setTimeout(() => {
        popup.style.display = 'none';
    }, 5000);
}

// Open cart page
function openCart() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    
    // Remove active class from all links and sections
    navLinks.forEach(l => l.classList.remove('active'));
    sections.forEach(s => s.classList.remove('active'));
    
    // Show cart section
    const cartSection = document.getElementById('cart');
    if (cartSection) {
        cartSection.classList.add('active');
    }
    
    renderCart();
}

// Make openCart globally accessible
window.openCart = openCart;

// Render cart items
function renderCart() {
    const cartContainer = document.getElementById('cart-items-container');
    const emptyCartMessage = document.getElementById('empty-cart-message');
    const cartSummary = document.getElementById('cart-summary');
    
    if (!cartContainer) return;
    
    if (cart.length === 0) {
        emptyCartMessage.style.display = 'block';
        cartSummary.style.display = 'none';
        cartContainer.innerHTML = '<div id="empty-cart-message" class="empty-cart"><p>Your cart is empty</p></div>';
        return;
    }
    
    emptyCartMessage.style.display = 'none';
    cartSummary.style.display = 'block';
    
    cartContainer.innerHTML = cart.map((item, index) => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <h3 class="cart-item-name">${item.name}</h3>
                <p class="cart-item-price">₹${item.price.toLocaleString('en-IN')}</p>
            </div>
            <div class="cart-item-quantity">
                <button class="quantity-btn" onclick="updateQuantity(${index}, -1)">-</button>
                <span class="quantity-value">${item.quantity}</span>
                <button class="quantity-btn" onclick="updateQuantity(${index}, 1)">+</button>
            </div>
            <div class="cart-item-total">
                <p class="cart-item-total-price">₹${(item.price * item.quantity).toLocaleString('en-IN')}</p>
            </div>
            <button class="btn-remove" onclick="removeFromCart(${index})">Remove</button>
        </div>
    `).join('');
    
    updateCartTotal();
}

// Update quantity
function updateQuantity(index, change) {
    if (cart[index]) {
        cart[index].quantity += change;
        if (cart[index].quantity <= 0) {
            cart.splice(index, 1);
        }
        saveCartToStorage();
        updateCartCount();
        renderCart();
    }
}

// Remove from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    saveCartToStorage();
    updateCartCount();
    renderCart();
    showNotification('Item removed from cart!');
}

// Update cart total
function updateCartTotal() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const totalAmountElement = document.getElementById('cart-total-amount');
    if (totalAmountElement) {
        totalAmountElement.textContent = `₹${total.toLocaleString('en-IN')}`;
    }
}

// Checkout from cart
function checkoutCart() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    if (total > 0) {
        openPaymentModal(total);
    }
}

// Make all cart functions globally accessible
window.updateQuantity = updateQuantity;
window.removeFromCart = removeFromCart;
window.checkoutCart = checkoutCart;

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);


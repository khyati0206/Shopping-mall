// Cart data stored in localStorage
let cart = [];

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
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


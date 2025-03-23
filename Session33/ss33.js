const products = [
    { id: 1, name: "Điện thoại Samsung Galaxy A54", price: 7500000, image: "https://cdn.tgdd.vn/Products/Images/42/335177/samsung-galaxy-a56-5g-green-thumb-600x600.jpg" },
    { id: 2, name: "Laptop Dell Inspiron 15", price: 16000000, image: "image_url" },
    { id: 3, name: "Tai nghe AirPods Pro", price: 5000000, image: "image_url" },
    { id: 4, name: "Loa Bluetooth JBL Flip 5", price: 6000000, image: "image_url" },
    { id: 5, name: "Chuột không dây Logitech MX Master", price: 3000000, image: "image_url" }
];
function displayProducts() {
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = ""; // Clear previous content

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src=`${product.image}` alt=`${product.name}`>
            <div class="product-name">${product.name}</div>
            <div class="product-price">${formatCurrency(product.price)}</div>
            <button class="add-to-cart-btn" data-id="${product.id}">Thêm vào giỏ hàng</button>
        `;
        productGrid.appendChild(productCard);
    });

    // Add event listeners to "Add to Cart" buttons
    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', function () {
            const productId = parseInt(this.getAttribute('data-id'));
            addToCart(productId);
        });
    });
}
let cart = [];

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.id === productId);

    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ id: product.id, name: product.name, price: product.price, quantity: 1 });
    }
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    let totalAmount = 0;

    cartContainer.innerHTML = cart.length === 0 ? "<div>Giỏ hàng trống</div>" : "";

    cart.forEach(item => {
        totalAmount += item.price * item.quantity;
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div>${item.name}</div>
            <div>${formatCurrency(item.price)} x ${item.quantity}</div>
            <button class="decrease-btn" data-id="${item.id}">-</button>
            <button class="increase-btn" data-id="${item.id}">+</button>
            <button class="remove" data-id="${item.id}">X</button>
        `;
        cartContainer.appendChild(cartItem);
    });

    cartTotal.textContent = `Tổng: ${formatCurrency(totalAmount)}`;

    // Event Listeners for quantity buttons
    document.querySelectorAll('.decrease-btn').forEach(button => {
        button.addEventListener('click', function () {
            updateQuantity(parseInt(this.getAttribute('data-id')), -1);
        });
    });

    document.querySelectorAll('.increase-btn').forEach(button => {
        button.addEventListener('click', function () {
            updateQuantity(parseInt(this.getAttribute('data-id')), 1);
        });
    });

    document.querySelectorAll('.remove').forEach(button => {
        button.addEventListener('click', function () {
            removeFromCart(parseInt(this.getAttribute('data-id')));
        });
    });
}
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) removeFromCart(productId);
    }
    updateCartDisplay();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
}
document.getElementById('checkout-btn').addEventListener('click', function () {
    if (cart.length === 0) {
        alert("Giỏ hàng trống!");
    } else {
        const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        alert(`Cảm ơn bạn đã mua hàng!\nTổng giá trị đơn hàng: ${formatCurrency(totalAmount)}`);
        cart = [];
        updateCartDisplay();
    }
});

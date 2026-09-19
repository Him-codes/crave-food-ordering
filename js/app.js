/* =========================
   GLOBAL CART
========================= */

let cart = JSON.parse(localStorage.getItem("craveCart")) || [];

let favorites =
    JSON.parse(localStorage.getItem("craveFavorites")) || [];


function saveCart() {
    localStorage.setItem("craveCart", JSON.stringify(cart));
    updateCartCount();
}


function updateCartCount() {

    const count = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );

    document.querySelectorAll("#cartCount").forEach(el => {
        el.textContent = count;
    });
}


/* =========================
   ADD TO CART
========================= */

function addToCart(id, quantity = 1) {

    const product = products.find(p => p.id === Number(id));

    if (!product) return;

    const existing = cart.find(item => item.id === product.id);

    if (existing) {
        existing.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            quantity: quantity
        });
    }

    saveCart();

    showToast(`${product.name} added to cart 🛒`);
}


/* =========================
   REMOVE
========================= */

function removeFromCart(id) {

    cart = cart.filter(item => item.id !== Number(id));

    saveCart();

    renderCart();
}


/* =========================
   CHANGE QUANTITY
========================= */

function changeQuantity(id, amount) {

    const item = cart.find(item => item.id === Number(id));

    if (!item) return;

    item.quantity += amount;

    if (item.quantity <= 0) {
        removeFromCart(id);
        return;
    }

    saveCart();

    renderCart();
}


/* =========================
   PRODUCT CARD
========================= */

function productCard(product) {

    const liked = favorites.includes(product.id);

    return `
        <article class="product-card" tabindex="0" role="link" aria-label="View ${product.name}" onclick="openProductCard(${product.id}, event)" onkeydown="if(event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openProductCard(${product.id}, event); }">

            <div class="product-image">

                <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='grid';"><span class="image-fallback">${product.emoji}</span>

                <button
                    class="favorite ${liked ? "active" : ""}"
                    aria-label="${liked ? "Remove" : "Add"} ${product.name} ${liked ? "from" : "to"} favorites"
                    onclick="event.stopPropagation(); toggleFavorite(${product.id})"
                >
                    ${liked ? "♥" : "♡"}
                </button>

            </div>

            <div class="product-info">

                <h3>${product.name}</h3>

                <p>${product.description}</p>

                <div class="product-meta">
                    <span class="rating">★ ${product.rating} <small>(${product.reviews})</small></span>
                    <span class="time">⏱ ${product.time}</span>
                    <span class="price">₦${product.price.toLocaleString()}</span>
                </div>

                <div class="product-actions">

                    <a
                        href="product.html?id=${product.id}" onclick="event.stopPropagation()"
                        class="view-btn"
                    >
                        View
                    </a>

                    <button
                        class="add-btn"
                        onclick="event.stopPropagation(); addToCart(${product.id})"
                    >
                        + Add
                    </button>

                </div>

            </div>

        </article>
    `;
}


function openProductCard(id, event) {
    if (event && event.target && event.target.closest("button, a")) return;
    window.location.href = `product.html?id=${Number(id)}`;
}

/* =========================
   POPULAR PRODUCTS
========================= */

function renderPopular() {

    const container =
        document.getElementById("popularProducts");

    if (!container) return;

    const popular =
        products.filter(product => product.popular);

    container.innerHTML =
        popular
        .slice(0, 8)
        .map(productCard)
        .join("");
}


/* =========================
   MENU
========================= */

function renderMenu(list = products) {

    const container =
        document.getElementById("menuProducts");

    if (!container) return;

    if (!list.length) {

        container.innerHTML = `
            <div class="empty-state">
                <div>🔎</div>
                <h2>No meals found</h2>
                <p>Try another search or category.</p>
            </div>
        `;

        return;
    }

    container.innerHTML =
        list.map(productCard).join("");
}


function renderNigerianShowcase() {

    const container = document.getElementById("nigerianProducts");

    if (!container) return;

    container.innerHTML = products
        .filter(product => product.category === "Nigerian")
        .slice(0, 4)
        .map(productCard)
        .join("");
}


function setupMenu() {

    const container =
        document.getElementById("menuProducts");

    if (!container) return;

    renderMenu();

    const search =
        document.getElementById("searchInput");

    const buttons =
        document.querySelectorAll(".filter-btn");

    let category = "All";

    function filter() {

        const query =
            search.value.toLowerCase().trim();

        let filtered = products;

        if (category !== "All") {
            filtered =
                filtered.filter(
                    p => p.category === category
                );
        }

        if (query) {
            filtered =
                filtered.filter(p =>
                    p.name.toLowerCase().includes(query) ||
                    p.category.toLowerCase().includes(query)
                );
        }

        renderMenu(filtered);
    }

    search.addEventListener("input", filter);

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            buttons.forEach(b =>
                b.classList.remove("active")
            );

            button.classList.add("active");

            category =
                button.dataset.category;

            filter();
        });

    });

    const params =
        new URLSearchParams(window.location.search);

    const urlCategory =
        params.get("category");

    if (urlCategory) {

        category = urlCategory;

        buttons.forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.category === urlCategory
            );

        });

        filter();
    }
}


/* =========================
   PRODUCT DETAILS
========================= */

function renderProduct() {

    const container =
        document.getElementById("productDetails");

    if (!container) return;

    const params =
        new URLSearchParams(window.location.search);

    const id =
        Number(params.get("id"));

    const product =
        products.find(p => p.id === id);

    if (!product) {

        container.innerHTML = `
            <div class="empty-state">
                <div>😕</div>
                <h2>Meal not found</h2>
                <a href="menu.html" class="primary-btn">
                    Back to menu
                </a>
            </div>
        `;

        return;
    }

    container.innerHTML = `

        <div class="product-detail-image">
            <img src="${product.image}" alt="${product.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='grid';">
            <span class="image-fallback">${product.emoji}</span>
        </div>

        <div class="product-detail-info">

            <span class="eyebrow">
                ${product.category.toUpperCase()}
            </span>

            <h1>${product.name}</h1>

            <div class="detail-rating">
                <span class="rating">
                    ★ ${product.rating}
                </span>

                <span>
                    (${product.reviews} reviews)
                </span>
            </div>

            <p class="product-description">
                ${product.description}
            </p>

            <h3>Ingredients</h3>

            <div class="ingredients">

                ${product.ingredients.map(item => `
                    <span class="ingredient">
                        ${item}
                    </span>
                `).join("")}

            </div>

            <div class="custom-box">

                <h4>Meal information</h4>

                <div class="option-row">
                    <span>Calories</span>
                    <strong>${product.calories} kcal</strong>
                </div>

                <div class="option-row">
                    <span>Preparation</span>
                    <strong>${product.time}</strong>
                </div>

            </div>

            <div class="custom-box">

                <h4>Quantity</h4>

                <div class="quantity-control">

                    <button onclick="changeProductQuantity(-1)">
                        −
                    </button>

                    <strong id="productQuantity">
                        1
                    </strong>

                    <button onclick="changeProductQuantity(1)">
                        +
                    </button>

                </div>

            </div>

            <button
                class="add-large"
                onclick="addProductFromPage(${product.id})"
            >
                Add to Cart — ₦<span id="productTotal">
                    ${product.price.toLocaleString()}
                </span>
            </button>

        </div>
    `;

    window.currentProduct = product;
}


let productQuantity = 1;


function changeProductQuantity(amount) {

    productQuantity += amount;

    if (productQuantity < 1) {
        productQuantity = 1;
    }

    document.getElementById(
        "productQuantity"
    ).textContent = productQuantity;

    const total =
        window.currentProduct.price * productQuantity;

    document.getElementById(
        "productTotal"
    ).textContent =
        total.toLocaleString();
}


function addProductFromPage(id) {

    addToCart(id, productQuantity);

    productQuantity = 1;
}


/* =========================
   FAVORITES
========================= */

function toggleFavorite(id) {

    id = Number(id);

    if (favorites.includes(id)) {

        favorites =
            favorites.filter(item => item !== id);

        showToast("Removed from favorites");

    } else {

        favorites.push(id);

        showToast("Saved to favorites ❤️");
    }

    localStorage.setItem(
        "craveFavorites",
        JSON.stringify(favorites)
    );

    renderPopular();
    renderMenu();
    renderFavorites();
}


function renderFavorites() {

    const container =
        document.getElementById("favoritesProducts");

    if (!container) return;

    const saved =
        products.filter(p => favorites.includes(p.id));

    if (!saved.length) {

        container.innerHTML = `
            <div class="empty-state">
                <div>♡</div>
                <h2>No saved meals yet</h2>
                <p>
                    Tap the heart on meals you want to save.
                </p>
                <a href="menu.html" class="primary-btn">
                    Browse menu
                </a>
            </div>
        `;

        return;
    }

    container.innerHTML =
        saved.map(productCard).join("");
}


/* =========================
   CART PAGE
========================= */

function renderCart() {

    const container =
        document.getElementById("cartItems");

    const summary =
        document.getElementById("cartSummary");

    if (!container || !summary) return;

    if (!cart.length) {

        container.innerHTML = `
            <div class="empty-state">
                <div>🛒</div>
                <h2>Your cart is empty</h2>
                <p>Add something delicious.</p>
                <a href="menu.html" class="primary-btn">
                    Browse menu
                </a>
            </div>
        `;

        summary.innerHTML = "";

        return;
    }

    container.innerHTML =
        cart.map(item => {

            const product =
                products.find(p => p.id === item.id);

            return `
                <div class="cart-item">

                    <div class="cart-item-image">
                        <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='grid';">
                        <span class="image-fallback">${product.emoji}</span>
                    </div>

                    <div class="cart-item-info">

                        <h3>${product.name}</h3>

                        <p>
                            ₦${product.price.toLocaleString()}
                            each
                        </p>

                    </div>

                    <div class="quantity-control">

                        <button
                            onclick="changeQuantity(
                                ${product.id},
                                -1
                            )"
                        >
                            −
                        </button>

                        <strong>
                            ${item.quantity}
                        </strong>

                        <button
                            onclick="changeQuantity(
                                ${product.id},
                                1
                            )"
                        >
                            +
                        </button>

                    </div>

                    <strong>
                        ₦${(
                            product.price *
                            item.quantity
                        ).toLocaleString()}
                    </strong>

                    <button
                        onclick="removeFromCart(${product.id})"
                    >
                        🗑️
                    </button>

                </div>
            `;

        }).join("");


    const subtotal =
        cart.reduce((total, item) => {

            const product =
                products.find(p => p.id === item.id);

            return total +
                product.price * item.quantity;

        }, 0);


    const delivery =
        subtotal >= 15000 ? 0 : 1500;

    const promo =
        localStorage.getItem("cravePromo");
    const promoUsed =
        localStorage.getItem("cravePromoUsed") === "true";

    const discount =
        promo === "CRAVE20" && !promoUsed ? Math.round(subtotal * 0.20) : 0;

    const total =
        Math.max(0, subtotal - discount + delivery);


    const freeDeliveryTarget = 15000;
    const remaining = Math.max(0, freeDeliveryTarget - subtotal);
    const progress = Math.min(100, Math.round((subtotal / freeDeliveryTarget) * 100));

    summary.innerHTML = `
        <h2>Order Summary</h2>

        <div class="free-delivery-box">
            <div class="free-delivery-head">
                <span>${remaining > 0 ? `Add <strong>₦${remaining.toLocaleString()}</strong> for free delivery` : "🎉 Free delivery unlocked"}</span>
                <span>${Math.min(progress, 100)}%</span>
            </div>
            <div class="progress-track"><span style="width:${progress}%"></span></div>
        </div>

        ${promo === "CRAVE20" ? `
            <div class="summary-row savings-row">
                <span>CRAVE20 discount</span>
                <strong>-₦${discount.toLocaleString()}</strong>
            </div>
        ` : ""}

        <div class="summary-row"><span>Subtotal</span><strong>₦${subtotal.toLocaleString()}</strong></div>
        <div class="summary-row"><span>Delivery</span><strong>${delivery === 0 ? "FREE" : "₦" + delivery.toLocaleString()}</strong></div>
        <div class="summary-total"><span>Total</span><span>₦${total.toLocaleString()}</span></div>

        <a href="checkout.html" class="checkout-btn">Proceed to Checkout <span>→</span></a>
        <p class="secure-note">🔒 Demo checkout • Your data stays in this browser</p>
    `;
}


/* =========================
   CHECKOUT
========================= */

function setupCheckout() {

    const summary =
        document.getElementById("checkoutSummary");

    if (!summary) return;

    if (!cart.length) {

        summary.innerHTML = `
            <p>Your cart is empty.</p>
            <a href="menu.html" class="primary-btn">
                Browse menu
            </a>
        `;

        return;
    }

    const subtotal =
        cart.reduce((total, item) => {

            const product =
                products.find(p => p.id === item.id);

            return total +
                product.price * item.quantity;

        }, 0);

    const delivery =
        subtotal >= 15000 ? 0 : 1500;

    const promo =
        localStorage.getItem("cravePromo");
    const promoUsed =
        localStorage.getItem("cravePromoUsed") === "true";

    const discount =
        promo === "CRAVE20" && !promoUsed ? Math.round(subtotal * 0.20) : 0;

    const total =
        Math.max(0, subtotal - discount + delivery);

    summary.innerHTML = `

        ${promo === "CRAVE20" ? `
            <div class="summary-row">
                <span>CRAVE20 discount</span>
                <strong>-₦${discount.toLocaleString()}</strong>
            </div>
        ` : ""}

        <div class="summary-row">
            <span>Subtotal</span>
            <strong>
                ₦${subtotal.toLocaleString()}
            </strong>
        </div>

        <div class="summary-row">
            <span>Delivery</span>
            <strong>
                ${delivery === 0
                    ? "FREE"
                    : "₦" + delivery.toLocaleString()
                }
            </strong>
        </div>

        <div class="summary-total">
            <span>Total</span>
            <span>
                ₦${total.toLocaleString()}
            </span>
        </div>

    `;

}


/* =========================
   PLACE ORDER
========================= */

function placeOrder(event) {

    event.preventDefault();

    if (!cart.length) {
        showToast("Your cart is empty.");
        return;
    }

    const orders =
        JSON.parse(
            localStorage.getItem("craveOrders")
        ) || [];

    const order = {

        id:
            "CRV-" +
            Math.floor(
                100000 + Math.random() * 900000
            ),

        date:
            new Date().toLocaleString(),

        items: [...cart],

        promo: localStorage.getItem("cravePromo") === "CRAVE20" && localStorage.getItem("cravePromoUsed") !== "true"
            ? "CRAVE20"
            : null,
        status: "Preparing"

    };

    orders.unshift(order);

    localStorage.setItem(
        "craveOrders",
        JSON.stringify(orders)
    );

    cart = [];

    if (order.promo === "CRAVE20") {
        localStorage.setItem("cravePromoUsed", "true");
    }
    localStorage.removeItem("cravePromo");

    saveCart();

    window.location.href = "orders.html";
}


/* =========================
   ORDERS
========================= */

function renderOrders() {
    const container = document.getElementById("ordersList");
    if (!container) return;

    const orders = JSON.parse(localStorage.getItem("craveOrders")) || [];
    if (!orders.length) {
        container.innerHTML = `
            <div class="empty-state">
                <div>📦</div><h2>No orders yet</h2>
                <p>Your previous orders will appear here.</p>
                <a href="menu.html" class="primary-btn">Order something</a>
            </div>`;
        return;
    }

    container.innerHTML = orders.map(order => {
        const subtotal = order.items.reduce((sum, item) => {
            const p = products.find(x => x.id === item.id);
            return sum + (p ? p.price * item.quantity : 0);
        }, 0);
        const delivery = subtotal >= 15000 ? 0 : 1500;
        const promo = order.promo === "CRAVE20" ? Math.round(subtotal * .2) : 0;
        const total = Math.max(0, subtotal - promo + delivery);
        const steps = ["Placed", "Preparing", "On the way", "Delivered"];
        const current = Math.max(0, steps.indexOf(order.status));
        const status = steps.includes(order.status) ? order.status : "Preparing";

        return `
        <article class="order-card form-card">
            <div class="order-top">
                <div>
                    <span class="eyebrow">ORDER</span>
                    <h2>${order.id}</h2>
                    <p>${order.date}</p>
                </div>
                <span class="status-pill">${status}</span>
            </div>

            <div class="order-timeline" aria-label="Order progress">
                ${steps.map((step, i) => `
                    <div class="timeline-step ${i <= current ? "done" : ""}">
                        <span>${i < current ? "✓" : i === current ? "•" : ""}</span>
                        <small>${step}</small>
                    </div>`).join("")}
            </div>

            <div class="order-items">
                ${order.items.map(item => {
                    const p = products.find(x => x.id === item.id);
                    if (!p) return "";
                    return `<div class="order-item"><span><img class="order-item-thumb" src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='inline';"><span class="image-fallback">${p.emoji}</span> ${p.name} <b>×${item.quantity}</b></span><strong>₦${(p.price * item.quantity).toLocaleString()}</strong></div>`;
                }).join("")}
            </div>

            <div class="order-bottom">
                <span>${order.items.reduce((n, x) => n + x.quantity, 0)} item(s) • ${promo ? "Promo applied" : "Standard delivery"}</span>
                <strong>₦${total.toLocaleString()}</strong>
            </div>

            <div class="order-actions">
                <button class="secondary-btn" onclick='reorder(${JSON.stringify(order.items)})'>Reorder</button>
                <a href="menu.html" class="primary-btn">Browse menu</a>
            </div>
        </article>`;
    }).join("");
}

function reorder(items) {
    items.forEach(item => addToCart(item.id, item.quantity));
    showToast("Items added to your cart 🛒");
    setTimeout(() => window.location.href = "cart.html", 500);
}


/* =========================
   DEALS
========================= */

function applyDeal(code) {
    if (code === "CRAVE20" && localStorage.getItem("cravePromoUsed") === "true") {
        showToast("CRAVE20 has already been used on this browser.");
        return;
    }

    localStorage.setItem("cravePromo", code);
    showToast(`${code} applied for your next checkout 🎟️`);

    // Give the user somewhere useful to continue.
    setTimeout(() => {
        window.location.href = "cart.html";
    }, 700);
}


function addDealToCart(type) {
    const deals = {
        burger: [1, 7, 12],
        pizza: [3, 9],
        jollof: [13, 12],
        pasta: [14, 8],
        shrimp: [15, 12],
        sandwich: [16, 7],
        pancakes: [17, 12],
        waffle: [18, 9],
        mac: [19, 12],
        chickenrice: [20, 7],
        tacos: [21, 12],
        burrito: [22, 12]
    };

    const messages = {
        burger: "Burger Combo added to cart 🍔",
        pizza: "Pizza Night deal added to cart 🍕",
        jollof: "Jollof Combo added to cart 🍛",
        pasta: "Pasta & Shake deal added to cart 🍝",
        shrimp: "Shrimp Pasta Combo added to cart 🍤",
        sandwich: "Chicken Sandwich Combo added to cart 🥪",
        pancakes: "Pancake Breakfast deal added to cart 🥞",
        waffle: "Berry Waffle Combo added to cart 🧇",
        mac: "Mac & Cheese Combo added to cart 🧀",
        chickenrice: "Chicken & Rice Combo added to cart 🍗",
        tacos: "Taco Combo added to cart 🌮",
        burrito: "Burrito Combo added to cart 🌯"
    };

    const ids = deals[type];
    if (!ids) return;
    ids.forEach(id => addToCart(id, 1));
    showToast(messages[type] || "Deal added to cart 🛒");

    setTimeout(() => {
        window.location.href = "cart.html";
    }, 700);
}




/* =========================
   ACCOUNT
========================= */

function loadAccountProfile() {
    const profile = JSON.parse(localStorage.getItem("craveProfile") || "{}");
    const name = document.getElementById("accountName");
    const email = document.getElementById("accountEmail");
    if (name) name.value = profile.name || "";
    if (email) email.value = profile.email || "";
}

function saveAccountProfile() {
    const name = document.getElementById("accountName");
    const email = document.getElementById("accountEmail");
    const status = document.getElementById("accountStatus");
    if (!name || !email) return;

    if (!name.value.trim() || !email.value.trim()) {
        if (status) status.textContent = "Please enter your name and email.";
        return;
    }

    if (!email.validity.valid) {
        if (status) status.textContent = "Please enter a valid email address.";
        email.focus();
        return;
    }

    localStorage.setItem("craveProfile", JSON.stringify({
        name: name.value.trim(),
        email: email.value.trim()
    }));

    if (status) status.textContent = "Profile saved ✓";
    showToast("Profile saved ✓");
}

/* =========================
   THEME
========================= */

function toggleTheme() {

    document.body.classList.toggle("dark");

    localStorage.setItem(
        "craveDark",
        document.body.classList.contains("dark")
    );
}


function loadTheme() {

    const dark =
        localStorage.getItem("craveDark");

    if (dark === "true") {
        document.body.classList.add("dark");
    }
}


/* =========================
   MOBILE NAV
========================= */

function toggleMobileNav() {
    const nav = document.getElementById("mobileNav");
    if (!nav) return;
    nav.classList.toggle("show");
}

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        document.getElementById("mobileNav")?.classList.remove("show");
    }
});


/* =========================
   TOAST
========================= */

function showToast(message) {

    let toast =
        document.getElementById("toast");

    if (!toast) {

        toast =
            document.createElement("div");

        toast.id = "toast";

        toast.className = "toast";

        document.body.appendChild(toast);
    }

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}


/* =========================
   INITIALIZE
========================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        loadTheme();
        loadAccountProfile();

        updateCartCount();

        renderPopular();

        renderNigerianShowcase();

        setupMenu();

        renderProduct();

        renderFavorites();

        renderCart();

        setupCheckout();

        renderOrders();

    }
);
// ============================================================
//  NUTRIVANA — Site Data Model & State Management
// ============================================================

const DEFAULT_SITE_DATA = {
  products: [
    {
      id: "talbina",
      name: "Premium Talbina",
      tag: "BESTSELLER",
      badgeItems: ["🌾 Organic Barley", "☀️ Sunnah Superfood", "💚 Gut Health", "⚡ Energy Boost"],
      image: "Image/Talbina/Talbina02.png",
      images: [
        "Image/Talbina/Talbina02.png",
        "Image/Brackfast.png",
        "Image/Banner_Talbina.png",
        "Image/Talbina/Talbina02.png"
      ],
      rating: 5,
      reviewsCount: 128,
      price: 850,
      weights: [
        { label: "250g", price: 850 },
        { label: "500g", price: 1600 },
        { label: "1kg", price: 3000 }
      ],
      description: "Our Premium Talbina is crafted from 100% organic barley — the beloved Sunnah superfood recommended by Prophet Muhammad ﷺ. Rich in beta-glucan fiber, vitamins, and minerals, it supports gut health, boosts energy, and calms the nervous system.",
      instructions: "Mix 2-3 tablespoons of Talbina powder in 1 cup of milk or water. Cook on low flame for 10-12 minutes, stirring continuously until smooth and thick. Sweeten with pure honey or dates before serving warm.",
      details: [
        "100% Pure Organic Barley Grain",
        "Zero artificial preservatives or additives",
        "High in dietary fiber and essential minerals",
        "Ideal for daily breakfast or evening nutrient boost"
      ]
    },
    {
      id: "honey",
      name: "Pure Natural Honey",
      tag: "100% RAW",
      badgeItems: ["🍯 100% Raw & Unfiltered", "🐝 Direct From Hives", "🛡️ Immunity Booster", "✨ Pure Taste"],
      image: "Image/Honey/Honey01.png",
      images: [
        "Image/Honey/Honey01.png",
        "Image/Banner_Honey.png",
        "Image/Gemini_Generated_Image_n8363mn8363mn836.png",
        "Image/Honey/Honey01.png"
      ],
      rating: 5,
      reviewsCount: 96,
      price: 1250,
      weights: [
        { label: "250g", price: 1250 },
        { label: "500g", price: 2400 },
        { label: "1kg", price: 4500 }
      ],
      description: "Nutrivana Pure Honey is 100% raw, unheated, and unfiltered. Sourced directly from wildflower beehives in Pakistan, it preserves natural enzymes, antioxidants, pollen, and propolis for maximum health benefits.",
      instructions: "Consume 1-2 teaspoons directly every morning on an empty stomach, or mix with warm water, lemon, or herbal tea. Use as a natural healthy sweetener in Talbina or Oatmeal.",
      details: [
        "Raw, unheated & unpasteurized honey",
        "Rich in natural antioxidants and enzymes",
        "Sourced from clean floral pastures",
        "Supports immune defense and digestion"
      ]
    },
    {
      id: "ghee",
      name: "Desi Ghee (Bilona Method)",
      tag: "HANDCHURNED",
      badgeItems: ["🥛 100% Cow Milk", "🧈 Bilona Method", "🌿 A2 Goodness", "🍲 Rich Aroma"],
      image: "Image/DesiGhee/Desighi01.png",
      images: [
        "Image/DesiGhee/Desighi01.png",
        "Image/Banner_Collection.png",
        "Image/Brackfast.png",
        "Image/DesiGhee/Desighi01.png"
      ],
      rating: 5,
      reviewsCount: 142,
      price: 1800,
      weights: [
        { label: "500g", price: 1800 },
        { label: "1kg", price: 3400 }
      ],
      description: "Our Desi Ghee is prepared using the ancient Vedic Bilona method — slow-churned from cultured curd made of pure cow milk. It yields a rich, granular texture with an unforgettable golden aroma.",
      instructions: "Add 1 tablespoon to warm rotis, parathas, rice, or lentils. Excellent high-smoke-point cooking oil for daily nutritious cooking and traditional recipes.",
      details: [
        "Traditional Bilona slow-churn process",
        "Packed with healthy fats and fat-soluble vitamins (A, D, E, K)",
        "Lactose & casein friendly",
        "Enhances nutrient absorption in food"
      ]
    },
    {
      id: "oatmeal",
      name: "Whole Grain Oatmeal",
      tag: "HIGH FIBER",
      badgeItems: ["🥣 Rolled Whole Oats", "❤️ Heart Healthy", "🌱 100% Natural", "⏱️ Quick 5-Min Meal"],
      image: "Image/Oatmeal/Oatmeal01.png",
      images: [
        "Image/Oatmeal/Oatmeal01.png",
        "Image/Banner_Oatmeal.png",
        "Image/Brackfast.png",
        "Image/Oatmeal/Oatmeal01.png"
      ],
      rating: 5,
      reviewsCount: 84,
      price: 650,
      weights: [
        { label: "500g", price: 650 },
        { label: "1kg", price: 1200 }
      ],
      description: "Clean, wholesome, non-GMO rolled oats designed to power your mornings with long-lasting complex energy and gut-friendly fiber.",
      instructions: "Combine 1/2 cup oatmeal with 1 cup milk or water in a saucepan. Bring to boil and simmer for 4-5 minutes. Top with Nutrivana Pure Honey, nuts, and fresh fruits.",
      details: [
        "100% Whole grain rolled oats",
        "Helps maintain healthy cholesterol levels",
        "No added sugars, artificial flavors, or chemicals",
        "High soluble fiber content"
      ]
    }
  ],
  banners: [
    {
      id: 1,
      title: "Oatmeal — A Wholesome Start",
      image: "Image/Banner_Oatmeal.png",
      link: "products.html#oatmeal",
      btnText: "Shop Oatmeal →"
    },
    {
      id: 2,
      title: "Explore Our Collection",
      image: "Image/Banner_Collection.png",
      link: "products.html",
      btnText: "Shop Collection →"
    },
    {
      id: 3,
      title: "Pure Honey, Pure Health",
      image: "Image/Banner_Honey.png",
      link: "products.html#honey",
      btnText: "Shop Pure Honey →"
    },
    {
      id: 4,
      title: "Talbina — Prophetic Food",
      image: "Image/Banner_Talbina.png",
      link: "products.html#talbina",
      btnText: "Shop Talbina →"
    }
  ],
  settings: {
    announcementBar: "🌿 FREE DELIVERY on orders above Rs. 2000  |  🍯 100% Pure & Natural  |  ⭐ 500+ Happy Customers",
    phone: "+92 334 7000322",
    email: "nutrivanaa.official@gmail.com",
    facebook: "https://www.facebook.com/share/14dvm677pu6/",
    instagram: "https://www.instagram.com/nutrivanaa.official?igsh=MWJiY3F4MHZkcW9oaw==",
    whatsapp: "https://wa.me/923347000322",
    freeDeliveryThreshold: 2000,
    deliveryFee: 200,
    currency: "Rs."
  },
  orders: [
    {
      orderId: "NV-10842",
      customerName: "Sikander Hayat",
      phone: "+92 334 7000322",
      city: "Lahore",
      address: "House #14, Main Boulevard, Model Town",
      items: [
        { name: "Premium Talbina", weight: "500g", qty: 2, price: 1600 },
        { name: "Pure Natural Honey", weight: "250g", qty: 1, price: 1250 }
      ],
      total: 4450,
      date: "2026-07-25 14:30",
      status: "Shipped",
      courier: "TCS Express",
      trackingNum: "TCS-98471203"
    },
    {
      orderId: "NV-10843",
      customerName: "Fatima Ali",
      phone: "+92 300 1234567",
      city: "Karachi",
      address: "Flat 4B, Clifton Block 5",
      items: [
        { name: "Bilona Desi Ghee", weight: "1kg", qty: 1, price: 2800 }
      ],
      total: 2800,
      date: "2026-07-25 16:15",
      status: "Preparing",
      courier: "Leopard Courier",
      trackingNum: "LEO-55109283"
    }
  ]
};

function switchGalleryImage(imgUrl, productId, btn) {
  const primaryImg = document.getElementById(`mainImg-${productId}`);
  if (primaryImg) {
    primaryImg.src = imgUrl;
  }
  if (btn) {
    const parent = btn.closest('.product-gallery-thumbs');
    if (parent) {
      parent.querySelectorAll('.thumb-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    }
  }
}

function getSiteData() {
  const data = localStorage.getItem('nutrivanaSiteData');
  if (!data) return DEFAULT_SITE_DATA;
  try {
    const parsed = JSON.parse(data);
    return {
      products: parsed.products || DEFAULT_SITE_DATA.products,
      banners: parsed.banners || DEFAULT_SITE_DATA.banners,
      settings: { ...DEFAULT_SITE_DATA.settings, ...(parsed.settings || {}) },
      orders: parsed.orders || DEFAULT_SITE_DATA.orders || []
    };
  } catch (e) {
    return DEFAULT_SITE_DATA;
  }
}

function saveSiteData(data) {
  try {
    localStorage.setItem('nutrivanaSiteData', JSON.stringify(data));
  } catch (e) {
    console.error("localStorage save failed:", e);
    if (typeof showToast === 'function') {
      showToast('⚠️ Storage limit reached! Uploaded images are compressed automatically.');
    }
  }
}

// ---- CART DATA (localStorage) ----
let cart = JSON.parse(localStorage.getItem('nutrivanaCart')) || [];

function saveCart() {
  localStorage.setItem('nutrivanaCart', JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const total = cart.reduce((sum, item) => sum + item.qty, 0);
  document.querySelectorAll('#cartCount').forEach(el => {
    el.textContent = total;
    el.style.display = total > 0 ? 'flex' : 'none';
  });
}

function addToCart(name, price, image, qty = 1) {
  const existing = cart.find(i => i.name === name);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ name, price, image, qty });
  }
  saveCart();
  showToast(`✓ ${name} added to cart!`);
}

function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
  renderCartPage();
}

function updateQty(index, delta) {
  cart[index].qty = Math.max(1, cart[index].qty + delta);
  saveCart();
  renderCartPage();
}

// ---- TOAST ----
function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// ---- HERO SLIDER ----
function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.dot');
  if (!slides.length) return;

  let current = 0;
  let timer;

  function goTo(index) {
    slides[current].classList.remove('active');
    dots[current]?.classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current]?.classList.add('active');

    // Re-trigger fade-up animations
    slides[current].querySelectorAll('.fade-up').forEach(el => {
      el.style.animation = 'none';
      el.offsetHeight; // reflow
      el.style.animation = '';
    });
  }

  function autoPlay() {
    timer = setInterval(() => goTo(current + 1), 5000);
  }

  document.getElementById('heroNext')?.addEventListener('click', () => {
    clearInterval(timer);
    goTo(current + 1);
    autoPlay();
  });

  document.getElementById('heroPrev')?.addEventListener('click', () => {
    clearInterval(timer);
    goTo(current - 1);
    autoPlay();
  });

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      clearInterval(timer);
      goTo(parseInt(dot.dataset.index));
      autoPlay();
    });
  });

  autoPlay();
}

// ---- SCROLL ANIMATIONS ----
function initReveal() {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 100);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  reveals.forEach(el => observer.observe(el));
}

// ---- HEADER SCROLL ----
function initHeaderScroll() {
  const header = document.getElementById('siteHeader');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  });
}

// ---- MOBILE MENU ----
function initMobileMenu() {
  const btn = document.getElementById('mobileMenuBtn');
  const nav = document.getElementById('mobileNav');
  if (!btn || !nav) return;

  btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    nav.classList.toggle('open');
  });
}

// ---- SEARCH OVERLAY ----
function initSearch() {
  const btn = document.getElementById('searchBtn');
  const overlay = document.getElementById('searchOverlay');
  const closeBtn = document.getElementById('searchClose');
  const input = document.getElementById('searchInput');

  btn?.addEventListener('click', () => {
    overlay.classList.add('active');
    setTimeout(() => input.focus(), 300);
  });

  closeBtn?.addEventListener('click', () => overlay.classList.remove('active'));

  overlay?.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.classList.remove('active');
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') overlay?.classList.remove('active');
  });
}

// ---- NEWSLETTER ----
function handleNewsletter(e) {
  e.preventDefault();
  const input = e.target.querySelector('input');
  showToast('🎉 Thank you for subscribing!');
  input.value = '';
}

// ---- CART PAGE ----
function renderCartPage() {
  const container = document.getElementById('cartContainer');
  if (!container) return;

  const cartCountLabel = document.getElementById('cartItemCount');
  if (cartCountLabel) cartCountLabel.textContent = cart.reduce((s, i) => s + i.qty, 0) + ' items';

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="empty-cart">
        <div class="empty-cart-icon">🛒</div>
        <h3>Your cart is empty</h3>
        <p>Add some nourishing products to get started!</p>
        <a href="products.html" class="btn btn-primary btn-lg">Continue Shopping</a>
      </div>
    `;
    updateSummary();
    return;
  }

  container.innerHTML = `
    <div class="cart-items-list">
      ${cart.map((item, i) => `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.name}" class="cart-item-img" />
          <div class="cart-item-details">
            <h4>${item.name}</h4>
            <p>Rs. ${item.price.toLocaleString()} each</p>
            <div class="cart-item-controls">
              <div class="quantity-selector">
                <button class="qty-btn" onclick="updateQty(${i}, -1)">−</button>
                <span class="qty-display">${item.qty}</span>
                <button class="qty-btn" onclick="updateQty(${i}, 1)">+</button>
              </div>
            </div>
          </div>
          <div class="cart-item-right">
            <div class="cart-item-price">Rs. ${(item.price * item.qty).toLocaleString()}</div>
            <button class="cart-remove-btn" onclick="removeFromCart(${i})" title="Remove">🗑</button>
          </div>
        </div>
      `).join('')}
    </div>
  `;

  updateSummary();
}

function updateSummary() {
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const delivery = subtotal >= 2000 ? 0 : 200;
  const discount = 0;
  const total = subtotal + delivery - discount;

  const el = (id) => document.getElementById(id);
  if (el('summarySubtotal')) el('summarySubtotal').textContent = `Rs. ${subtotal.toLocaleString()}`;
  if (el('summaryDelivery')) el('summaryDelivery').textContent = delivery === 0 ? 'FREE' : `Rs. ${delivery}`;
  if (el('summaryTotal')) el('summaryTotal').textContent = `Rs. ${total.toLocaleString()}`;
}

function applyPromo() {
  const input = document.getElementById('promoInput');
  if (!input) return;
  const code = input.value.trim().toUpperCase();
  if (code === 'NUTRI10') {
    showToast('🎉 Promo code applied! 10% off');
  } else {
    showToast('❌ Invalid promo code');
  }
}

function handleCheckout(event) {
  if (event) event.preventDefault();
  if (cart.length === 0) {
    showToast('Your cart is empty!');
    return;
  }

  const orderId = `NV-${Math.floor(10000 + Math.random() * 90000)}`;
  const siteData = getSiteData();
  if (!siteData.orders) siteData.orders = [];

  const fullName = document.getElementById('checkoutName')?.value.trim() || 'Valued Customer';
  const phone = document.getElementById('checkoutPhone')?.value.trim() || '+92 3XX XXXXXXX';
  const city = document.getElementById('checkoutCity')?.value.trim() || 'Pakistan';
  const address = document.getElementById('checkoutAddress')?.value.trim() || 'Delivery Address';

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = subtotal >= (siteData.settings.freeDeliveryThreshold || 2000) ? 0 : (siteData.settings.deliveryFee || 200);
  const total = subtotal + deliveryFee;

  const now = new Date();
  const dateStr = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')} ${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`;

  const newOrder = {
    orderId: orderId,
    customerName: fullName,
    phone: phone,
    city: city,
    address: address,
    items: cart.map(i => ({ name: i.name, weight: i.weight || '', qty: i.quantity, price: i.price })),
    total: total,
    date: dateStr,
    status: "Order Received",
    courier: "TCS Express",
    trackingNum: `TCS-${Math.floor(10000000 + Math.random() * 90000000)}`
  };

  siteData.orders.unshift(newOrder);
  saveSiteData(siteData);

  cart = [];
  saveCart();
  
  showToast(`🎉 Order Placed! Your Order ID is ${orderId}`);

  setTimeout(() => {
    window.location.href = `track-order.html?id=${orderId}`;
  }, 1200);
}

// ---- ORDER TRACKING SEARCH & TIMELINE STEPPER ----
function handleOrderTrackSearch(e) {
  if (e) e.preventDefault();
  const input = document.getElementById('orderIdSearchInput');
  const container = document.getElementById('orderTrackingResultContainer');
  if (!input || !container) return;

  const query = input.value.trim().toUpperCase();
  if (!query) {
    showToast('Please enter your Order ID!');
    return;
  }

  const siteData = getSiteData();
  const orders = siteData.orders || [];
  const found = orders.find(o => o.orderId.toUpperCase() === query);

  if (!found) {
    container.style.display = 'block';
    container.innerHTML = `
      <div class="tracker-card text-center" style="padding: 40px 20px;">
        <span style="font-size: 48px;">🔍</span>
        <h3 style="color: #d90429; margin-top: 10px;">Order ID "${escapeHtml(query)}" Not Found</h3>
        <p style="color: var(--gray); margin: 8px 0 20px;">Please check the Order ID on your receipt or SMS and try again.</p>
        <p style="font-size: 13px;">Need assistance? <a href="https://wa.me/923347000322?text=Hi%20Nutrivana,%20I%20need%20help%20tracking%20Order%20${escapeHtml(query)}" target="_blank" style="color: var(--green-dark); font-weight: 700;">Chat with Us on WhatsApp (+92 334 7000322)</a></p>
      </div>
    `;
    return;
  }

  container.style.display = 'block';
  container.innerHTML = renderOrderTrackingTimeline(found);
}

function renderOrderTrackingTimeline(order) {
  const steps = [
    { title: "Order Received", icon: "📥" },
    { title: "Confirmed", icon: "✅" },
    { title: "Preparing", icon: "🥣" },
    { title: "Packed", icon: "📦" },
    { title: "Shipped", icon: "🚚" },
    { title: "Out for Delivery", icon: "🛵" },
    { title: "Delivered", icon: "🎉" }
  ];

  const currentIdx = steps.findIndex(s => s.title.toLowerCase() === (order.status || '').toLowerCase());
  const activeIdx = currentIdx !== -1 ? currentIdx : 0;
  const progressPercent = (activeIdx / (steps.length - 1)) * 100;

  return `
    <div class="tracker-card reveal" style="animation: fadeIn 0.4s ease;">
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--cream-dark); padding-bottom: 16px; margin-bottom: 24px; flex-wrap: wrap; gap: 12px;">
        <div>
          <span class="section-tag" style="background: rgba(201,168,76,0.15); border-color: rgba(201,168,76,0.4);">Verified Shipment</span>
          <h2 style="font-size: 24px; color: var(--green-dark); margin-top: 4px;">Order ID: ${order.orderId}</h2>
          <span style="font-size: 13px; color: var(--gray);">Placed on ${order.date || 'Recent'}</span>
        </div>
        <div>
          <span style="background: var(--green-dark); color: var(--gold-light); font-weight: 700; padding: 8px 18px; border-radius: 50px; font-size: 14px; border: 1px solid var(--gold); display: inline-block;">
            Status: ${order.status}
          </span>
        </div>
      </div>

      <!-- 7-Step Stepper -->
      <div class="tracking-stepper">
        <div class="tracking-progress-bar" style="width: ${progressPercent}%;"></div>
        ${steps.map((step, idx) => {
          let stateClass = '';
          if (idx < activeIdx) stateClass = 'completed';
          else if (idx === activeIdx) stateClass = 'active';

          return `
            <div class="step-item ${stateClass}">
              <div class="step-node">${step.icon}</div>
              <span class="step-title">${step.title}</span>
            </div>
          `;
        }).join('')}
      </div>

      <!-- Details -->
      <div class="admin-grid-2" style="margin-top: 32px; background: var(--cream); padding: 20px; border-radius: var(--radius-sm);">
        <div>
          <h4 style="font-size: 13px; text-transform: uppercase; letter-spacing:0.05em; color: var(--green-dark); margin-bottom: 8px;">Customer Information</h4>
          <p style="margin: 0 0 4px; font-size: 14px;"><strong>Name:</strong> ${order.customerName}</p>
          <p style="margin: 0 0 4px; font-size: 14px;"><strong>Phone:</strong> ${order.phone}</p>
          <p style="margin: 0; font-size: 14px;"><strong>Address:</strong> ${order.address}, ${order.city || 'Pakistan'}</p>
        </div>
        <div>
          <h4 style="font-size: 13px; text-transform: uppercase; letter-spacing:0.05em; color: var(--green-dark); margin-bottom: 8px;">Shipping &amp; Logistics</h4>
          <p style="margin: 0 0 4px; font-size: 14px;"><strong>Courier Partner:</strong> ${order.courier || 'TCS Express'}</p>
          <p style="margin: 0 0 4px; font-size: 14px;"><strong>Tracking No:</strong> ${order.trackingNum || 'Pending'}</p>
          <p style="margin: 0; font-size: 14px;"><strong>Order Total:</strong> Rs. ${order.total}</p>
        </div>
      </div>

      <div style="margin-top: 20px; text-align: center;">
        <a href="https://wa.me/923347000322?text=Hi%20Nutrivana,%20I%20am%20checking%20status%20for%20my%20Order%20ID:%20${order.orderId}" target="_blank" class="btn btn-outline btn-sm">
          💬 Inquiry on WhatsApp for Order ${order.orderId}
        </a>
      </div>
    </div>
  `;
}

// ---- PRODUCTS PAGE QTY & WEIGHT RATE CALCULATION ----
function updateProductPriceDisplay(productId) {
  const display = document.getElementById(`priceDisplay-${productId}`);
  if (!display) return;

  const selectedBtn = document.querySelector(`[data-weight-group="${productId}"].selected`);
  const unitPrice = selectedBtn && selectedBtn.dataset.price ? parseInt(selectedBtn.dataset.price) : 0;
  
  const qtyEl = document.getElementById(`qty-${productId}`);
  const qty = qtyEl ? Math.max(1, parseInt(qtyEl.textContent) || 1) : 1;

  const totalPrice = unitPrice * qty;
  const data = getSiteData();
  display.textContent = `${data.settings.currency || 'Rs.'} ${totalPrice.toLocaleString()}`;
}

function changeQty(productId, delta) {
  const display = document.getElementById(`qty-${productId}`);
  if (!display) return;
  let val = (parseInt(display.textContent) || 1) + delta;
  if (val < 1) val = 1;
  display.textContent = val;

  updateProductPriceDisplay(productId);
}

function selectWeight(btn, group, price) {
  document.querySelectorAll(`[data-weight-group="${group}"]`).forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');

  updateProductPriceDisplay(group);
}

function getSelectedPrice(groupId, fallbackPrice) {
  const selected = document.querySelector(`[data-weight-group="${groupId}"].selected`);
  if (selected && selected.dataset.price) {
    return parseInt(selected.dataset.price);
  }
  return fallbackPrice || 0;
}

function addProductToCart(baseName, fallbackPrice, image, productId) {
  const selectedBtn = document.querySelector(`[data-weight-group="${productId}"].selected`);
  const weightLabel = selectedBtn ? selectedBtn.textContent.trim() : '';
  const unitPrice = selectedBtn && selectedBtn.dataset.price ? parseInt(selectedBtn.dataset.price) : fallbackPrice;
  
  const qtyEl = document.getElementById(`qty-${productId}`);
  const qty = qtyEl ? parseInt(qtyEl.textContent) || 1 : 1;

  const fullName = weightLabel ? `${baseName} (${weightLabel})` : baseName;
  addToCart(fullName, unitPrice, image, qty);
}

// ---- DYNAMIC CONTENT SYNC ----
function syncDynamicContent() {
  const data = getSiteData();
  
  // 1. Ticker / Announcement Bar
  const trackSpan = document.querySelector('#announcementBar .announcement-track span');
  if (trackSpan && data.settings.announcementBar) {
    const msg = data.settings.announcementBar;
    trackSpan.innerHTML = `${msg} &nbsp;&nbsp;|&nbsp;&nbsp; ${msg} &nbsp;&nbsp;|&nbsp;&nbsp; ${msg}`;
  }

  // 2. Hero Banners Sync
  const heroSlidesContainer = document.getElementById('heroSlides');
  if (heroSlidesContainer && data.banners && data.banners.length > 0) {
    heroSlidesContainer.innerHTML = data.banners.map((b, i) => `
      <a href="${b.link}" class="hero-slide ${i === 0 ? 'active' : ''}" style="background-image: url('${b.image}');" aria-label="${b.title}">
        <div class="hero-banner-overlay">
          <span class="btn btn-primary hero-btn">${b.btnText || 'Shop Now →'}</span>
        </div>
      </a>
    `).join('');

    const sliderDots = document.getElementById('sliderDots');
    if (sliderDots) {
      sliderDots.innerHTML = data.banners.map((_, i) => `
        <span class="dot ${i === 0 ? 'active' : ''}" data-index="${i}"></span>
      `).join('');
    }
  }

  // 3. Products Page Dynamic Rendering
  const productsPageContainer = document.getElementById('dynamicProductsContainer');
  if (productsPageContainer && data.products) {
    productsPageContainer.innerHTML = data.products.map(p => `
      <div class="product-detail-card reveal" id="${p.id}" style="margin-bottom: 40px;">
        <div style="display: grid; grid-template-columns: 1.2fr 1fr; gap: 0;">
          <div class="product-detail-image" style="border-radius: var(--radius-lg) 0 0 var(--radius-lg);">
            <img src="${p.image}" alt="${p.name}" />
            <span class="sale-tag">${p.tag || 'POPULAR'}</span>
          </div>
          <div class="product-detail-body" style="padding: 48px 40px; display: flex; flex-direction: column; justify-content: center;">
            <div class="product-rating" style="margin-bottom: 10px;">
              <span class="stars">${'★'.repeat(p.rating || 5)}${'☆'.repeat(5 - (p.rating || 5))}</span>
              <span class="rating-count">(${p.reviewsCount || 100} reviews)</span>
            </div>
            <h2 class="product-name" style="font-size: 30px; margin-bottom: 12px;">${p.name}</h2>
            
            ${p.badgeItems && p.badgeItems.length ? `
              <div class="product-tags">
                ${p.badgeItems.map(item => `<span class="product-tag-item">${item}</span>`).join('')}
              </div>
            ` : ''}

            <p class="product-desc" style="font-size: 15px; line-height: 1.8; margin-bottom: 20px;">
              ${p.description}
            </p>

            ${p.instructions ? `
              <div style="background: var(--cream); border-left: 3px solid var(--green); padding: 14px 18px; border-radius: 6px; margin-bottom: 20px;">
                <strong style="font-size: 13px; color: var(--green-dark); text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 4px;">🥣 How to Use / Preparation Guide:</strong>
                <p style="font-size: 14px; color: var(--dark); line-height: 1.6; margin: 0;">${p.instructions}</p>
              </div>
            ` : ''}

            ${p.weights && p.weights.length ? `
              <div class="product-weight" style="margin-bottom: 20px;">
                ${p.weights.map((w, idx) => `
                  <button class="weight-btn ${idx === 0 ? 'selected' : ''}" data-weight-group="${p.id}" data-price="${w.price}" onclick="selectWeight(this, '${p.id}', ${w.price})">${w.label}</button>
                `).join('')}
              </div>
            ` : ''}

            <div class="product-price-row" style="display: flex; align-items: center; justify-content: space-between; margin-top: 10px;">
              <div class="product-price" style="font-size: 26px; font-weight: 700; color: var(--green-dark);" id="priceDisplay-${p.id}">
                ${data.settings.currency || 'Rs.'} ${(p.price || (p.weights && p.weights[0] ? p.weights[0].price : 0)).toLocaleString()}
              </div>
              <div style="display: flex; gap: 12px; align-items: center;">
                <div class="quantity-selector">
                  <button class="qty-btn" onclick="changeQty('${p.id}', -1)">−</button>
                  <span class="qty-display" id="qty-${p.id}">1</span>
                  <button class="qty-btn" onclick="changeQty('${p.id}', 1)">+</button>
                </div>
                <button class="btn btn-primary" onclick="addProductToCart('${p.name}', getSelectedPrice('${p.id}', ${p.price}), '${p.image}', '${p.id}')">Add to Cart</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    `).join('');
  }
}

function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  if (item) {
    item.classList.toggle('active');
  }
}

// ---- FLOATING WIDGETS (WHATSAPP, BACK TO TOP, LIVE CHAT) ----
function initFloatingWidgets() {
  if (document.getElementById('floatingWidgetsGroup')) return;

  // 1. Right Side Group: Back To Top Arrow + Floating WhatsApp Button
  const rightGroup = document.createElement('div');
  rightGroup.className = 'floating-widgets-group';
  rightGroup.id = 'floatingWidgetsGroup';

  rightGroup.innerHTML = `
    <!-- Minimal Arrow-Only Back to Top Button -->
    <button class="back-to-top-btn" id="backToTopBtn" onclick="scrollToTop()" title="Back to top" aria-label="Back to Top">
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>
    </button>

    <!-- Floating WhatsApp Button -->
    <a href="https://wa.me/923347000322" class="whatsapp-float-btn" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" title="Chat on WhatsApp">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
    </a>
  `;

  // 2. Left Side Group: Live Chat Trigger & Modal Window
  const leftGroup = document.createElement('div');
  leftGroup.className = 'live-chat-left-group';
  leftGroup.id = 'liveChatLeftGroup';

  leftGroup.innerHTML = `
    <!-- Live Chat Trigger Button -->
    <button class="live-chat-trigger" onclick="toggleLiveChat()" aria-label="Open Live Chat">
      <div class="chat-bubble-icon">💬</div>
      <span>Live Chat</span>
    </button>

    <!-- Live Chat Modal Window -->
    <div class="live-chat-window" id="liveChatWindow">
      <div class="chat-header">
        <div class="chat-header-info">
          <div class="chat-avatar">🌿</div>
          <div class="chat-title">
            <h4>Nutrivana Live Support</h4>
            <div class="chat-status"><span class="status-dot"></span> Online | Instant Reply</div>
          </div>
        </div>
        <button class="chat-close-btn" onclick="toggleLiveChat()">✕</button>
      </div>
      <div class="chat-body" id="chatBody">
        <div class="chat-msg bot">
          👋 Assalam-o-Alaikum! Welcome to <strong>Nutrivana</strong>. How can we help you today?
          <div class="chat-quick-options">
            <button class="chat-quick-btn" onclick="selectQuickChatTopic('🛒 How do I place an order?')">🛒 How do I place an order?</button>
            <button class="chat-quick-btn" onclick="selectQuickChatTopic('🚚 Delivery times &amp; rates?')">🚚 Delivery times &amp; rates?</button>
            <button class="chat-quick-btn" onclick="selectQuickChatTopic('🌾 Are products 100% organic?')">🌾 Are products 100% organic?</button>
            <button class="chat-quick-btn" onclick="selectQuickChatTopic('💬 Connect directly on WhatsApp')">💬 Chat directly on WhatsApp</button>
          </div>
        </div>
      </div>
      <form class="chat-footer" onsubmit="handleLiveChatSend(event)">
        <input type="text" id="liveChatInput" class="chat-input" placeholder="Type your question..." required />
        <button type="submit" class="chat-send-btn" title="Send message">➤</button>
      </form>
    </div>
  `;

  document.body.appendChild(rightGroup);
  document.body.appendChild(leftGroup);

  // Window scroll event for Back to Top
  window.addEventListener('scroll', () => {
    const btn = document.getElementById('backToTopBtn');
    if (btn) {
      btn.classList.toggle('visible', window.scrollY > 350);
    }
  });
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleLiveChat() {
  const win = document.getElementById('liveChatWindow');
  if (win) {
    win.classList.toggle('open');
  }
}

function handleLiveChatSend(e) {
  e.preventDefault();
  const input = document.getElementById('liveChatInput');
  const body = document.getElementById('chatBody');
  if (!input || !body) return;

  const text = input.value.trim();
  if (!text) return;

  // Append User message
  body.innerHTML += `<div class="chat-msg user">${escapeHtml(text)}</div>`;
  input.value = '';
  body.scrollTop = body.scrollHeight;

  // Bot Response simulation
  setTimeout(() => {
    let reply = "Thank you for reaching out! 🌿 Our team will assist you shortly. For instant priority response, feel free to WhatsApp us directly at +92 334 7000322.";
    body.innerHTML += `<div class="chat-msg bot">${reply}</div>`;
    body.scrollTop = body.scrollHeight;
  }, 800);
}

function selectQuickChatTopic(topicText) {
  const body = document.getElementById('chatBody');
  if (!body) return;

  body.innerHTML += `<div class="chat-msg user">${topicText}</div>`;
  body.scrollTop = body.scrollHeight;

  setTimeout(() => {
    let reply = "";
    if (topicText.includes('order')) {
      reply = "🛒 Simply browse our <a href='products.html' style='color:var(--green-dark); font-weight:700;'>Products Page</a>, select your preferred weight option, click 'Add to Cart', and proceed to Checkout!";
    } else if (topicText.includes('Delivery')) {
      reply = "🚚 We deliver across Pakistan in 3-5 business days. Free Delivery applies on orders above Rs. 2000! Standard shipping fee is Rs. 200.";
    } else if (topicText.includes('organic')) {
      reply = "🌾 Yes! All Nutrivana products (Talbina, Wild Honey, Bilona Desi Ghee, Oatmeal) are 100% raw, pure, unadulterated, and preservative-free.";
    } else {
      reply = "💬 Opening WhatsApp chat... <a href='https://wa.me/923347000322' target='_blank' style='color:var(--green-dark); font-weight:700;'>Click here to chat on WhatsApp (+92 334 7000322)</a>";
      window.open('https://wa.me/923347000322', '_blank');
    }
    body.innerHTML += `<div class="chat-msg bot">${reply}</div>`;
    body.scrollTop = body.scrollHeight;
  }, 600);
}

function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// ---- INIT ----
document.addEventListener('DOMContentLoaded', () => {
  syncDynamicContent();
  updateCartCount();
  initHeroSlider();
  initReveal();
  initHeaderScroll();
  initMobileMenu();
  initSearch();
  renderCartPage();
  initFloatingWidgets();

  // Track Order URL parameter check
  const urlParams = new URLSearchParams(window.location.search);
  const trackId = urlParams.get('id');
  if (trackId) {
    const input = document.getElementById('orderIdSearchInput');
    if (input) {
      input.value = trackId;
      handleOrderTrackSearch();
    }
  }

  // Contact form
  const contactForm = document.getElementById('contactForm');
  contactForm?.addEventListener('submit', handleContactForm);
});




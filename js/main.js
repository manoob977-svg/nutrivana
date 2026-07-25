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
  }
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
      settings: { ...DEFAULT_SITE_DATA.settings, ...(parsed.settings || {}) }
    };
  } catch (e) {
    return DEFAULT_SITE_DATA;
  }
}

function saveSiteData(data) {
  localStorage.setItem('nutrivanaSiteData', JSON.stringify(data));
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

function handleCheckout() {
  if (cart.length === 0) {
    showToast('Your cart is empty!');
    return;
  }
  showToast('🎉 Order placed successfully! We will call you shortly.');
  cart = [];
  saveCart();
  setTimeout(() => renderCartPage(), 500);
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

  // Contact form
  const contactForm = document.getElementById('contactForm');
  contactForm?.addEventListener('submit', handleContactForm);
});


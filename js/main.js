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
        "Image/Talbina/Talbina03.jpeg",
        "Image/Talbina/Talbina04.png",
        "Image/Talbina/Talbina03.jpeg"
      ],
      rating: 5,
      reviewsCount: 128,
      price: 850,
      weights: [
        { label: "250g", price: 850, originalPrice: 1000 },
        { label: "500g", price: 1600, originalPrice: 1850 },
        { label: "1kg", price: 3000, originalPrice: 3500 }
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
        "Image/Banner-Honey.png",
        "Image/Gemini_Generated_Image_n8363mn8363mn836.png",
        "Image/Honey/Honey01.png"
      ],
      rating: 5,
      reviewsCount: 96,
      price: 1250,
      weights: [
        { label: "250g", price: 1250, originalPrice: 1450 },
        { label: "500g", price: 2400, originalPrice: 2800 },
        { label: "1kg", price: 4500, originalPrice: 5200 }
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
        "Image/Banner -Desi-Ghee.png",
        "Image/Brackfast.png",
        "Image/DesiGhee/Desighi01.png"
      ],
      rating: 5,
      reviewsCount: 142,
      price: 950,
      weights: [
        { label: "250g", price: 950, originalPrice: 1150 },
        { label: "500g", price: 1800, originalPrice: 2100 },
        { label: "1kg", price: 3400, originalPrice: 3900 }
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
        "Image/Oatmeal/Oatmeal02.png",
        "Image/Oatmeal/Oatmeal3.jpeg",
        "Image/Oatmeal/Oatmeal4.jpeg",
        "Image/Banner-Oatmeal.png"
      ],
      rating: 5,
      reviewsCount: 84,
      price: 350,
      weights: [
        { label: "250g", price: 350, originalPrice: 420 },
        { label: "500g", price: 650, originalPrice: 800 },
        { label: "1kg", price: 1200, originalPrice: 1500 }
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
      title: "Premium Talbina — A Prophetic Food",
      badge: "SUNNAH SUPERFOOD",
      subtitle: "100% Organic Barley, Dates & Almonds for Gut Health & Energy",
      image: "Image/Banner-Talbina.png",
      link: "product-detail.html?id=talbina",
      btnText: "Shop Talbina →",
      bgPos: "50% 50%"
    },
    {
      id: 2,
      title: "Pure Honey, Pure Health",
      badge: "100% RAW & NATURAL",
      subtitle: "Pure mountain honey for a naturally healthy & better you",
      image: "Image/Banner-Honey.png",
      link: "product-detail.html?id=honey",
      btnText: "Shop Pure Honey →",
      bgPos: "50% 50%"
    },
    {
      id: 3,
      title: "Pure & Natural Bilona Desi Ghee",
      badge: "TRADITIONAL A2 GHEE",
      subtitle: "Nourishing your body with traditional whole superfoods",
      image: "Image/Banner -Desi-Ghee.png",
      link: "product-detail.html?id=ghee",
      btnText: "Shop Desi Ghee →",
      bgPos: "50% 50%"
    },
    {
      id: 4,
      title: "Organic Oatmeal — Wholesome Start",
      badge: "WHOLE GRAIN ENERGY",
      subtitle: "A wholesome start to your day — nourishes body, calms heart",
      image: "Image/Banner-Oatmeal.png",
      link: "product-detail.html?id=oatmeal",
      btnText: "Shop Oatmeal →",
      bgPos: "50% 50%"
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
  const stored = localStorage.getItem('nutrivanaSiteData');
  if (!stored) return JSON.parse(JSON.stringify(DEFAULT_SITE_DATA));

  try {
    let parsed = JSON.parse(stored);
    let updated = false;

    if (parsed.products && Array.isArray(parsed.products)) {
      parsed.products.forEach(p => {
        const defP = DEFAULT_SITE_DATA.products.find(dp => dp.id === p.id);
        if (defP) {
          if (!p.images || !Array.isArray(p.images) || p.images.length === 0) {
            p.images = [...defP.images];
            updated = true;
          }
          if (!p.weights || !Array.isArray(p.weights) || p.weights.length === 0) {
            p.weights = [...defP.weights];
            p.price = defP.weights[0].price;
            updated = true;
          }
          // Ensure every weight option has an originalPrice (> price) for strikethrough discount display
          (p.weights || []).forEach((w, wIdx) => {
            const defW = (defP.weights && defP.weights[wIdx]) ? defP.weights[wIdx] : null;
            const targetOrig = (defW && defW.originalPrice && defW.originalPrice > w.price) 
              ? defW.originalPrice 
              : Math.round((w.price || 0) * 1.22);

            if (!w.originalPrice || w.originalPrice <= w.price) {
              w.originalPrice = targetOrig;
              updated = true;
            }
          });
        }
      });
    }

    if (updated) {
      try { localStorage.setItem('nutrivanaSiteData', JSON.stringify(parsed)); } catch (e) {}
    }

    return {
      products: parsed.products || DEFAULT_SITE_DATA.products || [],
      banners: parsed.banners || DEFAULT_SITE_DATA.banners || [],
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
    return true;
  } catch (e) {
    console.error("localStorage save failed:", e);
    if (typeof showToast === 'function') {
      showToast('⚠️ Storage full! For banner images, use "Browse Image" then click OK to link as local path instead of embedding.');
    }
    return false;
  }
}

// ---- DYNAMIC CONTENT SYNCHRONIZATION ----
function syncDynamicContent() {
  const data = getSiteData();

  // 1. Announcement Bar Ticker
  if (data.settings && data.settings.announcementBar) {
    document.querySelectorAll('.announcement-track span').forEach(el => {
      const msg = data.settings.announcementBar;
      el.innerHTML = `${msg} &nbsp;&nbsp;|&nbsp;&nbsp; ${msg}`;
    });
  }

  // 2. Hero Banners Slider (index.html)
  const heroSlides = document.getElementById('heroSlides');
  const sliderDots = document.getElementById('sliderDots');
  if (heroSlides && data.banners && data.banners.length) {
    heroSlides.innerHTML = data.banners.map((b, i) => {
      const bgPos = b.bgPos || '50% 50%';

      return `
        <a href="${b.link || 'products.html'}" class="hero-slide ${i === 0 ? 'active' : ''}" style="background-image: url('${b.image}'); background-position: ${bgPos};" aria-label="${escapeHtml(b.title || 'Banner')}"></a>
      `;
    }).join('');

    if (sliderDots) {
      sliderDots.innerHTML = data.banners.map((_, i) => `
        <span class="dot ${i === 0 ? 'active' : ''}" data-index="${i}"></span>
      `).join('');
    }
  }

  // 3. Products Grid on Homepage (index.html)
  const productsGrid = document.getElementById('productsGrid');
  if (productsGrid && data.products && data.products.length) {
    productsGrid.innerHTML = data.products.map(p => {
      const img1 = (p.images && p.images[0]) || p.image || 'Image/Favicon.png';
      const img2 = (p.images && p.images[1]) || img1;
      const w0 = (p.weights && p.weights[0]) ? p.weights[0] : { price: p.price || 0 };
      const salePrice = w0.price || p.price || 0;
      const origPrice = (w0.originalPrice && w0.originalPrice > salePrice) ? w0.originalPrice : Math.round(salePrice * 1.22);
      const saveAmt = origPrice ? (origPrice - salePrice) : 0;
      const tag = p.tag || 'NEW';

      return `
        <div class="product-card" data-product="${p.id}" style="cursor:pointer;" onclick="window.location='product-detail.html?id=${p.id}'">
          <div class="product-img-wrap">
            <span class="sale-tag">${escapeHtml(tag)}</span>
            <img src="${img1}" alt="${escapeHtml(p.name)}" class="product-img primary-img" loading="lazy" />
            <img src="${img2}" alt="${escapeHtml(p.name)} Hover" class="product-img hover-img" loading="lazy" />
            <div class="product-overlay">
              <button class="btn btn-primary btn-sm" onclick="event.stopPropagation();addToCart('${escapeHtml(p.name)}', ${salePrice}, '${img1}', 1, ${origPrice})">Add to Cart</button>
              <a href="product-detail.html?id=${p.id}" class="btn btn-outline btn-sm" onclick="event.stopPropagation()">View Details</a>
            </div>
          </div>
          <div class="product-info">
            <div class="product-rating">
              <span class="stars">${'★'.repeat(Math.round(p.rating||5))}${'☆'.repeat(5-Math.round(p.rating||5))}</span>
              <span class="rating-count">(${p.reviewsCount || 100})</span>
            </div>
            <h3 class="product-name">${escapeHtml(p.name)}</h3>
            <p class="product-desc">${escapeHtml(p.description || '')}</p>
            <div class="product-price" style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
              <span class="price-original" style="text-decoration: line-through; color: #d90429; font-size: 13px; font-weight: 500;">Rs. ${origPrice.toLocaleString()}</span>
              <span class="price-sale" style="font-weight: 700; color: var(--green-dark); font-size: 17px;">Rs. ${salePrice.toLocaleString()}</span>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // 4. Products Container on Products Page (products.html)
  const dynamicContainer = document.getElementById('dynamicProductsContainer');
  if (dynamicContainer && data.products && data.products.length) {
    dynamicContainer.innerHTML = data.products.map((p, index) => {
      const isEven = index % 2 === 0;
      const img1 = (p.images && p.images[0]) || p.image || 'Image/Favicon.png';
      const img2 = (p.images && p.images[1]) || img1;

      // Initialize state for this product
      window.productStates[p.id] = window.productStates[p.id] || { weightIdx: 0, qty: 1 };
      const state = window.productStates[p.id];

      const weights = p.weights && p.weights.length ? p.weights : [{ label: 'Standard', price: p.price || 0 }];
      const currentWeight = weights[state.weightIdx] || weights[0];
      const unitPrice = currentWeight.price || p.price || 0;
      const totalPrice = unitPrice * state.qty;
      const origUnitPrice = (currentWeight.originalPrice && currentWeight.originalPrice > unitPrice) ? currentWeight.originalPrice : Math.round(unitPrice * 1.22);
      const origPrice = origUnitPrice * state.qty;
      const saveAmt = origPrice - totalPrice;

      const tagsHtml = (p.badgeItems || []).map(t => `<span class="product-tag-item">${escapeHtml(t)}</span>`).join('');
      
      const weightsHtml = weights.map((w, wIdx) => `
        <button type="button" class="weight-btn ${wIdx === state.weightIdx ? 'selected' : ''}" onclick="selectProductsPageWeight('${p.id}', ${wIdx})">${escapeHtml(w.label)}</button>
      `).join('');

      // Instructions / Details Highlight box
      let highlightHtml = '';
      if (p.instructions) {
        highlightHtml = `
          <div style="background: rgba(45, 106, 79, 0.06); border: 1px dashed rgba(45, 106, 79, 0.3); border-radius: 12px; padding: 14px 18px; margin-bottom: 20px; font-size: 13px; color: var(--green-dark); line-height: 1.6;">
            💡 <strong>Usage &amp; Preparation:</strong> ${escapeHtml(p.instructions)}
          </div>
        `;
      } else if (p.details && p.details.length) {
        highlightHtml = `
          <div style="background: rgba(45, 106, 79, 0.06); border: 1px dashed rgba(45, 106, 79, 0.3); border-radius: 12px; padding: 14px 18px; margin-bottom: 20px; font-size: 13px; color: var(--green-dark); line-height: 1.6;">
            ✨ <strong>Highlights:</strong> ${p.details.map(d => escapeHtml(d)).join(' • ')}
          </div>
        `;
      }

      const imgCol = `
        <div class="product-detail-image product-img-wrap" style="border-radius: ${isEven ? 'var(--radius-lg) 0 0 var(--radius-lg)' : '0 var(--radius-lg) var(--radius-lg) 0'}; cursor: pointer; position: relative; overflow: hidden; aspect-ratio: 1/1;" onclick="window.location='product-detail.html?id=${p.id}'">
          <span class="sale-tag">${escapeHtml(p.tag || 'NEW')}</span>
          <img src="${img1}" alt="${escapeHtml(p.name)}" class="product-img primary-img" style="width:100%;height:100%;object-fit:contain;background:var(--cream);" />
          <img src="${img2}" alt="${escapeHtml(p.name)} Hover" class="product-img hover-img" style="width:100%;height:100%;object-fit:contain;background:var(--cream);" />
        </div>
      `;

      const bodyCol = `
        <div class="product-detail-body" style="padding: 48px 40px; display: flex; flex-direction: column; justify-content: center;">
          <div class="product-rating" style="margin-bottom: 10px;">
            <span class="stars">${'★'.repeat(Math.round(p.rating||5))}${'☆'.repeat(5-Math.round(p.rating||5))}</span>
            <span class="rating-count">(${p.reviewsCount || 100} reviews)</span>
          </div>
          <h2 class="product-name" style="font-size: 30px; margin-bottom: 12px; cursor: pointer;" onclick="window.location='product-detail.html?id=${p.id}'">${escapeHtml(p.name)}</h2>
          ${tagsHtml ? `<div class="product-tags" style="margin-bottom: 16px;">${tagsHtml}</div>` : ''}
          <p class="product-desc" style="font-size: 15px; line-height: 1.8; margin-bottom: 20px;">
            ${escapeHtml(p.description || '')}
          </p>
          ${highlightHtml}
          ${weightsHtml ? `
            <div style="margin-bottom: 20px;">
              <div style="font-size: 11px; font-weight: 700; color: var(--green-dark); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 8px;">SELECT SIZE</div>
              <div class="product-weight" id="weight-buttons-${p.id}">
                ${weightsHtml}
              </div>
            </div>
          ` : ''}
          <div class="product-price" style="margin-bottom: 20px;" id="price-box-${p.id}">
            <span class="price-original" style="text-decoration: line-through; color: #d90429; font-weight: 500; font-size: 18px; margin-right: 10px;">Rs. ${origPrice.toLocaleString()}</span>
            <span class="price-sale" style="font-size: 26px; font-weight: 700; color: var(--green-dark);">Rs. ${totalPrice.toLocaleString()}</span>
          </div>
          <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 24px;">
            <div class="quantity-selector">
              <button type="button" class="qty-btn" onclick="changeProductsPageQty('${p.id}', -1)">−</button>
              <span class="qty-display" id="qty-display-${p.id}">${state.qty}</span>
              <button type="button" class="qty-btn" onclick="changeProductsPageQty('${p.id}', 1)">+</button>
            </div>
          </div>
          <div class="product-actions" style="display: flex; gap: 12px; flex-wrap: wrap;">
            <button type="button" class="btn btn-primary btn-lg" onclick="addProductsPageToCart('${p.id}', false)">Add to Cart 🛒</button>
            <button type="button" class="btn btn-gold btn-lg" onclick="addProductsPageToCart('${p.id}', true)">Buy Now</button>
          </div>
        </div>
      `;

      return `
        <div class="product-detail-card reveal product-card" id="${p.id}" style="margin-bottom: 40px; background: var(--white); border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-sm);">
          <div style="display: grid; grid-template-columns: ${isEven ? '1.2fr 1fr' : '1fr 1.2fr'}; gap: 0;">
            ${isEven ? imgCol + bodyCol : bodyCol + imgCol}
          </div>
        </div>
      `;
    }).join('');
  }
}

// Global product card state store for products.html
window.productStates = window.productStates || {};

function updateProductsPageCard(productId) {
  const data = getSiteData();
  const p = (data.products || []).find(item => item.id === productId);
  if (!p) return;

  const state = window.productStates[productId] || { weightIdx: 0, qty: 1 };
  const weights = p.weights && p.weights.length ? p.weights : [{ label: 'Standard', price: p.price || 0 }];
  const currentWeight = weights[state.weightIdx] || weights[0];
  const unitPrice = currentWeight.price || p.price || 0;
  const totalPrice = unitPrice * state.qty;
  const origUnitPrice = (currentWeight.originalPrice && currentWeight.originalPrice > unitPrice) ? currentWeight.originalPrice : null;
  const origTotalPrice = origUnitPrice ? (origUnitPrice * state.qty) : null;

  // Update Qty display
  const qtyEl = document.getElementById(`qty-display-${productId}`);
  if (qtyEl) qtyEl.textContent = state.qty;

  // Update Price display
  const priceBox = document.getElementById(`price-box-${productId}`);
  if (priceBox) {
    priceBox.innerHTML = `
      ${origTotalPrice ? `<span class="price-original" style="text-decoration: line-through; color: #d90429; font-weight: 500; font-size: 18px; margin-right: 10px;">Rs. ${origTotalPrice.toLocaleString()}</span>` : ''}
      <span class="price-sale" style="font-size: 26px; font-weight: 700; color: var(--green-dark);">Rs. ${totalPrice.toLocaleString()}</span>
    `;
  }
}

function selectProductsPageWeight(productId, weightIdx) {
  window.productStates[productId] = window.productStates[productId] || { weightIdx: 0, qty: 1 };
  window.productStates[productId].weightIdx = weightIdx;

  const container = document.getElementById(`weight-buttons-${productId}`);
  if (container) {
    container.querySelectorAll('.weight-btn').forEach((btn, idx) => {
      btn.classList.toggle('selected', idx === weightIdx);
    });
  }

  updateProductsPageCard(productId);
}

function changeProductsPageQty(productId, delta) {
  window.productStates[productId] = window.productStates[productId] || { weightIdx: 0, qty: 1 };
  window.productStates[productId].qty = Math.max(1, window.productStates[productId].qty + delta);
  updateProductsPageCard(productId);
}

function addProductsPageToCart(productId, buyNow = false) {
  const data = getSiteData();
  const p = (data.products || []).find(item => item.id === productId);
  if (!p) return;

  const state = window.productStates[productId] || { weightIdx: 0, qty: 1 };
  const weights = p.weights && p.weights.length ? p.weights : [{ label: 'Standard', price: p.price || 0 }];
  const currentWeight = weights[state.weightIdx] || weights[0];
  const img = (p.images && p.images[0]) || p.image || 'Image/Favicon.png';
  const itemTitle = `${p.name} (${currentWeight.label})`;
  const unitPrice = currentWeight.price || p.price || 0;
  const origUnitPrice = (currentWeight.originalPrice && currentWeight.originalPrice > unitPrice) ? currentWeight.originalPrice : null;

  addToCart(itemTitle, unitPrice, img, state.qty, origUnitPrice);

  if (buyNow) {
    window.location.href = 'cart.html';
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

function addToCart(name, price, image, qty = 1, originalPrice = null) {
  const existing = cart.find(i => i.name === name);
  if (existing) {
    existing.qty += qty;
    if (originalPrice) existing.originalPrice = originalPrice;
  } else {
    cart.push({ name, price, image, qty, originalPrice });
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
      ${cart.map((item, i) => {
        const hasDiscount = item.originalPrice && item.originalPrice > item.price;
        const itemOrigTotal = hasDiscount ? (item.originalPrice * item.qty) : null;
        const itemPriceTotal = item.price * item.qty;

        return `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.name}" class="cart-item-img" />
          <div class="cart-item-details">
            <h4>${item.name}</h4>
            <p style="display:flex; align-items:center; gap:6px;">
              ${hasDiscount ? `<span style="text-decoration:line-through; color:#d90429; font-size:12px;">Rs. ${item.originalPrice.toLocaleString()}</span>` : ''}
              <span style="font-weight:600; color:var(--green-dark);">Rs. ${item.price.toLocaleString()} each</span>
            </p>
            <div class="cart-item-controls">
              <div class="quantity-selector">
                <button class="qty-btn" onclick="updateQty(${i}, -1)">−</button>
                <span class="qty-display">${item.qty}</span>
                <button class="qty-btn" onclick="updateQty(${i}, 1)">+</button>
              </div>
            </div>
          </div>
          <div class="cart-item-right">
            <div class="cart-item-price" style="display:flex; flex-direction:column; align-items:flex-end;">
              ${hasDiscount ? `<span style="text-decoration:line-through; color:#d90429; font-size:12px;">Rs. ${itemOrigTotal.toLocaleString()}</span>` : ''}
              <span style="font-weight:700; color:var(--green-dark);">Rs. ${itemPriceTotal.toLocaleString()}</span>
            </div>
            <button class="cart-remove-btn" onclick="removeFromCart(${i})" title="Remove">🗑</button>
          </div>
        </div>
      `;
      }).join('')}
    </div>
  `;

  updateSummary();
}

function updateSummary() {
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const totalSavings = cart.reduce((s, i) => {
    if (i.originalPrice && i.originalPrice > i.price) {
      return s + ((i.originalPrice - i.price) * i.qty);
    }
    return s;
  }, 0);

  const delivery = subtotal >= 2000 ? 0 : (subtotal > 0 ? 200 : 0);
  const total = subtotal + delivery;

  const subEl = document.getElementById('summarySubtotal');
  const discEl = document.getElementById('summaryDiscount');
  const delEl = document.getElementById('summaryDelivery');
  const totEl = document.getElementById('summaryTotal');

  if (subEl) subEl.textContent = `Rs. ${subtotal.toLocaleString()}`;
  if (discEl) discEl.textContent = totalSavings > 0 ? `— Rs. ${totalSavings.toLocaleString()}` : `— Rs. 0`;
  if (delEl) delEl.textContent = delivery === 0 ? 'FREE' : `Rs. ${delivery.toLocaleString()}`;
  if (totEl) totEl.textContent = `Rs. ${total.toLocaleString()}`;
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

// ---- OFFICIAL PAYMENT MODAL & CHECKOUT HANDLER ----
function initPaymentModal() {
  if (document.getElementById('paymentInfoModal')) return;

  const modal = document.createElement('div');
  modal.id = 'paymentInfoModal';
  modal.className = 'search-overlay';
  modal.style.zIndex = '10000';

  modal.innerHTML = `
    <div style="background: var(--white); border-radius: var(--radius-lg); padding: 32px; max-width: 520px; width: 90%; position: relative; box-shadow: var(--shadow-lg); border: 2px solid var(--gold); text-align: left; animation: fadeIn 0.3s ease;">
      <button onclick="closePaymentModal()" style="position: absolute; top: 16px; right: 16px; font-size: 20px; color: var(--gray); border: none; background: none; cursor: pointer; padding: 4px 8px; border-radius: 50%;">✕</button>
      <div id="paymentModalContent"></div>
    </div>
  `;

  document.body.appendChild(modal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closePaymentModal();
  });
}

function openPaymentModal(type = 'all') {
  initPaymentModal();
  const modal = document.getElementById('paymentInfoModal');
  const content = document.getElementById('paymentModalContent');

  let html = `
    <div style="display:flex; align-items:center; gap:12px; margin-bottom: 20px; padding-bottom: 14px; border-bottom: 1px solid var(--cream-dark);">
      <span style="font-size: 28px;">💳</span>
      <div>
        <h3 style="font-family: 'Playfair Display', serif; font-size: 22px; color: var(--green-dark); margin:0;">Official Payment Methods</h3>
        <p style="font-size: 13px; color: var(--gray); margin:0;">Nutrivana Accounts &amp; Instant Transfer Details</p>
      </div>
    </div>

    <div style="display: flex; flex-direction: column; gap: 14px; max-height: 400px; overflow-y: auto; padding-right: 4px;">
      
      <!-- Raast -->
      <div style="background: ${type === 'raast' ? 'rgba(0,168,89,0.08)' : 'var(--cream)'}; border: 2px solid ${type === 'raast' ? 'var(--green)' : 'var(--cream-dark)'}; border-radius: 12px; padding: 14px; display: flex; gap: 14px; align-items: flex-start;">
        <img src="Image/raast.jpg" alt="Raast" style="width:48px; height:48px; object-fit:cover; border-radius:8px; flex-shrink:0;" />
        <div style="flex:1;">
          <div style="display:flex; justify-space-between; align-items:center;">
            <h4 style="font-size:15px; font-weight:700; color:var(--dark); margin:0;">State Bank Raast Gateway</h4>
            <span style="font-size:10px; background:rgba(0,168,89,0.15); color:var(--green-dark); font-weight:700; padding:2px 8px; border-radius:50px;">INSTANT ⚡</span>
          </div>
          <p style="font-size:12px; color:var(--gray); margin: 3px 0 8px;">Instant transfer from any Mobile Banking App (HBL, Meezan, UBL, Allied, Alfalah, etc.)</p>
          <div style="background:var(--white); padding:8px 12px; border-radius:6px; font-size:13px; font-weight:600; color:var(--green-dark); border:1px solid var(--cream-dark);">
            🏛️ Raast ID / Mobile: <strong>03347000322</strong><br>
            👤 Title: <strong>Sikander Hayat / Nutrivana</strong>
          </div>
        </div>
      </div>

      <!-- JazzCash -->
      <div style="background: ${type === 'jazzcash' ? 'rgba(206,17,38,0.08)' : 'var(--cream)'}; border: 2px solid ${type === 'jazzcash' ? '#CE1126' : 'var(--cream-dark)'}; border-radius: 12px; padding: 14px; display: flex; gap: 14px; align-items: flex-start;">
        <img src="Image/JazzCash.jpg" alt="JazzCash" style="width:48px; height:48px; object-fit:cover; border-radius:8px; flex-shrink:0;" />
        <div style="flex:1;">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <h4 style="font-size:15px; font-weight:700; color:var(--dark); margin:0;">JazzCash Mobile Wallet</h4>
            <span style="font-size:10px; background:rgba(206,17,38,0.15); color:#CE1126; font-weight:700; padding:2px 8px; border-radius:50px;">WALLETS 📱</span>
          </div>
          <p style="font-size:12px; color:var(--gray); margin: 3px 0 8px;">Direct transfer from your JazzCash App or Retailer shop.</p>
          <div style="background:var(--white); padding:8px 12px; border-radius:6px; font-size:13px; font-weight:600; color:var(--dark); border:1px solid var(--cream-dark);">
            📱 JazzCash #: <strong>0334 7000322</strong><br>
            👤 Account Title: <strong>Sikander Hayat / Nutrivana</strong>
          </div>
        </div>
      </div>

      <!-- EasyPaisa -->
      <div style="background: ${type === 'easypaisa' ? 'rgba(0,168,89,0.08)' : 'var(--cream)'}; border: 2px solid ${type === 'easypaisa' ? '#00A859' : 'var(--cream-dark)'}; border-radius: 12px; padding: 14px; display: flex; gap: 14px; align-items: flex-start;">
        <img src="Image/easypaisa.jpg" alt="EasyPaisa" style="width:48px; height:48px; object-fit:cover; border-radius:8px; flex-shrink:0;" />
        <div style="flex:1;">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <h4 style="font-size:15px; font-weight:700; color:var(--dark); margin:0;">EasyPaisa Mobile Wallet</h4>
            <span style="font-size:10px; background:rgba(0,168,89,0.15); color:#00A859; font-weight:700; padding:2px 8px; border-radius:50px;">WALLETS 📱</span>
          </div>
          <p style="font-size:12px; color:var(--gray); margin: 3px 0 8px;">Direct transfer from your EasyPaisa App or Agent shop.</p>
          <div style="background:var(--white); padding:8px 12px; border-radius:6px; font-size:13px; font-weight:600; color:var(--dark); border:1px solid var(--cream-dark);">
            📲 EasyPaisa #: <strong>0334 7000322</strong><br>
            👤 Account Title: <strong>Sikander Hayat / Nutrivana</strong>
          </div>
        </div>
      </div>

      <!-- COD -->
      <div style="background: ${type === 'cod' ? 'rgba(201,168,76,0.12)' : 'var(--cream)'}; border: 2px solid ${type === 'cod' ? 'var(--gold)' : 'var(--cream-dark)'}; border-radius: 12px; padding: 14px; display: flex; gap: 14px; align-items: flex-start;">
        <img src="Image/COD.jpg" alt="Cash on Delivery" style="width:48px; height:48px; object-fit:cover; border-radius:8px; flex-shrink:0;" />
        <div style="flex:1;">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <h4 style="font-size:15px; font-weight:700; color:var(--dark); margin:0;">Cash on Delivery (COD)</h4>
            <span style="font-size:10px; background:rgba(201,168,76,0.2); color:var(--green-dark); font-weight:700; padding:2px 8px; border-radius:50px;">DOORSTEP 🚚</span>
          </div>
          <p style="font-size:12px; color:var(--gray); margin: 3px 0 8px;">Pay cash in hand to the courier rider when receiving your parcel.</p>
          <div style="background:var(--white); padding:8px 12px; border-radius:6px; font-size:13px; font-weight:600; color:var(--green-dark); border:1px solid var(--cream-dark);">
            💵 Delivery Partners: TCS Express / Leopard Courier / Pakistan Post
          </div>
        </div>
      </div>

    </div>

    <div style="margin-top: 18px; text-align: center;">
      <a href="https://wa.me/923347000322?text=Hi%20Nutrivana,%20I%20have%20a%20payment%20question" target="_blank" class="btn btn-primary" style="width: 100%;">
        💬 Send Payment Proof on WhatsApp (+92 334 7000322)
      </a>
    </div>
  `;

  content.innerHTML = html;
  modal.classList.add('active');
}

function closePaymentModal() {
  const modal = document.getElementById('paymentInfoModal');
  if (modal) modal.classList.remove('active');
}

// ---- INTERACTIVE CHECKOUT MODAL ----
let selectedPaymentMethod = 'COD';

function openCheckoutModal() {
  if (cart.length === 0) {
    showToast('Your cart is empty! Add products first.');
    return;
  }

  let checkoutModal = document.getElementById('checkoutModalOverlay');
  if (!checkoutModal) {
    checkoutModal = document.createElement('div');
    checkoutModal.id = 'checkoutModalOverlay';
    checkoutModal.className = 'search-overlay';
    checkoutModal.style.zIndex = '10001';
    document.body.appendChild(checkoutModal);
  }

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const deliveryFee = subtotal >= 2000 ? 0 : 200;
  const grandTotal = subtotal + deliveryFee;

  const savedDragX = checkoutModal.dataset.dragX || '0';
  const savedDragY = checkoutModal.dataset.dragY || '0';

  checkoutModal.innerHTML = `
    <div id="checkoutModalContentContainer" style="background: var(--white); border-radius: var(--radius-lg); padding: 32px; max-width: 580px; width: 92%; position: relative; box-shadow: var(--shadow-lg); border: 2px solid var(--green); text-align: left; max-height: 90vh; overflow-y: auto; transform: translate(${savedDragX}px, ${savedDragY}px);">
      <button onclick="closeCheckoutModal()" style="position: absolute; top: 16px; right: 16px; font-size: 20px; color: var(--gray); border: none; background: none; cursor: pointer; padding: 4px 8px; border-radius: 50%; z-index: 10;">✕</button>

      <div id="checkoutModalHeader" style="display:flex; align-items:center; gap:12px; margin-bottom: 20px; padding-bottom: 14px; border-bottom: 1px solid var(--cream-dark); cursor: move; user-select: none;">
        <span style="font-size: 28px;">📦</span>
        <div style="flex-grow: 1;">
          <h3 style="font-family: 'Playfair Display', serif; font-size: 22px; color: var(--green-dark); margin:0;">Complete Your Order</h3>
          <p style="font-size: 13px; color: var(--gray); margin:0;">Enter shipping details &amp; choose payment method <span style="font-size: 11px; color: var(--green); font-weight: bold; display: inline-block; margin-left: 5px;">(Drag to Move ✥)</span></p>
        </div>
      </div>

      <form onsubmit="submitFinalOrder(event)">
        <!-- Shipping Fields -->
        <div class="form-group" style="margin-bottom: 14px;">
          <label class="form-label">Full Name *</label>
          <input type="text" id="modalCheckoutName" class="form-input" placeholder="e.g. Sikander Hayat" required />
        </div>

        <div class="admin-grid-2" style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom: 14px;">
          <div class="form-group">
            <label class="form-label">Phone / WhatsApp *</label>
            <input type="tel" id="modalCheckoutPhone" class="form-input" placeholder="+92 334 7000322" required />
          </div>
          <div class="form-group">
            <label class="form-label">City *</label>
            <input type="text" id="modalCheckoutCity" class="form-input" placeholder="e.g. Lahore, Karachi" required />
          </div>
        </div>

        <div class="form-group" style="margin-bottom: 20px;">
          <label class="form-label">Complete Delivery Address *</label>
          <textarea id="modalCheckoutAddress" class="form-textarea" rows="2" placeholder="House #, Street #, Sector / Area" required></textarea>
        </div>

        <!-- Payment Method Selection Grid -->
        <div class="form-group" style="margin-bottom: 20px;">
          <label class="form-label" style="font-size: 14px; font-weight: 700; color: var(--green-dark);">💳 Select Payment Method *</label>
          
          <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin-top: 8px;">
            
            <label class="payment-option-card ${selectedPaymentMethod==='Raast'?'active':''}" onclick="selectCheckoutPayment('Raast')" style="border: 2px solid ${selectedPaymentMethod==='Raast'?'var(--green)':'var(--cream-dark)'}; background: ${selectedPaymentMethod==='Raast'?'rgba(45,106,79,0.06)':'var(--cream)'}; padding: 12px; border-radius: 10px; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.2s;">
              <img src="Image/raast.jpg" alt="Raast" style="width: 32px; height: 32px; object-fit: cover; border-radius: 6px; flex-shrink: 0;" />
              <div>
                <strong style="display: block; font-size: 13px; color: var(--dark);">Raast (SBP)</strong>
                <span style="font-size: 11px; color: var(--gray);">Instant Banking</span>
              </div>
            </label>

            <label class="payment-option-card ${selectedPaymentMethod==='JazzCash'?'active':''}" onclick="selectCheckoutPayment('JazzCash')" style="border: 2px solid ${selectedPaymentMethod==='JazzCash'?'#CE1126':'var(--cream-dark)'}; background: ${selectedPaymentMethod==='JazzCash'?'rgba(206,17,38,0.06)':'var(--cream)'}; padding: 12px; border-radius: 10px; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.2s;">
              <img src="Image/JazzCash.jpg" alt="JazzCash" style="width: 32px; height: 32px; object-fit: cover; border-radius: 6px; flex-shrink: 0;" />
              <div>
                <strong style="display: block; font-size: 13px; color: var(--dark);">JazzCash</strong>
                <span style="font-size: 11px; color: var(--gray);">Mobile Wallet</span>
              </div>
            </label>

            <label class="payment-option-card ${selectedPaymentMethod==='EasyPaisa'?'active':''}" onclick="selectCheckoutPayment('EasyPaisa')" style="border: 2px solid ${selectedPaymentMethod==='EasyPaisa'?'#00A859':'var(--cream-dark)'}; background: ${selectedPaymentMethod==='EasyPaisa'?'rgba(0,168,89,0.06)':'var(--cream)'}; padding: 12px; border-radius: 10px; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.2s;">
              <img src="Image/easypaisa.jpg" alt="EasyPaisa" style="width: 32px; height: 32px; object-fit: cover; border-radius: 6px; flex-shrink: 0;" />
              <div>
                <strong style="display: block; font-size: 13px; color: var(--dark);">EasyPaisa</strong>
                <span style="font-size: 11px; color: var(--gray);">Mobile Wallet</span>
              </div>
            </label>

            <label class="payment-option-card ${selectedPaymentMethod==='COD'?'active':''}" onclick="selectCheckoutPayment('COD')" style="border: 2px solid ${selectedPaymentMethod==='COD'?'var(--gold)':'var(--cream-dark)'}; background: ${selectedPaymentMethod==='COD'?'rgba(201,168,76,0.1)':'var(--cream)'}; padding: 12px; border-radius: 10px; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.2s;">
              <img src="Image/COD.jpg" alt="COD" style="width: 32px; height: 32px; object-fit: cover; border-radius: 6px; flex-shrink: 0;" />
              <div>
                <strong style="display: block; font-size: 13px; color: var(--dark);">Cash on Delivery</strong>
                <span style="font-size: 11px; color: var(--gray);">Pay at Doorstep</span>
              </div>
            </label>

          </div>
        </div>

        <!-- Dynamic Payment Instructions -->
        <div id="checkoutPaymentInstructions" style="background: var(--cream); border: 1px solid var(--cream-dark); border-radius: 10px; padding: 14px; margin-bottom: 20px; font-size: 13px;">
          ${renderCheckoutPaymentInfo(selectedPaymentMethod)}
        </div>

        <!-- Order Summary Box -->
        <div style="background: rgba(27,67,50,0.05); padding: 14px 18px; border-radius: 10px; margin-bottom: 20px; font-size: 14px; color: var(--green-dark);">
          <div style="display:flex; justify-space-between; margin-bottom: 4px;">
            <span>Subtotal:</span><strong>Rs. ${subtotal.toLocaleString()}</strong>
          </div>
          <div style="display:flex; justify-space-between; margin-bottom: 6px;">
            <span>Shipping:</span><strong>${deliveryFee === 0 ? 'FREE 🚚' : 'Rs. ' + deliveryFee}</strong>
          </div>
          <div style="display:flex; justify-space-between; font-size: 17px; font-weight: 700; border-top: 1px solid rgba(27,67,50,0.15); padding-top: 6px;">
            <span>Total Payable:</span><span>Rs. ${grandTotal.toLocaleString()}</span>
          </div>
        </div>

        <button type="submit" class="btn btn-primary" style="width: 100%; padding: 16px; font-size: 16px;">
          🎉 Confirm &amp; Place Order (Rs. ${grandTotal.toLocaleString()}) →
        </button>
      </form>
    </div>
  `;

  checkoutModal.classList.add('active');
  makeCheckoutDraggable();
}

function selectCheckoutPayment(method) {
  selectedPaymentMethod = method;
  openCheckoutModal(); // Refresh modal view
}

function renderCheckoutPaymentInfo(method) {
  if (method === 'Raast') {
    return `
      🏛️ <strong>Raast Instant Transfer Details:</strong><br>
      Account #: <strong>03347000322</strong> | Title: <strong>Sikander Hayat / Nutrivana</strong><br>
      <span style="color:var(--gray); font-size:12px;">💡 Transfer via Raast from any Banking App &amp; keep screenshot for proof.</span>
    `;
  } else if (method === 'JazzCash') {
    return `
      📱 <strong>JazzCash Account Details:</strong><br>
      Account #: <strong>03347000322</strong> | Title: <strong>Sikander Hayat / Nutrivana</strong><br>
      <span style="color:var(--gray); font-size:12px;">💡 Send amount to JazzCash number &amp; WhatsApp screenshot to +92 334 7000322.</span>
    `;
  } else if (method === 'EasyPaisa') {
    return `
      📲 <strong>EasyPaisa Account Details:</strong><br>
      Account #: <strong>03347000322</strong> | Title: <strong>Sikander Hayat / Nutrivana</strong><br>
      <span style="color:var(--gray); font-size:12px;">💡 Send amount to EasyPaisa number &amp; WhatsApp screenshot to +92 334 7000322.</span>
    `;
  } else {
    return `
      💵 <strong>Cash on Delivery (COD):</strong><br>
      Pay cash in hand to rider upon receiving your parcel.<br>
      <span style="color:var(--gray); font-size:12px;">💡 Verified courier delivery across all Pakistan cities.</span>
    `;
  }
}

function closeCheckoutModal() {
  const modal = document.getElementById('checkoutModalOverlay');
  if (modal) {
    modal.classList.remove('active');
    modal.dataset.dragX = '0';
    modal.dataset.dragY = '0';
    const targetElement = document.getElementById('checkoutModalContentContainer');
    if (targetElement) {
      targetElement.style.transform = 'translate(0px, 0px)';
    }
  }
}

function makeCheckoutDraggable() {
  const dragHandle = document.getElementById('checkoutModalHeader');
  const targetElement = document.getElementById('checkoutModalContentContainer');
  const overlay = document.getElementById('checkoutModalOverlay');
  if (!dragHandle || !targetElement || !overlay) return;

  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

  dragHandle.onmousedown = dragMouseDown;
  dragHandle.ontouchstart = dragTouchStart;

  function dragMouseDown(e) {
    e = e || window.event;
    if (e.target.tagName === 'BUTTON' || e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.closest('button')) {
      return;
    }
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function dragTouchStart(e) {
    if (e.target.tagName === 'BUTTON' || e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.closest('button')) {
      return;
    }
    pos3 = e.touches[0].clientX;
    pos4 = e.touches[0].clientY;
    document.ontouchend = closeDragElement;
    document.ontouchmove = elementTouchDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    let currentX = parseFloat(overlay.dataset.dragX || '0');
    let currentY = parseFloat(overlay.dataset.dragY || '0');

    currentX -= pos1;
    currentY -= pos2;

    overlay.dataset.dragX = currentX.toString();
    overlay.dataset.dragY = currentY.toString();

    targetElement.style.transform = `translate(${currentX}px, ${currentY}px)`;
  }

  function elementTouchDrag(e) {
    pos1 = pos3 - e.touches[0].clientX;
    pos2 = pos4 - e.touches[0].clientY;
    pos3 = e.touches[0].clientX;
    pos4 = e.touches[0].clientY;

    let currentX = parseFloat(overlay.dataset.dragX || '0');
    let currentY = parseFloat(overlay.dataset.dragY || '0');

    currentX -= pos1;
    currentY -= pos2;

    overlay.dataset.dragX = currentX.toString();
    overlay.dataset.dragY = currentY.toString();

    targetElement.style.transform = `translate(${currentX}px, ${currentY}px)`;
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
    document.ontouchend = null;
    document.ontouchmove = null;
  }
}

function submitFinalOrder(e) {
  if (e) e.preventDefault();
  if (cart.length === 0) {
    showToast('Cart is empty!');
    return;
  }

  const name = document.getElementById('modalCheckoutName')?.value.trim();
  const phone = document.getElementById('modalCheckoutPhone')?.value.trim();
  const city = document.getElementById('modalCheckoutCity')?.value.trim();
  const address = document.getElementById('modalCheckoutAddress')?.value.trim();

  if (!name || !phone || !city || !address) {
    showToast('Please fill in all shipping fields!');
    return;
  }

  const orderId = `NV-${Math.floor(10000 + Math.random() * 90000)}`;
  const siteData = getSiteData();
  if (!siteData.orders) siteData.orders = [];

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const deliveryFee = subtotal >= (siteData.settings.freeDeliveryThreshold || 2000) ? 0 : (siteData.settings.deliveryFee || 200);
  const total = subtotal + deliveryFee;

  const now = new Date();
  const dateStr = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')} ${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`;

  const newOrder = {
    orderId: orderId,
    customerName: name,
    phone: phone,
    city: city,
    address: address,
    paymentMethod: selectedPaymentMethod,
    items: cart.map(i => ({ name: i.name, weight: i.weight || '', qty: i.qty, price: i.price })),
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
  closeCheckoutModal();

  showToast(`🎉 Order Placed via ${selectedPaymentMethod}! Order ID: ${orderId}`);

  setTimeout(() => {
    window.location.href = `track-order.html?id=${orderId}`;
  }, 1200);
}

function handleCheckout(event) {
  if (event) event.preventDefault();
  openCheckoutModal();
}

// ---- ORDER TRACKING SEARCH & TIMELINE STEPPER ----
function handleOrderTrackSearch(e) {
  if (e) e.preventDefault();
  const input = document.getElementById('orderIdSearchInput');
  const container = document.getElementById('orderTrackingResultContainer');
  if (!input || !container) return;

  const raw = input.value.trim();
  const query = raw.toUpperCase();
  if (!query) {
    showToast('Please enter your Tracking / Order ID!');
    return;
  }

  // ---- Check if it looks like a Pakistan Post / EP tracking number ----
  // EP Post numbers typically start with letters like UMS, RR, CP, CZ, RA, EM, EA etc.
  const epPattern = /^[A-Z]{2,3}\d{8,11}[A-Z]{0,2}$/i;
  const isEPNumber = epPattern.test(query);

  // ---- Search in Nutrivana local orders ----
  const siteData = getSiteData();
  const orders = siteData.orders || [];
  const found = orders.find(o => o.orderId.toUpperCase() === query);

  if (found) {
    // Order found — show full timeline + EP Post button if tracking number exists
    container.style.display = 'block';
    container.innerHTML = renderOrderTrackingTimeline(found);
    return;
  }

  // ---- Not a local Nutrivana order ----
  // If it looks like a Pakistan Post tracking number, redirect directly to EP Post
  if (isEPNumber) {
    // Open EP Post tracking in new tab with the tracking number
    const epUrl = `https://ep.gov.pk/track.asp`;
    container.style.display = 'block';
    container.innerHTML = `
      <div class="tracker-card" style="padding: 36px 28px; text-align: center; border-top: 4px solid var(--green-dark);">
        <div style="font-size: 52px; margin-bottom: 12px;">📦</div>
        <h3 style="color: var(--green-dark); font-size: 22px; margin-bottom: 8px;">Pakistan Post Tracking</h3>
        <p style="color: var(--gray); margin-bottom: 6px; font-size: 15px;">
          Tracking Number: <strong style="color: var(--green-dark); font-size: 17px; letter-spacing: 1px;">${escapeHtml(query)}</strong>
        </p>
        <p style="color: var(--gray); font-size: 13px; margin-bottom: 24px;">
          Your parcel is being tracked through <strong>Pakistan Post (EP)</strong>.<br>
          Click below to check live status on the official Pakistan Post website.
        </p>
        <a href="${epUrl}" target="_blank" rel="noopener noreferrer"
          onclick="copyEPNumber('${escapeHtml(query)}')"
          style="display: inline-flex; align-items: center; gap: 10px; background: var(--green-dark); color: var(--gold-light); font-weight: 700; padding: 14px 32px; border-radius: 50px; font-size: 16px; text-decoration: none; border: 2px solid var(--gold); transition: all 0.2s;"
          onmouseover="this.style.background='var(--green-mid)'"
          onmouseout="this.style.background='var(--green-dark)'"
        >
          🌐 Track on Pakistan Post (EP)
        </a>
        <div style="margin-top: 16px; padding: 12px 20px; background: rgba(201,168,76,0.12); border: 1px dashed rgba(201,168,76,0.5); border-radius: 10px; font-size: 13px; color: var(--gray);">
          💡 <strong>How to track:</strong> Click the button above → Pakistan Post website will open → Enter <strong>${escapeHtml(query)}</strong> in the tracking field → Click Track
        </div>
        <div style="margin-top: 20px;">
          <a href="https://wa.me/923347000322?text=Hi%20Nutrivana,%20please%20help%20me%20track%20my%20parcel:%20${escapeHtml(query)}" target="_blank" style="color: var(--green-dark); font-weight: 600; font-size: 13px; text-decoration: none;">
            💬 Need help? Chat on WhatsApp
          </a>
        </div>
      </div>
    `;
    // Copy number to clipboard automatically so user can paste on EP site
    if (navigator.clipboard) {
      navigator.clipboard.writeText(query).then(() => {
        showToast('✅ Tracking number copied! Paste it on Pakistan Post site.');
      }).catch(() => {});
    }
    return;
  }

  // ---- Generic not found ----
  container.style.display = 'block';
  container.innerHTML = `
    <div class="tracker-card text-center" style="padding: 40px 20px;">
      <span style="font-size: 48px;">🔍</span>
      <h3 style="color: #d90429; margin-top: 10px;">ID "${escapeHtml(query)}" Not Found</h3>
      <p style="color: var(--gray); margin: 8px 0 12px;">Please check the Order ID on your receipt or SMS and try again.</p>
      <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; margin-top: 16px;">
        <a href="https://ep.gov.pk/track.asp" target="_blank" rel="noopener noreferrer"
          onclick="copyEPNumber('${escapeHtml(query)}')"
          style="display: inline-flex; align-items: center; gap: 8px; background: var(--green-dark); color: var(--gold-light); font-weight: 700; padding: 12px 24px; border-radius: 50px; font-size: 14px; text-decoration: none; border: 2px solid var(--gold);">
          🌐 Track via Pakistan Post (EP)
        </a>
        <a href="https://wa.me/923347000322?text=Hi%20Nutrivana,%20I%20need%20help%20tracking:%20${escapeHtml(query)}" target="_blank"
          style="display: inline-flex; align-items: center; gap: 8px; background: transparent; color: var(--green-dark); font-weight: 700; padding: 12px 24px; border-radius: 50px; font-size: 14px; text-decoration: none; border: 2px solid var(--green-dark);">
          💬 WhatsApp Support
        </a>
      </div>
    </div>
  `;
}

// Helper: copy EP tracking number to clipboard
function copyEPNumber(num) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(num).then(() => {
      showToast('✅ Tracking number copied! Paste it on Pakistan Post site.');
    }).catch(() => {});
  }
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

  // Check if EP Post tracking number is available
  const hasEPNum = order.trackingNum && order.trackingNum !== 'Pending' && order.trackingNum.trim() !== '';
  const epTrackBtn = hasEPNum ? `
    <div style="margin-top: 16px; padding: 16px 20px; background: rgba(201,168,76,0.1); border: 1px solid rgba(201,168,76,0.4); border-radius: 12px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px;">
      <div>
        <p style="margin: 0 0 4px; font-size: 13px; color: var(--gray); text-transform: uppercase; letter-spacing: 0.05em;">Pakistan Post (EP) Tracking</p>
        <p style="margin: 0; font-weight: 700; font-size: 17px; color: var(--green-dark); letter-spacing: 1px;">${order.trackingNum}</p>
      </div>
      <a href="https://ep.gov.pk/track.asp" target="_blank" rel="noopener noreferrer"
        onclick="copyEPNumber('${order.trackingNum}')"
        style="display: inline-flex; align-items: center; gap: 8px; background: var(--green-dark); color: var(--gold-light); font-weight: 700; padding: 12px 22px; border-radius: 50px; font-size: 14px; text-decoration: none; border: 2px solid var(--gold); white-space: nowrap;"
        onmouseover="this.style.opacity='0.85'"
        onmouseout="this.style.opacity='1'"
      >
        🌐 Track on Pakistan Post
      </a>
    </div>
  ` : '';

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
          <p style="margin: 0 0 4px; font-size: 14px;"><strong>Courier Partner:</strong> ${order.courier || 'Pakistan Post (EP)'}</p>
          <p style="margin: 0 0 4px; font-size: 14px;"><strong>Tracking No:</strong> ${order.trackingNum || 'Pending'}</p>
          <p style="margin: 0; font-size: 14px;"><strong>Order Total:</strong> Rs. ${order.total}</p>
        </div>
      </div>

      <!-- EP Post Track Button (only if tracking number assigned) -->
      ${epTrackBtn}

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
  // Init floating widgets immediately & on ready
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

// Run floating widgets immediately if script executes after DOMReady
if (document.readyState !== 'loading') {
  initFloatingWidgets();
}




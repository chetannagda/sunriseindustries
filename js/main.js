// Sunrise Group of Industries - JavaScript Functionality

// Products Data - 20 Stone/Powder Products
const productsData = [
  {
    id: 1,
    name: "Calcium Carbonate (CaCO3)",
    rawMaterial: "Calcium Carbonate",
    description: "Versatile calcium carbonate powder supplied in region-specific grades.",
    process: "Crushing → Grinding → Classification → Packaging",
    applications: ["Paper Industry", "Paints & Coatings", "Plastics", "Rubber"],
    fineness: "200-400 mesh",
    purity: "98%",
    color: "White",
      image: "images/powder_calcium_carbonate.jpeg",
      rawMaterialImage: "images/raw_calcium_carbonte.jpeg",
      crystalImage: "images/crystal_calcium_carbonate.png",
      finalPowderImage: "images/powder_calcium_carbonate.jpeg",
      // Placeholder variants for Calcium Carbonate. Replace `image` and `name` with your exact files/names.
      variants: [
        { id: 'caco3-in', name: 'Indian CaCO3 Powder', image: 'images/powder_calcium_carbonate.jpeg' },
        { id: 'caco3-eg', name: 'Egypt CaCO3 Powder', image: 'images/powder_calcium_carbonate.jpeg' },
        { id: 'caco3-vn', name: 'Vietnam CaCO3 Powder', image: 'images/powder_calcium_carbonate.jpeg' }
      ]
  },
  {
    id: 2,
    name: "Marble Powder",
    rawMaterial: "Marble Stones",
    description: "Premium marble powder derived from carefully selected marble stones, perfect for decorative and industrial uses.",
    process: "Selection → Crushing → Fine Grinding → Quality Testing",
    applications: ["Paints & Coatings", "Putty Manufacturing", "Tiles Production", "Cosmetics"],
    fineness: "300-400 mesh",
    purity: "99.5%",
    color: "Pure White"
  },
  {
    id: 3,
    name: "Dolomite Powder",
    rawMaterial: "Dolomite Rocks",
    description: "Processed dolomite powder from natural dolomite rocks, essential for various industrial applications.",
    process: "Mining → Crushing → Milling → Classification",
    applications: ["Glass Industry", "Steel Making", "Ceramics", "Rubber Industry"],
    fineness: "200-325 mesh",
    purity: "97%",
    color: "White to Light Gray"
  },
  {
    id: 4,
    name: "Quartz Powder",
    rawMaterial: "Quartz Crystals",
    description: "Ultra-pure quartz powder processed from high-grade quartz crystals for precision applications.",
    process: "Purification → Crushing → Ultra-fine Grinding → Purity Testing",
    applications: ["Electronics", "Glass Manufacturing", "Foundry", "Construction"],
    fineness: "100-500 mesh",
    purity: "99.9%",
    color: "Crystal White"
  },
  {
    id: 5,
    name: "Calcite Powder",
    rawMaterial: "Calcite Stones",
    description: "Refined calcite powder from natural calcite stones, widely used in industrial applications.",
    process: "Extraction → Crushing → Grinding → Size Classification",
    applications: ["Paper Industry", "Plastics", "Paint", "Adhesives"],
    fineness: "200-400 mesh",
    purity: "98.5%",
    color: "White"
  },
  {
    id: 6,
    name: "Talc Powder",
    rawMaterial: "Talc Rocks",
    description: "Micronized talc powder processed from premium talc rocks with excellent properties.",
    process: "Mining → Beneficiation → Grinding → Micronization",
    applications: ["Cosmetics", "Pharmaceuticals", "Ceramics", "Paint Industry"],
    fineness: "325-400 mesh",
    purity: "96%",
    color: "White to Light Green"
  },
  {
    id: 7,
    name: "Feldspar Powder",
    rawMaterial: "Feldspar Rocks",
    description: "High-grade feldspar powder derived from quality feldspar rocks for ceramic and glass industries.",
    process: "Quarrying → Crushing → Grinding → Magnetic Separation",
    applications: ["Ceramics", "Glass Industry", "Enamel", "Welding Electrodes"],
    fineness: "100-300 mesh",
    purity: "95%",
    color: "Pink to White"
  },
  {
    id: 8,
    name: "Gypsum Powder",
    rawMaterial: "Gypsum Stones",
    description: "Fine gypsum powder processed from natural gypsum stones for construction applications.",
    process: "Mining → Crushing → Calcination → Fine Grinding",
    applications: ["Plaster of Paris", "Cement", "Fertilizers", "Soil Conditioning"],
    fineness: "200-300 mesh",
    purity: "97%",
    color: "White"
  },
  {
    id: 9,
    name: "Mica Powder",
    rawMaterial: "Mica Flakes",
    description: "Processed mica powder from high-quality mica flakes with excellent electrical properties.",
    process: "Dry Processing → Grinding → Classification → Quality Control",
    applications: ["Electrical Industry", "Cosmetics", "Paints", "Rubber"],
    fineness: "200-325 mesh",
    purity: "94%",
    color: "Silver to Golden"
  },
  {
    id: 10,
    name: "Barite Powder",
    rawMaterial: "Barite Ore",
    description: "Dense barite powder processed from premium barite ore for specialized applications.",
    process: "Beneficiation → Crushing → Grinding → Flotation",
    applications: ["Oil Drilling", "Paint Industry", "Rubber", "Plastics"],
    fineness: "200-400 mesh",
    purity: "96%",
    color: "White"
  },
  {
    id: 11,
    name: "Bentonite Powder",
    rawMaterial: "Bentonite Clay",
    description: "Activated bentonite powder from natural bentonite clay with superior binding properties.",
    process: "Activation → Crushing → Fine Grinding → Moisture Control",
    applications: ["Foundry", "Drilling Fluids", "Cat Litter", "Agriculture"],
    fineness: "200-300 mesh",
    purity: "92%",
    color: "Gray to Light Brown"
  },
  {
    id: 12,
    name: "Silica Sand Powder",
    rawMaterial: "Silica Sand",
    description: "Pure silica powder processed from high-grade silica sand for industrial applications.",
    process: "Washing → Drying → Grinding → Grading",
    applications: ["Glass Industry", "Foundry", "Construction", "Water Filtration"],
    fineness: "40-200 mesh",
    purity: "99%",
    color: "White to Clear"
  },
  {
    id: 13,
    name: "Kaolin Powder",
    rawMaterial: "Kaolin Clay",
    description: "Refined kaolin powder from premium kaolin clay with excellent whiteness and purity.",
    process: "Beneficiation → Grinding → Classification → Bleaching",
    applications: ["Paper Industry", "Ceramics", "Paint", "Rubber"],
    fineness: "325-400 mesh",
    purity: "97%",
    color: "Pure White"
  },
  {
    id: 14,
    name: "Wollastonite Powder",
    rawMaterial: "Wollastonite Ore",
    description: "Acicular wollastonite powder processed from natural wollastonite ore.",
    process: "Mining → Crushing → Grinding → Magnetic Separation",
    applications: ["Ceramics", "Plastics", "Paint", "Friction Products"],
    fineness: "200-325 mesh",
    purity: "95%",
    color: "White"
  },
  {
    id: 15,
    name: "China Clay Powder",
    rawMaterial: "China Clay",
    description: "High-grade china clay powder processed from natural china clay deposits.",
    process: "Extraction → Purification → Grinding → Classification",
    applications: ["Paper Coating", "Ceramics", "Paint", "Rubber"],
    fineness: "300-400 mesh",
    purity: "96%",
    color: "White"
  },
  {
    id: 16,
    name: "Magnetite Powder",
    rawMaterial: "Magnetite Ore",
    description: "Magnetic magnetite powder processed from high-grade magnetite ore.",
    process: "Beneficiation → Crushing → Grinding → Magnetic Separation",
    applications: ["Heavy Media Separation", "Welding Electrodes", "Concrete", "Water Treatment"],
    fineness: "100-200 mesh",
    purity: "94%",
    color: "Black"
  },
  {
    id: 17,
    name: "Graphite Powder",
    rawMaterial: "Graphite Flakes",
    description: "Purified graphite powder from natural graphite flakes with excellent conductivity.",
    process: "Flotation → Purification → Grinding → Classification",
    applications: ["Lubricants", "Batteries", "Refractories", "Foundry"],
    fineness: "200-400 mesh",
    purity: "95%",
    color: "Dark Gray"
  },
  {
    id: 18,
    name: "Perlite Powder",
    rawMaterial: "Perlite Rock",
    description: "Expanded perlite powder processed from volcanic perlite rock.",
    process: "Crushing → Screening → Expansion → Fine Grinding",
    applications: ["Construction", "Horticulture", "Filter Aid", "Insulation"],
    fineness: "100-300 mesh",
    purity: "93%",
    color: "White to Gray"
  },
  {
    id: 19,
    name: "Vermiculite Powder",
    rawMaterial: "Vermiculite Ore",
    description: "Exfoliated vermiculite powder from natural vermiculite ore with thermal properties.",
    process: "Exfoliation → Grinding → Grading → Quality Testing",
    applications: ["Insulation", "Horticulture", "Fire Protection", "Construction"],
    fineness: "100-200 mesh",
    purity: "91%",
    color: "Golden Brown"
  },
  {
    id: 20,
    name: "Nepheline Syenite Powder",
    rawMaterial: "Nepheline Syenite Rock",
    description: "Premium nepheline syenite powder processed from igneous nepheline syenite rock.",
    process: "Quarrying → Crushing → Grinding → Flotation",
    applications: ["Glass Industry", "Ceramics", "Filler", "Paint"],
    fineness: "200-325 mesh",
    purity: "94%",
    color: "Gray to White"
  }
];

// DOM Elements
let mobileMenuToggle;
let navMenu;
let whatsappButton;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  initializeNavigation();
  initializeWhatsApp();
  loadPageContent();
});

// Navigation functionality
function initializeNavigation() {
  mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  navMenu = document.querySelector('.nav-menu');
  
  if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    
    // Close mobile menu when clicking on nav links
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!navMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
        closeMobileMenu();
      }
    });
  }
}

function toggleMobileMenu() {
  navMenu.classList.toggle('active');
  const icon = mobileMenuToggle.querySelector('i') || mobileMenuToggle;
  
  if (navMenu.classList.contains('active')) {
    icon.textContent = '✕';
  } else {
    icon.textContent = '☰';
  }
}

function closeMobileMenu() {
  navMenu.classList.remove('active');
  const icon = mobileMenuToggle.querySelector('i') || mobileMenuToggle;
  icon.textContent = '☰';
}

// WhatsApp functionality
function initializeWhatsApp() {
  whatsappButton = document.querySelector('.whatsapp-float');
  if (whatsappButton) {
    whatsappButton.addEventListener('click', openWhatsApp);
  }
}

function openWhatsApp() {
  const phoneNumber = "7014592046"; // Replace with actual WhatsApp number
  const message = encodeURIComponent("Hello! I'm interested in learning more about Sunrise Group of Industries products.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(whatsappUrl, '_blank');
}

// Page content loading
function loadPageContent() {
  const currentPage = getCurrentPage();
  
  switch(currentPage) {
    case 'products':
      loadProductsPage();
      break;
    case 'about':
      loadAboutPage();
      break;
    case 'contact':
      loadContactPage();
      break;
    default:
      loadHomePage();
  }
}

function getCurrentPage() {
  const path = window.location.pathname;
  const page = path.split('/').pop();
  
  if (page.includes('products')) return 'products';
  if (page.includes('about')) return 'about';
  if (page.includes('contact')) return 'contact';
  return 'home';
}

// Products page functionality
function loadProductsPage() {
  const productsContainer = document.getElementById('products-container');
  if (productsContainer) {
    displayProducts(productsData, productsContainer);
    setupProductSearch();
    setupProductFilter();
  }
}

function displayProducts(products, container) {
  container.innerHTML = '';
  
  products.forEach(product => {
    const productCard = createProductCard(product);
    container.appendChild(productCard);
  });
}

function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.onclick = () => openProductModal(product);
  
  card.innerHTML = `
    <div class="product-image">
      ${product.image ? `<img src="${product.image}" alt="${product.name}" class="product-thumb">` : '<i class="product-icon">⚒️</i>'}
    </div>
    <div class="product-content">
      <h3>${product.name}</h3>
      <p class="product-subtitle">From ${product.rawMaterial}</p>
      <p class="learn-more">Click to learn more</p>
    </div>
  `;
  
  return card;
}

function createProcessFlow(processString) {
  const steps = processString.split(' → ');
  return steps.map((step, index) => {
    const arrow = index < steps.length - 1 ? ' <span class="process-arrow">→</span>' : '';
    return `<span class="process-step">${step.trim()}${arrow}</span>`;
  }).join(' ');
}

function setupProductSearch() {
  const searchInput = document.getElementById('product-search');
  if (searchInput) {
    searchInput.addEventListener('input', function(e) {
      const searchTerm = e.target.value.toLowerCase();
      const filteredProducts = productsData.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.rawMaterial.toLowerCase().includes(searchTerm) ||
        product.applications.some(app => app.toLowerCase().includes(searchTerm))
      );
      
      const container = document.getElementById('products-container');
      displayProducts(filteredProducts, container);
    });
  }
}

function setupProductFilter() {
  const filterSelect = document.getElementById('product-filter');
  if (filterSelect) {
    filterSelect.addEventListener('change', function(e) {
      const filterValue = e.target.value;
      let filteredProducts = productsData;
      
      if (filterValue !== 'all') {
        filteredProducts = productsData.filter(product => 
          product.applications.some(app => app.toLowerCase().includes(filterValue))
        );
      }
      
      const container = document.getElementById('products-container');
      displayProducts(filteredProducts, container);
    });
  }
}

// Product Modal functionality
function openProductModal(product) {
  // Create modal if it doesn't exist
  let modal = document.getElementById('product-modal');
  if (!modal) {
    modal = createProductModal();
    document.body.appendChild(modal);
  }
  
  // Populate modal with product data
  populateModal(product);
  
  // Show modal
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function createProductModal() {
  const modal = document.createElement('div');
  modal.id = 'product-modal';
  modal.className = 'product-modal';
  
  modal.innerHTML = `
    <div class="modal-content">
      <div class="modal-header">
        <h2 id="modal-product-name"></h2>
        <button class="modal-close" onclick="closeProductModal()">&times;</button>
      </div>
      <div class="modal-body">
        <div class="product-images">
          <div class="product-image-item">
            <div>🪨</div>
            <small>Raw Material</small>
          </div>
          <div class="product-image-item">
            <div>💎</div>
            <small>Crystal Form</small>
          </div>
          <div class="product-image-item">
            <div>⚗️</div>
            <small>Final Powder</small>
          </div>
        </div>
        
        <div id="modal-product-details"></div>
        
        <div class="text-center">
          <button class="btn btn-primary" onclick="contactForProduct(document.getElementById('modal-product-name').textContent)">
            Get Quote for this Product
          </button>
        </div>
      </div>
    </div>
  `;
  
  // Close modal when clicking outside
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeProductModal();
    }
  });
  
  return modal;
}

function populateModal(product) {
  document.getElementById('modal-product-name').textContent = product.name;
  
  const detailsContainer = document.getElementById('modal-product-details');
  detailsContainer.innerHTML = `
    <div class="grid-2">
      <div>
        <h4>Product Description</h4>
        <p>${product.description}</p>
        
        <h4>Raw Material</h4>
        <p>${product.rawMaterial}</p>
        
        <h4>Applications</h4>
        <ul style="list-style: disc; padding-left: 1.5rem;">
          ${product.applications.map(app => `<li>${app}</li>`).join('')}
        </ul>
      </div>
      
      <div>
        ${product.variants ? `
        <div class="product-variants">
          <h4>Available Variants</h4>
          <div class="variants-list">
            ${product.variants.map(v => `
              <div class="variant-item" data-variant-id="${v.id}">
                <img src="${v.image}" alt="${v.name}" class="product-thumb-small">
                <div class="variant-name">${v.name}</div>
              </div>
            `).join('')}
          </div>
        </div>
        ` : ''}
        <div class="product-process">
          <h4>Processing Steps</h4>
          <div class="process-flow">
            ${createProcessFlow(product.process)}
          </div>
        </div>
        
        <div class="product-specs" style="margin-top: 1rem;">
          <div class="spec-item">
            <strong>Fineness</strong><br>${product.fineness}
          </div>
          <div class="spec-item">
            <strong>Purity</strong><br>${product.purity}
          </div>
          <div class="spec-item">
            <strong>Color</strong><br>${product.color}
          </div>
        </div>
      </div>
    </div>
  `;

  // Populate the product images area (if images provided)
  const imageItems = document.querySelectorAll('.product-image-item');
  if (imageItems && imageItems.length >= 3) {
    if (product.rawMaterialImage) {
      imageItems[0].innerHTML = `
        <div class="product-image-inner"><img src="${product.rawMaterialImage}" alt="Raw Material"></div>
        <small>Raw Material</small>
      `;
    }
    if (product.crystalImage) {
      imageItems[1].innerHTML = `
        <div class="product-image-inner"><img src="${product.crystalImage}" alt="Crystal Form"></div>
        <small>Crystal Form</small>
      `;
    }
    if (product.finalPowderImage) {
      imageItems[2].innerHTML = `
        <div class="product-image-inner"><img src="${product.finalPowderImage}" alt="Final Powder"></div>
        <small>Final Powder</small>
      `;
    }
  }

  // Wire up variant click handlers (if any)
  if (product.variants) {
    const variantItems = document.querySelectorAll('.variant-item');
    variantItems.forEach(item => {
      item.addEventListener('click', function() {
        const id = this.getAttribute('data-variant-id');
        const variant = product.variants.find(v => v.id === id);
        if (variant) {
          document.getElementById('modal-product-name').textContent = `${product.name} — ${variant.name}`;
        }
      });
    });
  }
}

function closeProductModal() {
  const modal = document.getElementById('product-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Contact functionality
function contactForProduct(productName) {
  const message = encodeURIComponent(`Hello! I'm interested in getting a quote for ${productName}.`);
  const phoneNumber = "7014592046"; // Replace with actual WhatsApp number
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(whatsappUrl, '_blank');
}

// Contact form functionality
function setupContactForm() {
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      handleContactFormSubmission();
    });
  }
}

function handleContactFormSubmission() {
  const formData = new FormData(document.getElementById('contact-form'));
  const name = formData.get('name');
  const email = formData.get('email');
  const phone = formData.get('phone');
  const message = formData.get('message');
  
  // Create WhatsApp message
  const whatsappMessage = encodeURIComponent(
    `New Contact Form Submission:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
  );
  
  const phoneNumber = "7014592046"; // Replace with actual WhatsApp number
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
  
  // Show success message
  showNotification('Thank you for your message! We will contact you soon.', 'success');
  
  // Reset form
  document.getElementById('contact-form').reset();
  
  // Open WhatsApp
  window.open(whatsappUrl, '_blank');
}

// Notification system
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: ${type === 'success' ? '#10B981' : '#3B82F6'};
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    z-index: 1001;
    animation: slideIn 0.3s ease;
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

// Home page functionality
function loadHomePage() {
  // Featured products carousel or highlight
  const featuredContainer = document.getElementById('featured-products');
  if (featuredContainer) {
    const featuredProducts = productsData.slice(0, 6); // Show first 6 products
    displayFeaturedProducts(featuredProducts, featuredContainer);
  }
}

function displayFeaturedProducts(products, container) {
  container.innerHTML = '';
  
  products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <h4>${product.name}</h4>
      <p>From ${product.rawMaterial}</p>
      <p class="product-summary">${product.description.substring(0, 100)}...</p>
      <a href="products.html#product-${product.id}" class="btn btn-secondary">Learn More</a>
    `;
    container.appendChild(card);
  });
}

// Smooth scrolling for anchor links
document.addEventListener('click', function(e) {
  if (e.target.matches('a[href^="#"]')) {
    e.preventDefault();
    const target = document.querySelector(e.target.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
});

// Initialize contact form when page loads
document.addEventListener('DOMContentLoaded', function() {
  setupContactForm();
});

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  
  @keyframes slideOut {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(100%); opacity: 0; }
  }
  
  .product-specs {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 0.5rem;
    margin: 1rem 0;
    padding: 1rem;
    background: #F8F9FA;
    border-radius: 8px;
  }
  
  .spec-item {
    text-align: center;
    padding: 0.5rem;
    background: white;
    border-radius: 4px;
    font-size: 0.9rem;
  }
  
  .product-applications ul {
    list-style: none;
    padding: 0;
  }
  
  .product-applications li {
    background: #E5E7EB;
    margin: 0.25rem 0;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-size: 0.9rem;
  }
  
  .process-flow {
    font-size: 0.9rem;
    line-height: 1.4;
  }
`;
document.head.appendChild(style);

// Sunrise Group of Industries - JavaScript Functionality

// Products Data - 20 Stone/Powder Products (minimal metadata)
const productsData = [
  {
    id: 1,
    name: "Calcium Carbonate (CaCO3)",
    rawMaterial: "Calcium Carbonate",
    image: "images/powder_calcium_carbonate.jpeg",
    rawMaterialImage: "images/raw_calcium_carbonte.jpeg",
  finalPowderImage: "images/powder_calcium_carbonate.jpeg",
    // Updated variants: use country-specific images (placed in `images/`) and include short descriptions
    originalDescription: "Calcium carbonate (CaCO3) is a versatile mineral powder sourced from limestone and marine deposits. It is widely used as a filler and functional additive in paints, plastics, paper, adhesives, rubber and construction. Different regional grades vary in brightness, particle-size distribution and bulk density to suit specific industrial needs.",
    variants: [
      {
        id: 'caco3-in',
        name: 'Indian CaCO3 Powder',
        image: 'images/indian_calcium_carbonate_powder.jpeg',
        description: 'Origin: India — High-purity limestone-derived calcium carbonate with excellent brightness and fine particle size. Typical uses: paints & coatings, paper coating, specialty plastics and high-end filler applications where whiteness and surface finish are critical.'
      },
      {
        id: 'caco3-eg',
        name: 'Egypt CaCO3 Powder',
        image: 'images/egypt_calcium_carbonate_powder.jpg',
        description: 'Origin: Egypt — Sourced from natural marine limestone deposits offering good whiteness and higher bulk density. Typical uses: cement & construction fillers, heavy-duty compounds and industrial applications that benefit from higher density and cost-effective performance.'
      },
      {
        id: 'caco3-vn',
        name: 'Vietnam CaCO3 Powder',
        image: 'images/vietnam_calcium_carbonate_powder.jpeg',
        description: 'Origin: Vietnam — Balanced grades ideal for broad industrial use, offering moderate brightness and balanced particle distribution. Typical uses: rubber and PVC fillers, general-purpose plastics, paper and agricultural lime where a good cost-performance balance is required.'
      }
    ]
  },
  {
    id: 2,
    name: "Talc",
    rawMaterial: "Talc",
    // Image files for Talc. Please place the actual images in `images/` with these names
  image: "images/indian_talc.jpeg",
  rawMaterialImage: "images/indian_talc_raw.jpg",
  finalPowderImage: "images/indian_talc.jpeg",
    originalDescription: "Talc is a naturally occurring mineral composed primarily of magnesium, silicon and oxygen. Our talc powders are finely milled to produce soft, plate-like particles with excellent lubricity, high brightness and low abrasive properties. They are widely used as fillers and functional additives in paints, plastics, rubber, ceramics, cosmetics and paper, offering improved smoothness, opacity and processing stability.",
    variants: [
      {
        id: 'talc-in',
        name: 'Indian Talc Powder',
        image: 'images/indian_talc.jpeg',
        description: 'Indian talc is known for its high brightness and fine particle size. Our Indian talc variant is well-suited for cosmetic applications, paper coating, and high-end paints where smoothness, opacity and aesthetic finish are critical.'
      },
      {
        id: 'talc-af',
        name: 'Afghan Talc Powder',
        image: 'images/afghan_talc_powder.jpg',
        description: 'Afghan talc offers excellent bulk density and thermal stability, making it a preferred choice for industrial applications such as rubber compounding, plastics fillers and ceramic formulations where functional performance and cost-effectiveness are important.'
      }
    ]
  },
  {
    id: 3,
    name: "Quick Lime",
    rawMaterial: "Quick Lime",
    image: "images/quick_lime_powder.jpeg",
    rawMaterialImage: "images/quick_lime_raw.jpeg",
    finalPowderImage: "images/quick_lime_powder.jpeg",
    originalDescription: "Quick lime (calcium oxide, CaO) is produced by calcining limestone and is a highly reactive material used across industries. Our quick lime grades are produced under controlled calcination to deliver consistent reactivity, purity and particle-size distribution.",
    // Common uses: steel & metallurgy, water & wastewater treatment, flue-gas desulfurization, construction (lime mortars), and chemical manufacturing.
    variants: []
  },
  {
    id: 4,
    name: "Quartz",
    rawMaterial: "Quartz",
    image: "images/snow_quartz_powder.jpeg",
    rawMaterialImage: "images/quartz_raw.jpeg",
    finalPowderImage: "images/snow_quartz_powder.jpeg",
    originalDescription: "Quartz is a hard, crystalline mineral widely used as a functional filler and abrasive. Our milled quartz powders are supplied in several grades (fine to coarse) and colour variants to meet requirements in glass, ceramics, coatings, polymers and construction sectors.",
    variants: [
      {
        id: 'quartz-snow',
        name: 'SNOW',
        image: 'images/snow_quartz_powder.jpeg',
        description: 'Origin: High-purity silica sources. Uses: High-brightness fillers for paints & coatings, specialty glass formulations and high-end ceramics where low iron and high whiteness are required.'
      },
      {
        id: 'quartz-super',
        name: 'SUPER',
        image: 'images/super_quatrz_powder.jpg',
        description: 'Origin: Selected silica quarries. Uses: Premium glass and electronic-grade applications; also used where tight particle-size distribution and low contaminant levels are critical.'
      },
      {
        id: 'quartz-semi',
        name: 'SEMI',
        image: 'images/semi_quartz_powder.jpeg',
        description: 'Origin: Industrial silica deposits. Uses: General-purpose fillers for plastics, rubber and construction materials offering good balance of performance and cost.'
      },
      {
        id: 'quartz-rose',
        name: 'ROSE',
        image: 'images/rose_quartz_powder.jpg',
        description: 'Origin: Naturally coloured silica deposits. Uses: Decorative applications, coloured mortars, terrazzo and specialty architectural finishes where colour and texture matter.'
      },
      {
        id: 'quartz-green',
        name: 'GREEN',
        image: 'images/green_quartz_powder.jpg',
        description: 'Origin: Pigmented or mineral-mix sources. Uses: Specialty coatings, decorative aggregates and applications requiring a green-tinted filler for aesthetic or functional reasons.'
      }
    ]
  },
  {
    id: 5,
    name: "Feldspan",
    rawMaterial: "Feldspan",
    image: "images/powder_calcium_carbonate.jpeg",
    rawMaterialImage: "images/raw_calcium_carbonte.jpeg",
    finalPowderImage: "images/powder_calcium_carbonate.jpeg",
    variants: [
      { id: 'feldspan-soda', name: 'Soda', image: 'images/powder_calcium_carbonate.jpeg' },
      { id: 'feldspan-potash', name: 'Potash', image: 'images/powder_calcium_carbonate.jpeg' }
    ]
  },
  {
    id: 6,
    name: "Tumbled Pebbles",
    rawMaterial: "Pebbles",
    image: "images/powder_calcium_carbonate.jpeg",
    rawMaterialImage: "images/raw_calcium_carbonte.jpeg",
    finalPowderImage: "images/powder_calcium_carbonate.jpeg",
    variants: [
      { id: 'tp-black', name: 'Black', image: 'images/powder_calcium_carbonate.jpeg' },
      { id: 'tp-green', name: 'Green', image: 'images/powder_calcium_carbonate.jpeg' },
      { id: 'tp-white', name: 'White', image: 'images/powder_calcium_carbonate.jpeg' },
      { id: 'tp-quartz-white', name: 'Quatrz White', image: 'images/powder_calcium_carbonate.jpeg' },
      { id: 'tp-red', name: 'Red', image: 'images/powder_calcium_carbonate.jpeg' },
      { id: 'tp-river-mix', name: 'River Mix', image: 'images/powder_calcium_carbonate.jpeg' },
      { id: 'tp-teak', name: 'Teak Wood', image: 'images/powder_calcium_carbonate.jpeg' },
      { id: 'tp-beige', name: 'Beige', image: 'images/powder_calcium_carbonate.jpeg' },
      { id: 'tp-pwhite', name: 'P - White', image: 'images/powder_calcium_carbonate.jpeg' },
      { id: 'tp-zebra', name: 'Zebra Black', image: 'images/powder_calcium_carbonate.jpeg' }
    ]
  },
  {
    id: 7,
    name: "Cabble Stone",
    rawMaterial: "Cabble Stone",
    image: "images/powder_calcium_carbonate.jpeg",
    rawMaterialImage: "images/raw_calcium_carbonte.jpeg",
    finalPowderImage: "images/powder_calcium_carbonate.jpeg",
    variants: []
  },
  {
    id: 8,
    name: "Oxyn Pebles",
    rawMaterial: "Oxyn Pebles",
    image: "images/powder_calcium_carbonate.jpeg",
    rawMaterialImage: "images/raw_calcium_carbonte.jpeg",
    finalPowderImage: "images/powder_calcium_carbonate.jpeg",
    variants: [
      { id: 'oxyn-mix', name: 'Mix', image: 'images/powder_calcium_carbonate.jpeg' },
      { id: 'oxyn-fancy', name: 'Fancy Natural', image: 'images/powder_calcium_carbonate.jpeg' },
      { id: 'oxyn-lemon', name: 'Lemon', image: 'images/powder_calcium_carbonate.jpeg' },
      { id: 'oxyn-yellow', name: 'Yellow', image: 'images/powder_calcium_carbonate.jpeg' },
      { id: 'oxyn-natural-banded', name: 'Natural Banded', image: 'images/powder_calcium_carbonate.jpeg' },
      { id: 'oxyn-parrot', name: 'Parrot Green', image: 'images/powder_calcium_carbonate.jpeg' },
      { id: 'oxyn-black-banded', name: 'Black Banded', image: 'images/powder_calcium_carbonate.jpeg' },
      { id: 'oxyn-red', name: 'Red', image: 'images/powder_calcium_carbonate.jpeg' },
      { id: 'oxyn-blue-jama', name: 'Blue Jama', image: 'images/powder_calcium_carbonate.jpeg' },
      { id: 'oxyn-ruby', name: 'Ruby', image: 'images/powder_calcium_carbonate.jpeg' },
      { id: 'oxyn-white-banded', name: 'White Banded', image: 'images/powder_calcium_carbonate.jpeg' }
    ]
  },
  {
    id: 9,
    name: "Dalomite",
    rawMaterial: "Dalomite",
    image: "images/powder_calcium_carbonate.jpeg",
    rawMaterialImage: "images/raw_calcium_carbonte.jpeg",
    finalPowderImage: "images/powder_calcium_carbonate.jpeg",
    variants: [
      { id: 'dalomite-lumps', name: 'Lumps', image: 'images/powder_calcium_carbonate.jpeg' },
      { id: 'dalomite-powder', name: 'Powder', image: 'images/powder_calcium_carbonate.jpeg' },
      { id: 'dalomite-grains', name: 'Grains', image: 'images/powder_calcium_carbonate.jpeg' }
    ]
  },
  {
    id: 10,
    name: "Aggregates",
    rawMaterial: "Aggregates",
    image: "images/powder_calcium_carbonate.jpeg",
    rawMaterialImage: "images/raw_calcium_carbonte.jpeg",
    finalPowderImage: "images/powder_calcium_carbonate.jpeg",
    variants: [
      { id: 'agg-white', name: 'White', image: 'images/powder_calcium_carbonate.jpeg' },
      { id: 'agg-blood-red', name: 'Blood Red', image: 'images/powder_calcium_carbonate.jpeg' },
      { id: 'agg-cherry-red', name: 'Cherry red', image: 'images/powder_calcium_carbonate.jpeg' },
      { id: 'agg-yellow', name: 'Yellow', image: 'images/powder_calcium_carbonate.jpeg' },
      { id: 'agg-black', name: 'Black', image: 'images/powder_calcium_carbonate.jpeg' },
      { id: 'agg-green', name: 'Green', image: 'images/powder_calcium_carbonate.jpeg' },
      { id: 'agg-chocolate', name: 'Choclate', image: 'images/powder_calcium_carbonate.jpeg' },
      { id: 'agg-pinkwood', name: 'Pinkwood', image: 'images/powder_calcium_carbonate.jpeg' },
      { id: 'agg-light-pink', name: 'Light Pink', image: 'images/powder_calcium_carbonate.jpeg' },
      { id: 'agg-p-white', name: 'P-White', image: 'images/powder_calcium_carbonate.jpeg' },
      { id: 'agg-mix', name: 'Mix', image: 'images/powder_calcium_carbonate.jpeg' },
      { id: 'agg-grey', name: 'Grey', image: 'images/powder_calcium_carbonate.jpeg' },
      { id: 'agg-red', name: 'Red', image: 'images/powder_calcium_carbonate.jpeg' },
      { id: 'agg-beige', name: 'Beige', image: 'images/powder_calcium_carbonate.jpeg' },
      { id: 'agg-dark-pink', name: 'Dark-Pink', image: 'images/powder_calcium_carbonate.jpeg' }
    ]
  },
  {
    id: 11,
    name: "GLASS",
    rawMaterial: "GLASS",
    image: "images/powder_calcium_carbonate.jpeg",
    rawMaterialImage: "images/raw_calcium_carbonte.jpeg",
    finalPowderImage: "images/powder_calcium_carbonate.jpeg",
    variants: []
  },
  {
    id: 12,
    name: "Silica Sand Powder",
    rawMaterial: "Silica Sand",
    image: "images/powder_calcium_carbonate.jpeg",
    rawMaterialImage: "images/raw_calcium_carbonte.jpeg",
    finalPowderImage: "images/powder_calcium_carbonate.jpeg",
    variants: [],
    applications: []
  },
  {
    id: 13,
    name: "Kaolin Powder",
    rawMaterial: "Kaolin Clay",
    image: "images/powder_calcium_carbonate.jpeg",
    rawMaterialImage: "images/raw_calcium_carbonte.jpeg",
    finalPowderImage: "images/powder_calcium_carbonate.jpeg",
    variants: [],
    applications: []
  },
  {
    id: 14,
    name: "Wollastonite Powder",
    rawMaterial: "Wollastonite Ore",
    image: "images/powder_calcium_carbonate.jpeg",
    rawMaterialImage: "images/raw_calcium_carbonte.jpeg",
    finalPowderImage: "images/powder_calcium_carbonate.jpeg",
    variants: [],
    applications: []
  },
  {
    id: 15,
    name: "China Clay Powder",
    rawMaterial: "China Clay",
    image: "images/powder_calcium_carbonate.jpeg",
    rawMaterialImage: "images/raw_calcium_carbonte.jpeg",
    finalPowderImage: "images/powder_calcium_carbonate.jpeg",
    variants: [],
    applications: []
  },
  {
    id: 16,
    name: "Magnetite Powder",
    rawMaterial: "Magnetite Ore",
    image: "images/powder_calcium_carbonate.jpeg",
    rawMaterialImage: "images/raw_calcium_carbonte.jpeg",
    finalPowderImage: "images/powder_calcium_carbonate.jpeg",
    variants: [],
    applications: []
  },
  {
    id: 17,
    name: "Graphite Powder",
    rawMaterial: "Graphite Flakes",
    image: "images/powder_calcium_carbonate.jpeg",
    rawMaterialImage: "images/raw_calcium_carbonte.jpeg",
    finalPowderImage: "images/powder_calcium_carbonate.jpeg",
    variants: [],
    applications: []
  },
  {
    id: 18,
    name: "Perlite Powder",
    rawMaterial: "Perlite Rock",
    image: "images/powder_calcium_carbonate.jpeg",
    rawMaterialImage: "images/raw_calcium_carbonte.jpeg",
    finalPowderImage: "images/powder_calcium_carbonate.jpeg",
    variants: [],
    applications: []
  },
  {
    id: 19,
    name: "Vermiculite Powder",
    rawMaterial: "Vermiculite Ore",
    image: "images/powder_calcium_carbonate.jpeg",
    rawMaterialImage: "images/raw_calcium_carbonte.jpeg",
    finalPowderImage: "images/powder_calcium_carbonate.jpeg",
    variants: [],
    applications: []
  },
  {
    id: 20,
    name: "Nepheline Syenite Powder",
    rawMaterial: "Nepheline Syenite Rock",
    image: "images/powder_calcium_carbonate.jpeg",
    rawMaterialImage: "images/raw_calcium_carbonte.jpeg",
    finalPowderImage: "images/powder_calcium_carbonate.jpeg",
    variants: [],
    applications: []
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
      const filteredProducts = productsData.filter(product => {
        const inName = product.name && product.name.toLowerCase().includes(searchTerm);
        const inRaw = product.rawMaterial && product.rawMaterial.toLowerCase().includes(searchTerm);
        const inApps = (product.applications || []).some(app => app.toLowerCase().includes(searchTerm));
        return inName || inRaw || inApps;
      });
      
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
          (product.applications || []).some(app => app.toLowerCase().includes(filterValue))
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
  
  // Only render available variants here. Product description, applications,
  // processing steps and technical specs have been removed per request.
  const detailsContainer = document.getElementById('modal-product-details');
  // Build details HTML: include originalDescription (if present) and variants
  let detailsHtml = '<div class="grid-1">';

  if (product.originalDescription) {
    detailsHtml += `<div class="product-description"><h4>About this product</h4><p>${product.originalDescription}</p></div>`;
  }

    if (product.variants && product.variants.length > 0) {
    detailsHtml += `
      <div class="product-variants">
        <h4>Available Variants</h4>
        <div class="variants-list">
          ${product.variants.map(v => `
            <div class="variant-item" data-variant-id="${v.id}">
              ${v.image ? `<img src="${v.image}" alt="${v.name}" class="product-thumb-small">` : ''}
              <div class="variant-name">${v.name}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
      // Placeholder for variant-specific description
      detailsHtml += `<div id="variant-description" class="mt-2"></div>`;
  } else {
    detailsHtml += `<p class="mb-0">Contact us for product details and specifications.</p>`;
  }

  detailsHtml += '</div>';
  detailsContainer.innerHTML = detailsHtml;

  // Populate the product images area (if images provided) - only Raw Material & Final Powder
  const imageItems = document.querySelectorAll('.product-image-item');
  if (imageItems && imageItems.length >= 2) {
    if (product.rawMaterialImage) {
      imageItems[0].innerHTML = `
        <div class="product-image-inner"><img src="${product.rawMaterialImage}" alt="Raw Material"></div>
        <small>Raw Material</small>
      `;
    }
    if (product.finalPowderImage) {
      // Final powder goes into the second tile
      imageItems[1].innerHTML = `
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
          // Update variant-specific description if provided
          const variantDescEl = document.getElementById('variant-description');
          if (variantDescEl) {
            if (variant.description) {
              variantDescEl.innerHTML = `<h4>${variant.name}</h4><p>${variant.description}</p>`;
            } else {
              variantDescEl.innerHTML = '';
            }
          }

          // If variant has its own image, swap the Final Powder tile to show it
          const imageItems = document.querySelectorAll('.product-image-item');
          if (imageItems && imageItems.length >= 2) {
            if (variant.image) {
              imageItems[1].innerHTML = `
                <div class="product-image-inner"><img src="${variant.image}" alt="Final Powder"></div>
                <small>Final Powder</small>
              `;
            } else if (product.finalPowderImage) {
              imageItems[1].innerHTML = `
                <div class="product-image-inner"><img src="${product.finalPowderImage}" alt="Final Powder"></div>
                <small>Final Powder</small>
              `;
            }
          }
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

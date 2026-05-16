// Sample properties data
const properties = [
    {
        id: 1,
        title: "Modern Luxury Villa",
        location: "Downtown District",
        price: "$1,200,000",
        beds: 4,
        baths: 3,
        sqft: "3,500 sq ft",
        icon: "🏠"
    },
    {
        id: 2,
        title: "Cozy Apartment",
        location: "Riverside Area",
        price: "$450,000",
        beds: 2,
        baths: 2,
        sqft: "1,200 sq ft",
        icon: "🏢"
    },
    {
        id: 3,
        title: "Beachfront Penthouse",
        location: "Coastal Region",
        price: "$2,500,000",
        beds: 5,
        baths: 4,
        sqft: "5,000 sq ft",
        icon: "🌴"
    },
    {
        id: 4,
        title: "Family Townhouse",
        location: "Suburban neighborhood",
        price: "$650,000",
        beds: 3,
        baths: 2.5,
        sqft: "2,200 sq ft",
        icon: "🏡"
    },
    {
        id: 5,
        title: "Commercial Office Space",
        location: "Business District",
        price: "$850,000",
        beds: 0,
        baths: 2,
        sqft: "3,000 sq ft",
        icon: "🏗️"
    },
    {
        id: 6,
        title: "Elegant Studio",
        location: "City Center",
        price: "$280,000",
        beds: 1,
        baths: 1,
        sqft: "650 sq ft",
        icon: "🎨"
    }
];

// DOM Elements
const propertiesGrid = document.getElementById('propertiesGrid');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const searchInput = document.getElementById('searchInput');
const contactForm = document.getElementById('contactForm');
const ctaButton = document.querySelector('.cta-button');
const navLinks = document.querySelectorAll('.nav-link');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProperties(properties);
    setupEventListeners();
});

// Render properties
function renderProperties(props) {
    propertiesGrid.innerHTML = '';
    props.forEach((property, index) => {
        const card = document.createElement('div');
        card.className = 'property-card';
        card.style.animationDelay = `${index * 0.1}s`;
        card.innerHTML = `
            <div class="property-image">
                ${property.icon}
            </div>
            <div class="property-info">
                <h3 class="property-title">${property.title}</h3>
                <div class="property-location">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${property.location}</span>
                </div>
                <div class="property-details">
                    <div class="property-detail">
                        <i class="fas fa-bed"></i>
                        <span>${property.beds} Beds</span>
                    </div>
                    <div class="property-detail">
                        <i class="fas fa-bath"></i>
                        <span>${property.baths} Baths</span>
                    </div>
                    <div class="property-detail">
                        <i class="fas fa-ruler-combined"></i>
                        <span>${property.sqft}</span>
                    </div>
                </div>
                <div class="property-price">${property.price}</div>
                <button class="property-btn" onclick="viewProperty(${property.id})">View Details</button>
            </div>
        `;
        propertiesGrid.appendChild(card);
    });
}

// Setup event listeners
function setupEventListeners() {
    // Hamburger menu
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Search functionality
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filtered = properties.filter(prop => 
            prop.title.toLowerCase().includes(searchTerm) ||
            prop.location.toLowerCase().includes(searchTerm) ||
            prop.price.toLowerCase().includes(searchTerm)
        );
        renderProperties(filtered);
    });

    // CTA button scroll
    ctaButton.addEventListener('click', () => {
        document.getElementById('properties').scrollIntoView({ behavior: 'smooth' });
    });

    // Contact form
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will contact you soon.');
        contactForm.reset();
    });

    // Counter animation
    observeCounters();
}

// View property details
function viewProperty(propertyId) {
    const property = properties.find(p => p.id === propertyId);
    alert(`Property Details:\n\nTitle: ${property.title}\nLocation: ${property.location}\nPrice: ${property.price}\n\nContact us for more information!`);
}

// Observe and animate counters
function observeCounters() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                animateCounter(entry.target);
                entry.target.classList.add('counted');
            }
        });
    });

    document.querySelectorAll('.stat-card').forEach(card => {
        observer.observe(card);
    });
}

// Animate counter numbers
function animateCounter(element) {
    const target = parseInt(element.dataset.target) || 0;
    const display = element.querySelector('.stat-number');
    const increment = target / 50;
    let current = 0;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            display.textContent = target + (display.textContent.includes('B') ? 'B+' : '+');
            clearInterval(timer);
        } else {
            display.textContent = Math.floor(current) + '+';
        }
    }, 30);
}

// Smooth scroll for navigation
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = 'var(--shadow)';
    }
});

// Add dynamic content loading (simulated)
function loadMoreProperties() {
    console.log('Loading more properties...');
    // Add more properties logic here
}
import { gsap } from 'gsap';
import confetti from 'canvas-confetti';

// --- DATA SOURCE ---
// --- DATA SOURCE ---
const DESTINATIONS = {
  domestic: [
    { id: 'goa', name: 'Goa', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80', stays: '120+ Stays', reviews: '4.9 ★ (1.2k)', price: 37500 },
    { id: 'kashmir', name: 'Kashmir', img: 'https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?auto=format&fit=crop&w=600&q=80', stays: '45+ Stays', reviews: '4.8 ★ (850)', price: 54000 },
    { id: 'kerala', name: 'Kerala', img: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=600&q=80', stays: '80+ Stays', reviews: '4.7 ★ (980)', price: 41500 },
    { id: 'andaman', name: 'Andaman Islands', img: 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&w=600&q=80', stays: '35+ Stays', reviews: '4.9 ★ (420)', price: 66500 },
    { id: 'rajasthan', name: 'Rajasthan', img: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=600&q=80', stays: '90+ Stays', reviews: '4.8 ★ (1.1k)', price: 50000 },
    { id: 'ladakh', name: 'Leh Ladakh', img: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=600&q=80', stays: '25+ Stays', reviews: '4.9 ★ (640)', price: 58000 }
  ],
  international: [
    { id: 'dubai', name: 'Dubai', img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80', stays: '250+ Stays', reviews: '4.9 ★ (2.3k)', price: 100000 },
    { id: 'bali', name: 'Bali', img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80', stays: '180+ Stays', reviews: '4.8 ★ (3.1k)', price: 66500 },
    { id: 'thailand', name: 'Thailand', img: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=600&q=80', stays: '140+ Stays', reviews: '4.7 ★ (1.9k)', price: 45000 },
    { id: 'singapore', name: 'Singapore', img: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=600&q=80', stays: '95+ Stays', reviews: '4.8 ★ (1.5k)', price: 79000 },
    { id: 'maldives', name: 'Maldives', img: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=600&q=80', stays: '60+ Stays', reviews: '5.0 ★ (4.2k)', price: 200000 },
    { id: 'vietnam', name: 'Vietnam', img: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=600&q=80', stays: '75+ Stays', reviews: '4.8 ★ (1.1k)', price: 50000 }
  ]
};

const PACKAGES = [
  {
    id: 'pkg-1',
    name: 'Romantic Maldives Water Villa Escape',
    category: 'honeymoon',
    duration: '5 Days / 4 Nights',
    price: 375000,
    rating: '5.0',
    img: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=600&q=80',
    highlights: ['Overwater Bungalow', 'Private Yacht Tour', 'Spa Retreat'],
    visa: 'On Arrival (Free)',
    accommodation: '5★ Resort Villa'
  },
  {
    id: 'pkg-2',
    name: 'Royal Rajasthan Heritage Journey',
    category: 'family',
    duration: '7 Days / 6 Nights',
    price: 180000,
    rating: '4.8',
    img: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=600&q=80',
    highlights: ['Palace Stays', 'Chauffeur Driven', 'Desert Safari'],
    visa: 'Not Required',
    accommodation: 'Heritage Palace Hotels'
  },
  {
    id: 'pkg-3',
    name: 'Leh Ladakh Motorcycle & Valley Adventure',
    category: 'adventure',
    duration: '8 Days / 7 Nights',
    price: 125000,
    rating: '4.9',
    img: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=600&q=80',
    highlights: ['Royal Enfield Rent', 'Oxygen Assist', 'Campings'],
    visa: 'Inner Line Permit Included',
    accommodation: 'Boutique Camps & Hotels'
  },
  {
    id: 'pkg-4',
    name: 'Elite Dubai Desert & Skyline Retreat',
    category: 'luxury',
    duration: '6 Days / 5 Nights',
    price: 450000,
    rating: '4.9',
    img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80',
    highlights: ['Helicopter Ride', 'VIP Burj Access', 'Michelin Diners'],
    visa: 'Pre-Approved Visa',
    accommodation: 'Burj Al Arab & Armani Hotel'
  },
  {
    id: 'pkg-5',
    name: 'Private Pool Villa Escape in Ubud',
    category: 'honeymoon',
    duration: '6 Days / 5 Nights',
    price: 230000,
    rating: '4.8',
    img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80',
    highlights: ['Private Canopy Villa', 'Floating Breakfast', 'Tirta Holy Spring'],
    visa: 'VoA Available',
    accommodation: 'Ubud Hanging Gardens'
  },
  {
    id: 'pkg-6',
    name: 'European Alps & French Riviera Incentive',
    category: 'corporate',
    duration: '10 Days / 9 Nights',
    price: 700000,
    rating: '4.9',
    img: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=600&q=80',
    highlights: ['Swiss Alpine Passes', 'Private Yacht Cruise', 'Charter Flights'],
    visa: 'Schengen Visa Booking Assist',
    accommodation: 'Four Seasons Geneva'
  },
  {
    id: 'pkg-maharashtra-jyotirlinga',
    name: '3 Jyotirlinga in Maharashtra Tour',
    category: 'family',
    duration: '4 Days / 3 Nights',
    price: 24000,
    rating: '4.8',
    img: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=600&q=80',
    highlights: ['Trimbakeshwar', 'Bhimashankar', 'Grishneshwar'],
    visa: 'Not Required',
    accommodation: 'Premium 3★ Hotels',
    pdf: '/packages/3 JYOTIRLINGA IN MAHARASHTRA TOUR PACKAGE BHUDARSHAN.pdf'
  },
  {
    id: 'pkg-delhi-haridwar-rishikesh',
    name: 'Delhi Haridwar Rishikesh Tour',
    category: 'family',
    duration: '3 Days / 2 Nights',
    price: 18000,
    rating: '4.7',
    img: 'https://images.unsplash.com/photo-1602643163983-ed0babc39797?auto=format&fit=crop&w=600&q=80',
    highlights: ['Ganga Aarti', 'Lakshman Jhula', 'Har Ki Pauri'],
    visa: 'Not Required',
    accommodation: 'Deluxe Cozy Hotels',
    pdf: '/packages/DELHI HARIDWAR RISHIKESH TOUR PACKAGE 3 DAYS BHUDARSHAN.pdf'
  },
  {
    id: 'pkg-goa-beach',
    name: 'Goa Beach Vacation Tour',
    category: 'honeymoon',
    duration: '4 Days / 3 Nights',
    price: 29000,
    rating: '4.9',
    img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
    highlights: ['North Goa Beaches', 'South Goa Churches', 'Mandovi River Cruise'],
    visa: 'Not Required',
    accommodation: '4★ Beachfront Resort',
    pdf: '/packages/GOA TOUR PACKAGE 03 NIGHTS  04DAYS BHUDARSHAN.pdf'
  },
  {
    id: 'pkg-guwahati-kamakhya',
    name: 'Guwahati Kamakhya Shaktipeeth Tour',
    category: 'family',
    duration: '3 Days / 2 Nights',
    price: 20000,
    rating: '4.8',
    img: 'https://images.unsplash.com/photo-1620075267033-09d12ec75b40?auto=format&fit=crop&w=600&q=80',
    highlights: ['Kamakhya Temple', 'Brahmaputra Cruise', 'Umananda Temple'],
    visa: 'Not Required',
    accommodation: 'Premium Heritage Stay',
    pdf: '/packages/GUWAHATI- KAMAKHYA SHAKTIPEETH 02NIGHTS 03DAYS  BHUDARSHAN.pdf'
  },
  {
    id: 'pkg-haridwar-rishikesh-4d',
    name: 'Haridwar Rishikesh Spiritual Experience',
    category: 'family',
    duration: '4 Days / 3 Nights',
    price: 23000,
    rating: '4.8',
    img: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=600&q=80',
    highlights: ['Neelkanth Temple', 'Yoga & Meditation', 'Rishikesh Rafting'],
    visa: 'Not Required',
    accommodation: 'Riverside Deluxe Resort',
    pdf: '/packages/HARIDWAR RISHIKESH TOUR PACKAGE TOUR PACKAGE 03NIGHTS  04DAYS BHUDARSHAN.pdf'
  },
  {
    id: 'pkg-jaisalmer-desert',
    name: 'Golden City Jaisalmer Desert Tour',
    category: 'adventure',
    duration: '3 Days / 2 Nights',
    price: 24000,
    rating: '4.9',
    img: 'https://images.unsplash.com/photo-1602643163983-ed0babc39797?auto=format&fit=crop&w=600&q=80',
    highlights: ['Sam Sand Dunes', 'Desert Camping', 'Camel Safari'],
    visa: 'Not Required',
    accommodation: 'Luxury Desert Camp',
    pdf: '/packages/JAISALMER TOUR 02 NIGHTS 03 DAYS PACKAGE  BHUDARSHAN.pdf'
  },
  {
    id: 'pkg-kerala-munnar',
    name: 'Kerala Hills & Backwaters Tour',
    category: 'honeymoon',
    duration: '6 Days / 5 Nights',
    price: 49000,
    rating: '4.9',
    img: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=600&q=80',
    highlights: ['Munnar Tea Gardens', 'Alleppey Houseboat', 'Kochi Fort'],
    visa: 'Not Required',
    accommodation: 'Luxury Houseboat & 4★ Resort',
    pdf: '/packages/KERALA  KOCHI, MUNNAR, ALLEPPEY TOUR PACKAGE 05NIGHTS  06DAYS BHUDARSHAN.pdf'
  },
  {
    id: 'pkg-maihar-chitrakoot',
    name: 'Maihar Chitrakoot Heritage Pilgrimage',
    category: 'family',
    duration: '3 Days / 2 Nights',
    price: 17000,
    rating: '4.7',
    img: 'https://images.unsplash.com/photo-1542856391-010fb87dcfed?auto=format&fit=crop&w=600&q=80',
    highlights: ['Sharda Devi Temple', 'Gupt Godavari', 'Ramghat Aarti'],
    visa: 'Not Required',
    accommodation: 'Comfort Cozy Hotel',
    pdf: '/packages/MAIHAR CHITRAKOOT TOUR PACKAGE 02NIGHTS 03DAYS  BHUDARSHAN.pdf'
  },
  {
    id: 'pkg-manali-snow',
    name: 'Scenic Manali Solang Valley Tour',
    category: 'adventure',
    duration: '6 Days / 5 Nights',
    price: 32000,
    rating: '4.8',
    img: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=600&q=80',
    highlights: ['Solang Valley Sports', 'Rohtang Pass Snow', 'Hadimba Temple'],
    visa: 'Not Required',
    accommodation: 'Himalayan View Resort',
    pdf: '/packages/MANALI TOUR PACKAGE TOUR PACKAGE 05NIGHTS  06DAYS BHUDARSHAN.pdf'
  },
  {
    id: 'pkg-nepal-kathmandu',
    name: 'Kathmandu Sacred Temple Deluxe Tour',
    category: 'luxury',
    duration: '4 Days / 3 Nights',
    price: 40000,
    rating: '4.8',
    img: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80',
    highlights: ['Pashupatinath Temple', 'Boudhanath Stupa', 'Durbar Square'],
    visa: 'Free Entry / Visa Free',
    accommodation: '4★ Deluxe Heritage Hotel',
    pdf: '/packages/NEPAL KATHMANDU TEMPLE TOUR 3N 4D DELUXE PACKAGE  BHUDARSHAN.pdf'
  },
  {
    id: 'pkg-varanasi-ayodhya',
    name: 'Holy Ganges & Ayodhya Spiritual Yatra',
    category: 'family',
    duration: '7 Days / 6 Nights',
    price: 54000,
    rating: '4.9',
    img: 'https://images.unsplash.com/photo-1561361058-c24cecae35ca?auto=format&fit=crop&w=600&q=80',
    highlights: ['Kashi Vishwanath', 'Ayodhya Ram Mandir', 'Triveni Sangam'],
    visa: 'Not Required',
    accommodation: '3★/4★ Boutique Heritage Stays',
    pdf: '/packages/VARANASI,VINDHYACHAL,CHITRAKOOT, PRAYAGRAJ AND AYODHYA TOUR PACKAGE 06 NIGHT  07 DAYS BHUDARSHAN.pdf'
  }
];

const SERVICES = [
  { title: 'Visa Assistance', icon: 'stamp', desc: 'Fast, secure visa processing for over 50 countries with dedicated specialists.' },
  { title: 'Flight Booking', icon: 'plane-takeoff', desc: 'Exclusive flight arrangements, private charter access, and business upgrades.' },
  { title: 'Hotel Booking', icon: 'hotel', desc: 'Direct booking privileges with the world\'s leading 5-star hotel chains.' },
  { title: 'Corporate Tours', icon: 'users', desc: 'Seamlessly executed incentive group travel and premium conference operations.' },
  { title: 'Cruise Booking', icon: 'ship', desc: 'Book private yacht excursions, luxury river cruises, and premium liner cabins.' },
  { title: 'Passport Help', icon: 'scroll', desc: 'Expedited processing, forms documentation support, and renewals counseling.' },
  { title: 'Travel Insurance', icon: 'shield-check', desc: 'Comprehensive global insurance policies with custom luxury trip protection.' },
  { title: 'Cab Booking', icon: 'car', desc: 'Chauffeur-driven Mercedes and Rolls-Royce airport transfers and excursions.' }
];

const EXPERIENCES = [
  { title: 'Scuba Diving', label: 'Andaman & Maldives', img: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&w=600&q=80', desc: 'Swim through vibrant corals with certified PADI divemasters.' },
  { title: 'Skydiving', label: 'Dubai Jumeirah', img: 'https://images.unsplash.com/photos/white-and-red-airplane-in-mid-air-during-daytime-H22w-tq0SeQ', desc: 'Freefall over the iconic Palm Jumeirah in a breathtaking leap.' },
  { title: 'Northern Lights Glamping', label: 'Norway & Iceland', img: 'https://images.unsplash.com/photo-1483168527879-c66136b56105?auto=format&fit=crop&w=600&q=80', desc: 'Watch the aurora dance from your private, heated geodesic glass dome.' }
];

const TESTIMONIALS = [
  { name: 'Johnathan Miller', role: 'CEO, Nexus Corp', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80', rating: 5, text: 'NealVacation planned our global corporate retreat in Paris. The logistics were flawless, luxury accommodations were out of this world, and their 24/7 concierge took care of every request instantly!' },
  { name: 'Sophia & Liam', role: 'Honeymooners', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80', rating: 5, text: 'Our honeymoon in the Maldives was pure magic. The private water villa, candlelight beach dinner, and airport transfers arranged by NealVacation made us feel like royalty. Thank you!' },
  { name: 'Devendra Sharma', role: 'Family Traveler', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&q=80', rating: 5, text: 'The Rajasthan heritage package exceeded all our expectations. Staying at the palaces made us feel so connected to royalty. Incredible visa support, cab services, and guided tour layouts.' }
];

const GALLERY = [
  { img: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80', caption: 'Road Trip in Canyonlands, USA' },
  { img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80', caption: 'Sunset Beaches of Bora Bora' },
  { img: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=600&q=80', caption: 'Lake Sailing in Switzerland' },
  { img: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=600&q=80', caption: 'Blue Domes of Santorini, Greece' },
  { img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80', caption: 'Eiffel Tower, Paris' },
  { img: 'https://images.unsplash.com/photo-1542044896530-05d85be9b11a?auto=format&fit=crop&w=600&q=80', caption: 'Bamboo Forests of Kyoto, Japan' }
];

// --- APP STATE ---
let activeTheme = 'light';
let activeDestinationTab = 'domestic';
let selectedComparePackages = [];
let wishlist = JSON.parse(localStorage.getItem('nealvacation_wishlist') || '[]');
let userContactInfo = JSON.parse(localStorage.getItem('nealvacation_contact_info') || 'null');
let aiChatState = {
  step: 'collect_days',
  days: 5,
  landscape: null,
  climate: null
};
let liveChatState = {
  waitingForPhone: false
};

// Currency State & Conversions
let currentCurrency = localStorage.getItem('nealvacation_currency') || 'INR';

const EXCHANGE_RATES_BASE_INR = {
  INR: 1,
  USD: 0.012,
  EUR: 0.011,
  AED: 0.044
};

const CURRENCY_SYMBOLS = {
  INR: '₹',
  USD: '$',
  EUR: '€',
  AED: 'د.إ '
};

function formatPrice(priceInINR, currency) {
  const rate = EXCHANGE_RATES_BASE_INR[currency] || 1;
  const converted = Math.round(priceInINR * rate);
  return `${CURRENCY_SYMBOLS[currency] || ''}${converted.toLocaleString()}`;
}

// --- INIT APP ---
window.addEventListener('DOMContentLoaded', () => {
  initLoadingScreen();
  initTheme();
  renderDestinations();
  renderPackages();
  renderServices();
  renderExperiences();
  renderTestimonials();
  renderGallery();
  initWidgets();
  initScrollAnimations();
  initCursorGlow();
  initListeners();
});

// --- LOADING SCREEN ---
function initLoadingScreen() {
  const bar = document.getElementById('loader-progress');
  const screen = document.getElementById('loading-screen');
  let width = 0;

  const interval = setInterval(() => {
    width += Math.floor(Math.random() * 25) + 10;
    if (width >= 100) {
      width = 100;
      clearInterval(interval);
      setTimeout(() => {
        screen.style.opacity = '0';
        screen.style.visibility = 'hidden';
        // Trigger initial header/hero entry animations
        gsap.from('#header-nav', { y: -50, opacity: 0, duration: 1, ease: 'power4.out' });
        gsap.from('#hero-title', { y: 60, opacity: 0, duration: 1.2, delay: 0.2, ease: 'power4.out' });
        gsap.from('#hero-subtitle', { y: 40, opacity: 0, duration: 1.2, delay: 0.4, ease: 'power4.out' });
        gsap.from('#main-search-bar', { y: 50, opacity: 0, duration: 1.2, delay: 0.6, ease: 'power4.out' });
      }, 500);
    }
    bar.style.width = width + '%';
  }, 120);
}

// --- THEME MANAGEMENT ---
function initTheme() {
  const savedTheme = localStorage.getItem('nealvacation_theme') || 'light';
  setTheme(savedTheme);
}

function setTheme(theme) {
  activeTheme = theme;
  document.body.setAttribute('data-theme', theme);
  localStorage.setItem('nealvacation_theme', theme);
  const icon = document.querySelector('#theme-toggle-btn i');
  if (icon) {
    if (theme === 'dark') {
      icon.setAttribute('data-lucide', 'sun');
    } else {
      icon.setAttribute('data-lucide', 'moon');
    }
    if (window.lucide) window.lucide.createIcons();
  }
}

// --- CURSOR GLOW EFFECT ---
function initCursorGlow() {
  const glow = document.getElementById('cursor-glow');
  window.addEventListener('mousemove', (e) => {
    gsap.to(glow, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.4,
      ease: 'power2.out'
    });
  });
}

// --- RENDER DYNAMIC COMPONENTS ---

function renderDestinations() {
  const container = document.getElementById('destinations-container');
  if (!container) return;

  const list = DESTINATIONS[activeDestinationTab];
  container.innerHTML = '';

  list.forEach((dest, index) => {
    const card = document.createElement('div');
    card.className = 'destination-card';
    card.setAttribute('data-dest-id', dest.id);
    card.innerHTML = `
      <img src="${dest.img}" alt="${dest.name}" loading="lazy">
      <div class="dest-gradient"></div>
      <div class="dest-info">
        <h3 class="dest-title">${dest.name}</h3>
        <div class="dest-details">
          <span><i data-lucide="hotel" style="width:14px;"></i> ${dest.stays}</span>
          <span><i data-lucide="star" style="width:14px; fill:var(--accent-gold); color:var(--accent-gold);"></i> ${dest.reviews}</span>
        </div>
        <div class="dest-details">
          <span style="font-weight: 700; color: var(--accent-gold);">From ${formatPrice(dest.price, currentCurrency)}/day</span>
        </div>
        <button class="btn btn-primary dest-book-btn" style="padding: 0.5rem 1.2rem; font-size: 0.85rem;">
          <i data-lucide="calendar"></i> Book Now
        </button>
      </div>
    `;
    container.appendChild(card);
  });

  if (window.lucide) window.lucide.createIcons();
}

function renderPackages() {
  const container = document.getElementById('packages-container');
  if (!container) return;

  container.innerHTML = '';

  PACKAGES.forEach(pkg => {
    const isWished = wishlist.includes(pkg.id);
    const isCompared = selectedComparePackages.some(p => p.id === pkg.id);

    const card = document.createElement('div');
    card.className = 'package-card';
    card.setAttribute('data-category', pkg.category);
    card.innerHTML = `
      <div class="package-img-wrap">
        <img src="${pkg.img}" alt="${pkg.name}" loading="lazy">
        <div class="package-badge">${pkg.category}</div>
        <button class="wishlist-btn ${isWished ? 'active' : ''}" data-pkg-id="${pkg.id}" aria-label="Add to wishlist">
          <i data-lucide="heart" style="${isWished ? 'fill:currentColor;' : ''}"></i>
        </button>
      </div>
      <div class="package-content">
        <div class="package-meta">
          <span><i data-lucide="clock" style="width: 14px;"></i> ${pkg.duration}</span>
          <span><i data-lucide="star" style="width: 14px; fill: var(--accent-gold); color: var(--accent-gold);"></i> ${pkg.rating} (Review)</span>
        </div>
        <h3 class="package-title">${pkg.name}</h3>
        <div class="package-highlights">
          ${pkg.highlights.map(h => `<span class="highlight-tag">${h}</span>`).join('')}
        </div>
        <div class="package-footer">
          <div class="package-price">
            <span class="price-label">Per Traveler</span>
            <span class="price-val">${formatPrice(pkg.price, currentCurrency)}</span>
          </div>
          <div style="display: flex; gap: 0.4rem; align-items: center;">
            ${pkg.pdf ? `<a href="${pkg.pdf}" target="_blank" class="btn btn-outline" style="padding: 0.6rem 1rem; font-size: 0.85rem;" title="Download PDF Brochure"><i data-lucide="file-text"></i> PDF</a>` : ''}
            <button class="btn btn-primary pkg-book-btn" data-pkg-name="${pkg.name}" style="padding: 0.6rem 1.2rem; font-size: 0.9rem;">Book Now</button>
          </div>
        </div>
        <label class="compare-checkbox-label">
          <input type="checkbox" class="compare-checkbox" data-pkg-id="${pkg.id}" ${isCompared ? 'checked' : ''}> Compare Package
        </label>
      </div>
    `;
    container.appendChild(card);
  });

  if (window.lucide) window.lucide.createIcons();
  setupPackageCardEvents();
}

function renderServices() {
  const container = document.getElementById('services-container');
  if (!container) return;

  container.innerHTML = '';

  SERVICES.forEach(serv => {
    const card = document.createElement('div');
    card.className = 'service-card glass-panel';
    card.innerHTML = `
      <div class="service-icon">
        <i data-lucide="${serv.icon}"></i>
      </div>
      <h3 class="service-title">${serv.title}</h3>
      <p class="service-desc">${serv.desc}</p>
    `;
    container.appendChild(card);
  });

  if (window.lucide) window.lucide.createIcons();
}

function renderExperiences() {
  const container = document.getElementById('experiences-container');
  if (!container) return;

  container.innerHTML = '';

  EXPERIENCES.forEach((exp, idx) => {
    const card = document.createElement('div');
    // Span the first experience to 2 columns for a luxurious masonry feel
    card.className = `exp-card ${idx === 0 ? 'span-2' : ''}`;
    card.innerHTML = `
      <img src="${exp.img}" alt="${exp.title}" loading="lazy">
      <div class="exp-overlay"></div>
      <div class="exp-content">
        <span class="exp-label">${exp.label}</span>
        <h3 class="exp-title">${exp.title}</h3>
        <p class="exp-desc">${exp.desc}</p>
      </div>
    `;
    container.appendChild(card);
  });
}

let activeTestimonialIndex = 0;
function renderTestimonials() {
  const slider = document.getElementById('testimonials-slider');
  const dots = document.getElementById('testimonials-dots');
  if (!slider || !dots) return;

  slider.innerHTML = '';
  dots.innerHTML = '';

  TESTIMONIALS.forEach((test, idx) => {
    const slide = document.createElement('div');
    slide.className = `testimonial-slide ${idx === 0 ? 'active' : ''}`;
    slide.setAttribute('data-slide-index', idx);

    let starsHtml = '';
    for (let s = 0; s < test.rating; s++) {
      starsHtml += '<i data-lucide="star" style="width:18px; fill:currentColor;"></i>';
    }

    slide.innerHTML = `
      <div class="testimonial-card glass-panel">
        <div class="test-stars">${starsHtml}</div>
        <p class="test-content">"${test.text}"</p>
        <div class="test-user">
          <img class="test-avatar" src="${test.avatar}" alt="${test.name}">
          <div class="test-user-info">
            <h4 class="test-name">${test.name}</h4>
            <span class="test-role">${test.role}</span>
          </div>
        </div>
      </div>
    `;
    slider.appendChild(slide);

    // Dot button
    const dot = document.createElement('button');
    dot.className = `slider-dot ${idx === 0 ? 'active' : ''}`;
    dot.setAttribute('data-dot-index', idx);
    dots.appendChild(dot);
  });

  if (window.lucide) window.lucide.createIcons();
  setupTestimonialSlider();
}

function renderGallery() {
  const container = document.getElementById('gallery-container');
  if (!container) return;

  container.innerHTML = '';

  GALLERY.forEach(img => {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.innerHTML = `
      <img src="${img.img}" alt="${img.caption}" loading="lazy">
      <div class="gallery-overlay">
        <div class="gallery-icon-wrap">
          <i data-lucide="maximize-2" style="width:28px; height:28px;"></i>
          <span style="font-family: var(--font-outfit); font-weight:700;">${img.caption}</span>
        </div>
      </div>
    `;

    // Lightbox hook
    item.addEventListener('click', () => {
      openLightbox(img.img, img.caption);
    });

    container.appendChild(item);
  });

  if (window.lucide) window.lucide.createIcons();
}

// --- WISH & COMPARE STATE CONTROLLERS ---

function setupPackageCardEvents() {
  // Wishlist Toggles
  document.querySelectorAll('.wishlist-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-pkg-id');
      if (wishlist.includes(id)) {
        wishlist = wishlist.filter(x => x !== id);
        btn.classList.remove('active');
        btn.querySelector('i').style.fill = 'none';
        showToast('Removed from wishlist');
      } else {
        wishlist.push(id);
        btn.classList.add('active');
        btn.querySelector('i').style.fill = 'currentColor';
        showToast('Added to wishlist!', true);
      }
      localStorage.setItem('nealvacation_wishlist', JSON.stringify(wishlist));
    });
  });

  // Compare Checkboxes
  document.querySelectorAll('.compare-checkbox').forEach(cb => {
    cb.addEventListener('change', (e) => {
      const id = cb.getAttribute('data-pkg-id');
      const pkg = PACKAGES.find(p => p.id === id);

      if (cb.checked) {
        if (selectedComparePackages.length >= 3) {
          cb.checked = false;
          showToast('You can compare maximum 3 packages!');
          return;
        }
        selectedComparePackages.push(pkg);
      } else {
        selectedComparePackages = selectedComparePackages.filter(p => p.id !== id);
      }
      updateCompareDrawer();
    });
  });

  // Package booking triggers consultation form fill
  document.querySelectorAll('.pkg-book-btn, .dest-book-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const pkgName = btn.getAttribute('data-pkg-name');
      const destInput = document.getElementById('inquiry-destination');
      if (destInput) {
        destInput.value = pkgName || btn.closest('.destination-card')?.querySelector('.dest-title').innerText || '';
        document.getElementById('inquiry').scrollIntoView({ behavior: 'smooth' });
        showToast('Details filled. Complete the inquiry form.', true);
      }
    });
  });
}

function updateCompareDrawer() {
  const drawer = document.getElementById('compare-bottom-drawer');
  const container = document.getElementById('compare-bubbles-container');
  if (!drawer || !container) return;

  if (selectedComparePackages.length === 0) {
    drawer.classList.remove('open');
    return;
  }

  container.innerHTML = '';
  selectedComparePackages.forEach(pkg => {
    const bubble = document.createElement('div');
    bubble.className = 'compare-item-bubble';
    bubble.innerHTML = `
      <span>${pkg.name.split(' ').slice(0, 3).join(' ')}...</span>
      <button class="compare-item-remove" data-pkg-id="${pkg.id}"><i data-lucide="x" style="width:12px; height:12px;"></i></button>
    `;

    bubble.querySelector('.compare-item-remove').addEventListener('click', () => {
      selectedComparePackages = selectedComparePackages.filter(p => p.id !== pkg.id);
      // Uncheck original checkbox
      const originalCb = document.querySelector(`.compare-checkbox[data-pkg-id="${pkg.id}"]`);
      if (originalCb) originalCb.checked = false;
      updateCompareDrawer();
    });

    container.appendChild(bubble);
  });

  if (window.lucide) window.lucide.createIcons();
  drawer.classList.add('open');
}

// --- TESTIMONIAL SLIDER CONTEXT ---
function setupTestimonialSlider() {
  const slides = document.querySelectorAll('.testimonial-slide');
  const dots = document.querySelectorAll('.slider-dot');

  function showSlide(index) {
    slides.forEach((slide, idx) => {
      if (idx === index) {
        slide.classList.add('active');
        dots[idx].classList.add('active');
      } else {
        slide.classList.remove('active');
        dots[idx].classList.remove('active');
      }
    });
    activeTestimonialIndex = index;
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const target = parseInt(dot.getAttribute('data-dot-index'));
      showSlide(target);
    });
  });

  // Auto slide loop (every 7 seconds)
  setInterval(() => {
    let next = activeTestimonialIndex + 1;
    if (next >= slides.length) next = 0;
    showSlide(next);
  }, 7000);
}

// --- LIGHTBOX MODAL ---
function openLightbox(imgUrl, caption) {
  const modal = document.getElementById('lightbox-modal');
  const img = document.getElementById('lightbox-image');
  const cap = document.getElementById('lightbox-caption');

  if (!modal || !img || !cap) return;

  img.src = imgUrl;
  cap.innerText = caption;
  modal.classList.add('open');
}

// --- TRAVEL SERVICES / WIDGETS FUNCTIONALITY ---

const WEATHER_DATA = {
  goa: { temp: '30°C', desc: 'Sunny & Warm', icon: 'sun' },
  kashmir: { temp: '8°C', desc: 'Snowy & Chilly', icon: 'snowflake' },
  dubai: { temp: '38°C', desc: 'Clear Skies', icon: 'sun' },
  paris: { temp: '16°C', desc: 'Rain Showers', icon: 'cloud-rain' },
  japan: { temp: '22°C', desc: 'Pleasant Winds', icon: 'wind' },
  maldives: { temp: '29°C', desc: 'Tropical Breeze', icon: 'cloud-sun' }
};

const EXCHANGE_RATES = {
  USD: { INR: 83.4, EUR: 0.92, AED: 3.67, USD: 1 },
  INR: { USD: 0.012, EUR: 0.011, AED: 0.044, INR: 1 },
  EUR: { USD: 1.09, INR: 90.65, AED: 3.99, EUR: 1 },
  AED: { USD: 0.27, INR: 22.72, EUR: 0.25, AED: 1 }
};

function initWidgets() {
  // Weather Dropdown
  const wSelect = document.getElementById('weather-city-select');
  if (wSelect) {
    wSelect.addEventListener('change', () => {
      const city = wSelect.value;
      const data = WEATHER_DATA[city];
      if (!data) return;

      const tempVal = document.getElementById('weather-temp-val');
      const descVal = document.getElementById('weather-description');
      const wIcon = document.getElementById('weather-icon');

      gsap.to([tempVal, descVal, wIcon], {
        opacity: 0,
        y: -10,
        duration: 0.25,
        onComplete: () => {
          tempVal.innerHTML = `${data.temp}`;
          descVal.innerText = data.desc;
          wIcon.setAttribute('data-lucide', data.icon);
          if (data.icon === 'sun') {
            wIcon.style.color = 'var(--accent-gold)';
          } else if (data.icon === 'snowflake') {
            wIcon.style.color = '#A0C4FF';
          } else {
            wIcon.style.color = 'var(--primary-cyan)';
          }
          if (window.lucide) window.lucide.createIcons();

          gsap.to([tempVal, descVal, wIcon], { opacity: 1, y: 0, duration: 0.3 });
        }
      });
    });
  }

  // Currency Inputs
  const cAmt = document.getElementById('currency-amount');
  const cFrom = document.getElementById('currency-from');
  const cTo = document.getElementById('currency-to');

  if (cAmt && cFrom && cTo) {
    const handleConvert = () => {
      const amt = parseFloat(cAmt.value) || 0;
      const fromVal = cFrom.value;
      const toVal = cTo.value;

      const rate = EXCHANGE_RATES[fromVal]?.[toVal] || 1;
      const res = (amt * rate).toLocaleString(undefined, { maximumFractionDigits: 2 });

      document.getElementById('currency-result-val').innerText = `${res} ${toVal}`;
    };

    cAmt.addEventListener('input', handleConvert);
    cFrom.addEventListener('change', handleConvert);
    cTo.addEventListener('change', handleConvert);
  }

}

function saveLeadToDb(lead) {
  // Post to Express backend -> MongoDB
  fetch('/api/leads', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(lead)
  })
  .then(res => {
    if (res.ok) {
      console.log('Lead saved to MongoDB successfully');
    }
  })
  .catch(err => console.error('Error posting lead to MongoDB:', err));
}

// Helper to programmatically construct custom itineraries
function getCustomItinerary(days, landscape, climate) {
  const title = `NealVacation Bespoke ${landscape === 'beach' ? 'Beach' : 'Mountain'} ${climate === 'monsoon' ? 'Monsoon' : 'Warm'} Getaway`;

  let dayDetails = [];
  if (landscape === 'beach' && climate === 'monsoon') {
    dayDetails = [
      "VIP beachfront cottage arrival. Watch monsoon rain over the ocean with hot tea and custom snacks.",
      "Scenic trek to magnificent Dudhsagar waterfalls in full monsoon flow and spice farm organic lunch.",
      "Traditional 90-minute Ayurvedic full-body spa therapy and indoor sound healing session.",
      "Private rainy backwater river cruise on a luxury covered yacht with premium dining.",
      "Morning beach combing in the drizzle, shopping for local organic spices.",
      "Luxury beach resort pool leisure and personalized chef cooking class.",
      "Chauffeur transfer to the airport in a premium SUV."
    ];
  } else if (landscape === 'beach' && climate === 'warm') {
    dayDetails = [
      "VIP private speed yacht transfer to your luxury overwater villa. Sunset beachside champagne toast.",
      "Morning private Scuba Diving session exploring coral reefs. Afternoon jet ski safari.",
      "Couples sea plane excursion and sunset dolphin watching cruise with fine appetizers.",
      "Private beach sandbank dinner prepared by your personal Michelin-starred chef.",
      "Leisurely morning coral snorkeling, followed by a premium Balinese spa treatment.",
      "Luxury catamaran sailing and deep-sea game fishing experience.",
      "Farewell beach brunch and speed yacht transfer back to airport."
    ];
  } else if (landscape === 'mountain' && climate === 'monsoon') {
    dayDetails = [
      "Misty mountain drive. Check-in to a luxury treehouse chalet with a private heated jacuzzi.",
      "Guided walk through tea plantations in the light drizzle, followed by estate tea tasting.",
      "Waterfall canopy trek and scenic photography tour in the misty ghats.",
      "Relaxing deep tissue massage and hot cocoa by the fire pit.",
      "Visit to a local spice sanctuary and high-altitude lake boating under the mist.",
      "Artisanal chocolate-making session and cozy indoor fireplace dining.",
      "Scenic chauffeured descent and departure from the airport."
    ];
  } else { // mountain + warm
    dayDetails = [
      "Chauffeured scenic mountain arrival. Acclimatization at high-end Himalayan valley resort.",
      "Guided paragliding in Solang Valley and river rafting experience.",
      "Exquisite helicopter tour over snow-capped peaks and high-altitude mountain passes.",
      "Scenic trek to ancient temples, followed by a dip in natural hot springs.",
      "Local mountain arts and premium pashmina shawl shopping excursion.",
      "Sunset horse riding in alpine meadows and premium valley-view camping dinner.",
      "Morning resort yoga and chauffeured drive to the airport."
    ];
  }

  // Format days
  let html = `<div style="border-left:3px solid var(--accent-gold); padding-left:0.8rem; margin-top:0.8rem; font-size: 0.85rem; line-height: 1.5; color: var(--text-main);"><strong>${title} (${days} Days / ${days - 1} Nights)</strong><br><br>`;
  for (let i = 0; i < days; i++) {
    const detail = i === days - 1
      ? "Luxury resort checkout, souvenir collection, and VIP chauffeur departure."
      : (dayDetails[i] || "Relaxing leisure day exploring local premium sights.");
    html += `• <strong>Day ${i + 1}</strong>: ${detail}<br>`;
  }
  html += `</div>`;
  return html;
}

// --- AI TRIP PLANNER CHAT ENGINE ---
function handleAiChat(optionVal = null) {
  const input = document.getElementById('ai-chat-input');
  const chatHistory = document.getElementById('ai-chat-history');
  if (!input || !chatHistory) return;

  const isEvent = optionVal && typeof optionVal === 'object' && (optionVal instanceof Event || optionVal.preventDefault !== undefined);
  const actualVal = isEvent ? null : optionVal;

  let text = '';
  if (actualVal) {
    text = actualVal;
  } else {
    text = input.value.trim();
  }

  if (!text) return;
  if (!actualVal) input.value = '';

  // Append user message bubble
  const userBubble = document.createElement('div');
  userBubble.className = 'ai-message user';
  userBubble.innerText = actualVal ? (actualVal === '3' ? '3 Days' : actualVal === '5' ? '5 Days' : actualVal === '7' ? '7 Days' : actualVal === 'beach' ? 'Beach' : actualVal === 'mountain' ? 'Mountain' : actualVal === 'monsoon' ? 'Monsoon' : actualVal === 'warm' ? 'Warm' : actualVal) : text;
  chatHistory.appendChild(userBubble);
  chatHistory.scrollTop = chatHistory.scrollHeight;

  // Bot Loading Bubble
  const loadBubble = document.createElement('div');
  loadBubble.className = 'ai-message bot';
  loadBubble.innerHTML = '<i data-lucide="loader-2" class="animate-spin" style="width:16px;"></i> Planning your next step...';
  chatHistory.appendChild(loadBubble);
  if (window.lucide) window.lucide.createIcons();
  chatHistory.scrollTop = chatHistory.scrollHeight;

  setTimeout(() => {
    let responseText = '';
    const q = text.toLowerCase();

    // Check if user wants to reset/restart the chat flow
    if (q.includes('restart') || q.includes('reset') || q.includes('start over')) {
      aiChatState = { step: 'collect_days', days: 5, landscape: null, climate: null };
    }

    // STATE MACHINE
    if (aiChatState.step === 'collect_days') {
      const days = parseInt(text.replace(/\D/g, '')) || 5;
      aiChatState.days = days;
      aiChatState.step = 'collect_landscape';

      responseText = `🎯 <strong>Preferences Saved: ${days} Days</strong><br><br>
      Let's customize the scenery:<br>
      <strong>2. Are you a beach or mountain person?</strong>
      <div class="chat-options-container" style="margin-top: 0.6rem;">
        <button class="chat-option-btn" data-val="beach">🏖️ Beach</button>
        <button class="chat-option-btn" data-val="mountain">⛰️ Mountain</button>
      </div>`;
    }
    else if (aiChatState.step === 'collect_landscape') {
      const landscape = q.includes('mountain') ? 'mountain' : 'beach';
      aiChatState.landscape = landscape;
      aiChatState.step = 'collect_climate';

      responseText = `🎯 <strong>Style Saved: ${landscape === 'beach' ? '🏖️ Beach Lover' : '⛰️ Mountain Explorer'}</strong><br><br>
      Let's select the weather environment:<br>
      <strong>3. Do you prefer a monsoon (rainy/misty) or warm (sunny) climate?</strong>
      <div class="chat-options-container" style="margin-top: 0.6rem;">
        <button class="chat-option-btn" data-val="monsoon">🌧️ Monsoon</button>
        <button class="chat-option-btn" data-val="warm">☀️ Warm</button>
      </div>`;
    }
    else if (aiChatState.step === 'collect_climate') {
      const climate = q.includes('monsoon') || q.includes('rain') ? 'monsoon' : 'warm';
      aiChatState.climate = climate;

      if (userContactInfo) {
        aiChatState.step = 'complete';
        const itineraryHtml = getCustomItinerary(aiChatState.days, aiChatState.landscape, aiChatState.climate);
        responseText = `🎉 <strong>Itinerary Prepared for ${userContactInfo.name}!</strong><br><br>
        We have customized this based on your choices:<br>
        ${itineraryHtml}<br>
        Our luxury travel manager will call you at <strong>${userContactInfo.phone}</strong> in 15 minutes to adjust final flight and stay parameters.`;
      } else {
        aiChatState.step = 'collect_contact';
        responseText = `🎯 <strong>Climate Saved: ${climate === 'monsoon' ? '🌧️ Monsoon Mood' : '☀️ Warm & Sunny'}</strong><br><br>
        Excellent! We have all your preferences:<br>
        • Duration: <strong>${aiChatState.days} Days</strong><br>
        • Landscape: <strong>${aiChatState.landscape === 'beach' ? '🏖️ Beach' : '⛰️ Mountain'}</strong><br>
        • Climate: <strong>${aiChatState.climate === 'monsoon' ? '🌧️ Monsoon' : '☀️ Warm'}</strong><br><br>
        Please provide your contact details so our travel manager can call you with this itinerary:
        <div class="chat-collect-form" style="display:flex; flex-direction:column; gap:0.5rem; margin-top:0.8rem; border-left: 3px solid var(--primary-cyan); padding-left: 0.5rem;">
          <input type="text" id="chat-collect-name" placeholder="Your Name" style="padding:0.5rem 0.8rem; border-radius:8px; border:1px solid var(--border-color); background:var(--bg-color); color:var(--text-main); font-size:0.85rem;" required />
          <input type="email" id="chat-collect-email" placeholder="Your Email" style="padding:0.5rem 0.8rem; border-radius:8px; border:1px solid var(--border-color); background:var(--bg-color); color:var(--text-main); font-size:0.85rem;" required />
          <input type="tel" id="chat-collect-phone" placeholder="Your Phone Number" style="padding:0.5rem 0.8rem; border-radius:8px; border:1px solid var(--border-color); background:var(--bg-color); color:var(--text-main); font-size:0.85rem;" required />
          <button id="chat-collect-submit" class="btn btn-primary" style="padding:0.5rem; font-size:0.85rem; justify-content:center; border-radius:8px;">Submit Details</button>
        </div>`;
      }
    }
    else if (aiChatState.step === 'collect_contact') {
      responseText = `Please fill out and submit the contact details form above so we can finalize your custom itinerary.`;
    }
    else {
      // Reset chatbot state and start again
      aiChatState = { step: 'collect_days', days: 5, landscape: null, climate: null };
      responseText = `🔄 <strong>Restarting AI Custom Itinerary Planner</strong><br><br>
      <strong>1. How many days would you like your trip to be?</strong>
      <div class="chat-options-container" style="margin-top: 0.6rem;">
        <button class="chat-option-btn" data-val="3">3 Days</button>
        <button class="chat-option-btn" data-val="5">5 Days</button>
        <button class="chat-option-btn" data-val="7">7 Days</button>
      </div>`;
    }

    loadBubble.innerHTML = responseText;
    chatHistory.scrollTop = chatHistory.scrollHeight;

    // Attach form submit listener if rendered
    const submitBtn = document.getElementById('chat-collect-submit');
    if (submitBtn) {
      submitBtn.addEventListener('click', () => {
        const nameVal = document.getElementById('chat-collect-name').value.trim();
        const emailVal = document.getElementById('chat-collect-email').value.trim();
        const phoneVal = document.getElementById('chat-collect-phone').value.trim();

        if (!nameVal || !emailVal || !phoneVal) {
          showToast('Please fill out all contact fields!');
          return;
        }

        userContactInfo = { name: nameVal, email: emailVal, phone: phoneVal };
        localStorage.setItem('nealvacation_contact_info', JSON.stringify(userContactInfo));

        // Save to Leads Database
        saveLeadToDb({
          type: 'AI Planner Lead',
          name: nameVal,
          email: emailVal,
          phone: phoneVal,
          timestamp: new Date().toLocaleTimeString() + ' ' + new Date().toLocaleDateString(),
          details: `Custom Itinerary: ${aiChatState.days} Days, ${aiChatState.landscape}, ${aiChatState.climate}`
        });

        // Submit via FormSubmit AJAX API
        fetch('https://formsubmit.co/ajax/nealvacation0@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            Type: 'AI Planner Lead',
            Name: nameVal,
            Email: emailVal,
            Phone: phoneVal,
            Itinerary_Days: aiChatState.days,
            Landscape: aiChatState.landscape,
            Climate: aiChatState.climate,
            _subject: `New AI Planner Lead from ${nameVal}`
          })
        }).catch(err => console.error('FormSubmit error:', err));

        confetti({
          particleCount: 80,
          spread: 50,
          colors: ['#00B4D8', '#FFD166']
        });

        aiChatState.step = 'complete';
        const itineraryHtml = getCustomItinerary(aiChatState.days, aiChatState.landscape, aiChatState.climate);

        const formContainer = submitBtn.closest('.chat-collect-form');
        if (formContainer) {
          formContainer.innerHTML = `<div style="color:var(--primary-cyan); font-weight:700; margin-top:0.5rem; margin-bottom: 0.8rem;">
            ✓ Contact details received!<br>
            Name: ${nameVal}<br>
            Phone: ${phoneVal}
          </div>
          ${itineraryHtml}
          <p style="margin-top:1rem; font-weight:600; color: var(--text-main);">Our luxury travel manager will call you within 15 minutes at ${phoneVal}. Thank you!</p>`;
        }

        showToast('Contact Info Saved!', true);
      });
    }

    if (window.lucide) window.lucide.createIcons();
  }, 1200);
}

// --- LIVE CHAT CUSTOMER ENGINE ---
function handleLiveChat() {
  const input = document.getElementById('live-chat-input');
  const chatBody = document.getElementById('live-chat-body');
  if (!input || !chatBody || !input.value.trim()) return;

  const text = input.value.trim();
  input.value = '';

  const userBubble = document.createElement('div');
  userBubble.className = 'chat-message user';
  userBubble.innerText = text;
  chatBody.appendChild(userBubble);
  chatBody.scrollTop = chatBody.scrollHeight;

  const loadBubble = document.createElement('div');
  loadBubble.className = 'chat-message bot';
  loadBubble.innerHTML = 'Connecting to representative...';
  chatBody.appendChild(loadBubble);
  chatBody.scrollTop = chatBody.scrollHeight;

  const savedContact = JSON.parse(localStorage.getItem('nealvacation_contact_info') || 'null');

  setTimeout(() => {
    if (liveChatState.waitingForPhone) {
      // Look for digits (at least 5) to see if user input looks like a phone number
      const cleanText = text.replace(/[^0-9+]/g, '');
      if (cleanText.length >= 5) {
        const contactInfo = savedContact ? { ...savedContact, phone: text.trim() } : { name: 'Chat Client', phone: text.trim() };
        localStorage.setItem('nealvacation_contact_info', JSON.stringify(contactInfo));
        userContactInfo = contactInfo; // Sync global state

        saveLeadToDb({
          type: 'Live Chat',
          name: contactInfo.name || 'Chat Client',
          phone: text.trim(),
          timestamp: new Date().toLocaleTimeString() + ' ' + new Date().toLocaleDateString(),
          details: 'Captured via Live Chat support'
        });

        confetti({
          particleCount: 50,
          spread: 40,
          colors: ['#00B4D8', '#FFD166']
        });

        loadBubble.innerHTML = `Thank you! I have saved your number (${text.trim()}) to our database. A personal luxury concierge advisor has been assigned and will call you within 15 minutes.`;
        liveChatState.waitingForPhone = false;
      } else {
        loadBubble.innerHTML = `I didn't quite catch that. Please provide a valid contact number (digits only, e.g. +91 9119696600) so we can register it in our database and assign a personal advisor.`;
      }
    } else if (savedContact && savedContact.phone) {
      loadBubble.innerHTML = `Hi! I see your registered number (${savedContact.phone}) is saved in our database. I have forwarded your request: "<em>${text}</em>" to our concierge team. They will address this when they call you shortly. Is there anything else you'd like to add?`;
    } else {
      loadBubble.innerHTML = `Hello! I am Mark from NealVacation Customer Care. I see you are inquiring about our luxury packages. Please share your phone number so I can save it to our database and assign a personal advisor.`;
      liveChatState.waitingForPhone = true;
    }
    chatBody.scrollTop = chatBody.scrollHeight;
  }, 1200);
}

// --- GSAP SCROLL TRIGGERS ---
function initScrollAnimations() {
  // Simple header background transition on scroll
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('header-nav');
    const scrollBtn = document.getElementById('scroll-to-top-btn');
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }

    if (window.scrollY > 600) {
      scrollBtn.classList.add('visible');
    } else {
      scrollBtn.classList.remove('visible');
    }
  });

  // Animated numbers counters
  const counters = document.querySelectorAll('.stat-num');
  const countTrigger = () => {
    counters.forEach(counter => {
      const val = parseFloat(counter.getAttribute('data-val'));
      const duration = 2.5;
      let start = 0;

      const updateCounter = () => {
        start += val / (duration * 60);
        if (start >= val) {
          counter.innerHTML = val % 1 === 0 ? Math.floor(val).toLocaleString() + '+' : val.toFixed(1) + '★';
        } else {
          counter.innerHTML = val % 1 === 0 ? Math.floor(start).toLocaleString() : start.toFixed(1);
          requestAnimationFrame(updateCounter);
        }
      };

      // Basic Intersection Observer triggers once
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          updateCounter();
          observer.disconnect();
        }
      });
      observer.observe(counter);
    });
  };
  countTrigger();
}

// --- EVENT LISTENERS ---
function initListeners() {
  // Mobile menu toggle
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.position = 'absolute';
      navLinks.style.top = '100%';
      navLinks.style.left = '0';
      navLinks.style.width = '100%';
      navLinks.style.background = 'var(--glass-bg)';
      navLinks.style.backdropFilter = 'blur(10px)';
      navLinks.style.padding = '1.5rem';
    });
  }

  // Global Currency Switcher
  const currencySelect = document.getElementById('global-currency-select');
  if (currencySelect) {
    currencySelect.value = currentCurrency;
    currencySelect.addEventListener('change', (e) => {
      currentCurrency = e.target.value;
      localStorage.setItem('nealvacation_currency', currentCurrency);
      renderPackages();
      renderDestinations();
      showToast(`Currency switched to ${currentCurrency}`, true);
    });
  }

  // Theme Toggler
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const targetTheme = activeTheme === 'light' ? 'dark' : 'light';
      setTheme(targetTheme);
    });
  }

  // Domestic/International Tab Toggle
  const domesticBtn = document.getElementById('toggle-domestic');
  const internationalBtn = document.getElementById('toggle-international');
  if (domesticBtn && internationalBtn) {
    domesticBtn.addEventListener('click', () => {
      if (activeDestinationTab === 'domestic') return;
      activeDestinationTab = 'domestic';
      domesticBtn.classList.add('active');
      internationalBtn.classList.remove('active');
      renderDestinations();
    });

    internationalBtn.addEventListener('click', () => {
      if (activeDestinationTab === 'international') return;
      activeDestinationTab = 'international';
      internationalBtn.classList.add('active');
      domesticBtn.classList.remove('active');
      renderDestinations();
    });
  }

  // Package Filters
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      document.querySelectorAll('.package-card').forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Search Filter Handler
  const searchBtn = document.getElementById('search-submit-btn');
  if (searchBtn) {
    searchBtn.addEventListener('click', () => {
      const dest = document.getElementById('search-dest').value.toLowerCase();
      const type = document.getElementById('search-type').value;
      const budget = document.getElementById('search-budget').value;

      // Filter packages based on criteria
      document.querySelectorAll('.package-card').forEach(card => {
        const title = card.querySelector('.package-title').innerText.toLowerCase();
        const cat = card.getAttribute('data-category');

        let matchDest = true;
        let matchType = true;

        if (dest && !title.includes(dest)) matchDest = false;
        if (type && cat !== type) matchType = false;

        if (matchDest && matchType) {
          card.style.display = 'flex';
          card.scrollIntoView({ behavior: 'smooth' });
        } else {
          card.style.display = 'none';
        }
      });
      showToast('Filtering results...', true);
    });
  }

  // Inquiry Form Confetti & FormSubmit Trigger
  const consultationForm = document.getElementById('consultation-form');
  if (consultationForm) {
    consultationForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('inquiry-name')?.value.trim() || 'Anonymous';
      const email = document.getElementById('inquiry-email')?.value.trim();
      const phone = document.getElementById('inquiry-phone')?.value.trim();
      const destination = document.getElementById('inquiry-destination')?.value.trim() || 'Not Specified';
      const date = document.getElementById('inquiry-date')?.value.trim() || 'Not Specified';
      const travelers = document.getElementById('inquiry-travelers')?.value || '2';
      const budget = document.getElementById('inquiry-budget')?.value || 'Not Specified';
      const message = document.getElementById('inquiry-message')?.value.trim() || 'None';

      if (!phone || !email) {
        showToast('Please fill out all required contact fields!');
        return;
      }

      // Save contact details to state and local storage
      userContactInfo = { name, email, phone };
      localStorage.setItem('nealvacation_contact_info', JSON.stringify(userContactInfo));

      // Save to Leads Database
      saveLeadToDb({
        type: 'Inquiry Form',
        name: name,
        email: email,
        phone: phone,
        timestamp: new Date().toLocaleTimeString() + ' ' + new Date().toLocaleDateString(),
        details: `Destination: ${destination} (${travelers} pax, ${budget} budget)`
      });

      showToast('Sending inquiry to concierge...', true);

      // Submit via FormSubmit AJAX API
      fetch('https://formsubmit.co/ajax/nealvacation0@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Name: name,
          Email: email,
          Phone: phone,
          Destination: destination,
          Travel_Date: date,
          Travelers: travelers,
          Budget: budget,
          Message: message,
          _subject: `New Luxury Inquiry from ${name}`
        })
      })
        .then(response => {
          if (!response.ok) throw new Error('Network response was not ok');
          return response.json();
        })
        .then(data => {
          if (data && (data.success === 'false' || data.success === false || (data.message && data.message.toLowerCase().includes('activate')))) {
            showToast('Activation required! Check nealvacation0@gmail.com inbox & spam.', false);
            return;
          }
          confetti({
            particleCount: 150,
            spread: 80,
            origin: { y: 0.6 },
            colors: ['#0A2342', '#0F4C81', '#00B4D8', '#FFD166']
          });
          showToast('Bespoke Consultation Sent! Confetti Sent.', true);
          consultationForm.reset();
        })
        .catch(error => {
          console.error('Error submitting form:', error);
          // Fallback: still trigger confetti & success state because we saved to local database!
          confetti({
            particleCount: 100,
            spread: 60,
            origin: { y: 0.6 },
            colors: ['#0A2342', '#FFD166']
          });
          showToast('Bespoke Consultation Saved (Offline mode)!', true);
          consultationForm.reset();
        });
    });
  }

  // Newsletter Confetti
  const newsForm = document.getElementById('newsletter-form-submit');
  if (newsForm) {
    newsForm.addEventListener('submit', (e) => {
      e.preventDefault();
      confetti({
        particleCount: 50,
        spread: 40,
        colors: ['#FFD166']
      });
      showToast('Subscribed to Premium Magazine!', true);
      newsForm.reset();
    });
  }

  // Widget Panels Toggle
  const widgetToggle = document.getElementById('widgets-toggle-btn');
  const widgetPanel = document.getElementById('widgets-panel');
  if (widgetToggle && widgetPanel) {
    widgetToggle.addEventListener('click', () => {
      widgetPanel.classList.toggle('open');
    });
  }

  // AI Planner Panel Toggle
  const aiToggle = document.getElementById('ai-planner-toggle-btn');
  const aiPanel = document.getElementById('ai-planner-window');
  const aiClose = document.getElementById('ai-planner-close-btn');

  if (aiToggle && aiPanel && aiClose) {
    aiToggle.addEventListener('click', () => {
      aiPanel.classList.toggle('open');
    });
    aiClose.addEventListener('click', () => {
      aiPanel.classList.remove('open');
    });
  }

  // AI Send Actions
  const aiSend = document.getElementById('ai-chat-send-btn');
  const aiInput = document.getElementById('ai-chat-input');
  if (aiSend && aiInput) {
    aiSend.addEventListener('click', () => handleAiChat());
    aiInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') handleAiChat();
    });
  }

  // AI Option Button Click Delegation
  const aiChatHistory = document.getElementById('ai-chat-history');
  if (aiChatHistory) {
    aiChatHistory.addEventListener('click', (e) => {
      const btn = e.target.closest('.chat-option-btn');
      if (!btn) return;

      const val = btn.getAttribute('data-val');
      handleAiChat(val);
    });
  }

  // Live Chat Panel Toggle
  const chatToggle = document.getElementById('live-chat-toggle-btn');
  const chatPanel = document.getElementById('live-chat-window');
  const chatClose = document.getElementById('live-chat-close-btn');

  if (chatToggle && chatPanel && chatClose) {
    chatToggle.addEventListener('click', () => {
      chatPanel.classList.toggle('open');
    });
    chatClose.addEventListener('click', () => {
      chatPanel.classList.remove('open');
    });
  }

  // Live Chat Send Action
  const chatSend = document.getElementById('live-chat-send-btn');
  const chatInput = document.getElementById('live-chat-input');
  if (chatSend && chatInput) {
    chatSend.addEventListener('click', handleLiveChat);
    chatInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') handleLiveChat();
    });
  }



  // Lightbox Close
  const lightboxClose = document.getElementById('lightbox-close-btn');
  const lightboxModal = document.getElementById('lightbox-modal');
  if (lightboxClose && lightboxModal) {
    lightboxClose.addEventListener('click', () => {
      lightboxModal.classList.remove('open');
    });
  }

  // Compare Buttons drawer actions
  const compareSubmit = document.getElementById('compare-submit-btn');
  const compareClear = document.getElementById('compare-clear-btn');
  const compareModal = document.getElementById('compare-modal');
  const compareModalClose = document.getElementById('compare-modal-close-btn');

  if (compareSubmit && compareModal) {
    compareSubmit.addEventListener('click', () => {
      buildComparisonTable();
      compareModal.classList.add('open');
    });
  }

  if (compareModalClose) {
    compareModalClose.addEventListener('click', () => {
      compareModal.classList.remove('open');
    });
  }

  if (compareClear) {
    compareClear.addEventListener('click', () => {
      selectedComparePackages = [];
      document.querySelectorAll('.compare-checkbox').forEach(cb => cb.checked = false);
      updateCompareDrawer();
      showToast('Comparison cleared');
    });
  }

  // Back to Top scroll click
  const scrollBtn = document.getElementById('scroll-to-top-btn');
  if (scrollBtn) {
    scrollBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // WhatsApp click handler
  const waBtn = document.getElementById('whatsapp-booking-btn');
  if (waBtn) {
    waBtn.addEventListener('click', () => {
      window.open('https://wa.me/919119696600?text=Hi%20NealVacation!%20I%20am%20interested%20in%20a%20luxury%20holiday%20tour%20consultation.', '_blank');
    });
  }
}

// --- COMPILE COMPARISON TABLE ---
function buildComparisonTable() {
  const headRow = document.getElementById('compare-table-head');
  const tbody = document.getElementById('compare-table-body');
  if (!headRow || !tbody) return;

  // Header Row
  headRow.innerHTML = '<th>Features</th>';
  selectedComparePackages.forEach(pkg => {
    headRow.innerHTML += `<th>${pkg.name}</th>`;
  });

  // Table features details
  const features = [
    { label: 'Price', key: 'price', format: (val) => formatPrice(val, currentCurrency) },
    { label: 'Duration', key: 'duration' },
    { label: 'Rating', key: 'rating', format: (val) => `${val} ★` },
    { label: 'Accommodation', key: 'accommodation' },
    { label: 'Visa Support', key: 'visa' },
    { label: 'Highlights', key: 'highlights', format: (val) => val.join(', ') }
  ];

  tbody.innerHTML = '';
  features.forEach(feat => {
    let row = `<tr><td><strong>${feat.label}</strong></td>`;
    selectedComparePackages.forEach(pkg => {
      const rawVal = pkg[feat.key];
      const val = feat.format ? feat.format(rawVal) : rawVal;
      row += `<td>${val}</td>`;
    });
    row += '</tr>';
    tbody.innerHTML += row;
  });
}

// --- TOAST NOTIFICATIONS HELPER ---
function showToast(message, isSuccess = false) {
  const existing = document.getElementById('toast-notification');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.id = 'toast-notification';
  toast.style.position = 'fixed';
  toast.style.bottom = '30px';
  toast.style.left = '50%';
  toast.style.transform = 'translateX(-50%) translateY(100px)';
  toast.style.padding = '0.9rem 2rem';
  toast.style.borderRadius = '50px';
  toast.style.background = isSuccess ? 'var(--primary-navy)' : '#D62246';
  toast.style.color = '#FFFFFF';
  toast.style.fontFamily = 'var(--font-outfit)';
  toast.style.fontWeight = '700';
  toast.style.fontSize = '0.9rem';
  toast.style.zIndex = '99999';
  toast.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)';
  toast.style.display = 'flex';
  toast.style.alignItems = 'center';
  toast.style.gap = '0.5rem';
  toast.style.transition = 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';

  toast.innerHTML = isSuccess
    ? `<i data-lucide="check-circle" style="color:var(--accent-gold); width:18px;"></i> ${message}`
    : `<i data-lucide="alert-circle" style="width:18px;"></i> ${message}`;

  document.body.appendChild(toast);
  if (window.lucide) window.lucide.createIcons();

  // Animate in
  setTimeout(() => {
    toast.style.transform = 'translateX(-50%) translateY(0)';
  }, 50);

  // Clear after 3.5s
  setTimeout(() => {
    toast.style.transform = 'translateX(-50%) translateY(100px)';
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}

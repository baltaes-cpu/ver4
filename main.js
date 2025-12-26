// Náutica OCEANAS - JavaScript principal

// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mainNav = document.querySelector('.main-nav');

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', () => {
    mainNav.classList.toggle('show');
  });
}

// Cookie banner
const cookieBanner = document.querySelector('.cookie-banner');
const acceptCookiesBtn = document.querySelector('.accept-cookies');
const rejectCookiesBtn = document.querySelector('.reject-cookies');

function checkCookieConsent() {
  const consent = localStorage.getItem('oceanas_cookies');
  if (!consent && cookieBanner) {
    cookieBanner.classList.add('show');
  }
}

if (acceptCookiesBtn) {
  acceptCookiesBtn.addEventListener('click', () => {
    localStorage.setItem('oceanas_cookies', JSON.stringify({ 
      accepted: true, 
      date: new Date().toISOString() 
    }));
    cookieBanner.classList.remove('show');
  });
}

if (rejectCookiesBtn) {
  rejectCookiesBtn.addEventListener('click', () => {
    localStorage.setItem('oceanas_cookies', JSON.stringify({ 
      accepted: false, 
      date: new Date().toISOString() 
    }));
    cookieBanner.classList.remove('show');
  });
}

// Show cookie banner on page load
window.addEventListener('load', checkCookieConsent);

// Active navigation link
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const navLinks = document.querySelectorAll('.main-nav a');

navLinks.forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

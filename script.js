// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger?.addEventListener('click', () => {
    navMenu?.classList.toggle('active');
});

// Close menu on link click
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu?.classList.remove('active');
    });
});

// Contact form
document.getElementById('contactForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you! I will get back to you soon.');
    e.target.reset();
});

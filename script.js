// ============================================
// TOP 1% CREATIVE PORTFOLIO - JAVASCRIPT
// ============================================

// Smooth scrolling for navigation links
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

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// Navbar shadow on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 8px 32px 0 rgba(31, 38, 135, 0.1)';
    }
});

// IntersectionObserver for scroll animations
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideInUp 0.8s ease forwards';
        }
    });
}, observerOptions);

// Observe experience items for staggered animation
document.querySelectorAll('.experience-item').forEach((item, index) => {
    item.style.animationDelay = `${index * 0.2}s`;
    observer.observe(item);
});

// Observe project cards
document.querySelectorAll('.project-card').forEach((card, index) => {
    card.style.animationDelay = `${index * 0.15}s`;
    observer.observe(card);
});

// Parallax effect on hero section
const heroSection = document.querySelector('.hero');
if (heroSection) {
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        heroSection.style.transform = `translateY(${scrollY * 0.5}px)`;
    });
}

// Floating cards interactive hover
const floatingCards = document.querySelectorAll('.floating-card');
floatingCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) scale(1.05)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Cursor tracking for hero section
document.addEventListener('mousemove', (e) => {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    const rect = hero.getBoundingClientRect();
    if (e.clientY < rect.bottom) {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        
        hero.style.setProperty('--mouse-x', `${x}%`);
        hero.style.setProperty('--mouse-y', `${y}%`);
    }
});

// Animate stats on scroll into view
const highlightStats = document.querySelectorAll('.highlight-stat');
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            entry.target.classList.add('animated');
            animateStat(entry.target);
        }
    });
}, { threshold: 0.5 });

highlightStats.forEach(stat => {
    statsObserver.observe(stat);
});

function animateStat(element) {
    const text = element.textContent;
    const delay = 0.05;
    let currentChar = 0;
    const originalText = text;
    element.textContent = '';

    const interval = setInterval(() => {
        if (currentChar < originalText.length) {
            element.textContent += originalText[currentChar];
            currentChar++;
        } else {
            clearInterval(interval);
        }
    }, delay * 1000);
}

// Skill tags interaction
document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-4px) scale(1.1)';
    });

    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Project card advanced hover
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-16px) rotateX(5deg)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) rotateX(0)';
    });
});

// Ripple effect on buttons
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Typing animation for hero greeting
const greetingDot = document.querySelector('.greeting-dot');
if (greetingDot) {
    greetingDot.addEventListener('mouseenter', function() {
        this.style.animation = 'pulse-glow 1s ease-in-out 2';
    });
}

// Add glow effect to cursor near elements
document.addEventListener('mousemove', (e) => {
    const profileImg = document.querySelector('.image-frame');
    if (!profileImg) return;

    const rect = profileImg.getBoundingClientRect();
    const distance = Math.hypot(
        e.clientX - (rect.left + rect.width / 2),
        e.clientY - (rect.top + rect.height / 2)
    );

    if (distance < 300) {
        const strength = (300 - distance) / 300;
        profileImg.style.filter = `drop-shadow(0 0 ${30 * strength}px rgba(37, 99, 235, ${0.4 * strength}))`;
    } else {
        profileImg.style.filter = 'drop-shadow(none)';
    }
});

// Animate section titles on scroll
const sectionTitles = document.querySelectorAll('.section-title');
const titleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideInUp 0.8s ease 0.2s both';
        }
    });
}, { threshold: 0.5 });

sectionTitles.forEach(title => {
    titleObserver.observe(title);
});

// Create particle effects on click
document.addEventListener('click', (e) => {
    if (e.target.closest('.btn-primary')) {
        createParticleEffect(e.clientX, e.clientY);
    }
});

function createParticleEffect(x, y) {
    const particles = 20;
    for (let i = 0; i < particles; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.width = '8px';
        particle.style.height = '8px';
        particle.style.background = 'radial-gradient(circle, #2563eb, #1e40af)';
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.zIndex = '9999';
        
        document.body.appendChild(particle);

        const angle = (Math.PI * 2 * i) / particles;
        const velocity = 5 + Math.random() * 5;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;

        let currentX = x;
        let currentY = y;
        let currentVx = vx;
        let currentVy = vy;
        let life = 1;

        const animate = () => {
            currentX += currentVx;
            currentY += currentVy;
            currentVy += 0.1; // gravity
            life -= 0.02;

            particle.style.left = currentX + 'px';
            particle.style.top = currentY + 'px';
            particle.style.opacity = life;

            if (life > 0) {
                requestAnimationFrame(animate);
            } else {
                particle.remove();
            }
        };

        animate();
    }
}

// Smooth scroll to top on page load
window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Form submission animation (if implemented later)
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
        const submitBtn = this.querySelector('.btn-primary');
        if (submitBtn) {
            submitBtn.style.pointerEvents = 'none';
            submitBtn.textContent = '✓ Sent!';
            setTimeout(() => {
                submitBtn.style.pointerEvents = 'auto';
                submitBtn.textContent = 'Send Message';
            }, 3000);
        }
    });
});

// Enable performance monitoring
if (window.performance && window.performance.timing) {
    window.addEventListener('load', function() {
        setTimeout(function() {
            const perf = window.performance.timing;
            const pageLoadTime = perf.loadEventEnd - perf.navigationStart;
            console.log('Page load time: ' + pageLoadTime + 'ms');
        }, 0);
    });
}

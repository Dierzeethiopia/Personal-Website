// Portfolio Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initializeNavigation();
    initializeSmoothScrolling();
    initializeScrollProgress();
    initializeAnimations();
    initializeContactForm();
    initializeMobileMenu();
    initializeTypewriter();
});

// Navigation functionality
function initializeNavigation() {
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Add active class based on scroll position
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('text-blue-600');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('text-blue-600');
            }
        });
        
        // Add/remove navbar background on scroll
        if (window.scrollY > 50) {
            nav.classList.add('bg-white/90');
            nav.classList.remove('bg-white/80');
        } else {
            nav.classList.add('bg-white/80');
            nav.classList.remove('bg-white/90');
        }
    });
}

// Enhanced Interactive Features

// Global variables for advanced features
let particles = [];
let mouseX = 0, mouseY = 0;
let cursorTrails = [];
let isTyping = false;

// Initialize all features when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initTypewriter();
    initSmoothScrolling();
    initScrollProgress();
    initParticles();
    initCursorEffects();
    initIntersectionObserver();
    initAdvancedAnimations();
    initContactForm();
    initMobileMenu();
    initSkillHoverEffects();
    initProjectHoverEffects();
    initThemeToggle();
    initParallaxEffects();
    initMagneticButtons();
    initFPSLogger();
    initMovingPhoto();
});

// Advanced Typewriter Effect
function initTypewriter() {
    const typewriterText = document.querySelector('.typewriter-text');
    if (!typewriterText) return;
    
    const texts = [
        'Computer Science Student',
        'Software Developer',
        'Problem Solver',
        'Tech Enthusiast',
        'Innovation Seeker'
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function typeWriter() {
        if (isTyping) return;
        
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typewriterText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typewriterText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typeSpeed = isDeleting ? 50 : 100;
        
        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typeSpeed = 500; // Pause before starting new text
        }
        
        setTimeout(typeWriter, typeSpeed);
    }
    
    typeWriter();
}

// Enhanced Smooth Scrolling with Easing
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Add ripple effect to clicked link
                createRipple(e, this);
                
                // Smooth scroll to target
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Ripple Effect for Buttons and Links
function createRipple(event, element) {
    const button = element;
    const rect = button.getBoundingClientRect();
    const ripple = document.createElement('span');
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.style.position = 'absolute';
    ripple.style.borderRadius = '50%';
    ripple.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
    ripple.style.transform = 'scale(0)';
    ripple.style.animation = 'ripple 600ms linear';
    ripple.style.pointerEvents = 'none';
    
    button.style.position = 'relative';
    button.style.overflow = 'hidden';
    button.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Advanced Scroll Progress Indicator
function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = (scrollTop / scrollHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

// Particle System
function initParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-container';
    document.body.appendChild(particlesContainer);
    
    // Create moving stars
    function createStars() {
        const starCount = 250; // Increased number of stars
        
        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            
            // Random size class
            const sizeClass = ['star-small', 'star-medium', 'star-large'][Math.floor(Math.random() * 3)];
            star.classList.add(sizeClass);
            
            // Random color - white or fire-yellow
            const colors = ['#ffffff', '#ffeb3b', '#ffd700', '#ffa500', '#fff', '#ffff00'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            star.style.background = randomColor;
            star.style.boxShadow = `0 0 20px ${randomColor}, 0 0 40px ${randomColor}, 0 0 60px ${randomColor}`;
            
            // Random position
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            
            // Random animation duration for variety
            star.style.animationDuration = `${Math.random() * 3 + 2}s, ${Math.random() * 30 + 20}s`;
            star.style.animationDelay = `${Math.random() * 3}s, ${Math.random() * 5}s`;
            
            particlesContainer.appendChild(star);
        }
    }
    
    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
        particle.style.animationDelay = Math.random() * 2 + 's';
        
        particlesContainer.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 6000);
    }
    
    // Create stars once
    createStars();
    
    // Create particles periodically
    setInterval(createParticle, 500);
}

// Advanced Cursor Effects
function initCursorEffects() {
    const cursor = document.createElement('div');
    cursor.className = 'cursor-glow';
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        cursor.style.left = mouseX - 10 + 'px';
        cursor.style.top = mouseY - 10 + 'px';
        
        // Create cursor trail
        createCursorTrail(mouseX, mouseY);
    });
    
    // Hide cursor on touch devices
    document.addEventListener('touchstart', () => {
        cursor.style.display = 'none';
    });
}

// Cursor Trail Effect
function createCursorTrail(x, y) {
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.style.left = x - 3 + 'px';
    trail.style.top = y - 3 + 'px';
    
    document.body.appendChild(trail);
    
    setTimeout(() => {
        trail.style.transform = 'scale(0)';
        trail.style.opacity = '0';
    }, 100);
    
    setTimeout(() => {
        trail.remove();
    }, 600);
}

// Advanced Intersection Observer for Animations
function initIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
                
                // Add staggered animation for child elements
                const children = entry.target.querySelectorAll('.stagger-child');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add('animate-fade-in-up');
                    }, index * 150);
                });
            }
        });
    }, observerOptions);
    
    // Observe all animated sections
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));
}

// Advanced Animations on Scroll
function initAdvancedAnimations() {
    const sections = document.querySelectorAll('section');
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add different animation classes based on section
                const sectionId = entry.target.id;
                
                switch(sectionId) {
                    case 'about':
                        animateAboutSection();
                        break;
                    case 'projects':
                        animateProjectsSection();
                        break;
                    case 'experience':
                        animateExperienceSection();
                        break;
                    case 'contact':
                        animateContactSection();
                        break;
                }
            }
        });
    }, { threshold: 0.3 });
    
    sections.forEach(section => sectionObserver.observe(section));
}

// Section-specific animations
function animateAboutSection() {
    const skills = document.querySelectorAll('.skill-tag');
    skills.forEach((skill, index) => {
        setTimeout(() => {
            skill.style.transform = 'scale(1) translateY(0)';
            skill.style.opacity = '1';
        }, index * 100);
    });
}

function animateProjectsSection() {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px) rotateX(20deg)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) rotateX(0)';
        }, index * 200);
    });
}

function animateExperienceSection() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('animate-slide-in-left');
        }, index * 300);
    });
}

function animateContactSection() {
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.style.transform = 'perspective(1000px) rotateY(20deg)';
        setTimeout(() => {
            contactForm.style.transition = 'all 1s ease';
            contactForm.style.transform = 'perspective(1000px) rotateY(0deg)';
        }, 300);
    }
}

// Enhanced Contact Form
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    
    const submitBtn = form.querySelector('button[type="submit"]');
    const inputs = form.querySelectorAll('input, textarea');
    
    // Add floating labels
    inputs.forEach(input => {
        const label = input.previousElementSibling;
        if (label && label.tagName === 'LABEL') {
            input.addEventListener('focus', () => {
                label.style.transform = 'translateY(-25px) scale(0.85)';
                label.style.color = '#667eea';
            });
            
            input.addEventListener('blur', () => {
                if (!input.value) {
                    label.style.transform = 'translateY(0) scale(1)';
                    label.style.color = '#6B7280';
                }
            });
        }
    });
    
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Show loading state
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<span class="loading"></span> Sending...';
        submitBtn.disabled = true;
        
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Show success message
        submitBtn.innerHTML = '✓ Message Sent!';
        submitBtn.style.background = 'linear-gradient(135deg, #10B981, #059669)';
        
        // Reset form
        form.reset();
        
        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            submitBtn.style.background = '';
        }, 3000);
    });
}

// Mobile Menu with Advanced Animations
function initMobileMenu() {
    const mobileMenuToggle = document.querySelector('#mobile-menu-toggle');
    const mobileMenu = document.querySelector('#mobile-menu');
    
    if (!mobileMenuToggle || !mobileMenu) return;
    
    mobileMenuToggle.addEventListener('click', function() {
        const isOpen = mobileMenu.classList.contains('hidden');
        
        if (isOpen) {
            mobileMenu.classList.remove('hidden');
            mobileMenu.style.animation = 'slideInFromTop 0.3s ease forwards';
        } else {
            mobileMenu.style.animation = 'slideOutToTop 0.3s ease forwards';
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
            }, 300);
        }
    });
}

// Skill Hover Effects
function initSkillHoverEffects() {
    const skillTags = document.querySelectorAll('.skill-tag');
    
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) rotate(2deg)';
            this.style.boxShadow = '0 10px 25px rgba(102, 126, 234, 0.3)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotate(0deg)';
            this.style.boxShadow = '';
        });
    });
}

// Advanced Project Hover Effects
function initProjectHoverEffects() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        // Add tilt effect based on mouse position
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            this.style.transform = `translateY(-15px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
    });
}

// Theme Toggle (Day/Night mode)
function initThemeToggle() {
    const themeToggle = document.createElement('button');
    themeToggle.innerHTML = '🌓';
    themeToggle.className = 'fixed bottom-6 right-6 w-14 h-14 bg-white text-2xl rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50';
    themeToggle.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
    themeToggle.style.color = 'white';
    
    document.body.appendChild(themeToggle);
    
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        this.style.transform = 'rotate(180deg)';
        
        setTimeout(() => {
            this.style.transform = 'rotate(0deg)';
        }, 300);
    });
}

// Parallax Effects
function initParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.parallax');
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            const yPos = -(scrollTop * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// Magnetic Button Effect
function initMagneticButtons() {
    const magneticButtons = document.querySelectorAll('.btn');
    
    magneticButtons.forEach(button => {
        button.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const deltaX = (x - centerX) * 0.2;
            const deltaY = (y - centerY) * 0.2;
            
            this.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translate(0px, 0px)';
        });
    });
}

// Initialize moving/cloned photo that floats around the viewport
function initMovingPhoto() {
    try {
        const source = document.querySelector('.about-photo');
        if (!source) return;

        // Clone the element so layout doesn't shift
        const clone = source.cloneNode(true);
        clone.id = 'moving-photo';
        clone.classList.add('moving-photo');

        // Ensure fixed positioning and initial placement
        clone.style.position = 'fixed';
        clone.style.left = '60%';
        clone.style.top = '20%';
        clone.style.transform = 'translate(0, 0)';
        clone.style.pointerEvents = 'none';

        document.body.appendChild(clone);

        // Movement state
        let x = window.innerWidth * 0.6;
        let y = window.innerHeight * 0.2;
        let vx = (Math.random() * 1.2 + 0.2) * (Math.random() > 0.5 ? 1 : -1);
        let vy = (Math.random() * 1.2 + 0.2) * (Math.random() > 0.5 ? 1 : -1);
        const pad = 24;

        function step() {
            // Slight random acceleration for organic movement
            vx += (Math.random() - 0.5) * 0.05;
            vy += (Math.random() - 0.5) * 0.05;

            // Clamp speed
            vx = Math.max(Math.min(vx, 3), -3);
            vy = Math.max(Math.min(vy, 3), -3);

            x += vx;
            y += vy;

            const maxX = window.innerWidth - clone.offsetWidth - pad;
            const maxY = window.innerHeight - clone.offsetHeight - pad;

            if (x < pad) { x = pad; vx *= -1; }
            if (x > maxX) { x = maxX; vx *= -1; }
            if (y < pad) { y = pad; vy *= -1; }
            if (y > maxY) { y = maxY; vy *= -1; }

            clone.style.transform = `translate(${Math.round(x)}px, ${Math.round(y)}px)`;
            requestAnimationFrame(step);
        }

        // Kick off animation
        requestAnimationFrame(step);

        // Keep the cloned photo within bounds on resize
        window.addEventListener('resize', () => {
            const maxXR = window.innerWidth - clone.offsetWidth - pad;
            const maxYR = window.innerHeight - clone.offsetHeight - pad;
            if (x > maxXR) x = maxXR;
            if (y > maxYR) y = maxYR;
        });
    } catch (e) {
        console.error('initMovingPhoto error', e);
    }
}

// Add CSS animations dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInFromTop {
        0% {
            transform: translateY(-100%);
            opacity: 0;
        }
        100% {
            transform: translateY(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutToTop {
        0% {
            transform: translateY(0);
            opacity: 1;
        }
        100% {
            transform: translateY(-100%);
            opacity: 0;
        }
    }
    
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .dark-theme {
        background: linear-gradient(135deg, #1a1a2e, #16213e);
        color: white;
    }
    
    .dark-theme .nav-link {
        color: #e5e7eb;
    }
    
    .dark-theme .project-card {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
    }
    
    .skill-tag {
        opacity: 0;
        transform: translateY(20px) scale(0.8);
        transition: all 0.3s ease;
    }
`;
document.head.appendChild(style);

// FPS logger: on-page overlay + console warnings when FPS drops
function initFPSLogger() {
    try {
        if (typeof window === 'undefined' || !document.body) return;
        if (localStorage && localStorage.getItem('fps-logger') === 'off') return;

        const overlay = document.createElement('div');
        overlay.id = 'fps-counter';
        overlay.style.position = 'fixed';
        overlay.style.bottom = '12px';
        overlay.style.left = '12px';
        overlay.style.padding = '6px 10px';
        overlay.style.background = 'rgba(0,0,0,0.6)';
        overlay.style.color = '#b2f5ea';
        overlay.style.fontFamily = 'ui-monospace, SFMono-Regular, Menlo, Monaco, "Roboto Mono", monospace';
        overlay.style.fontSize = '12px';
        overlay.style.borderRadius = '8px';
        overlay.style.zIndex = '99999';
        overlay.style.pointerEvents = 'none';
        overlay.style.backdropFilter = 'blur(4px)';
        overlay.style.boxShadow = '0 6px 18px rgba(0,0,0,0.35)';
        overlay.textContent = 'FPS: —';
        document.body.appendChild(overlay);

        let last = performance.now();
        let frames = 0;
        let lastWarn = 0;
        const warnThreshold = 40; // change threshold here
        const warnInterval = 5000; // minimum ms between console warnings

        function tick(now) {
            frames++;
            const delta = now - last;
            if (delta >= 250) { // update UI every 250ms
                const fps = Math.round((frames / delta) * 1000);
                frames = 0;
                last = now;
                overlay.textContent = `FPS: ${fps}`;
                overlay.style.color = fps < warnThreshold ? '#ff6b6b' : '#b2f5ea';

                if (fps < warnThreshold && (now - lastWarn) > warnInterval) {
                    console.warn(`[FPS Logger] Low FPS detected: ${fps}`);
                    lastWarn = now;
                }
            }
            requestAnimationFrame(tick);
        }

        requestAnimationFrame(tick);

        // Toggle visibility with Ctrl+Shift+F
        document.addEventListener('keydown', (e) => {
            if (e.key === 'F' && e.ctrlKey && e.shiftKey) {
                if (overlay.style.display === 'none') overlay.style.display = 'block';
                else overlay.style.display = 'none';
            }
        });

        // Expose for debugging
        window.__fpsLogger = { overlay };
    } catch (err) {
        console.error('initFPSLogger error', err);
    }
}

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Optimize scroll events
const optimizedScrollHandler = throttle(function() {
    // Your scroll handling code here
}, 16); // ~60fps

window.addEventListener('scroll', optimizedScrollHandler);

// Scroll progress indicator
function initializeScrollProgress() {
    // Create progress bar element
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// Intersection Observer for animations
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
                entry.target.style.animationDelay = `${entry.target.dataset.delay || 0}ms`;
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.project-card, .skill-category, .timeline-item');
    animatedElements.forEach((el, index) => {
        el.dataset.delay = index * 100;
        observer.observe(el);
    });
}

// Contact form handling
function initializeContactForm() {
    const form = document.getElementById('contact-form');
    
    if (form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            // Show loading state
            submitBtn.innerHTML = '<span class="loading"></span> Sending...';
            submitBtn.disabled = true;
            
            // Simulate form submission (replace with actual form handling)
            try {
                await simulateFormSubmission(new FormData(form));
                
                // Show success message
                showNotification('Message sent successfully!', 'success');
                form.reset();
                
            } catch (error) {
                showNotification('Failed to send message. Please try again.', 'error');
            } finally {
                // Reset button state
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }
        });
    }
}

// Simulate form submission (replace with actual implementation)
async function simulateFormSubmission(formData) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Form data:', Object.fromEntries(formData));
            resolve();
        }, 2000);
    });
}

// Mobile menu functionality
function initializeMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.add('hidden');
            }
        });
    }
}

// Typewriter effect for hero section
function initializeTypewriter() {
    const titles = [
        'Computer Science Student',
        'Software Engineer', 
        'AI Enthusiast',
        'Community Leader',
        'Teaching Assistant'
    ];
    
    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typeSpeed = 100;
    const deleteSpeed = 50;
    const pauseTime = 2000;
    
    function typeWriter() {
        const heroSubtitle = document.querySelector('#home p');
        if (!heroSubtitle) return;
        
        const currentTitle = titles[titleIndex];
        
        if (isDeleting) {
            charIndex--;
        } else {
            charIndex++;
        }
        
        const displayText = currentTitle.substring(0, charIndex);
        heroSubtitle.innerHTML = `A passionate <span class="text-blue-600 font-semibold">${displayText}</span> at Williams College, building innovative solutions with AI and full-stack development.`;
        
        let timeout = typeSpeed;
        
        if (isDeleting) {
            timeout = deleteSpeed;
        }
        
        if (!isDeleting && charIndex === currentTitle.length) {
            timeout = pauseTime;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            titleIndex = (titleIndex + 1) % titles.length;
        }
        
        setTimeout(typeWriter, timeout);
    }
    
    // Start typewriter effect after a delay
    setTimeout(typeWriter, 1000);
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300 ${
        type === 'success' ? 'bg-green-500 text-white' : 
        type === 'error' ? 'bg-red-500 text-white' : 
        'bg-blue-500 text-white'
    }`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 100);
    
    // Hide notification after 3 seconds
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Scroll to top functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add scroll to top button
function addScrollToTopButton() {
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    scrollBtn.className = 'fixed bottom-6 right-6 w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 z-50 opacity-0 pointer-events-none';
    scrollBtn.onclick = scrollToTop;
    
    document.body.appendChild(scrollBtn);
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollBtn.classList.remove('opacity-0', 'pointer-events-none');
        } else {
            scrollBtn.classList.add('opacity-0', 'pointer-events-none');
        }
    });
}

// Initialize scroll to top button
addScrollToTopButton();

// Particle background effect (optional enhancement)
function createParticleBackground() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.className = 'fixed top-0 left-0 w-full h-full pointer-events-none z-0';
    document.body.appendChild(canvas);
    
    let particles = [];
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    function createParticles() {
        particles = [];
        const particleCount = Math.floor((canvas.width * canvas.height) / 10000);
        
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 2 + 1
            });
        }
    }
    
    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
            
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(79, 70, 229, 0.1)';
            ctx.fill();
        });
        
        requestAnimationFrame(animateParticles);
    }
    
    window.addEventListener('resize', () => {
        resizeCanvas();
        createParticles();
    });
    
    resizeCanvas();
    createParticles();
    animateParticles();
}

// Uncomment to enable particle background
// createParticleBackground();

// Performance optimization: Lazy loading for images
function initializeLazyLoading() {
    const images = document.querySelectorAll('img');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.remove('opacity-0');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        img.classList.add('opacity-0', 'transition-opacity', 'duration-500');
        imageObserver.observe(img);
    });
}

// Initialize lazy loading
initializeLazyLoading();

// Theme toggle functionality (bonus feature)
function initializeThemeToggle() {
    const themeToggle = document.createElement('button');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    themeToggle.className = 'fixed top-6 right-6 w-12 h-12 bg-white text-gray-900 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 md:top-24';
    
    document.body.appendChild(themeToggle);
    
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        const icon = themeToggle.querySelector('i');
        
        if (document.body.classList.contains('dark')) {
            icon.className = 'fas fa-sun';
        } else {
            icon.className = 'fas fa-moon';
        }
    });
}

// Uncomment to enable theme toggle
// initializeThemeToggle();
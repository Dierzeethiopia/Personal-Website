// Hamburger menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
hamburger.onclick = () => navMenu.classList.toggle('active');

// Dark mode toggle
const darkToggle = document.getElementById('darkModeToggle');
darkToggle.onclick = () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
};
if (localStorage.getItem('theme') === 'dark') document.body.classList.add('dark');

// Back to top button
const backToTop = document.getElementById('backToTop');
window.onscroll = () => {
    if (window.scrollY > 300) backToTop.style.display = 'flex';
    else backToTop.style.display = 'none';
};
backToTop.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

// Parallax effect for hero
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.parallax');
    if (hero) {
        hero.style.backgroundPositionY = `${window.scrollY * 0.4}px`;
    }
});

// Animate skill bars
function animateSkills() {
    document.querySelectorAll('.skill-bar').forEach(bar => {
        let skill = bar.getAttribute('data-skill');
        let width = 0;
        switch (skill) {
            case 'Python': width = 95; break;
            case 'Java': width = 90; break;
            case 'JavaScript': width = 90; break;
            case 'TypeScript': width = 80; break;
            case 'C#': width = 75; break;
            case 'SQL': width = 80; break;
            case 'React': width = 90; break;
            case 'Node.js': width = 85; break;
            case 'MongoDB': width = 80; break;
            case 'Express': width = 80; break;
            case 'Socket.io': width = 70; break;
            case 'Next.js': width = 75; break;
            default: width = 60;
        }
        if (!bar.querySelector('.bar')) {
            let barDiv = document.createElement('div');
            barDiv.className = 'bar';
            barDiv.style.width = '0';
            bar.appendChild(barDiv);
        }
        setTimeout(() => {
            bar.querySelector('.bar').style.width = width + '%';
        }, 400);
    });
}
let skillsAnimated = false;
window.addEventListener('scroll', () => {
    const skillsSection = document.querySelector('.about-skills');
    if (!skillsAnimated && skillsSection && skillsSection.getBoundingClientRect().top < window.innerHeight - 100) {
        animateSkills();
        skillsAnimated = true;
    }
});

// Project modals
document.querySelectorAll('.project-card').forEach(card => {
    card.onclick = () => {
        const modalId = card.getAttribute('data-modal');
        if (modalId) document.getElementById(modalId).classList.add('active');
    };
});
document.querySelectorAll('.modal .close').forEach(btn => {
    btn.onclick = (e) => {
        e.target.closest('.modal').classList.remove('active');
    };
});
window.onclick = (e) => {
    if (e.target.classList.contains('modal')) e.target.classList.remove('active');
};



// AOS animations
AOS.init({
    duration: 900,
    once: true,
    offset: 80,
});

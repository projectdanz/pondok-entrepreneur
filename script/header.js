const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.header__nav');
const mobileCta = document.querySelector('.mobile-cta');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');

        // Show/Hide mobile CTA based on menu state
        if (mobileCta) {
            if (navMenu.classList.contains('active')) {
                mobileCta.style.display = 'block';
            } else {
                mobileCta.style.display = 'none';
            }
        }
    });
}

// Close menu when clicking a link
document.querySelectorAll('.header__nav a').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    if (mobileCta) mobileCta.style.display = 'none';
}));

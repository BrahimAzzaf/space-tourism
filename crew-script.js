'use strict';

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    const isActive = hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');

    hamburger.setAttribute('aria-expanded', isActive);
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});


document.addEventListener('click', (event) => {
    if (!event.target.closest('.nav-link') && !event.target.closest('.hamburger')) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

let slides = document.querySelectorAll('.slide');
let i = 0;

function nextSlide() {
    slides.forEach(slide => slide.style.display = 'none');
    slides[i].style.display = 'flex';

    i = (i + 1) % slides.length;
    setTimeout(nextSlide, 5000);
}
nextSlide(); 

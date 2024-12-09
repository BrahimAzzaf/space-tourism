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
    if (!event.target.closest('.nav-links') && !event.target.closest('.hamburger')) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    }
});


const sections = {
    one: document.querySelector('.sec-1'),
    two: document.querySelector('.sec-2'),
    three: document.querySelector('.sec-3'),
};

const planetImages = {
    one: './assets/technology/image-launch-vehicle-landscape.jpg',
    two: './assets/technology/image-spaceport-landscape.jpg',
    three: './assets/technology/image-space-capsule-landscape.jpg',
};

const planetImg = document.querySelector('.img-1');

function showSection(sectionId) {
    Object.values(sections).forEach(section => {
        section.classList.add('hidden');
        section.style.transition = 'opacity 0.5s ease-in-out';
    });

    if (sections[sectionId]) {
        sections[sectionId].classList.remove('hidden');
        sections[sectionId].style.transition = 'opacity 1s ease-in-out';
    }

    if (planetImg && planetImages[sectionId]) {
        planetImg.src = planetImages[sectionId];
    }
}

document.querySelector('.sections').addEventListener('click', (event) => {
    const sectionId = event.target.id;
    if (sections[sectionId]) {
        showSection(sectionId);
    }
});

showSection('one');


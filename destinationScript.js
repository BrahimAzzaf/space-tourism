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
const planetContainers = {
    moon: document.querySelector('.moon_container'),
    mars: document.querySelector('.mars_container'),
    europa: document.querySelector('.europa_container'),
    titan: document.querySelector('.titan_container'),
};

const planetImages = {
    moon: './assets/destination/image-moon.webp',
    mars: './assets/destination/image-mars.webp',
    europa: './assets/destination/image-europa.webp',
    titan: './assets/destination/image-titan.webp',
}; const planetImg = document.querySelector('#moon-img');

function showPlanet(planetId) {
    Object.values(planetContainers).forEach(container => {
        container.classList.add('hidden');
        container.style.transition = 'opacity 0.5s ease-in-out';
    });

    if (planetContainers[planetId]) {
        planetContainers[planetId].classList.remove('hidden');
        planetContainers[planetId].style.transition = 'opacity 1s ease-in-out';
    }

    if (planetImg && planetImages[planetId]) {
        planetImg.src = planetImages[planetId];
    }
}

document.querySelector('.planets').addEventListener('click', (event) => {
    const planetId = event.target.id;
    if (planetContainers[planetId]) {
        showPlanet(planetId);
    }
});

showPlanet('moon');

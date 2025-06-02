// This script handles the hamburger menu toggle functionality
// and closes the menu when clicking outside of it.

const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

window.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
        menu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// GOQR.ME/API
// plano de negócio

// This script is used to show a carousel of images with next and previous buttons.

const slides = document.querySelectorAll('.overlay');
let currentSlide = 0;
let carouselInterval;
showSlide(currentSlide);

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
    });
    slides[index].classList.add('active');
    currentSlide = index;
}

function nextSlide() {
    showSlide((currentSlide + 1) % slides.length);
}

function startCarousel() {
    carouselInterval = setInterval(nextSlide, 5000);
}

function stopCarousel() {
    clearInterval(carouselInterval);
}

if (slides.length) {
    startCarousel();
    nextSlide();
} else {
    stopCarousel();
}

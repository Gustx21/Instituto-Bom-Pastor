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
    carouselInterval = setInterval(nextSlide, 7000);
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

// This script handles the donation button functionality
// which redirects to the donate page.
// It uses the 'pages/donate.html' path to redirect users.

const donateButtons = document.querySelectorAll('.donate-btn');

donateButtons.forEach(button => {
    button.addEventListener('click', () => {
        window.open('pages/donate.html', '_parent');
    });
});

// This script handles the learn more button functionality
// which redirects to the projects page.
// It uses the 'pages/projects.html' path to redirect users.

const learnMoreButtons = document.querySelectorAll('.learn-more-btn');

learnMoreButtons.forEach(button => {
    button.addEventListener('click', () => {
        window.open('pages/about.html', '_parent');
    });
});
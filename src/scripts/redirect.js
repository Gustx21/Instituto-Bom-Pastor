// This script handles the donation button functionality
// which redirects to the donate page.
// It uses the 'pages/donate.html' path to redirect users.

const donateButtons = document.querySelectorAll('.donate-btn');

donateButtons.forEach(button => {
    button.addEventListener('click', () => {
        window.open('donate.html', '_parent');
    });
});

// This script handles the learn more button functionality
// which redirects to the projects page.
// It uses the 'pages/projects.html' path to redirect users.

const learnMoreButtons = document.querySelectorAll('.learn-more-btn');

learnMoreButtons.forEach(button => {
    button.addEventListener('click', () => {
        window.open('about.html', '_parent');
    });
});
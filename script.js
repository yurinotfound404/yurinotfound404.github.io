window.addEventListener('scroll', function() { // Use quotes around 'scroll'
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});


const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

// Function to update the carousel
function updateCarousel() {
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === currentIndex) {
            slide.classList.add('active');
        }
    });
}

// Automatic scrolling
setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length; // Cycle through slides
    updateCarousel();
}, 3000); // Change slide every 5 seconds

// Initial update to set the first slide
updateCarousel();

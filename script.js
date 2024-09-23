window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

const slides = document.querySelectorAll(".slide");
let currentIndex = 0;

function updateCarousel() {
  slides.forEach((slide, index) => {
    slide.classList.remove("active");
    if (index === currentIndex) {
      slide.classList.add("active");
    }
  });
}

setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
}, 3000);
updateCarousel();

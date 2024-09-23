window.addEventListener('scroll', function() { // Use quotes around 'scroll'
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

document.addEventListener('DOMContentLoaded', function() {
    var navbar = document.getElementById('navbar');
    var navLinks = navbar.querySelectorAll('a');
    var homeSlider = document.querySelector('.home-slider');
    var slides = homeSlider.querySelectorAll('.slide');
    var slideIndex = 0;
    var colors = ['#ffb6c1', '#ffd700', '#dda0dd'];

    // Change navbar background on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scroll to section on click with pop-up animation
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            var targetId = link.getAttribute('href').substring(1);
            var targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - navbar.offsetHeight,
                behavior: 'smooth'
            });
            link.classList.add('active');
            setTimeout(() => link.classList.remove('active'), 300);
        });
    });

    // Slider functionality
    function showSlides() {
        slides.forEach((slide, index) => {
            slide.style.transform = `translateX(-${slideIndex * 50}%)`;
            if (slideIndex === index) {
                document.body.style.backgroundColor = colors[index];
            }
        });

        slideIndex++;
        if (slideIndex >= slides.length) {
            slideIndex = 0;
        }
    }

    showSlides(); // Initial call
    setInterval(showSlides, 3000); // Change image every 3 seconds
});

/**
 * COLLNET 2025 Website JavaScript
 * Main JavaScript file for interactive features
 */

document.addEventListener('DOMContentLoaded', function () {
    // Activate Bootstrap components
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Countdown Timer
    const countdownDate = new Date("September 19, 2025 09:00:00").getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        if (distance < 0) {
            document.getElementById("countdown").innerHTML =
                `<div class="alert alert-info">The conference has started!</div>`;
            return;
        }

        // Time calculations
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Update countdown elements if they exist
        if (document.getElementById("countdown-days")) {
            document.getElementById("countdown-days").innerText = days;
            document.getElementById("countdown-hours").innerText = hours;
            document.getElementById("countdown-minutes").innerText = minutes;
            document.getElementById("countdown-seconds").innerText = seconds;
        }
    }

    // Update the countdown every second if countdown element exists
    if (document.getElementById("countdown")) {
        updateCountdown(); // Run once immediately
        setInterval(updateCountdown, 1000); // Then run every second
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === "#") return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjusted for fixed navbar
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active nav link highlighting based on scroll position
    window.addEventListener('scroll', function () {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.pageYOffset + 100; // Adjusted for navbar height

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelector('.navbar .nav-link[href*=' + sectionId + ']')?.classList.add('active');
            } else {
                document.querySelector('.navbar .nav-link[href*=' + sectionId + ']')?.classList.remove('active');
            }
        });
    });

    // Gallery image modal (if gallery exists)
    const galleryImages = document.querySelectorAll('.gallery-item img');
    if (galleryImages.length > 0) {
        galleryImages.forEach(image => {
            image.addEventListener('click', function () {
                const modalImg = document.getElementById("modalImage");
                const modal = new bootstrap.Modal(document.getElementById('imageModal'));
                modalImg.src = this.src;
                modal.show();
            });
        });
    }
}); 
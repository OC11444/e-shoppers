document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const navToggle = document.querySelector('.nav-toggle'); // Assuming a class .nav-toggle for your hamburger icon/button
    const navLinks = document.querySelector('.nav-links'); // Assuming a class .nav-links for your navigation list

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('show-nav'); // Toggle a class to show/hide the menu
        });
    }

    // Add to Cart functionality (basic alert)
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn'); // Assuming a class .add-to-cart-btn for your buttons

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Product added to cart!');
        });
    });
});
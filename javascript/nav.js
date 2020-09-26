const navLinks = document.querySelector('.nav-links');
const hamburger = document.querySelector('.hamburger');

function slideNav() {
    navLinks.classList.toggle('nav-links-active');
}

hamburger.addEventListener('click', slideNav);
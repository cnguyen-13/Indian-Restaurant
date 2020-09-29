const navLinksList = document.querySelector('.nav-links');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelectorAll('.nav-link');

function slideNav() {
    navLinksList.classList.toggle('nav-links-active');
}

hamburger.addEventListener('click', slideNav);
navLinks.forEach(link => {
    link.addEventListener('click', slideNav)
})
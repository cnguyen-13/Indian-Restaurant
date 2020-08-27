const navLinksContainer = document.querySelector('.nav-links-container');
const hamburger = document.querySelector('.hamburger-menu');
const hamburgerLines = document.querySelectorAll('.line');
const header = document.querySelector('header');
let isNavDark = false;

function hamburgerX() {
    //Move nav links to frame
    navLinksContainer.classList.toggle('move-left');

    //Make X icon
    for (let i = 0; i < hamburger.children.length; i++) {
        const line = hamburger.children[i]
        const lineId = line.id;
        line.classList.toggle(`${lineId}-x`);
    }
}

function toggleDarkBgNav() {
    if (!isNavDark && window.pageYOffset > 5 && window.innerWidth > 768) {
        changeNav('#181818')
    } else if (isNavDark && window.pageYOffset <= 5 && window.innerWidth > 768) {
        changeNav('transparent')
    }
}

function changeNav(bgColor) {
    //Toggles Flag
    isNavDark = !isNavDark;

    //Change BG and TEXT colors
    header.style.backgroundColor = bgColor;
}

window.addEventListener('scroll', toggleDarkBgNav);
hamburger.addEventListener('click', hamburgerX);
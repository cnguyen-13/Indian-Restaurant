"use strict";

var navLinksContainer = document.querySelector('.nav-links-container');
var hamburger = document.querySelector('.hamburger-menu');
var hamburgerLines = document.querySelectorAll('.line');
var header = document.querySelector('header');
var isNavDark = false;

function hamburgerX() {
  //Move nav links to frame
  navLinksContainer.classList.toggle('move-left'); //Make X icon

  for (var i = 0; i < hamburger.children.length; i++) {
    var line = hamburger.children[i];
    var lineId = line.id;
    line.classList.toggle("".concat(lineId, "-x"));
  }
}

function toggleDarkBgNav() {
  if (!isNavDark && window.pageYOffset > 5 && window.innerWidth > 768) {
    changeNav('#181818');
  } else if (isNavDark && window.pageYOffset <= 5 && window.innerWidth > 768) {
    changeNav('transparent');
  }
}

function changeNav(bgColor) {
  //Toggles Flag
  isNavDark = !isNavDark; //Change BG and TEXT colors

  header.style.backgroundColor = bgColor;
}

window.addEventListener('scroll', toggleDarkBgNav);
hamburger.addEventListener('click', hamburgerX);
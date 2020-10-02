document.addEventListener('DOMContentLoaded', function () {
    new Zooming({
        bgColor: 'rgb(0,0,0)',
        bgOpacity: 0.9
    }).listen('.gallery-image');
})

if (window.innerWidth > 1024) {
    const timeline = gsap.timeline();
    timeline.from('.side-bg', {
        duration: 2,
        y: '-100%'
    }).from('.page-intro', {
        duration: 2,
        x: '-100%',
        ease: Power2.out
    }, '-=2').from('.nav-links', {
        opacity: 0,
        duration: 0.5,
    }, '-=0.25').from('.red-divider', {
        duration: 1,
        opacity: 0
    }, '-=0.5').from('.menu-sub-section', {
        duration: 0.4,
        y: -25,
        opacity: 0
    }, '-=0.5').from('.gallery-main', {
        duration: 2,
        y: '-100%'
    }, '-=2').from('.gallery-image', {
        duration: 1,
        y: -25,
        opacity: 0,
        stagger: 0.15
    }, '-=0.5');
}

if (window.innerWidth <= 1024) {
    const timeline = gsap.timeline();
    timeline.from('.nav-bar', {
        duration: 1,
        y: -50
    }).from('.gallery-main', {
        duration: 1,
        y: '-50%'
    }, '-=1').from('.gallery-image', {
        duration: 1,
        y: -25,
        opacity: 0,
        stagger: 0.15
    });
}
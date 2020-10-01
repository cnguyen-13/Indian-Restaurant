document.addEventListener('DOMContentLoaded', function () {
    new Zooming({
        bgColor: 'rgb(0,0,0)',
        bgOpacity: 0.9
    }).listen('.gallery-image');
})

if (window.innerWidth > 1024) {
    const timeline = gsap.timeline();
    timeline.from('.background-accent', {
        duration: 2,
        y: '-100%'
    }).from('.gallery-main', {
        duration: 2,
        y: '-100%'
    }, '-=2').from('.nav-links', {
        opacity: 0,
        duration: 0.5,
    }, '-=0.25').from('.gallery-image', {
        duration: 1,
        y: -50,
        opacity: 0,
        stagger: 0.25
    }, '-=0.25');
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
        y: -50,
        opacity: 0,
        stagger: 0.25
    }, '-=0.25');
}
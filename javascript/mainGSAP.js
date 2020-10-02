if (window.innerWidth > 1024) {
    const timeline = gsap.timeline();
    timeline.from('.hero-image', {
        duration: 2,
        height: 0,
    }).from('.side-bg', {
        duration: 2,
        y: '-100%'
    }, '-=2').from('.nav-links', {
        opacity: 0,
        duration: 0.5,
    }, '-=0.25').from('.about', {
        duration: 1,
        y: -25,
        opacity: 0
    }, '-=0.25');
}

if (window.innerWidth <= 1024) {
    const timeline = gsap.timeline();
    timeline.from('.nav-bar', {
        opacity: 0,
        duration: 1,
        y: -50
    }).from('.hero-image', {
        duration: 2,
        height: 0,
    }, '-=2').from('.about', {
        duration: 1,
        y: -25,
        opacity: 0
    });
}
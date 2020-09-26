if (window.innerHeight > 1024) {
    const timeline = gsap.timeline();
    timeline.from('.nav-links', {
        opacity: 0,
        duration: 2,
        x: -50
    }).from('.hero-image', {
        duration: 2,
        height: 0,
    }, '-=2').from('.background-accent', {
        duration: 2,
        y: '-100%'
    }, '-=2');
}



// const onclick = gsap.timeline();

if (window.innerHeight <= 1024) {
    gsap.from('.nav-bar', {
        opacity: 0,
        duration: 1,
        y: -50
    })
}
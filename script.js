gsap.registerPlugin(ScrollTrigger);
let tl = gsap.timeline();

tl.to('.gallery', {
  scale: 3.5,
  duration: 4, ease: "slow(0.7, 0.7, false)",
  scrollTrigger: {
    trigger: '.gallery',
    scroller:"body",
    markers: true,
    scrub: true,
    start: 'top 0',
    end:'top -400%',
    scrub:3
  }
});

tl.to("#left",{
    transform: "translateY(-50%)",
    scrollTrigger:{
        trigger:".gallery",
        scroller:"body",
        start: 'top 0',
    end:'top -400%',
    scrub:3
    }

})

tl.to("#right",{
    transform: "translateY(50%)",
    scrollTrigger:{
        trigger:".gallery",
        scroller:"body",
        start: 'top 0',
    end:'top -400%',
    scrub:3
    }

})

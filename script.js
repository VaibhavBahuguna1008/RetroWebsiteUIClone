//This will work as mouse follower. It will only act at page1
document.addEventListener("DOMContentLoaded", function() {
    const main = document.querySelector("#main");
    const crsr = document.querySelector(".cursor");

    // Cursor movement tracking
    main.addEventListener("mousemove", function(dets) {
        crsr.style.left = dets.clientX + "px";
        crsr.style.top = dets.clientY + "px";
    });

    // Locomotive Scroll Initialization
    const scroll = new LocomotiveScroll({
        el: main,
        smooth: true
    });
});

document.body.classList.add("no-scroll");

var a = gsap.timeline({
    onComplete: function() {
      // Remove the 'no-scroll' class after the animation completes
      document.body.classList.remove("no-scroll");
    }
});
//this will make the page to the bottom of scale 1/2
a.to("#page1",{
    y:"0vh",
    scale:0.6,
    duration:0
})
//this will shift the page to the screen of 1/2 the size as scale is 0.5
a.from("#page1",{
    y:"100vh",
    duration: 1,
    delay:1
})
//this will rotate the page and increase the scale
a.to("#page1",{
    rotate:360,
    duration:0.8,
    scale:1,
    scrub:3
})

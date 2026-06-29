window.addEventListener("DOMContentLoaded", () => {
    // Register your plugins
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);



    //getting parameters of the window
    let window_width = window.innerWidth;
    let window_height = window.innerHeight;

    gsap.to(".load-bar", {
        duration: 5,
        //important to have this in one line -> so it stays a string. That was the bug
        ease: "rough({ template: power1.out, strength: 1, points: 20, taper: none, randomize: true, clamp: false })",
        x: -window_width 
    });



    //update window parameters when resizing browser window
    window.addEventListener("resize", updateSize);



    function updateSize(){
        window_width = window.innerWidth;
        window_height = window.innerHeight;
        console.log("window size change to x:",window_width);
        console.log("and y:", window_height);
    }

});
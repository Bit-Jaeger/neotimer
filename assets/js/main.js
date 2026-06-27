// This waits until the browser has fully loaded the HTML and GSAP
window.addEventListener("DOMContentLoaded", () => {
  
    // Register your plugins
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

    let load_bar_tl = gsap.timeline();

    load_bar_tl.to(".load-bar", 
        {xPercent},
        {
        xPercent: 0, 
        duration: 5, 
        ease: "steps(12)"
      });
  });
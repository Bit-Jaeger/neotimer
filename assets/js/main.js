// This waits until the browser has fully loaded the HTML and GSAP
window.addEventListener("DOMContentLoaded", () => {
  
    // Register your plugins
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

    let load-bar-tl = gsap.timeline();

    load-bar-tl.to(".load-bar", { 
        x: -window.screen.width, 
        duration: 5, 
        ease: "steps(12)"
      });
  });
// This waits until the browser has fully loaded the HTML and GSAP
window.addEventListener("DOMContentLoaded", () => {
  

    // Register your plugins
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
  
    // Run your test animation
    gsap.to(".load-bar", { 
      x: -window.screen.width, 
      duration: 10, 
      ease: "steps(12)"
    });
  
  });
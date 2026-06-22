// This waits until the browser has fully loaded the HTML and GSAP
window.addEventListener("DOMContentLoaded", () => {
  
    // Register your plugins
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
  
    // Run your test animation
    gsap.to(".test-box", { 
      x: 300, 
      rotation: 360, 
      duration: 2, 
      ease: "bounce.out" 
    });
  
  });
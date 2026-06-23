// This waits until the browser has fully loaded the HTML and GSAP
window.addEventListener("DOMContentLoaded", () => {
  

    // Register your plugins
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
  
    // Run your test animation
    gsap.to(".test-box", { 
      x: window.screen.width, 
      duration: 10, 
      ease: "rough({ strength: 1, points: 20, template: none.out, taper: none, randomize: true, clamp: false })"
    });
  
  });
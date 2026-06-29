window.addEventListener("DOMContentLoaded", () => {
    // Register your plugins
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

    gsap.to(".load-bar", {
        duration: 5,
        // Corrected string-based rough ease configuration
        ease: "rough({ template: power1.out, strength: 1, points: 20, taper: none, randomize: true, clamp: false })",
        // Animates the element 100% to the left of its own starting position
        xPercent: -100 
    }); // Fixed missing closing bracket and parenthesis
});
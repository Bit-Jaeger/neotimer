window.addEventListener("DOMContentLoaded", () => {
    // Register your plugins
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);



    //getting parameters of the window
    let window_width = window.innerWidth;
    let window_height = window.innerHeight;

    gsap.to(".load-bar", {
        duration: 5,
        //important to have this in one line -> so it stays a string. That was the bug
        ease: "rough({template:none.out,strength: 1,points:20,taper:none,randomize:true,clamp:false})",
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

//Create Timeline to animate Boot sequence
let tl = gsap.TimeLine();

tl.to("interface-container", {opacity:1, delay:0.2})
.add(interfaceFlicker(4,1))
.add(interfaceNontransparent)
.to("interface-container")


function interfaceFlicker(duration, startFreq){
    let interface = document.getElementById("interface-container")

    interfaceTransparent(interface);


    interfaceNontransparent(interface);
    
}


function interfaceTransparent(interfaceEl){
    interfaceEl.style.opacity="0.0";
 }
function interfaceNontransparent(interfaceEl){
    interfaceEl.style.opacity="1.0";
}





});
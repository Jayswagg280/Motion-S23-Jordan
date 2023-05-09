import { gsap } from "gsap";

//QUIZ


let mainTL = gsap.timeline()

//PART 1

//mainTL.from(".red", {duration:1, ease: "power1.inOut", x:"-=150"})
//.from(".blue", {duration:1, ease: "power1.inOut", x:"+=150"}, "<")
//.to(".red", {duration:2, ease: "power1.inOut", y:"-=150"}, "+=1")
//.to(".blue", {duration:2, ease: "power1.inOut", y:"+=150"}, "<")


//PART 2

//mainTL.from(".graph", {duration:2, alpha:0, ease: "power1.inOut"})
//.from(".red", {duration:1, ease: "power1.inOut", x:"-=150"})
//.from(".blue", {duration:1, ease: "power1.inOut", x:"+=150"}, "<")
//.to(".red", {duration:2, ease: "power1.inOut", y:"-=150"}, "+=1")
//.to(".blue", {duration:2, ease: "power1.inOut", y:"+=150"}, "<")
 
//PART 3

mainTL.from(".graph", {duration:2, alpha:0, ease: "power1.inOut"})
.from(".red", {duration:1, ease: "Bounce.easeOut", x:"-=150"})
.from(".blue", {duration:1, ease: "Bounce.easeOut", x:"+=150"}, "<")
.to(".red", {duration:2, ease: "power1.inOut", y:"-=150"}, "+=1")
.to(".blue", {duration:2, ease: "power1.inOut", y:"+=150"}, "<")
.to(".red", {duration:2, ease: "power1.inOut", rotate:370}, "<+=1")
.to(".blue", {duration:2, ease: "power1.inOut", rotate:370}, "<")
.to(".red", {duration:0.2, ease: "power1.inOut", rotate:360})
.to(".blue", {duration:0.2, ease: "power1.inOut", rotate:360}, "<")
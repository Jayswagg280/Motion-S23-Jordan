import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
// import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
// import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
// import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(MotionPathPlugin);


//INIT
gsap.set("#closed", {scale:4});
gsap.set("#open", {scale:4});
gsap.set("#iris", {scale:4});
//gsap.set("#t-path", {autoAlpha:0});


function eyeAnimation(){
    let tl = gsap.timeline();

    tl.from("#closed", {duration:0.75, autoAlpha:0, ease:"none"})
    tl.from("#open", {duration:0.75, autoAlpha:0, ease:"none"})
    tl.from("#iris", {duration:0.5, autoAlpha:0, ease:"none"},"-=20%")
    tl.to("#closed", {duration:0.5, autoAlpha:0, ease:"none"},"-=20%")
    tl.to("#closed", {duration:0.2, scale:1, ease:"none", delay:1})
    tl.to("#open", {duration:0.2, scale:1, ease:"none"})
    tl.to("#iris", {duration:0.2, scale:1, ease:"none"},"<-=")
    ;


    return tl;


}

function mjtAnimation(){
  let tl = gsap.timeline();

  tl.from("#", {duration:0.75, autoAlpha:0, ease:"none"})
  

  ;


  return tl;


}






let mainTl = gsap.timeline();
mainTl.add(eyeAnimation())
.add(mjtAnimation())

;




// GSDevTools.create();
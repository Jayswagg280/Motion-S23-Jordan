import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
// import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
// import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
// import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(MotionPathPlugin);


//INIT

//gsap.set("#t-path", {autoAlpha:0});


function eyeAnimation(){
    let tl = gsap.timeline();

    tl.from("#closed", {duration:0.75, autoAlpha:0, ease:"none"})
    tl.from("#open", {duration:0.75, autoAlpha:0, ease:"none"})
    tl.from("#iris", {duration:0.5, autoAlpha:0, ease:"none"},"-=20%")
    tl.to("#closed", {duration:0.5, autoAlpha:0, ease:"none"},"-=20%")

    ;


    return tl;


}

function mjtAnimation(){
  let tl = gsap.timeline();

  tl.to("#MJT-clip", {duration:2,  y:"+=80", x:"+=40", ease:"power3", delay:0.7})
  

  ;


  return tl;


}

function typAnimation(){
  let tl = gsap.timeline();

  tl.from("#Museum-of", {duration:1, autoAlpha:0, ease:"none"})
  tl.from("#JURASSIC-TECHNOLOGY", {duration:1, autoAlpha:0, ease:"none"})
  

  ;


  return tl;


}

function dripAnimation(){
  let tl = gsap.timeline();


  tl.from("#drip-1", {duration:0.1, autoAlpha:0, ease:"none"})
  tl.from("#drip-2", {duration:0.1, autoAlpha:0, ease:"none"})
  tl.from("#drip-3", {duration:0.1, autoAlpha:0, ease:"none"})
  tl.from("#drip-4", {duration:0.1, autoAlpha:0, ease:"none"})
  tl.from("#drip-5", {duration:0.1, autoAlpha:0, ease:"none"})
 
  tl.to("#drip-1", {duration:1, scaleY:5, ease:"power2"})
  tl.to("#drip-1", {duration:0.5, scaleY:6, y:"+=500", ease:"power2.in"},"-=0.25")
  tl.to("#drip-3", {duration:1, scaleY:5, ease:"power2"},"-=0.95")
  tl.to("#drip-3", {duration:0.5, scaleY:6, y:"+=500", ease:"power2.in"},"-=0.25")
  tl.to("#drip-2", {duration:1, scaleY:5, ease:"power2"},"-=0.75")
  tl.to("#drip-2", {duration:0.5, scaleY:6, y:"+=500", ease:"power2.in"},"-=0.25")
  tl.to("#drip-4", {duration:1, scaleY:5, ease:"power2"},"-=0.75")
  tl.to("#drip-4", {duration:0.5, scaleY:6, y:"+=500", ease:"power2.in"},"-=0.25")
  tl.to("#drip-5", {duration:1, scaleY:5, ease:"power2"},"-=0.95")
  tl.to("#drip-5", {duration:0.5, scaleY:6, y:"+=500", ease:"power2.in"},"-=0.25")

  ;


  return tl;


}




let mainTl = gsap.timeline();
mainTl.add(eyeAnimation())
.add(mjtAnimation())
.add(typAnimation())
.add(dripAnimation(),"-=0.75")
;




// GSDevTools.create();
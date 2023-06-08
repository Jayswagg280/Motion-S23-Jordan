import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
// import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
// import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(MotionPathPlugin, DrawSVGPlugin, GSDevTools, MorphSVGPlugin, MotionPathHelper);

//INIT

function eyeAnimation(){
  let tl = gsap.timeline();
  tl.from("#closed",{duration:0.25, autoAlpha:0})
  
  ;

  return tl;

}


let mainTl = gsap.timeline();
mainTl.add(eyeAnimation())
    

;

//GSDevTools.create();

// tl.to("",{})  
// tl.from("",{})
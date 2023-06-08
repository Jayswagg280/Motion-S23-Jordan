import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(MotionPathPlugin, DrawSVGPlugin, GSDevTools);


//INIT
gsap.set("#closed", {scaleY:0.5});

//gsap.set("#t-path", {autoAlpha:0});


function eyeAnimation(){
    let tl = gsap.timeline();

    tl.from("#closed", {duration:0.5, y:"-=500", ease:"none"})


    ;


    return tl;


}







let mainTl = gsap.timeline();
mainTl.add(eyeAnimation())


;




GSDevTools.create();
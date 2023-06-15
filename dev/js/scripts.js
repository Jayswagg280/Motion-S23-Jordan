import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { CustomEase } from "gsap/CustomEase";
// import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
// import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
// import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(MotionPathPlugin,CustomEase);


//INIT

gsap.set("#clip", {y:"-=80"});
gsap.set("#v", {y:"+=130", x:"+=20"});
gsap.set("#e", {y:"+=130", x:"+=20"});
gsap.set("#r1", {y:"+=130", x:"+=20"});
gsap.set("#r2", {y:"+=130", x:"+=20"});
gsap.set("#trade", {x:"+=90", rotation:60});




function fiAnimation(){
    let tl = gsap.timeline();

    tl.fromTo("#fi", {y:"+=130"}, {duration:0.75, y:"0", ease:"expo.out"})
    tl.from("#fi", {duration:0.75, rotation:20, ease: CustomEase.create("custom", "M0,0 C0.126,0.382 0.324,1.018 0.426,1.176 0.568,1.397 0.818,1.001 1,1 ") },"<-=")
    tl.from("#fi", {duration:0.5, scale:0.5, ease:"power1"},"<-=")
    tl.from("#fi", {duration:0.3, x:"+=400", ease:"power3.inOut"})
    tl.to("#fi", {duration:0.5, rotation:25, ease:CustomEase.create("custom", "M0,0 C0.126,0.382 0.282,0.868 0.44,1.016 0.632,1.196 0.818,1.001 1,1 ")},"<-=")
    tl.to("#fi", {duration:1, rotation:0, ease:"elastic.out" },"-=20%")
    tl.from("#i", {duration:0.2, x:"-=70", ease:"none"},"<-=")
    tl.to("#dot", {duration:1, motionPath:{
      path:"#dot-path",
      align:"#dot-path",
      alignOrigin:[0.5, 0.5]

    }, ease: CustomEase.create("custom", "M0,0 C0.126,0.382 0.056,1 0.382,1 1.028,1 0.668,-0.254 1,0 ") },"<-=")
    tl.from("#dot", {duration:0.1, autoAlpha:0 },"-=1000%")
    ;


    return tl;


}

function vAnimation(){
  let tl = gsap.timeline();

  tl.to("#v", {duration:0.5, y:"0", x:"0", ease:"power2" },"<-=")
  tl.from("#v", {duration:1.5, rotation:60, ease:"elastic.out" },"<-=")
  
  

  ;


  return tl;


}

function r1Animation(){
  let tl = gsap.timeline();

  tl.to("#r1", {duration:0.5, y:"0", x:"0", ease:"power2" },"<-=")
  tl.from("#r1", {duration:1.5, rotation:60, ease:"elastic.out" },"<-=")
  
  

  ;


  return tl;


}

function r2Animation(){
  let tl = gsap.timeline();

  tl.to("#r2", {duration:0.5, y:"0", x:"0", ease:"power2" },"<-=")
  tl.from("#r2", {duration:1.5, rotation:60, ease:"elastic.out" },"<-=")
  
  

  ;


  return tl;


}

function eAnimation(){
  let tl = gsap.timeline();

  tl.to("#e", {duration:0.5, y:"0", x:"0", ease:"power2" },"<-=")
  tl.from("#e", {duration:1.5, rotation:60, ease:"elastic.out" },"<-=")
  
  

  ;


  return tl;


}

function tradeAnimation(){
  let tl = gsap.timeline();

  tl.to("#trade", {duration:1, rotation:0, x:"0", ease:"power2" },"<-=")
  
  

  ;


  return tl;


}

let mainTl = gsap.timeline();
mainTl.add(fiAnimation())
.add(r1Animation(),"-=1.25")
.add(r2Animation(),"-=1.45")
.add(eAnimation(),"-=1.45")
.add(vAnimation(),"-=1.45")
.add(tradeAnimation(),"-=1.45")
;




// GSDevTools.create();
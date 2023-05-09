import { gsap } from "gsap";

let mainTL = gsap.timeline({delay:0})
gsap.utils.toArray("img").forEach(img => {
  let hover = gsap.to(img, {scale: 1.12, duration: 0.5, paused: true, ease: "power1.inOut"});
  img.addEventListener("mouseenter", () => hover.play());
  img.addEventListener("mouseleave", () => hover.reverse());
})
gsap.utils.toArray("button").forEach(button => {
  let hover = gsap.to(button, {scale: 1.12, duration: 0.5, paused: true, ease: "power1.inOut"});
  button.addEventListener("mouseenter", () => hover.play());
  button.addEventListener("mouseleave", () => hover.reverse());
})

function navAni(){
  
  let tl = gsap.timeline();

  tl.from("#logo", {duration:2, alpha:0, delay:0})
  tl.from("#nav li", {duration:1, alpha:0, ease: "power2.out", y:"-=25"}, "-=0.5")
  ;

  return tl;
}

function heroAni(){
  
  let tl = gsap.timeline();

  tl.from("#hero article", {duration:2, alpha:0, ease: "power2.out", delay:0.5})
  tl.from("#hero-content", {duration:1.5, alpha:0, ease: "power2.out", scale: 0.75}, "-=0.5")
  ;

  return tl;
}

function salesAni(){
  
  let tl = gsap.timeline();
  let mm = gsap.matchMedia();

  tl.from("#about", {duration:2, alpha:0, ease: "power2.out", x:"-=35" , delay:1})
  ;

  mm.add("(max-width:1400px)", () =>{
  tl.from("#paintings", {duration:2, alpha:0, ease: "power2.out", y:"+=35"}, "-=0.75")
  tl.from("#sales", {duration:2, alpha:0, ease: "power2.out", y:"+=35"}, "<=")
  ;
});

mm.add("(min-width:1401px)", () =>{
  tl.from("#paintings", {duration:2, alpha:0, ease: "power2.out", y:"+=35"}, "<=")
  tl.from("#sales", {duration:2, alpha:0, ease: "power2.out", y:"+=35"}, "<=")
  ;
});

  return tl;
}

function learnAni(){
  
    let tl = gsap.timeline();
  
    tl.from("#hero-2", {duration:2, alpha:0, ease: "power2.out", delay:0.5})
    ;
  
    return tl;
  }

mainTL.add(navAni(),0)
.add(heroAni(),0)
.add(salesAni(),0)
.add(learnAni(),0)
;
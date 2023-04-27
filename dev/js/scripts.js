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

function logoAni(){
  
      let tl = gsap.timeline();

      tl.from("#logo", {duration:1, alpha:0, delay:0})
      ;
     
      return tl;
}

function navAni(){
  
  let tl = gsap.timeline();

  tl.from("#nav li", {duration:1, alpha:0, ease: "power2.out", y:"-=25", delay:0.25})
  ;

  return tl;
}

function heroAni(){
  
  let tl = gsap.timeline();

  tl.from("#hero article", {duration:2, alpha:0, ease: "power2.out", delay:0.5})
  ;

  return tl;
}

function contentAni(){
  
  let tl = gsap.timeline();

  tl.from("#hero-content", {duration:1.5, alpha:0, ease: "power2.out", scale: 0.75, delay:0.75})
  ;

  return tl;
}

function bookAni(){
  
  let tl = gsap.timeline();
  let mm = gsap.matchMedia();

  mm.add("(max-width:1400px)", () =>{
  tl.from("#book-covers", {duration:2,rotation:360, alpha:0, ease: "power2.out", y:"+=35", delay:1})
  ;
});

mm.add("(min-width:1401px)", () =>{
  tl.from("#book-covers", {duration:2, alpha:0, ease: "power2.out", y:"+=35", delay:1})
  ;
});

  return tl;
}


mainTL.add(logoAni())
.add(navAni(),0)
.add(heroAni(),0)
.add(contentAni(),0)
.add(bookAni(),0)

;
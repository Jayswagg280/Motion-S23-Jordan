import { gsap } from "gsap";

let mainTL = gsap.timeline({delay:0.5})

mainTL.from("#logo", {duration:1, alpha:0, delay:0},0)
.from("#nav li", {duration:1, alpha:0, ease: "power2.out", y:"-=25", delay:0},0.25)
.from("#hero article", {duration:2, alpha:0, ease: "power2.out", delay:0},0.5)
.from("#hero-content", {duration:1.5, alpha:0, ease: "power2.out", scale: 0.75, delay:0},1)
.from("#book-covers", {duration:2, alpha:0, ease: "power2.out", y:"+=35", delay:0},1.5)

;
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

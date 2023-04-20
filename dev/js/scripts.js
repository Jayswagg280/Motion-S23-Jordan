import { gsap } from "gsap";

gsap.from("#logo", {duration:1, alpha:0, delay:0.5})
gsap.from("#nav li", {duration:1, alpha:0, ease: "power2.out", y:"-=25", delay:0.5})
gsap.from("#hero-content", {duration:1, alpha:0, ease: "power2.out", scale: 0.75, delay:1.5})
gsap.from("#hero article", {duration:2, alpha:0, ease: "power2.out", delay:0.75})
gsap.from("#book-covers", {duration:2, alpha:0, ease: "power2.out", y:"+=35", delay:1.75})
gsap.utils.toArray("img").forEach(img => {
    let hover = gsap.to(img, {scale: 1.12, duration: 1.5, paused: true, ease: "power1.inOut"});
    img.addEventListener("mouseenter", () => hover.play());
    img.addEventListener("mouseleave", () => hover.reverse());
  });
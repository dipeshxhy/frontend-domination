import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  ScrollTrigger.update();
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

gsap.to(".page2 img", {
  width: "100%",
  scrollTrigger: {
    trigger: ".page2",
    start: "top top",
    end: "+=100%",
    pin: '.page2',
    scrub: true,
    markers: true,
  },
});

gsap.from(".page4 .circle", {
  scale: 0,
  opacity: 0,
  rotate: 360,
  scrollTrigger: {
    trigger: ".page4",
    start: "top 70%",
    end: "top 30%",
    scrub: 2,
    markers: true,
  },
});
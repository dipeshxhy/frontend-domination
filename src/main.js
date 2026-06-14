import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline()

tl.from('.page1 .circle',{
  scale:0,
  opacity: 0,
  rotate:760,
  duration:4,
 

})
tl.from('.page2 .circle',{
  scale:0,
  opacity: 0,
  rotate:360,
  duration:2,
  scrollTrigger:{
    trigger:'.page2 .circle',
    scroller:'body',
    start:'top 80%',
    end:'top 40%',
    scrub:1,
    
    markers:true,
  }

})
gsap.from('.page3 .circle',{
  scale:0,
  opacity: 0,
  rotate:360,
  duration:2,
  scrollTrigger:{
    trigger:'.page3 .circle',
    scroller:'body',
    start:'top 80%',
    end:'top 40%',
    scrub:1,
    markers:true,
  }
})
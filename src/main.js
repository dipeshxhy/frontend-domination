import LocomotiveScroll from 'locomotive-scroll';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const locomotiveScroll = new LocomotiveScroll();

gsap.to('.page2 img',{
  width: '100%',
  scrollTrigger: {
    trigger: '.page2 ',
    scroller: 'main',
    start: 'top 0%',
    end: 'top -100%',
    scrub: true,
    markers: true,
    pin: true,
  }
})


import { gsap } from 'gsap'
const tl = gsap.timeline({
  defaults:{
    duration:1,
    ease:'power4.in'
  }
})
tl.from('.nav div, .nav li',{
  y:-100,
  duration:2,
  opacity:0,
  // delay:0.4,
  stagger:0.1,
  ease:'power4.out'
})

// main title animation
tl.from('.title h1',{
  x:-1500,
  // opacity:0
  stagger:0.3,
  ease:'elastic.out(1,0.5)'
})

// images animation


tl.from('.images img',{
  x:100,
  opacity:0,
  stagger:1,
  rotate:45,
  ease:'power1.out'
},'-=1.5')


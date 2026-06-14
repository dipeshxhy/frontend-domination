import { gsap } from 'gsap'
// gsap.to('.box', {
//   // x: 400,
//   // duration: 2,
//   // rotation: 360,
//   // scale: 1.5,
//   // ease: 'bounce.out',
//   // left: '50%',
//   // position: 'absolute',
//   // top: '50%',
//   // xPercent: -50,
//   // yPercent: -50,
//   // duration: 2,
//   // ease: 'power2.out'
//   x:1000,
//   duration:2,
//   delay:1,
//   rotate:360,
//   repeat:-1,
//   // backgroundColor:'blue'
// })

let tl = gsap.timeline()

tl.to('#box1',{
  x:1200,
  rotate:360,
  duration:2,
  scale:0.5,
  // delay:1,
})
tl.to('#box2',{
  x:1200,
  rotate:360,
  duration:2,
  scale:0.5,
  // delay:2,
})
tl.from('#box3',{
  x:1200,
  rotate:360,
  duration:2,
  scale:0.5,
  // delay:3,
})
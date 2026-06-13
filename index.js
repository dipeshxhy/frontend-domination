const img1 = document.querySelector('#img1');
const img2 = document.querySelector('#img2');
const btn = document.querySelector('button');
const src1 = img1.getAttribute('src');
const src2 = img2.getAttribute('src');

let isToggle = false;
btn.addEventListener('click', function() {
  if(!isToggle) {
    img1.setAttribute('src', src2);
    img2.setAttribute('src', src1);
  } else {
    img1.setAttribute('src', src1);
    img2.setAttribute('src', src2);
  }  
  isToggle = !isToggle;
});
   
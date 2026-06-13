// event handling
/**
 * whenever 
 */

const btn = document.querySelector("button");
btn.addEventListener("click", function(e) {
  console.log("Button clicked!");
  btn.textContent = 'starting ...';
  btn.style.backgroundColor = 'red';
})


document.body.addEventListener('mousemove', function(e) {
  console.log(`Mouse moved at (${e.clientX}, ${e.clientY})`);
})
const btn = document.querySelector("button");
const stopBtn = document.querySelector("#stopBtn");
const h1 = document.querySelector("h1");
let intervalId;
let count = 0;
const setCount = ()=>{
   intervalId= setInterval(() => {
    count++;
    h1.textContent = count;
  }, 1000);

}
btn.addEventListener("click", () => {
  setCount();
})
stopBtn.addEventListener("click", () => {
  clearInterval(intervalId);
})
const btn = document.querySelector('button');
const pText = document.querySelector('p');
btn.addEventListener('click',(e)=>{
pText.textContent = "Nice, Hello I am Dipesh"
btn.textContent = 'Changed!'
})
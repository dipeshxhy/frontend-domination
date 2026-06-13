//1. selection
const button = document.querySelector('button');
const downloadText= document.querySelector('p')


console.log(button.textContent)
button.addEventListener('click', () => {
button.innerHTML ='Download'
let count = 0;
const interval = setInterval(() => {
    count++;
    downloadText.textContent = `Downloading... ${count}%`
    if(count === 100){
        clearInterval(interval);
        downloadText.textContent = 'Download complete'
    }
}, 100);
})
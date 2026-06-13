const progressTrack = document.querySelector('.progress');
const textProgress = document.querySelector('.textProgress');
let count = [10,20,30,40,50,60,70,80,90,100];
const intervalId = setInterval(() => {
  const value = count.shift();
  progressTrack.style.width = `${value}%`;
  progressTrack.innerHTML = `${value}%`;
  textProgress.innerHTML = `downloading ${value}%`;
  if (count.length === 0) {
    textProgress.innerHTML = `download completed :)`;
    clearInterval(intervalId)};
}, 1000);
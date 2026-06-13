const tab = document.querySelector('.tabs')
const texts = document.querySelectorAll('.texts p')
console.log(texts)
hideAll()
texts[0].style.display = 'block'
texts[0].style.width = '50%'
tab.addEventListener('click',(e)=>{
  console.log(e.target)
  hideAll()
  if(e.target.id==='home'){
    texts[0].style.display = 'block'
  }else if(e.target.id==='about'){
    texts[1].style.display = 'block'
  }else if(e.target.id==='contact'){
    texts[2].style.display = 'block'
  }
})

function hideAll(){
  for(let elem of texts){
    elem.style.display = 'none'
  }
}
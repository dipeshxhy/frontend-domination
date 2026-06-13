const form = document.querySelector('form')
const inp1 = document.querySelector('#inp1')  
const removeBtn= document.querySelector('#removeBtn')
const lis = document.querySelectorAll('li')



form.addEventListener('submit',(e)=>{
  e.preventDefault();
  let inp1Value = inp1.value;
  if(!inp1Value){
    alert('Please fill the input')
  }else{
    const li = document.createElement('li');
    li.textContent = inp1Value;
    document.querySelector('ul').appendChild(li);
    inp1.value = '';
  }
})

removeBtn.addEventListener('click', (e)=>{
  e.preventDefault();
  console.log(lis)
 
  const lastLi = document.querySelector('ul li:last-child');
  if(lastLi){
    lastLi.remove();
  }
  
})
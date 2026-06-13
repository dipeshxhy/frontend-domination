const form = document.querySelector('form')
const inp1 = document.querySelector('#inp1')  
const inp2 = document.querySelector('#inp2')


form.addEventListener('submit',(e)=>{
  e.preventDefault();
  let inp1Value = inp1.value;
  let inp2Value = inp2.value;
  if(!inp1Value || !inp2Value){
    alert('Please fill both the inputs')
  }else{
    console.log(inp1Value, inp2Value)
  }
})
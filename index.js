// closure
// -> the inner function has access to the outer function's variables and parameters, even after the outer function has returned.

function counter(){
  let count =0
  return function(){
    count++;
    console.log(count);
  }
}
const count1 = counter();
count1(); // 1
count1(); // 2
count1(); // 3

function timer(){
  let a= 23
  return setTimeout(function(){
    console.log(a); 
  }, 1000);
}
timer(); // 23
console.log('hello')
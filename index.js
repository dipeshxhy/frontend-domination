
let count = 0;
const interval = setInterval(() => {
count++;
if(count===3)  return clearInterval(interval);
console.log(count);
}, 1000);

// promise
const promise=new Promise((resolve, reject) => {
  // fetch user or if gender is male then log grren light and not red 
  fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => {
      const user = data.results[0];
      resolve(user);
    }).catch(error => reject(error));
    
});
promise.then(user => {
  // console.log(user);
  if(user.gender === 'male') {
    console.log('green light',user.name.first);
  } else {
    console.log('red light',user.name.first);
  }
}).catch(error => console.error(error));


function getUser(url,cb){
  fetch(url)    .then(response => response.json())
    .then(data => {
      const user = data.results[0];
      cb(null, user);
    }).catch(error => cb(error, null));
}
// getUser('https://randomuser.me/api/', (error, user) => {
//   if(error) return console.error(error);
//   console.log(user.name.first);
//   console.log(user.location.country);
// })


// cb vs promise vs async await
function dataFetcher(url, cb) {
  fetch(url)
    .then(response => response.json())
    .then(data => cb(null, data))
    .catch(error => cb(error, null));
}
dataFetcher('https://randomuser.me/api/', (error, data) => {
  if (error) return console.error(error);
  console.log(data.results[0].name.first);
});

function dataFetcherPromise(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => response.json())
      .then(resolve)
      .catch(reject);
  });
}


dataFetcherPromise('https://randomuser.me/api/')
  .then(data => console.log(data.results[0].name.first))
  .catch(error => console.error(error));

async function dataFetcherAsync(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.results[0].name.first);
  } catch (error) {
    console.error(error);
  }
}
dataFetcherAsync('https://randomuser.me/api/');

// generator
function* generatorFunction() {
  yield 'Hello';
  yield 'World';
  return 'Done';
}
const generator = generatorFunction();
console.log(generator.next()); // { value: 'Hello', done: false }
console.log(generator.next()); // { value: 'World', done: false }
console.log(generator.next()); // { value: 'Done', done: true }

function* printNums(){
  for(let i=1; i<=5; i++){
    yield i;
  }
}
const numGenerator = printNums();
document.querySelector('button').addEventListener('click', () => {
  const nextNum = numGenerator.next();
  if (!nextNum.done) {
    console.log(nextNum.value);
  }
  console.log(nextNum)
});

// web worker
// main.js
// const worker = new Worker('worker.js');
// worker.postMessage('Hello, Worker!');
// worker.onmessage = (event) => {
//   console.log('Message from worker:', event.data);
// };

// // worker.js
// self.onmessage = (event) => {
//   console.log('Message from main thread:', event.data);
//   self.postMessage('Hello, Main Thread!');
// };


let nums = Array.from({ length: 1000000 }, (_, i) => i + 1);

const worker = new Worker('worker.js');
worker.postMessage(nums);
worker.onmessage = (event) => {
  console.log('Sum of numbers:', event.data);
};
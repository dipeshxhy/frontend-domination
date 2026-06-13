self.onmessage= (event) => {
  console.log('Message from main thread:', event.data);
  const {data} = event;
  const result = data.reduce((acc, num) => acc + num, 0);
  console.log(result)
  self.postMessage(result);
  // const result =event.data.reduce((acc, num) => acc + num, 0);
  // self.postMessage('hello');
}
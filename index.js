const h1 = document.querySelector('h1');

h1.style.color = 'red'
h1.style.fontFamily = 'Arial, sans-serif'
h1.style.fontSize = '34px'
h1.style.background = 'coral'

// classlist

const h2 = document.querySelector('h2');
h2.classList.add('red')
h2.classList.remove('red')
h2.classList.toggle('red') // add if not present, remove if present
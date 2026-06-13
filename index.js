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

// create element
const img = document.createElement('img');
img.src = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFuZGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
img.alt = 'A beautiful panda'
document.body.appendChild(img)

const ul = document.createElement('ul');
ul.innerHTML +=`
<li>item1</li>
<li>item2</li>
<li>item3</li>
`
document.body.appendChild(ul)

h1.remove()
console.log(this) // window
function abcd() {
  console.log(this)
}
abcd(); // window

// this.name 

let obj = {
  name:function(){
    console.log(this)// object
  }
}

// obj.name()

let obj2 = {
  name:function(){
    console.log(this)
    function hello(){
      console.log(this) // window
    }
    hello()
  }
}

let obj3 = {
  name:function(){
    console.log(this)
    let hello = () => {
      console.log(this) // object
    }
    hello()
  }
}

// constructor fun
function add(){
  console.log(this)
}
const a = new add() // add {}

const button = document.querySelector('button')
button.addEventListener('click', function(){
  console.log(this) // button
})

button.addEventListener('click', () => {
  console.log(this) // window
})
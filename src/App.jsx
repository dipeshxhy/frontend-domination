import { useState } from "react"
import Card from "./Card"

const data = [{
  id:1,
  name:'Dipesh Chaudhary',
  description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.',
  image:'https://images.unsplash.com/photo-1773332611612-ffdaa753afb1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3MXx8fGVufDB8fHx8fA%3D%3D',
  isFollow:true
},{
  id:2,
  name:'Manisha Kumari',
  description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.',
  image:'https://images.unsplash.com/photo-1773332611573-5e5bfa8e5de5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3OHx8fGVufDB8fHx8fA%3D%3D',
  isFollow:false
},{
  id:3,
  name:'Sumit Kadel',
  description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.',
  image:'https://plus.unsplash.com/premium_photo-1779372801181-0d00b1448662?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDJ8fHxlbnwwfHx8fHw%3D' ,
  isFollow:true
}]

const App = () => {
  const [value,setValue] = useState(data)
  const [count,setCount] = useState(0)
  const handleFollow = (id) => {
    setValue(prevValue => 
      prevValue.map(item => 
        item.id === id ? {...item, isFollow: !item.isFollow} : item
      )
    );
  }
  const renderCard =value.map(item => (
 <Card key={item.id} id={item.id} name={item.name} description={item.description} image={item.image} isFollow={item.isFollow} onFollow={handleFollow} />
  
)) 
  return (
    <div className="bg-slate-800 text-white h-screen flex flex-col justify-center items-center">
     <h2>{count}</h2>
     <button onClick={() => setCount(count + 1)}>increase</button>
     <button onClick={() => setCount(count - 1)}>decrease</button>
      
    </div>
  )
}

export default App
import Card from "./Card"

const data = [{
  id:1,
  name:'Dipesh Chaudhary',
  description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.',
  image:'https://images.unsplash.com/photo-1773332611612-ffdaa753afb1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3MXx8fGVufDB8fHx8fA%3D%3D'
},{
  id:2,
  name:'Manisha Kumari',
  description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.',
  image:'https://images.unsplash.com/photo-1773332611573-5e5bfa8e5de5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3OHx8fGVufDB8fHx8fA%3D%3D'
},{
  id:3,
  name:'Sumit Kadel',
  description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.',
  image:'https://plus.unsplash.com/premium_photo-1779372801181-0d00b1448662?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDJ8fHxlbnwwfHx8fHw%3D' 
}]

const App = () => {
  const renderCard =data.map(item => (
 <Card key={item.id} name={item.name} description={item.description} image={item.image} />
  
)) 
  return (
    <div className="bg-slate-800 text-black h-screen flex justify-center items-center">
      <div className="flex gap-4">
        {
         renderCard
        }
      </div>
      
    </div>
  )
}

export default App
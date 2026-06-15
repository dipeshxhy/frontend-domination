import { useForm } from 'react-hook-form'

const App = () => {
  const {register, handleSubmit} = useForm()

  const submit = (data) => {
    console.log(data)
  }
  return (
    <div>
    
    <form action="" onSubmit={handleSubmit(submit)}>
      <input type="text" {...register("name")} />
      <input type="text" {...register("email")} />
      <button>submit</button>
    </form>
    </div>
  )
}

export default App
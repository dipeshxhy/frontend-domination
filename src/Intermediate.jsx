import React from 'react'

const Intermediate = () => {
  const [value,setValue] = React.useState(0)
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={() => setValue(prev=>prev+1)}>change {value}</button>
    </div>
  )
}

export default Intermediate
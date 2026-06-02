import React, { useState } from 'react'

const App = () => {

  const [a, setA] = useState(20)

  const changeNum= () =>{
    setA(30);
  }

  

  return (
    <div>
      <h1>Value of a is {a}</h1>
      <button onClick={changeNum}>Click</button>
    </div>
  )
}

export default App
import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setcounter] = useState(15)

  // let counter = 15

  const addValue = () => {
      // console.log("value added", counter);
      counter = counter + 1
      setcounter(counter)
  }

  const removeValue = () => {
    // console.log("value removed", counter);
    counter = counter - 1
    setcounter(counter)
  }

  return (
    <>
      <h1>Count On</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add Value: {counter}</button>
      <br />
      <button
      onClick={removeValue}>Remove value: {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App

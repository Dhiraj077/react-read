import { useState } from 'react'
import './App.css'

function App() {
  const [result, setResult] = useState("")

  const handleclick = e => setResult(result.concat(e.target.id))

  const clear = () => setResult("")

  const deleteEL = () => setResult(result.slice(0, -1))

  const calculate = () => {
    try {
      setResult(eval(result).toString())
    } catch (error) {
      setResult("Error")
    }
  }

  return (
    <>
    <div className='calculator'>
        <input type="text" value={result} disabled/>
    

    <div className='buttons'>
        <button className='operator' onClick={clear}>AC</button>
        <button className='operator' onClick={deleteEL}>DEL</button>

        <button id='.' className='operator' onClick={handleclick}>.</button>
        <button id='/' className='operator' onClick={handleclick}>/</button>

        <button id='7' className='number' onClick={handleclick}>7</button>
        <button id='8' className='number' onClick={handleclick}>8</button>
        <button id='9' className='number' onClick={handleclick}>9</button>

        <button id='*' className='operator' onClick={handleclick}>X</button>

        <button id='4' className='number' onClick={handleclick}>4</button>
        <button id='5' className='number' onClick={handleclick}>5</button>
        <button id='6' className='number' onClick={handleclick}>6</button>

        <button id='-' className='operator' onClick={handleclick}>-</button>

        <button id='1' className='number' onClick={handleclick}>1</button>
        <button id='2' className='number' onClick={handleclick}>2</button>
        <button id='3' className='number' onClick={handleclick}>3</button>

        <button id='+' className='operator' onClick={handleclick}>+</button>

        <button id='00' className='number' onClick={handleclick}>00</button>
        <button id='0' className='number' onClick={handleclick}>0</button>

        <button id='=' className='operator col-span-2 ' onClick={calculate}>=</button>

    </div>
    </div>
    </>
  )
}

export default App

// Import React and the useState hook from the react library
import React, {useState} from 'react'

// Import the useDispatch hook from the react-redux library
import {useDispatch} from 'react-redux'

// Import the addTodo action creator from the todoSlice
import {addTodo} from '../features/todo/todoSlice'

// Define a React component named AddTodo
function AddTodo() {
  // Use the useState hook to create a state variable named input, initialized to an empty string
  const [input, setInput] = useState('')

  // Use the useDispatch hook to get the dispatch function from the Redux store
  const dispatch = useDispatch()

  // Define a function named addTodoHandler that will be called when the form is submitted
  const addTodoHandler = (e) => {
    // Prevent the default form submission behavior
    e.preventDefault()

    // Dispatch the addTodo action creator with the current input value
    dispatch(addTodo(input))

    // Clear the input field
    setInput('')
  }

  // Return a JSX element representing the AddTodo component
  return (
    // A form element with a submit event handler set to addTodoHandler
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      {/* // An input field with a value bound to the input state variable */}
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        // Update the input state variable when the user types something
        onChange={(e) => setInput(e.target.value)}
      />
      {/* // A submit button with a label "Add Todo" */}
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
  )
}

// Export the AddTodo component as the default export
export default AddTodo
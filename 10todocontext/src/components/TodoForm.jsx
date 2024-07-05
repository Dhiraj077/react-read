// Import React and the useState hook from the react library
import React, { useState } from 'react'

// Import the useTodo hook from the TodoContext
import { useTodo } from '../contexts/TodoContext'

// Define a React function component called TodoForm
function TodoForm() {
  // Initialize a state variable called todo with an initial value of an empty string
  const [todo, setTodo] = useState("")

  // Use the useTodo hook to get the addTodo function from the TodoContext
  const { addTodo } = useTodo()

  // Define a function called add that will be called when the form is submitted
  const add = (e) => {
    // Prevent the default form submission behavior
    e.preventDefault()

    // If the todo input field is empty, do nothing and return
    if (!todo) return

    // Call the addTodo function from the TodoContext, passing an object with the todo text and a completed status of false
    addTodo({ todo, completed: false })

    // Clear the todo input field by setting the state to an empty string
    setTodo("")
  }

  // Return a JSX element representing the TodoForm component
  return (
    // A form element with an onSubmit event handler set to the add function
    <form onSubmit={add} className="flex">
      {/* // An input field for the user to enter a todo item */}
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todo}
        // Update the todo state variable when the user types in the input field
        onChange={(e) => setTodo(e.target.value)}
      />
      {/* // A submit button to add the todo item */}
      <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
        Add
      </button>
    </form>
  );
}

// Export the TodoForm component as the default export
export default TodoForm;
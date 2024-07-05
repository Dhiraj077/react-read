// Import React and the useState hook from the react library
import React, { useState } from 'react';

// Import the useTodo hook from the TodoContext
import { useTodo } from '../contexts/TodoContext';

// Define the TodoItem component, which receives a todo object as a prop
function TodoItem({ todo }) {
  // Initialize a state variable to track whether the todo is editable
  const [isTodoEditable, setIsTodoEditable] = useState(false);

  // Initialize a state variable to store the todo message
  const [todoMsg, setTodoMsg] = useState(todo.todo);

  // Get the updateTodo, deleteTodo, and toggleComplete functions from the TodoContext
  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  // Define a function to edit the todo
  const editTodo = () => {
    // Update the todo with the new message
    updateTodo(todo.id, {...todo, todo: todoMsg });
    // Set the todo as not editable
    setIsTodoEditable(false);
  };

  // Define a function to toggle the completion status of the todo
  const toggleCompleted = () => {
    // Toggle the completion status of the todo
    toggleComplete(todo.id);
  };

  // Return the JSX for the TodoItem component
  return (
    <div
      // Style the container div based on whether the todo is completed
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todo.completed? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      <input
        // Create a checkbox to toggle the completion status of the todo
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={toggleCompleted}
      />
      <input
        // Create a text input to edit the todo message
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isTodoEditable? "border-black/10 px-2" : "border-transparent"
        } ${todo.completed? "line-through" : ""}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      {/* Edit, Save Button */}
      <button
        // Create a button to edit or save the todo
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          // If the todo is completed, do nothing
          if (todo.completed) return;

          // If the todo is editable, save the changes
          if (isTodoEditable) {
            editTodo();
          } else {
            // Otherwise, toggle the editable state
            setIsTodoEditable((prev) =>!prev);
          }
        }}
        disabled={todo.completed}
      >
        {isTodoEditable? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button
        // Create a button to delete the todo
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
}

// Export the TodoItem component
export default TodoItem;
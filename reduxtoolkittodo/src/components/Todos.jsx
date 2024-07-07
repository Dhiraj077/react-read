// Import React and two hooks from react-redux: useSelector and useDispatch
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Import the removeTodo action creator from the todoSlice
import { removeTodo } from '../features/todo/todoSlice';

// Define the Todos component
function Todos() {
  // Use the useSelector hook to get the todos from the Redux state
  const todos = useSelector(state => state.todos);

  // Use the useDispatch hook to get the dispatch function
  const dispatch = useDispatch();

  // Return the JSX for the component
  return (
    // A fragment (<>...</>) is used to wrap the JSX elements
    <>
      <br></br>
      {/* // A div with the text "Todos" and a font size of 2xl */}
      <div className='text-2xl'>Todos</div>
      {/* // An unordered list with no bullets */}
      <ul className="list-none">
        {
          // Map over the todos array and render a list item for each todo
          todos.map((todo) => (
            <li
              // Styles for the list item: margin top 4, flexbox layout, background color, padding, and rounded corners
              className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
              key={todo.id}
            >
              {/* // Display the text of the todo */}
              <div className='text-white'>{todo.text}</div>
              {/* // A button to remove the todo */}
              <button
                // When the button is clicked, dispatch the removeTodo action with the todo's id
                onClick={() => dispatch(removeTodo(todo.id))}
                // Styles for the button: text color, background color, border, padding, and rounded corners
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
              >
                {/* // An SVG icon for the button */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  {/* // The SVG path for the icon */}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </li>
          ))
        }
      </ul>
    </>
  );
}

// Export the Todos component
export default Todos;
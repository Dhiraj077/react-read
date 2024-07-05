// Import necessary React hooks and the TodoProvider component
import { useState, useEffect } from 'react';
import { TodoProvider } from './contexts';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

// Define the App component
function App() {
  // Initialize the todos state with an empty array
  const [todos, setTodos] = useState([]);

  // Define a function to add a new todo
  const addTodo = (todo) => {
    // Update the todos state by adding the new todo to the beginning of the array
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  // Define a function to update a todo
  const updateTodo = (id, todo) => {
    // Update the todos state by mapping over the array and replacing the todo with the matching id
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)));
  };

  // Define a function to delete a todo
  const deleteTodo = (id) => {
    // Update the todos state by filtering out the todo with the matching id
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  // Define a function to toggle the completion status of a todo
  const toggleComplete = (id) => {
    // Update the todos state by mapping over the array and toggling the completion status of the todo with the matching id
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo
      )
    );
  };

  // Use the useEffect hook to load todos from local storage when the component mounts
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos && storedTodos.length > 0) {
      setTodos(storedTodos);
    }
  }, []);

  // Use the useEffect hook to save todos to local storage whenever the todos state changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Return the JSX for the App component
  return (
    // Wrap the app in the TodoProvider component to provide the todos and functions to child components
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Render the TodoForm component */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/* Loop over the todos and render a TodoItem component for each one */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

// Export the App component
export default App;
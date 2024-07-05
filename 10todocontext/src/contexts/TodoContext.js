// Importing createContext and useContext from the React library
import { createContext, useContext } from "react"

// Creating a context called TodoContext with an initial value
export const TodoContext = createContext({
    // Initial todos array with one todo item
    todos: [
        {
            id: 1,
            todo: " Todo msg",
            completed: false,
        }
    ],
    // Placeholder functions for adding, updating, deleting, and toggling todo items
    addTodo: (todo) => {}, 
    updateTodo: (id, todo) => {}, 
    deleteTodo: (id) => {}, 
    toggleComplete: (id) => {}
})

// Creating a custom hook to access the TodoContext
export const useTodo = () => {
    // Using the useContext hook to access the TodoContext
    return useContext(TodoContext)
}

// Exporting the TodoContext Provider
export const TodoProvider = TodoContext.Provider
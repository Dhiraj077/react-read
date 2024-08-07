// Import the createSlice function from @reduxjs/toolkit, which is used to create a slice of the Redux state.
// Also import the nanoid function, which is used to generate unique IDs for todos.
import { createSlice, nanoid } from "@reduxjs/toolkit";

// Define the initial state of the todo slice. In this case, it's an object with a single property called "todos",
// which is an array containing a single todo item with an ID of 1 and text "Hello World".
const initialState = {
    todos: [{id:1, text: "Hello World"}]
}

// Create a slice of the Redux state called "todo" using the createSlice function.
// The createSlice function takes an object with three properties: name, initialState, and reducers.
export const todoSlice = createSlice({
    // The name of the slice.
    name: "todo",
    // The initial state of the slice.
    initialState,
    // An object containing the reducers for this slice. Reducers are functions that take the current state
    // and an action, and return a new state.
    reducers: {
        // The addTodo reducer. This reducer is called when the addTodo action is dispatched.
        // It takes the current state and an action, and returns a new state with the new todo item added.
        addTodo: (state, action) => {
            // Create a new todo item with a unique ID generated by nanoid, and the text from the action payload.
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            // Add the new todo item to the end of the todos array.
            state.todos.push(todo)
        },
        // The removeTodo reducer. This reducer is called when the removeTodo action is dispatched.
        // It takes the current state and an action, and returns a new state with the todo item removed.
        removeTodo: (state, action) => {
            // Use the filter method to create a new array containing only the todo items that do not have
            // the ID specified in the action payload.
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        }
    }
})

// Extract the action creators for the addTodo and removeTodo reducers from the todoSlice.
export const {addTodo, removeTodo} = todoSlice.actions

// Export the reducer function for the todo slice. This function will be used to create the Redux store.
export default todoSlice.reducer
// Import the useState hook from React
import { useState } from 'react'

// Define the App component
function App() {
  // Initialize the color state with a default value of 'olive'
  const [color, setColor] = useState('olive')

  // Return the JSX for the App component
  return (
    // A div element that takes up the full width and height of the screen
    // with a transition duration of 200ms
    <div 
      className="w-full h-screen duration-200"
      // Set the background color of the div to the current color state
      style={{ backgroundColor: color }}
    >
      {/* // A fixed div element at the bottom of the screen with some padding */}
      <div 
        className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'
      >
        {/* // A container div element with some styling */}
        <div 
          className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'
        >
          {/* // A series of button elements with different colors and labels */}
          {/* // Each button, when clicked, updates the color state to its corresponding color */}
          <button 
            onClick={() => { setColor("red") }}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
            style={{ backgroundColor: "red" }}
          >Red</button>
          <button 
            onClick={() => { setColor("green") }}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
            style={{ backgroundColor: "green" }}
          >Green</button>
          <button 
            onClick={() => { setColor("blue") }}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
            style={{ backgroundColor: "blue" }}
          >Blue</button>
          <button 
            onClick={() => { setColor("pink") }}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
            style={{ backgroundColor: "pink" }}
          >Pink</button>
          <button 
            onClick={() => { setColor("orange") }}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
            style={{ backgroundColor: "orange" }}
          >Orange</button>
          <button 
            onClick={() => { setColor("gray") }}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
            style={{ backgroundColor: "gray" }}
          >Gray</button>
        </div>
      </div>
    </div>
  )
}

// Export the App component as the default export
export default App
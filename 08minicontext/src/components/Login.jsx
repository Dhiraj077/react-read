// Import React and its hooks (useContext and useState) from the 'react' library
import React, { useContext, useState } from 'react'

// Import the UserContext from the '../context/UserContext' file
import UserContext from '../context/UserContext'

// Define a functional component named Login
const Login = () => {

  // Use the useState hook to create two state variables: username and password
  // Both are initialized with an empty string
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  // Use the useContext hook to get the setUser function from the UserContext
  const { setUser } = useContext(UserContext)

  // Define a handleSubmit function that will be called when the form is submitted
  const handleSubmit = (e) => {
    // Prevent the default form submission behavior
    e.preventDefault()
    // Call the setUser function with the current username and password
    setUser(username, password)
  }

  // Return the JSX for the Login component
  return (
    <div>
      <h2>Login</h2>
      {/* Input field for the username */}
      <input 
        type="text" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
        placeholder='username'/>
        {"    "}
      {/* Input field for the password */}
      <input 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        placeholder='password'/>
        {"    "}
      {/* Button to submit the form */}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

// Export the Login component as the default export
export default Login
// Import React and the useContext hook from the react library
import React, { useContext } from 'react'

// Import the UserContext from the ../context/UserContext file
import UserContext from '../context/UserContext'

// Define a functional component named Profile
const Profile = () => {

  // Use the useContext hook to get the user object from the UserContext
  const {user} = useContext(UserContext)

  // If the user object is null or undefined, return a div with a "Please Login" message
  if (!user) return <div>Please Login</div>

  // If the user object is present, return a div with a welcome message including the user's username
  return (
    <div>Welcome {user.username}</div>
  )
}

// Export the Profile component as the default export
export default Profile
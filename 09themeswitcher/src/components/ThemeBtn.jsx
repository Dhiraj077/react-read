// Import React and the useTheme hook from the theme context
import React from 'react';
import useTheme from '../contexts/theme';

// Define the ThemeBtn component
export default function ThemeBtn() {
  // Use the useTheme hook to get the current theme mode, light theme function, and dark theme function
  const { themeMode, lightTheme, darkTheme } = useTheme();

  // Define a function to handle changes to the checkbox
  const onChangeBtn = (e) => {
    // Get the current state of the checkbox
    const darkModeStatus = e.currentTarget.checked;
    
    // If the checkbox is checked, apply the dark theme
    if (darkModeStatus) {
      darkTheme();
    } 
    // Otherwise, apply the light theme
    else {
      lightTheme();
    }
  };

  // Return the JSX for the theme toggle button
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      {/* The checkbox input */}
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        onChange={onChangeBtn}
        // Set the checkbox to be checked if the current theme mode is "dark"
        checked={themeMode === "dark"}
      />
      
      {/* The toggle button */}
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      
      {/*  The label text */}
      <span className="ml-3 text-sm font-medium text-gray-900">Toggle Theme</span>
    </label>
  );
}
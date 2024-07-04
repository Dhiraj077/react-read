// Importing necessary React hooks and components
import { useEffect, useState } from 'react';
import './App.css'; // Importing App component's CSS file
import { ThemeProvider } from './contexts/theme'; // Importing ThemeProvider from theme context
import ThemeBtn from './components/ThemeBtn'; // Importing ThemeBtn component
import Card from './components/Card'; // Importing Card component

// Defining the App component
function App() {
  // Initializing state for theme mode with default value "light"
  const [themeMode, setThemeMode] = useState("light");

  // Function to set theme mode to "light"
  const lightTheme = () => {
    setThemeMode("light");
  };

  // Function to set theme mode to "dark"
  const darkTheme = () => {
    setThemeMode("dark");
  };

  // Using useEffect hook to update the HTML document's class list based on the theme mode
  useEffect(() => {
    // Remove existing "light" and "dark" classes from the HTML element
    document.querySelector('html').classList.remove("light", "dark");
    // Add the current theme mode class to the HTML element
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode]); // The effect will re-run whenever the themeMode state changes

  // Returning the JSX for the App component
  return (
    // Wrapping the content with the ThemeProvider to provide theme-related values to child components
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* Rendering the ThemeBtn component */}
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            {/* Rendering the Card component */}
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

// Exporting the App component as the default export
export default App;
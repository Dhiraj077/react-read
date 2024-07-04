// Importing createContext and useContext hooks from React
import { createContext, useContext } from "react";

// Creating a new context called ThemeContext with default values
export const ThemeContext = createContext({
  // Initial theme mode is set to "light"
  themeMode: "light",
  // Two empty functions for toggling dark and light themes
  darkTheme: () => {},
  lightTheme: () => {}
});

// Exporting the Provider component of the ThemeContext
export const ThemeProvider = ThemeContext.Provider;

// A custom hook to access the ThemeContext
export default function useTheme(){
  // Using the useContext hook to access the ThemeContext
  return useContext(ThemeContext);
}
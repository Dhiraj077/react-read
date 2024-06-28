import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  // State variables to store the length of the password, whether numbers and characters are allowed, and the generated password
  const [length, setLength] = useState(0);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // Create a ref to the password input field
  const passwordRef = useRef(null);

  // A memoized function to generate a new password based on the current state
  const passGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    // Add numbers and characters to the string if they are allowed
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+~`";

    // Generate a password of the specified length
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    // Update the password state
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  // A memoized function to copy the password to the clipboard
  const copyPassToClip = useCallback(() => {
    // Select the password input field
    passwordRef.current.select();
    // Write the password to the clipboard
    window.navigator.clipboard.writeText(password);
  }, [password]);

  // Run the password generator whenever the length, numberAllowed, or charAllowed state changes
  useEffect(() => {
    passGenerator();
  }, [length, numberAllowed, charAllowed, passGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          {/* Password input field, read-only and with a ref */}
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          {/* Copy button */}
          <button
            onClick={copyPassToClip}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-sky-700"
          >
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          {/* Length slider */}
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length: {length}</label>
          </div>
          {/* Number checkbox */}
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          {/* Character checkbox */}
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
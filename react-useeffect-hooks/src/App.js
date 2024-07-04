import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
   const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;

    // Optional: Specify how to clean up after this effect:
    return function cleanup() {
      document.title = `React App`;
    };
  }, [count]); // Only re-run the effect if count changes

  return (
    <div>
      <p>
      The useEffect hook allows you to perform side effects in function components. 
      Side effects include data fetching, subscribing to event handlers, manual DOM mutations, timers, etc. 
      By using this Hook, you tell React that your component needs to do something after render.
      </p>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <br></br>
      <p>In this example, the useEffect function runs after every render when the count state changes. Inside useEffect, we update the document title using the count. The cleanup function resets the title when the component unmounts or before the next effect run (because count changed).
React skips applying an effect if certain values (specified as second argument array) haven’t changed between re-renders.</p>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import React, { useContext } from 'react';

// Create a Context
const NumberContext = React.createContext();

// It returns a Provider and a Consumer. 
// In functional component, we can skip the Consumer and use the useContext hook.

function Display() {
  // useContext accepts a context object and returns the current context value.
  const value = useContext(NumberContext);
  return <h1>The answer is {value}.</h1>;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>useContext hook</h3>
        <p>
        The useContext hook is a function that lets you use the value of a given context. 
        It accepts a context object (the value returned from React.createContext) and returns 
        the current context value for that context..
        </p>
        <br></br>
        <p>This hook can make it easier to access values from a provider, 
          without having to use a Consumer or wrap components in it.</p>
        <br></br>
        // Use the Provider to make a value available to all
        // children and grandchildren
        <NumberContext.Provider value={42}>
          <div>
            <Display />
          </div>
        </NumberContext.Provider>
      </header>
     
    </div>
  );
}

export default App;

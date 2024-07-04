
import './App.css';
import react, {useState} from 'react';

function App() {

  const[count, setCount] = useState(4);

  function decrementCount(){
    setCount(count -1);
  }

  function incrementeCount(){
    setCount(count + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <br></br>
        <button class="btn" onClick={decrementCount}>-</button>
        <span>{count}</span>
        <button class="btn" onClick={incrementeCount}>+</button>
      </header>
    </div>
  );
}  

export default App;

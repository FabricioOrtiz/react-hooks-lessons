
import './App.css';
import react, {useState} from 'react';

function countInitial(){
  console.log('run function');
  return 4;
}

function App() {

  //const[count, setCount] = useState(countInitial());
  /*function decrementCount(){
    setCount(count -1);
  }

  function incrementeCount(){
    setCount(count + 1);
  }*/

  const[countV2, setCountV2] = useState(() => {
    console.log('run function');
    return 4;
  });

  function decrementCountV2(){
    setCountV2(prevCount => prevCount -1);
  }

  function incrementeCountV2(){
    setCountV2(prevCount => prevCount + 1);
  }

  //section object in useState init
  const[state, setState] = useState({count: 4, theme: 'red'});
  const count = state.count;
  const theme = state.theme;

  function incrementeCountObject(){
    setState(prevState => {
      return {...prevState,count : prevState.count + 1}
    });
  }

  return (
    <div className="App">
      {/*<header className="App-header">
        <br></br>
        Init useState on any action
        <button class="btn" onClick={decrementCount}>-</button>
        <span>{count}</span>
        <button class="btn" onClick={incrementeCount}>+</button>
      </header>*/}

      <header className="App-header">
        <br></br>
        Init correctly
        <button class="btn" onClick={decrementCountV2}>-</button>
        <span>{countV2}</span>
        <button class="btn" onClick={incrementeCountV2}>+</button>
      </header>

      <header className="App-header">
        <br></br>
        Init with object
        
        <span>{count}</span>
        <span>{theme}</span>
        <button class="btn" onClick={incrementeCountObject}>+</button>
      </header>
    </div>
  );
}  

export default App;

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br></br>
        <button class="btn">-</button>
        <span></span>
        <button class="btn">+</button>
      </header>
    </div>
  );
}

export default App;

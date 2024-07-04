import React, {useState} from 'react';
import './App.css';

function App() {
  const [resourceType, setResourceType] = useState('posts')

  return (
    <div className="App">
      <header className="App-header">
        <button class="btn" onClick={()  => setResourceType('posts')}>Post</button>
        <button class="btn" onClick={()  => setResourceType('users')}>users</button>
        <button class="btn" onClick={()  => setResourceType('comments')}>comments</button>
      </header>
      <h1>{resourceType}</h1>
    </div>
  );
}

export default App;

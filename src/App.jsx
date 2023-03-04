import './App.css';
import React, { useState } from 'react';
import Counter from './components/Counter';

function App() {

  const [showCounter, setShowCounter] = useState(true)

  const handleCounter = () => {
    setShowCounter(prev => !prev);
  }

  return (
    <div className="App">
      <h1>Hello IronHack</h1>
      <button onClick={handleCounter}>Show & hide counter</button>
      {showCounter && <Counter />}
    </div>
  );
}

export default App;

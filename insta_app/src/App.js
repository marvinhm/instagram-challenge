import React, { useState } from 'react';
import Login from './lib/login';
import Counter from './lib/counter';


// import './App.css';

function App() {
  const [count, setCount] = useState(0);


  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;

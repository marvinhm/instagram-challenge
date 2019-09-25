import React, { useState } from 'react';
import User from './lib/user'
import Login from './lib/login';
import Counter from './lib/counter';


// import './App.css';

function App() {
  const [count, setCount] = useState(0);


  return (
    <div className="App">
      <User />
    </div>
  );
}

export default App;

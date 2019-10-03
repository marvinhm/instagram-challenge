import React, { useState } from 'react';
import User from './components/user'
import Login from './components/login';
import Counter from './components/counter';


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

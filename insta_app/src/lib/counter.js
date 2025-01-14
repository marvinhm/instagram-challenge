import React, { Component } from 'react';
// import './App.css';

class Counter extends Component {
  state = {
    count: 0
  }

  makeIncrementer = amount => () => 
    this.setState(prevState => ({
          count: prevState.count + amount,
    }))
    

  increment = this.makeIncrementer(1)

  decrement = this.makeIncrementer(-1)
  
  render() {
    return (
        <div className="App">
          <p>You clicked {this.state.count} times</p>
          <button className="increment" onClick={this.increment}>
            +++
          </button>

          <button className="decrement" onClick={this.decrement}>
            ---
          </button>
        </div>
    );
  }
 
}

export default Counter;

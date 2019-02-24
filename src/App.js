import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <div className="square">logo</div>
        <div>
          <button>Create Account</button>
          <button>Login</button>
        </div>
      </div>
    );
  }
}

export default App;

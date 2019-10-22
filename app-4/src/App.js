import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Hooks from './Components/Hooks'

import Login from './Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Hooks</h2>
        <Hooks />
      </div>
    );
  }
}

export default App;

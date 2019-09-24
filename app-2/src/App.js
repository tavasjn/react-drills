import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {


  constructor(){
    super();

    this.state = {
      dinner: [
        'pizza',
        'salad',
        'Dr.pepper',
        'pineapple'
      ]
    }
  }


  render() {
    return (
      <div className="App">
        {this.state.dinner.map((element) => (
          <h2>{element}</h2>
        ))}
      </div>
    );
  }
}

export default App;

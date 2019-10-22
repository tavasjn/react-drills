import React, { Component } from "react";
import "./App.css";
import Hooks from './Components/Hooks';

class App extends Component {

  handleChange(filter) {
    this.setState({ filterString: filter });
  }

  render() {
    return(
      <div className='App'>
        <Hooks />
      </div>
    )
  }
}

export default App;

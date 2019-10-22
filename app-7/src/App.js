import React, { Component } from "react";
import "./App.css";
import NewTask from './NewTask';
import List from './List';
import Hooks from './Components/Hooks';


class App extends Component {

  // constructor() {
  //   super();

  //   this.state = {
  //     list: []
  //   };

  //   this.handleAddTask = this.handleAddTask.bind(this);
  // }


  // handleAddTask(task) {
  //   this.setState({ list: [...this.state.list, task] });
  // }


  render() {
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <Hooks />
      </div>
    );
  }
}

export default App;

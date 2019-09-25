import React, { Component } from "react";
import "./App.css";

import Todo from './Todo';

class App extends Component {

  constructor(){
    super();

    this.state ={
      userInput: '',
      listArr: []
    }
    this.handleAddTask = this.handleAddTask.bind(this);
  }

  handleInputChange(value){
    this.setState({
      userInput: value
    })
  }

  handleAddTask(){
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ''
    })
  }

  
  render() {
    let list = this.state.list.map((element, index) => {
      return <Todo key={index} task={element} />;
    })
    return (
      <div className="App">
        <div>
          <input
            value={this.state.input}
            placeholder='Enter new task'
            onChange={(e) => this.handleInputChange(e.target.value)}
          />
          <button onClick={this.handleAddTask}>Add</button>
        </div>

        <br />
        {list}
      </div>

    );
  }


}

export default App;

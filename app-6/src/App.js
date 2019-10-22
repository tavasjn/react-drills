import React, { Component } from "react";
import "./App.css";
import Hooks from "./Components/Hooks";

class App extends Component {

  // constructor(){
  //   super();

  //   this.state ={
  //     userInput: '',
  //     listArr: []
  //   }
  //   this.handleAddTask = this.handleAddTask.bind(this);
  // }

  // handleInputChange(value){
  //   this.setState({
  //     userInput: value
  //   })
  // }

  // handleAddTask(){
  //   this.setState({
  //     list: [...this.state.list, this.state.input],
  //     input: ''
  //   })
  // }

  
  render(){
    return(
      <div className='App'>
        <h2>Hooks</h2>
        <Hooks />
      </div>
    )
  }
}

export default App;

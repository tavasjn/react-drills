import React, { Component } from "react";
import "./App.css";
import HooksComponent from './Components/Hooks'
import routes from './routes';
import { HashRouter } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <HooksComponent />
          {routes}
        </HashRouter>
      </div>
    );
  }
}

export default App;

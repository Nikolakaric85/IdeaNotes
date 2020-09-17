import React, { Component, useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Add from "./component/Add";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Add />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

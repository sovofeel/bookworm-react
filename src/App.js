import React, { Component } from "react";
import { Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" component={LoginPage} />
      </div>
    );
  }
}

export default App;

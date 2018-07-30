import React, { Component } from "react";
import logo from "./logo.svg";
import { Provider } from "react-redux";
import Landing from "./components/Landing";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <p>Web console</p>
          <Landing />
        </div>
      </Provider>
    );
  }
}

export default App;

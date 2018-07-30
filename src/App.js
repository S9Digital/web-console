import React, { Component } from "react";
import logo from "./logo.svg";
import { Provider } from "react-redux";
import styled from "styled-components";
import store from "./store";
import Landing from "./components/Landing";
import Header from "./components/Header";

const Wrapper = styled.div`width: 100% height: 100%; `;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Wrapper>
          <Header />
          <Landing />
        </Wrapper>
      </Provider>
    );
  }
}

export default App;

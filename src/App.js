import React, { Component } from "react";
import logo from "./logo.svg";
import { Provider } from "react-redux";
import styled from "styled-components";
import store from "./store";
import Landing from "./components/Landing";
import Header from "./components/Header";
import RoomList from "./components/RoomList";
import Room from "./components/Room";

const Wrapper = styled.div`width: 100% height: 100%;`;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Wrapper>
          <Header />
          {/* <Landing /> */}
          <RoomList />
          {/* <Room /> */}
        </Wrapper>
      </Provider>
    );
  }
}

export default App;

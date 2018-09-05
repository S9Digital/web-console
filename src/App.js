import React, { Component } from "react";
import { Provider } from "react-redux";
import styled from "styled-components";
import store from "./store";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Defaults from "./components/Defaults";
import Profile from "./components/Profile";
import Home from "./components/Home";
import Property from "./components/Property";
import RoomList from "./components/RoomList";
import Room from "./components/Room";

const Wrapper = styled.div``;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Wrapper>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/property/:propertyId/profile" component={Profile} />
              <Route
                path="/property/:propertyId/default"
                component={Defaults}
              />

              <Route
                path="/property/:propertyId/rooms/:roomId"
                component={Room}
              />
              <Route path="/property/:propertyId/rooms" component={RoomList} />
              <Route path="/property/:propertyId" component={Property} />
            </Switch>
          </Router>
        </Wrapper>
      </Provider>
    );
  }
}

export default App;

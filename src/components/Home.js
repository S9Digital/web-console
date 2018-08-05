import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  withRouter
} from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;
const Logo = styled.div`
  width: 100px;
  height: 75px;
  border: 1px solid black;
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const LoginContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Login = styled.form`
  width: 200px;
  height: 400px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const TextInput = styled.input`
  width: 200px;
  height: 50px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const OptionInput = styled.option`
  width: 200px;
  height: 50px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "username",
      password: "password",
      propertyId: ""
    };
  }
  handleClick() {
    this.props.history.push(`/property/:${this.state.propertyId}`);
  }
  changeProperty(e) {
    this.setState({ propertyId: e.target.value });
  }
  renderPropertySelect(property) {
    return <OptionInput value={property.id}>{property.name}</OptionInput>;
  }
  render() {
    return (
      <Wrapper>
        <Logo>LOGO</Logo>
        <p>Welcome to Ario Living Hopsitality Web Console</p>
        <LoginContainer>
          <Login>
            <p>Property</p>
            <select
              name="properties"
              value={this.state.propertyId}
              onChange={e => this.changeProperty(e)}
            >
              {this.props.properties.map(property =>
                this.renderPropertySelect(property)
              )}
            </select>
            <TextInput
              value={this.state.username}
              onChange={username => this.setState({ username })}
            />
            <TextInput
              value={this.state.password}
              onChange={password => this.setState({ password })}
            />
            <TextInput
              type="submit"
              value="submit"
              onSubmit={() => this.handleClick()}
            />
          </Login>
        </LoginContainer>
      </Wrapper>
    );
  }
}
const mapStateToProps = (state, props) => ({
  properties: state.properties
});
const mapDispatchToProps = dispatch => ({});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
);

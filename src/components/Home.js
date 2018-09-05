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
// const Overlay = styled.div`
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0.4);
// `;
const Logo = styled.div`
  width: 100px;
  height: 75px;
  border: 1px solid black;
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Title = styled.p`
  font-size: 45px;
  color: white;
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
  height: 200px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const TextInput = styled.input`
  outline: none;
  width: 195px;
  height: 50px;
  margin: 5px;
  border: 1px solid black;
  border-radius: 5px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SubmitInput = styled.input`
  width: 80px;
  height: 30px;
  margin: 5px;
  border-radius: 5px;
  background-color: #38352a;
  color: white;
`;
const SelectInput = styled.select`
  width: 200px;
  height: 50px;
  margin: 5px;
  border-radius: 5px;
  border-color: black;
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
      username: "",
      password: "",
      propertyId: "123"
    };
  }
  handleClick(e) {
    e.preventDefault();
    this.props.users.map(user => {
      if (
        this.state.username === user.name &&
        this.state.password === user.password
      ) {
        this.props.history.push(`/property/${this.state.propertyId}`);
      }
    });
  }
  changeProperty(e) {
    this.setState({ propertyId: e.target.value });
  }
  changeUsername(e) {
    this.setState({ username: e.target.value });
  }
  changePassword(e) {
    this.setState({ password: e.target.value });
  }
  renderPropertySelect(property) {
    return (
      <OptionInput key={property.id} value={property.id}>
        {property.name}
      </OptionInput>
    );
  }
  render() {
    return (
      <Wrapper>
        {/* <Logo>LOGO</Logo> */}
        {/* <Overlay> */}
        <img
          style={{ width: 100, height: 100, margin: 10 }}
          // src="../assets/mountain_background.jpg"
          src={require("./ArioLogo.png")}
        />
        <LoginContainer>
          <Login>
            <Title>Welcome to Ario Living</Title>
            <Title>Hospitality Web Console</Title>
          </Login>
        </LoginContainer>
        <LoginContainer>
          <Login onSubmit={e => this.handleClick(e)}>
            <p style={{ color: "white" }}>Property</p>
            <SelectInput
              name="/property"
              value={this.state.propertyId}
              onChange={e => this.changeProperty(e)}
            >
              {this.props.properties.map(property =>
                this.renderPropertySelect(property)
              )}
            </SelectInput>
            <TextInput
              placeholder=" enter username"
              value={this.state.username}
              onChange={e => this.changeUsername(e)}
            />
            <TextInput
              placeholder=" enter password"
              value={this.state.password}
              onChange={e => this.changePassword(e)}
            />
            <SubmitInput type="submit" value="submit" />
          </Login>
        </LoginContainer>
        {/* </Overlay> */}
      </Wrapper>
    );
  }
}
const mapStateToProps = (state, props) => ({
  properties: state.properties,
  users: state.users
});
const mapDispatchToProps = dispatch => ({});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
);

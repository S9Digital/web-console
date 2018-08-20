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
const AccountContainer = styled.div`
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
const ColumnItem = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  height: 50px;
  padding-right: 20px;
  padding-left: 20px;
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

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      propertyId: "123",
      profileAction: "createUser"
    };
  }
  handleClick(e) {
    e.preventDefault();
  }
  changeAction(e) {
    this.setState({ profileAction: e.target.value });
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
  renderUsers() {
    return (
      <OptionInput key={this.props.users.id} value={this.props.users.id}>
        {this.props.users.name}
      </OptionInput>
    );
  }
  renderForm() {
    if (this.state.profileAction === "createUser") {
      return (
        <AccountContainer>
          Create User
          <Login onSubmit={e => this.handleClick(e)} />
        </AccountContainer>
      );
    }
    if (this.state.profileAction === "editUser") {
      return (
        <AccountContainer>
          Edit User
          <Login onSubmit={e => this.handleClick(e)} />
        </AccountContainer>
      );
    }
    if (this.state.profileAction === "createProperty") {
      return (
        <AccountContainer>
          Create Property
          <Login onSubmit={e => this.handleClick(e)} />
        </AccountContainer>
      );
    }
    if (this.state.profileAction === "editProperty") {
      return (
        <AccountContainer>
          Edit Property
          <Login onSubmit={e => this.handleClick(e)} />
        </AccountContainer>
      );
    }
  }
  render() {
    return (
      <Wrapper>
        <ColumnItem>
          Profile Action:
          <select
            name="alarm duration"
            style={{ marginLeft: 10 }}
            value={this.state.profileAction}
            onChange={this.changeAction.bind(this)}
          >
            {this.props.users.isAdmin ? (
              <OptionInput value="createUser">Create user</OptionInput>
            ) : null}
            <OptionInput value="editUser">Edit User</OptionInput>
            {this.props.users.isSuperAdmin ? (
              <OptionInput value="createProperty">Create Property</OptionInput>
            ) : null}
            {this.props.users.isSuperAdmin ? (
              <OptionInput value="editProperty">Edit Property</OptionInput>
            ) : null}
          </select>
        </ColumnItem>
        {this.renderForm()}
      </Wrapper>
    );
  }
}
const mapStateToProps = (state, props) => ({
  properties: state.properties,
  users: state.users[0]
});
const mapDispatchToProps = dispatch => ({});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Profile)
);

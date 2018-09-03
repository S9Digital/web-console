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
import Header from "./Header";
import {
  createUser,
  createProperty,
  editUser,
  editProperty
} from "../actions/ProfileActions";

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
  flex-direction: Column;
  justify-content: center;
  align-items: center;
`;
const Form = styled.form`
  width: 200px;
  height: 300px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const FormSmall = styled.form`
  width: 200px;
  height: 150px;
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
  outline: none;
  width: 200px;
  height: 50px;
  margin: 5px;
  border-radius: 25px;
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
const SelectInput = styled.select`
  width: 200px;
  height: 50px;
  margin: 5px;
  border-radius: 25px;
  border-color: black;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Column = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 300px;
  height: 50px;
  align-items: center;
  justify-content: center;
`;
const NavButton = styled.button`
  width: 80px;
  height: 30px;
  margin: 5px;
  background-color: #38352a;
  color: white;
`;
const NavInput = styled.input`
  width: 80px;
  height: 30px;
  margin: 5px;
  background-color: #38352a;
  color: white;
`;

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotelName: "",
      hotelEmail: "",
      hotelPhone: "",
      hotelPhone2: "",
      hotelAddress: "",
      email: "",
      name: "",
      password: "",
      isAdmin: false,
      isSuperAdmin: false,
      isTwoFactor: false,
      propertyId: "123",
      profileAction: "createUser",
      propertyEdit: null,
      userEdit: null
    };
  }
  handleClick(e) {
    e.preventDefault();
  }
  submitNewUser(e) {
    e.preventDefault();
    this.props.createThisUser(
      this.state.email,
      this.state.name,
      this.state.password,
      this.state.isAdmin,
      this.state.isSuperAdmin,
      this.state.propertyId
    );
    this.props.history.goBack();
  }
  submitNewProperty(e) {
    e.preventDefault();
    this.props.createThisProperty(
      this.state.hotelName,
      this.state.hotelAddress
    );
    this.props.history.goBack();
  }
  changeAction(e) {
    this.setState({ profileAction: e.target.value });
  }
  changeProperty(e) {
    this.setState({ propertyId: e.target.value });
  }
  changeHotelName(e) {
    this.setState({ hotelName: e.target.value });
  }
  changeHotelAddress(e) {
    this.setState({ hotelAddress: e.target.value });
  }
  changeHotelEmail(e) {
    this.setState({ hotelName: e.target.value });
  }
  changeHotelPhone(e) {
    this.setState({ hotelName: e.target.value });
  }
  changeHotelPhone2(e) {
    this.setState({ hotelName: e.target.value });
  }
  changeName(e) {
    this.setState({ name: e.target.value });
  }
  changePassword(e) {
    this.setState({ password: e.target.value });
  }
  changeEmail(e) {
    this.setState({ email: e.target.value });
  }
  changeAdmin(e) {
    this.setState({ isAdmin: e.target.value });
  }
  changeSuperAdmin(e) {
    this.setState({ isSuperAdmin: e.target.value });
  }
  changeTwoFactor(e) {
    this.setState({ isTwoFactor: e.target.value });
  }
  goBack() {
    this.props.history.goBack();
  }

  renderActionSelect() {
    return (
      <ColumnItem>
        Profile Action:
        <select
          name="Profile Action"
          style={{ marginLeft: 10 }}
          value={this.state.profileAction}
          onChange={this.changeAction.bind(this)}
        >
          {this.props.user.isAdmin ? (
            <OptionInput value="createUser">Create user</OptionInput>
          ) : null}
          <OptionInput value="editUser">Edit User</OptionInput>
          {this.props.user.isSuperAdmin ? (
            <OptionInput value="createProperty">Create Property</OptionInput>
          ) : null}
          {this.props.user.isSuperAdmin ? (
            <OptionInput value="editProperty">Edit Property</OptionInput>
          ) : null}
        </select>
      </ColumnItem>
    );
  }
  renderForm() {
    if (this.state.profileAction === "createUser") {
      return (
        <AccountContainer>
          Create User
          <Form onSubmit={e => this.submitNewUser(e)}>
            <TextInput
              placeholder="username"
              value={this.state.username}
              onChange={e => this.changeName(e)}
            />
            <TextInput
              placeholder="password"
              value={this.state.password}
              onChange={e => this.changePassword(e)}
            />
            <TextInput
              placeholder="email"
              value={this.state.email}
              onChange={e => this.changeEmail(e)}
            />
            Admin?
            <SelectInput
              name="Admin"
              value={this.state.isAdmin}
              onChange={e => this.changeAdmin(e)}
            >
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </SelectInput>
            Super Admin?
            <SelectInput
              name="Super Admin"
              value={this.state.isSuperAdmin}
              onChange={e => this.changeSuperAdmin(e)}
            >
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </SelectInput>
            {/* Add Two Factor Security?
            <select
              name="two factor"
              value={this.state.isTwoFactor}
              onChange={e => this.changeTwoFactor(e)}
            >
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select> */}
            <NavContainer>
              <NavInput type="submit" value="submit" />
              <NavButton onClick={this.goBack.bind(this)}>cancel</NavButton>
            </NavContainer>
          </Form>
        </AccountContainer>
      );
    }
    if (this.state.profileAction === "editUser") {
      return (
        <AccountContainer>
          Edit User
          <Form onSubmit={e => this.submitUserUpdate(e)}>
            <TextInput
              placeholder="username"
              value={this.state.username}
              onChange={e => this.changeName(e)}
            />
            <TextInput
              placeholder="password"
              value={this.state.password}
              onChange={e => this.changePassword(e)}
            />
            <TextInput
              placeholder="email"
              value={this.state.email}
              onChange={e => this.changeEmail(e)}
            />
            Admin?
            <SelectInput
              name="Admin"
              value={this.state.isAdmin}
              onChange={e => this.changeAdmin(e)}
            >
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </SelectInput>
            Super Admin?
            <SelectInput
              name="Super Admin"
              value={this.state.isSuperAdmin}
              onChange={e => this.changeSuperAdmin(e)}
            >
              <OptionInput value={true}>Yes</OptionInput>
              <OptionInput value={false}>No</OptionInput>
            </SelectInput>
            {/* Add Two Factor Security?
            <select
              name="two factor"
              value={this.state.isTwoFactor}
              onChange={e => this.changeTwoFactor(e)}
            >
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select> */}
            <NavContainer>
              <NavInput type="submit" value="submit" />
              <NavButton onClick={this.goBack.bind(this)}>cancel</NavButton>
            </NavContainer>
          </Form>
        </AccountContainer>
      );
    }
    if (this.state.profileAction === "createProperty") {
      return (
        <AccountContainer>
          Create Property
          <FormSmall onSubmit={e => this.submitNewProperty(e)}>
            <TextInput
              placeholder="hotel name"
              value={this.state.hotelName}
              onChange={e => this.changeHotelName(e)}
            />
            <TextInput
              placeholder="hotel address"
              value={this.state.hotelAddress}
              onChange={e => this.changeHotelAddress(e)}
            />
            {/* <TextInput
              placeholder="hotel phone (main)"
              value={this.state.phone}
              onChange={e => this.changePhone(e)}
            />
            <TextInput
              placeholder="hotel phone (other)"
              value={this.state.phone}
              onChange={e => this.changePhone2(e)}
            />
            <TextInput
              placeholder="hotel email"
              value={this.state.hotelEmail}
              onChange={e => this.changeHotelEmail(e)}
            /> */}
            <NavContainer>
              <NavInput type="submit" value="submit" />
              <NavButton onClick={this.goBack.bind(this)}>cancel</NavButton>
            </NavContainer>
          </FormSmall>
        </AccountContainer>
      );
    }
    if (this.state.profileAction === "editProperty") {
      return (
        <AccountContainer>
          Edit Property
          <FormSmall onSubmit={e => this.submitPropertyUpdate(e)}>
            <TextInput
              placeholder="hotel name"
              value={this.state.hotelName}
              onChange={e => this.changeHotelName(e)}
            />
            <TextInput
              placeholder="hotel address"
              value={this.state.hotelAddress}
              onChange={e => this.changeHotelAddress(e)}
            />
            {/* <TextInput
              placeholder="hotel phone (main)"
              value={this.state.phone}
              onChange={e => this.changePhone(e)}
            />
            <TextInput
              placeholder="hotel phone (other)"
              value={this.state.phone}
              onChange={e => this.changePhone2(e)}
            />
            <TextInput
              placeholder="hotel email"
              value={this.state.hotelEmail}
              onChange={e => this.changeHotelEmail(e)}
            /> */}
            <NavContainer>
              <NavInput type="submit" value="submit" />
              <NavButton onClick={this.goBack.bind(this)}>cancel</NavButton>
            </NavContainer>
          </FormSmall>
        </AccountContainer>
      );
    }
  }
  render() {
    return (
      <Wrapper>
        <Header />
        <Column>
          {this.renderActionSelect()}
          {this.renderForm()}
        </Column>
      </Wrapper>
    );
  }
}
const mapStateToProps = (state, props) => ({
  properties: state.properties,
  user: state.users[0],
  users: state.users
});
const mapDispatchToProps = dispatch => ({
  createThisUser: (email, name, password, isAdmin, isSuperAdmin, property) => {
    return dispatch(
      createUser(email, name, password, isAdmin, isSuperAdmin, property)
    );
  },
  createThisProperty: (name, address) => {
    return dispatch(createProperty(name, address));
  }
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Profile)
);

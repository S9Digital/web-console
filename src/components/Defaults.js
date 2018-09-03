import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Hotel from "./Hotel";
import moment from "moment";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import Datetime from "react-datetime";
import RoomRender from "./RoomRender";
import styles from "./timePicker.css";
import { setDefaults } from "../actions/PropertyActions";

const Wrapper = styled.div`
  width: 100%;
  height: 100% - 200px;
  flex: 1;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Row = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  border: 1px solid Black;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const Column = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
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
const OptionInput = styled.option`
  width: 200px;
  height: 50px;
  flex: 1;
  display: flex;
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

class Defaults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sleepTime: null,
      wakeTime: null,
      minCCT: "500",
      maxCCT: "2500",
      minLevel: "0",
      maxLevel: "100",
      alarmTime: null,
      alarmSound: null,
      alarmDuration: "5",
      settingsResetTime: null,
      scheduleMode: null
    };
  }
  changeSound(e) {
    this.setState({ alarmSound: e.target.value });
  }
  onClickDuration(e) {
    this.setState({ alarmDuration: e.target.value });
  }
  onClickMinCCT(e) {
    this.setState({ minCCT: e.target.value });
  }
  onClickMaxCCT(e) {
    this.setState({ maxCCT: e.target.value });
  }
  onClickMinLevel(e) {
    this.setState({ minLevel: e.target.value });
  }
  onClickMaxLevel(e) {
    this.setState({ maxLevel: e.target.value });
  }
  onClickSchedule(e) {
    this.setState({ scheduleMode: !this.state.scheduleMode });
  }
  submit() {
    this.props.setNewDefault(
      this.state.wakeTime,
      this.state.sleepTime,
      this.state.alarmTime,
      this.state.alarmSound,
      this.state.alarmDuration,
      this.state.minCCT,
      this.state.maxCCT,
      this.state.minLevel,
      this.state.maxLevel,
      this.state.settingsResetTime,
      this.state.scheduleMode
    );
    this.props.history.goBack();
  }
  goBack() {
    this.props.history.goBack();
  }

  render() {
    console.log(this.props.defaults);
    return (
      <Wrapper>
        <Row>
          <Container>
            <Hotel />
          </Container>
        </Row>
        <Row>
          <Column>
            <ColumnItem>
              Sleep Time: {this.state.sleepTime}
              <Datetime
                dateFormat={false}
                closeOnSelect={true}
                value={this.state.sleepTime}
                timeformat={"hh:mm a"}
                onChange={time => {
                  this.setState({
                    sleepTime: moment(time).format("hh:mm a")
                  });
                }}
              />
            </ColumnItem>
            <ColumnItem>
              Wake Time: {this.state.wakeTime}{" "}
              <Datetime
                dateFormat={false}
                closeOnSelect={true}
                value={this.state.wakeTime}
                onChange={time => {
                  this.setState({ wakeTime: moment(time).format("hh:mm a") });
                }}
              />
            </ColumnItem>
            <ColumnItem>
              Alarm Time: {this.state.alarmTime}{" "}
              <Datetime
                dateFormat={false}
                closeOnSelect={true}
                value={this.state.alarmTime}
                onChange={time =>
                  this.setState({ alarmTime: moment(time).format("hh:mm a") })
                }
              />
            </ColumnItem>
            <ColumnItem>
              Alarm Sound: {this.state.alarmSound}{" "}
              <select
                style={{ marginLeft: 10 }}
                value={this.state.alarmSound}
                onChange={this.changeSound.bind(this)}
              >
                <OptionInput value="Music AB">Music AB</OptionInput>
                <OptionInput value="Music CD">Music CD</OptionInput>
                <OptionInput value="Music EF">Music EF</OptionInput>
                <OptionInput value="Music GH">Music GH</OptionInput>{" "}
              </select>
            </ColumnItem>
            <ColumnItem>
              Alarm Duration: {this.state.alarmDuration}s{" "}
              <select
                name="alarm duration"
                style={{ marginLeft: 10 }}
                value={this.state.alarmDuration}
                onChange={this.onClickDuration.bind(this)}
              >
                <OptionInput value="5">5</OptionInput>
                <OptionInput value="10">10</OptionInput>
                <OptionInput value="15">15</OptionInput>
                <OptionInput value="20">20</OptionInput>
                <OptionInput value="30">30</OptionInput>
                <OptionInput value="40">40</OptionInput>
                <OptionInput value="50">50</OptionInput>
                <OptionInput value="60">60</OptionInput>
              </select>
            </ColumnItem>
          </Column>
          <Column>
            <ColumnItem>
              Min Tone: {this.state.minCCT}{" "}
              <select
                name="min CCT"
                style={{ marginLeft: 10 }}
                value={this.state.minCCT}
                onChange={this.onClickMinCCT.bind(this)}
              >
                <OptionInput value="0">0</OptionInput>
                <OptionInput value="250">250</OptionInput>
                <OptionInput value="500">500</OptionInput>
                <OptionInput value="750">750</OptionInput>
                <OptionInput value="1000">1000</OptionInput>
                <OptionInput value="1250">1250</OptionInput>
                <OptionInput value="1500">1500</OptionInput>
                <OptionInput value="1750">1750</OptionInput>
                <OptionInput value="2000">2000</OptionInput>
                <OptionInput value="2250">2250</OptionInput>
                <OptionInput value="2500">2500</OptionInput>
              </select>
            </ColumnItem>
            <ColumnItem>
              Max Tone: {this.state.maxCCT}{" "}
              <select
                name="max CCT"
                style={{ marginLeft: 10 }}
                value={this.state.maxCCT}
                onChange={this.onClickMaxCCT.bind(this)}
              >
                <OptionInput value="0">0</OptionInput>
                <OptionInput value="250">250</OptionInput>
                <OptionInput value="500">500</OptionInput>
                <OptionInput value="750">750</OptionInput>
                <OptionInput value="1000">1000</OptionInput>
                <OptionInput value="1250">1250</OptionInput>
                <OptionInput value="1500">1500</OptionInput>
                <OptionInput value="1750">1750</OptionInput>
                <OptionInput value="2000">2000</OptionInput>
                <OptionInput value="2250">2250</OptionInput>
                <OptionInput value="2500">2500</OptionInput>
              </select>
            </ColumnItem>
            <ColumnItem>
              Min Level: {this.state.minLevel}{" "}
              <select
                name="min level"
                style={{ marginLeft: 10 }}
                value={this.state.minLevel}
                onChange={this.onClickMinLevel.bind(this)}
              >
                <OptionInput value="0">0</OptionInput>
                <OptionInput value="10">10</OptionInput>
                <OptionInput value="20">20</OptionInput>
                <OptionInput value="30">30</OptionInput>
                <OptionInput value="40">40</OptionInput>
                <OptionInput value="50">50</OptionInput>
                <OptionInput value="60">60</OptionInput>
                <OptionInput value="70">70</OptionInput>
                <OptionInput value="80">80</OptionInput>
                <OptionInput value="90">90</OptionInput>
                <OptionInput value="100">100</OptionInput>
              </select>
            </ColumnItem>
            <ColumnItem>
              Max Level: {this.state.msxLevel}{" "}
              <select
                name="max level"
                style={{ marginLeft: 10 }}
                value={this.state.maxLevel}
                onChange={this.onClickMaxLevel.bind(this)}
              >
                <OptionInput value="0">0</OptionInput>
                <OptionInput value="10">10</OptionInput>
                <OptionInput value="20">20</OptionInput>
                <OptionInput value="30">30</OptionInput>
                <OptionInput value="40">40</OptionInput>
                <OptionInput value="50">50</OptionInput>
                <OptionInput value="60">60</OptionInput>
                <OptionInput value="70">70</OptionInput>
                <OptionInput value="80">80</OptionInput>
                <OptionInput value="90">90</OptionInput>
                <OptionInput value="100">100</OptionInput>
              </select>
            </ColumnItem>
            <ColumnItem>
              Schedule Mode On?{" "}
              <button
                style={{ marginLeft: 20, width: 50 }}
                onClick={this.onClickSchedule.bind(this)}
              >
                {this.state.scheduleMode ? "Yes" : "No"}
              </button>
            </ColumnItem>
            <ColumnItem>
              Settings Reset Time?: {this.state.settingsResetTime}{" "}
              <Datetime
                dateFormat={false}
                closeOnSelect={true}
                value={this.state.settingsResetTime}
                onChange={time => {
                  this.setState({
                    settingsResetTime: moment(time).format("hh:mm a")
                  });
                }}
              />
            </ColumnItem>
          </Column>
        </Row>
        <NavContainer>
          <NavButton onClick={this.goBack.bind(this)}>cancel</NavButton>
          <NavButton onClick={this.submit.bind(this)}>Submit</NavButton>
        </NavContainer>
      </Wrapper>
    );
  }
}
const mapStateToProps = (state, props) => ({
  defaults: state.default
});
const mapDispatchToProps = dispatch => ({
  setNewDefault: (
    wakeTime,
    sleepTime,
    alarmTime,
    alarmSound,
    alarmDuration,
    minCCT,
    maxCCT,
    minLevel,
    maxLevel,
    settingsResetTime,
    scheduleMode
  ) => {
    return dispatch(
      setDefaults(
        wakeTime,
        sleepTime,
        alarmTime,
        alarmSound,
        alarmDuration,
        minCCT,
        maxCCT,
        minLevel,
        maxLevel,
        settingsResetTime,
        scheduleMode
      )
    );
  }
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Defaults)
);

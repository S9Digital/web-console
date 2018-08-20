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
const TitleText = styled.p`
  font-size: 26px;
  color: black;
`;
const OptionInput = styled.option`
  width: 200px;
  height: 50px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
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
      settingsResetTime: null,
      alarmTime: null,
      alarmSound: null,
      alarmDuration: "5",
      schedule: null
    };
  }
  changeSound(e) {
    this.setState({ alarmSound: e.target.value });
  }
  onClickDuration(e) {
    this.setState({ alarmDuration: e.target.value });
  }
  onClickSchedule(e) {
    this.setState({ schedule: !this.state.schedule });
  }
  submit() {
    this.props.setNewDefault(
      this.state.wakeTime,
      this.state.sleepTime,
      this.state.minCCT,
      this.state.maxCCT,
      this.state.minLevel,
      this.state.maxLevel,
      this.state.settingsResetTime
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
            <ColumnItem>
              Schedule Mode On?{" "}
              <button
                style={{ marginLeft: 20, width: 50 }}
                onClick={this.onClickSchedule.bind(this)}
              >
                {this.state.schedule ? "Yes" : "No"}
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
        <button onClick={this.goBack.bind(this)}>cancel</button>
        <button onClick={this.submit.bind(this)}>Submit</button>
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
    minCCT,
    maxCCT,
    minLevel,
    maxLevel,
    settingsResetTime
  ) => {
    return dispatch(
      setDefaults(
        wakeTime,
        sleepTime,
        minCCT,
        maxCCT,
        minLevel,
        maxLevel,
        settingsResetTime
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

import React from "react";
import styled, { injectGlobal } from "styled-components";
import { connect } from "react-redux";
import Hotel from "./Hotel";
import Header from "./Header";
import moment from "moment";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import { setRoom } from "../actions/PropertyActions";
import Datetime from "react-datetime";
import RoomRender from "./RoomRender";
import styles from "./timePicker.css";

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
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const Column = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  margin-left: 50px;
  align-items: flex-start;
  height: 100%;
`;
const ColumnItem = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  height: 50px;
`;
const TitleText = styled.p`
  font-size: 20px;
  color: white;
  margin: 15px;
  display: flex;
  flex-display: row;
  align-items: center;
  justifycontent: center;
`;

const OptionInput = styled.option`
  width: 200px;
  height: 50px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BulbBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 300px;
  height: 300px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
`;
const BulbItem = styled.div`
  width: 50px;
  height: 50px;
  margin: 1px;
  border-radius: 25px;
  background-color: #ffe972;
  flex: 1;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Bulb = styled.p`
  font-size: 8px;
  font-weight: italic;
  color: black;
  cursor: default;
  display: flex;
  flex-wrap: nowrap;
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
  outline: none;
  width: 80px;
  height: 30px;
  margin: 5px;
  border-radius: 5px;
  background-color: #38352a;
  color: white;
`;
injectGlobal`
  .pickerInput input{
    border-radius: 5px;
    outline: none;
    border: 1px solid black;
    height: 18px;
  }
  .pickerInput .rdtPicker {
    background-color: rgba(72, 175, 255, 1);
    width: 150px;
    padding: 0;
    border-radius: 5px;
  }
`;

class Room extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sleepTime: this.props.room[0].sleepTime,
      wakeTime: this.props.room[0].wakeTime,
      alarmTime: this.props.room[0].alarm.time,
      alarmSound: this.props.room[0].alarm.soundId,
      alarmDuration: this.props.room[0].alarm.duration,
      minCCT: this.props.room[0].minCCT,
      maxCCT: this.props.room[0].maxCCT,
      minLevel: this.props.room[0].minLevel,
      maxLevel: this.props.room[0].maxLevel,
      settingsResetTime: this.props.room[0].settingsResetTime,
      scheduleMode: this.props.room[0].scheduleMode
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
    if (window.confirm("Are you sure you want to submit this?")) {
      this.props.updateRoom(
        this.props.room[0].id,
        this.state.sleepTime,
        this.state.wakeTime,
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
  }
  goBack() {
    this.props.history.goBack();
  }

  renderBulbs(bulb) {
    return (
      <div key={bulb.id}>
        <BulbItem>
          <Bulb>{bulb.id + ")"}</Bulb>
          <Bulb>{bulb.error ? "error" : "working"}</Bulb>
          <Bulb> {bulb.lastHeard ? bulb.lastHeard : null}</Bulb>
        </BulbItem>
      </div>
    );
  }
  render() {
    return (
      <Wrapper>
        <Header />
        <Hotel />
        <Row>
          <Container style={{ marginBottom: 10 }}>
            <TitleText>Room: {this.props.room[0].number}</TitleText>
            <TitleText>Tablet ID: {this.props.room[0].id}</TitleText>
            {this.props.room[0].tablet.on ? (
              <TitleText>
                Tablet: <p style={{ color: "green", marginLeft: 5 }}>ON</p>
              </TitleText>
            ) : (
              <TitleText>
                {" "}
                Tablet: <p style={{ color: "red", marginLeft: 5 }}>OFF</p>
              </TitleText>
            )}
            {this.props.room[0].hasIssue ? (
              <TitleText>
                Issues: <p style={{ color: "green", marginLeft: 5 }}>NO</p>
              </TitleText>
            ) : (
              <TitleText>
                {" "}
                Issues: <p style={{ color: "red", marginLeft: 5 }}>YES</p>
              </TitleText>
            )}

            <TitleText>
              Last Heard:{" "}
              {this.props.room[0].tablet.lastHeard
                ? this.props.room[0].tablet.lastHeard
                : "N/A"}
            </TitleText>
          </Container>
        </Row>
        <Row>
          <Column>
            <ColumnItem>
              Sleep Time: {this.state.sleepTime}
              <Datetime
                className={"pickerInput"}
                dateFormat={false}
                closeOnSelect={true}
                value={this.state.sleepTime}
                timeformat={"hh:mm a"}
                //needs to get on blur working for text input
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
                className={"pickerInput"}
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
                className={"pickerInput"}
                dateFormat={false}
                closeOnSelect={true}
                value={this.state.alarmTime}
                onChange={time =>
                  this.setState({ alarmTime: moment(time).format("hh:mm a") })
                }
              />
            </ColumnItem>
            <ColumnItem>
              Alarm Sound: {this.props.room[0].alarm.soundId}{" "}
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
              Alarm Duration: {this.props.room[0].alarm.duration}s{" "}
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
              {this.state.scheduleMode ? (
                <button
                  style={{
                    marginLeft: 20,
                    width: 50,
                    height: 20,
                    backgroundColor: "green",
                    outline: "none",
                    border: "none",
                    borderRadius: 5
                  }}
                  onClick={this.onClickSchedule.bind(this)}
                >
                  Yes
                </button>
              ) : (
                <button
                  style={{
                    marginLeft: 20,
                    width: 50,
                    height: 20,
                    backgroundColor: "red",
                    outline: "none",
                    border: "none",
                    borderRadius: 5
                  }}
                  onClick={this.onClickSchedule.bind(this)}
                >
                  No
                </button>
              )}
            </ColumnItem>
          </Column>
          <Column>
            <BulbBox>
              {this.props.room[0].bulbs.map(bulb => this.renderBulbs(bulb))}
            </BulbBox>
          </Column>
        </Row>
        <NavContainer>
          <NavButton onClick={this.goBack.bind(this)}>back</NavButton>
          <NavButton
            style={{ backgroundColor: "rgba(72, 175, 255, 1)" }}
            onClick={this.submit.bind(this)}
          >
            Submit
          </NavButton>
        </NavContainer>
      </Wrapper>
    );
  }
}
const mapStateToProps = (state, props) => ({
  room: state.rooms.filter(room => {
    if (
      room.propertyId === props.match.params.propertyId &&
      room.id === props.match.params.roomId
    )
      return true;
  })
});
const mapDispatchToProps = dispatch => ({
  updateRoom: (
    id,
    sleepTime,
    wakeTime,
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
      setRoom(
        id,
        sleepTime,
        wakeTime,
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
  )(Room)
);

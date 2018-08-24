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
const BulbBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 300px;
  height: 300px;
  align-items: center;
  justify-content: center;
  background-color: #38352a;
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
  font-size: 12px;
  color: black;
  cursor: default;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const CheckBox = styled.div`
  width: 20px;
  height: 20px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
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
  goBack() {
    this.props.history.goBack();
  }

  renderBulbs(bulb) {
    return (
      <div key={bulb.id}>
        {bulb.error ? (
          <BulbItem>
            <Bulb>{bulb.error ? bulb.id + ")" : null}</Bulb>
            <Bulb> {bulb.lastHeard ? bulb.lastHeard : null}</Bulb>
          </BulbItem>
        ) : null}
      </div>
    );
  }
  render() {
    return (
      <Wrapper>
        <Row>
          <Container>
            <Column>
              <TitleText>
                Room: {this.props.room[0].number} | Tablet ID:{" "}
                {this.props.room[0].id}
              </TitleText>
              <TitleText>
                Tablet: {this.props.room[0].tablet.on ? "On" : "Off"} | Issues:{" "}
                {this.props.room[0].hasIssue ? "Yes" : "No"}
              </TitleText>

              <TitleText>
                Last Heard:{" "}
                {this.props.room[0].tablet.lastHeard
                  ? this.props.room[0].tablet.lastHeard
                  : "N/A"}
              </TitleText>
            </Column>
          </Container>
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
          </Column>
          <Column>
            <BulbBox>
              {this.props.room[0].bulbs.map(bulb => this.renderBulbs(bulb))}
            </BulbBox>
          </Column>
        </Row>
        <button onClick={this.goBack.bind(this)}>cancel</button>
        <button onClick={this.submit.bind(this)}>Submit</button>
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

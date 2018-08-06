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
      sleepTime: "",
      wakeTime: "",
      alarmTime: "",
      alarmSound: this.props.room[0].alarm.soundId
    };
  }
  changeSound(e) {
    this.setState({ alarmSound: e.target.value });
    console.log(this.state.alarmSound);
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
    console.log(this.state.sleepTime);
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
              Sleep Time: {this.props.room[0].sleepTime}
              <Datetime
                dateFormat={false}
                closeOnSelect={true}
                value={this.state.sleepTime}
                onChange={moment => this.setState({ sleepTime: moment._d })}
              />
            </ColumnItem>
            <ColumnItem>
              Wake Time: {this.props.room[0].wakeTime}{" "}
              <Datetime dateFormat={false} closeOnSelect={true} />
            </ColumnItem>
            <ColumnItem>
              Alarm Time: {this.props.room[0].alarm.time}{" "}
              <Datetime dateFormat={false} closeOnSelect={true} />
            </ColumnItem>
            <ColumnItem>
              Alarm Sound: {this.props.room[0].alarm.soundId}{" "}
              <select
                style={{ marginLeft: 10 }}
                value={this.state.alarmSound}
                onChange={e => this.changeSound(e)}
              >
                <OptionInput value="Music AB">Music AB</OptionInput>
                <OptionInput value="Music AB">Music CD</OptionInput>
                <OptionInput value="Music AB">Music EF</OptionInput>
                <OptionInput value="Music AB">Music GH</OptionInput>{" "}
              </select>
            </ColumnItem>
            <ColumnItem>
              Alarm Duration: {this.props.room[0].alarm.duration}s{" "}
              <select style={{ marginLeft: 10 }}>
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
              <button style={{ marginLeft: 20 }}>
                {this.props.room[0].schedule ? "Yes" : "No"}
              </button>
            </ColumnItem>
          </Column>
          <Column>
            <BulbBox>
              {this.props.room[0].bulbs.map(bulb => this.renderBulbs(bulb))}
            </BulbBox>
          </Column>
        </Row>
        {/* <Link>cancel</Link>
        <Link>Submit</Link> */}
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
const mapDispatchToProps = dispatch => ({});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Room)
);

import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Hotel from "./Hotel";
import RoomRender from "./RoomRender";
import CheckBox from "./CheckBox";
import { setRoom } from "../actions/PropertyActions";

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
  border: solid Black;
  border-width: 0px 1px 1px 1px;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const ListContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 80%;
  align-items: flex-start;
  justify-content: flex-start;
`;
const TitleText = styled.p`
  font-size: 26px;
  color: black;
`;
const ListHeader = styled.li`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  height: 50px;
  padding-right: 5px;
  padding-left: 5px;
`;
const Box = styled.div`
  width: 20px;
  height: 20px;
  border: 1px solid black;
  background-color: #888888;
  box-shadow: 2px 2px rgba(14, 14, 14, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;
class RoomList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { roomsToReset: [], checked: false };
  }
  handleDefaultReset() {
    const def = this.props.default;
    if (!this.state.checked) {
      this.setState({ checked: true });
      this.state.roomsToReset.map(room => {
        this.props.resetToDefault(
          room,
          def.wakeTime,
          def.sleepTime,
          def.alarm.time,
          def.alarm.soundId,
          def.alarm.duration,
          def.minCCT,
          def.maxCCt,
          def.minLevel,
          def.maxLevel,
          def.settingsResetTime,
          def.scheduleMode
        );
      });
      this.setState({ roomsToReset: [] });
    } else {
      this.setState({ checked: false });
    }
  }
  render() {
    // console.log(this.state.roomsToReset);
    console.log(this.props.default);
    return (
      <Wrapper>
        <Row>
          <Container>
            <Hotel />
          </Container>
          <Container>
            <TitleText>Room List</TitleText>
          </Container>
        </Row>
        <ListContainer>
          <Row>
            <ListHeader>Room Number</ListHeader>
            <ListHeader>Tablet ID</ListHeader>
            <ListHeader>Tablet Status</ListHeader>
            <ListHeader style={{ minWidth: 170 }}>
              Wake Time | SleepTime
            </ListHeader>
            <ListHeader>Alarm</ListHeader>
            <ListHeader>Schedule?</ListHeader>
            <ListHeader>Light Errors</ListHeader>
            <ListHeader
              style={{ flexDirection: "row", width: 140, flexWrap: "nowrap" }}
            >
              Reset to Default?
            </ListHeader>
            <Box onClick={this.handleDefaultReset.bind(this)}>
              {this.state.checked ? "X" : null}
            </Box>
          </Row>
          {this.props.rooms.map(room => (
            <RoomRender
              room={room}
              key={room.id}
              onPickReset={room => {
                // this.this.state.roomsToReset.map(oldRoom => {
                //   console.log(oldRoom + "is equal to?" + room);
                //   if (oldRoom === room) {
                //     return;
                //   } else {
                //     return {
                //       ...oldRoom
                //     };
                //   }
                // });
                this.setState({
                  roomsToReset: [...this.state.roomsToReset, room]
                });
              }}
            />
          ))}
        </ListContainer>
      </Wrapper>
    );
  }
}
const mapStateToProps = (state, props) => ({
  rooms: state.rooms.filter(room => {
    if (room.propertyId === props.match.params.propertyId) return true;
  }),
  default: state.default
});
const mapDispatchToProps = dispatch => ({
  resetToDefault: (
    id,
    wakeTime,
    sleepTime,
    alarmTime,
    alarmsoundId,
    alarmDuration,
    minCCT,
    maxCCt,
    minLevel,
    maxLevel,
    settingsResetTime,
    scheduleMode
  ) => {
    return dispatch(
      setRoom(
        id,
        wakeTime,
        sleepTime,
        alarmTime,
        alarmsoundId,
        alarmDuration,
        minCCT,
        maxCCt,
        minLevel,
        maxLevel,
        settingsResetTime,
        scheduleMode
      )
    );
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoomList);

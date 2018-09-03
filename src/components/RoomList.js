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
const ListHeaderColumn = styled.li`
  display: flex;
  flex: 1;
  flex-direction: column;
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
  margin: 2px;
  margin-right: 10px;
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
class RoomList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { roomsToReset: [], checked: false };
  }
  handleSingleDefaultReset(room) {
    //select all rooms for reset
    const def = this.props.default;
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
  }
  handleDefaultReset() {
    //select all rooms for reset
    const def = this.props.default;
    this.props.rooms.map(room => {
      // console.log(room.id);
      this.props.resetToDefault(
        room.id,
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

    //INSTEAD Use button to confirm reset for selected
    // const def = this.props.default;
    // if (!this.state.checked) {
    //   this.setState({ checked: true });
    //   this.state.roomsToReset.map(room => {
    //     this.props.resetToDefault(
    //       room,
    //       def.wakeTime,
    //       def.sleepTime,
    //       def.alarm.time,
    //       def.alarm.soundId,
    //       def.alarm.duration,
    //       def.minCCT,
    //       def.maxCCt,
    //       def.minLevel,
    //       def.maxLevel,
    //       def.settingsResetTime,
    //       def.scheduleMode
    //     );
    //   });
    //   this.setState({ roomsToReset: [] });
    // } else {
    //   this.setState({ checked: false });
    // }
  }

  goBack() {
    this.props.history.goBack();
  }
  render() {
    // console.log(this.state.roomsToReset);
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
            <ListHeader>Number</ListHeader>
            <ListHeader>ID</ListHeader>
            <ListHeader>Status</ListHeader>
            <ListHeader>Wake Time</ListHeader>
            <ListHeader>SleepTime</ListHeader>
            <ListHeader>Alarm</ListHeader>
            <ListHeader>Schedule?</ListHeader>
            <ListHeaderColumn>Light Errors</ListHeaderColumn>
            <ListHeaderColumn
              style={{ flexDirection: "row", width: 140, flexWrap: "nowrap" }}
            >
              Reset to Default?
              <Box onClick={this.handleDefaultReset.bind(this)}>
                {this.state.checked ? "X" : null}
              </Box>
            </ListHeaderColumn>
          </Row>
          {this.props.rooms.map(room => (
            <RoomRender
              room={room}
              key={room.id}
              //reset on press
              clearPick={roomPick => this.handleSingleDefaultReset(roomPick)}

              //adding and subtracting from list method of reset
              // clearPick={roomPick => {
              //   let temp = this.state.roomsToReset.filter(oldRoom => {
              //     oldRoom !== roomPick;
              //   });
              //   this.setState({
              //     roomsToReset: temp
              //   });
              // }}
              // onPickReset={roomPick => {
              //   this.setState({
              //     roomsToReset: [...this.state.roomsToReset, roomPick]
              //   });
              // }}
            />
          ))}
        </ListContainer>
        <NavContainer>
          <NavButton onClick={this.goBack.bind(this)}>cancel</NavButton>
        </NavContainer>
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

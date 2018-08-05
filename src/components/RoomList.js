import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Hotel from "./Hotel";
import RoomRender from "./RoomRender";

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
class RoomList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
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
            <ListHeader>Set to Default?</ListHeader>
          </Row>
          {this.props.rooms.map(room => (
            <RoomRender room={room} key={room.id} />
          ))}
        </ListContainer>
      </Wrapper>
    );
  }
}
const mapStateToProps = (state, props) => ({
  rooms: state.rooms
});
const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoomList);

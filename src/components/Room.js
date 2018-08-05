import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Hotel from "./Hotel";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
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
  border: 1px solid Black;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const RowItem = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  height: 50px;
  padding-right: 5px;
  padding-left: 5px;
`;
const ListContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 80%;
  align-items: flex-start;
  justify-content: flex-start;
  border: 1px solid black;
`;
const TitleText = styled.p`
  font-size: 26px;
  color: black;
`;
const BulbBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 110px;
  align-items: center;
  justify-content: flex-start;
  background-color: #38352a;
`;
const BulbItem = styled.div`
  width: 20px;
  height: 20px;
  margin: 1px;
  border-radius: 25px;
  background-color: #ffe972;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Bulb = styled.p`
  font-size: 8px;
  color: black;
`;

const On = styled.div`
  display: flex;
  flex: 1;
  with: 20px;
  height: 20px;
  margin: 10px;
  border-radius: 25px;
  background-color: green;
  jusify-content: center;
  align-items: center;
`;

const Off = styled.div`
  display: flex;
  flex: 1;
  with: 20px;
  height: 20px;
  margin: 10px;
  flex-direction: row;
  border-radius: 25px;
  background-color: red;
  jusify-content: center;
  align-items: center;
`;

const AlarmContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 150px;
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
    this.state = {};
  }
  render() {
    console.log(this.props.match.params.roomId);
    console.log(this.props.room);
    return (
      <Wrapper>
        <Row>
          <Container>
            <TitleText>
              Room: {this.props.room[0].number} | Tablet ID:{" "}
              {this.props.room[0].id}
            </TitleText>
          </Container>
          <Container>
            <Hotel />
          </Container>
        </Row>
        <Row>
          <RowItem>Sleep Time: {this.props.room[0].sleepTime}</RowItem>
          <RowItem>Wake Time: {this.props.room[0].wakeTime}</RowItem>
          <RowItem>
            Schedule Mode On? {this.props.room[0].schedule ? "Yes" : "No"}
          </RowItem>
          <RowItem>
            Tablet On? {this.props.room[0].tabletOn ? "Yes" : "No"}
          </RowItem>
          <RowItem>
            Issues? {this.props.room[0].hasIssue ? "Yes" : "No"}
          </RowItem>
        </Row>
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

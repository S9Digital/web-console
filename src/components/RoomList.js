import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Hotel from "./Hotel";

const Wrapper = styled.div`
  width: 100%;
  height: 100% - 200px;
  flex: 1;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  border: 1px solid Black;
  justify-content: space-between;
  align-items: stretch;
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
  width: 20px;
  height: 20px;
  border-radius: 25px;
  background-color: #ffe972;
`;
const BulbItem = styled.p`
  font-size: 8px;
  color: black;
  position: absolute;
  margin: 6px;
`;

class RoomList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderBulbs(bulb) {
    return (
      <div>
        {bulb.error ? (
          <BulbBox key={bulb.error}>
            <BulbItem>{bulb.error ? bulb.Id : null}</BulbItem>
          </BulbBox>
        ) : null}
      </div>
    );
  }

  renderRoom(item) {
    return (
      <Row key={item.Id}>
        <RowItem>{item.number}</RowItem>
        <RowItem>{item.Id}</RowItem>
        <RowItem>{item.tabletOn ? "On" : "Off"}</RowItem>
        <RowItem>
          {item.wakeTime} | {item.sleepTime}
        </RowItem>
        <RowItem>{item.alarm}</RowItem>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            width: 110,
            margin: 5
          }}
        >
          {item.bulbs.map(bulb => this.renderBulbs(bulb))}
        </div>
      </Row>
    );
  }

  render() {
    return (
      <Wrapper>
        <Hotel />
        <TitleText>Room List</TitleText>
        <ListContainer>
          {this.props.rooms.map(room => this.renderRoom(room))}
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

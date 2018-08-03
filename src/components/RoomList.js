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
  background-image: url("../assets/mountain_background.jpg");
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
class RoomList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  //   renderBulbs(bulb) {
  //     return (
  //       <div>
  //         {bulb.error ? (
  //           <BulbItem key={bulb.error}>
  //             <Bulb>{bulb.error ? bulb.Id : null}</Bulb>
  //           </BulbItem>
  //         ) : null}
  //       </div>
  //     );
  //   }

  //   renderRoom(item) {
  //     return (
  //       <Row key={item.Id}>
  //         <RowItem>{item.number}</RowItem>
  //         <RowItem>{item.Id}</RowItem>
  //         <RowItem>{item.tabletOn ? "On" : "Off"}</RowItem>
  //         <RowItem>
  //           <AlarmContainer>
  //             {item.wakeTime} | {item.sleepTime}
  //           </AlarmContainer>
  //         </RowItem>
  //         <RowItem>{item.alarm}</RowItem>
  //         <BulbBox>{item.bulbs.map(bulb => this.renderBulbs(bulb))}</BulbBox>
  //         <div>
  //           {item.schedule ? (
  //             <On>
  //               <p style={{ margin: 5 }}>On</p>
  //             </On>
  //           ) : (
  //             <Off>
  //               <p style={{ margin: 5 }}>Off</p>
  //             </Off>
  //           )}
  //         </div>
  //         <CheckBox>x</CheckBox>
  //       </Row>
  //     );
  //   }

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
          {this.props.rooms.map(room => (
            <RoomRender room={room} />
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

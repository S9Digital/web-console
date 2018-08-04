import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import CheckBox from "./CheckBox";

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
  border: solid black;
  border-width: 0px 1px 1px 1px;
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
  box-shadow: 2px 2px rgba(14, 14, 14, 0.8);
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
  box-shadow: 2px 2px rgba(14, 14, 14, 0.7);
  flex-direction: row;
  border-radius: 25px;
  background-color: red;
  jusify-content: center;
  align-items: center;
`;

const AlarmContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  width: 150px;
`;

class RoomRender extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderBulbs(bulb) {
    return (
      <div>
        {bulb.error ? (
          <BulbItem key={bulb.error}>
            <Bulb>{bulb.error ? bulb.id : null}</Bulb>
          </BulbItem>
        ) : null}
      </div>
    );
  }

  render() {
    const item = this.props.room;
    return (
      <Row key={item.id}>
        <RowItem>{item.number}</RowItem>
        <RowItem>{item.id}</RowItem>
        <RowItem>{item.tabletOn ? "On" : "Off"}</RowItem>
        <RowItem>
          <AlarmContainer>
            {item.wakeTime ? item.wakeTime : "Off"} |{" "}
            {item.sleepTime ? item.sleepTime : "Off"}
          </AlarmContainer>
        </RowItem>
        <RowItem>{item.alarm ? item.alarm : "Off"}</RowItem>
        <RowItem>
          {item.schedule ? (
            <On>
              <p style={{ margin: 5 }}>On</p>
            </On>
          ) : (
            <Off>
              <p style={{ margin: 5 }}>Off</p>
            </Off>
          )}
        </RowItem>
        <BulbBox>{item.bulbs.map(bulb => this.renderBulbs(bulb))}</BulbBox>

        <RowItem>
          <CheckBox />
        </RowItem>
      </Row>
    );
  }
}
const mapStateToProps = (state, props) => ({});
const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoomRender);

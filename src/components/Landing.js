import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 10px;
`;
const MetricsContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 33%;
  height: 40%;
`;
const TileContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 25px;
  width: 18%;
  height: 200px;
  margin: 10px;
`;
const TileText = styled.p`
  font-size: 26px;
  color: black;
`;
class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Wrapper>
        <Container>
          <MetricsContainer>
            <p>Hotel: {this.props.hotel}</p>
            <p>Address: {this.props.address}</p>
          </MetricsContainer>

          <MetricsContainer>
            <p>Current Metrics | Analytics</p>
            <ul>
              <li>Rooms Occupied: {this.props.currentRoomsOccupied}</li>
              <li>Lights On: {this.props.currentLightsOn}</li>
              <li>Alarms Set: {this.props.currentAlarmsSet}</li>
              <li>Most Used Alarm: {this.props.currentAlarmMostUsed}</li>
              <li>Most Used Light: {this.props.currentLightMostUsed}</li>
            </ul>
          </MetricsContainer>

          <MetricsContainer>
            <p>Weekly Metrics | Analytics</p>
            <ul>
              <li>Rooms Occupied: {this.props.weeklyRoomsOccupied}</li>
              <li>Lights On: {this.props.weeklyLightsOn}</li>
              <li>Alarms Set: {this.props.weeklyAlarmsSet}</li>
              <li>Most Used Alarm: {this.props.weeklyAlarmMostUsed}</li>
              <li>Most Used Light: {this.props.weeklyLightMostUsed}</li>
            </ul>
          </MetricsContainer>
        </Container>
        <Container>Alerts</Container>
        <Container>
          <TileContainer>
            <TileText>Room List</TileText>
          </TileContainer>
          <TileContainer>
            <TileText>Default Settings</TileText>
          </TileContainer>
          <TileContainer>
            <TileText>Profile | Admin</TileText>
          </TileContainer>
        </Container>
      </Wrapper>
    );
  }
}
const mapStateToProps = (state, props) => ({
  hotel: state.hotel,
  address: state.address,
  currentRoomsOccupied: state.currentRoomsOccupied,
  currentLightsOn: state.currentLightsOn,
  currentAlarmsSet: state.currentAlarmsSet,
  currentAlarmMostUsed: state.currentAlarmMostUsed,
  currentLightMostUsed: state.currentLightMostUsed,
  weeklyRoomsOccupied: state.weeklyRoomsOccupied,
  weeklyLightsOn: state.weeklyLightsOn,
  weeklyAlarmsSet: state.weeklyAlarmsSet,
  weeklyAlarmMostUsed: state.weeklyAlarmMostUsed,
  weeklyLightMostUsed: state.weeklyLightMostUsed
});
const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);

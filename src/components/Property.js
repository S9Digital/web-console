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

const Wrapper = styled.div`
  width: 100%;
  height: 100vh - 200px;
  flex: 1;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Content = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;
`;
const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 90%;
  margin: 10px;
`;
const MetricsContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 18%;
  height: 200px;
  margin: 10px;
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
const BoldText = styled.p`font-size: 20px; color: black: font-weight: bold;`;
class Property extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props.history.location);
    return (
      <Wrapper>
        <Content>
          <Container>
            <Hotel />
            <MetricsContainer>
              <BoldText>Current Metrics | Analytics</BoldText>
              <ul>
                <li>Rooms Occupied: {this.props.currentRoomsOccupied}</li>
                <li>Lights On: {this.props.currentLightsOn}</li>
                <li>Alarms Set: {this.props.currentAlarmsSet}</li>
                <li>Most Used Alarm: {this.props.currentAlarmMostUsed}</li>
                <li>Most Used Light: {this.props.currentLightMostUsed}</li>
              </ul>
            </MetricsContainer>

            <MetricsContainer>
              <BoldText>Weekly Metrics | Analytics</BoldText>
              <ul>
                <li>Rooms Occupied: {this.props.weeklyRoomsOccupied}</li>
                <li>Lights On: {this.props.weeklyLightsOn}</li>
                <li>Alarms Set: {this.props.weeklyAlarmsSet}</li>
                <li>Most Used Alarm: {this.props.weeklyAlarmMostUsed}</li>
                <li>Most Used Light: {this.props.weeklyLightMostUsed}</li>
              </ul>
            </MetricsContainer>
          </Container>
          <Container>
            {this.props.alerts ? "Alerts: " + this.props.alerts : null}
          </Container>
          <Container>
            <TileContainer>
              <TileText>
                <Link to={`${this.props.history.location.pathname}/rooms`}>
                  Room List
                </Link>
              </TileText>
            </TileContainer>
            <TileContainer>
              <TileText>
                <Link to={`${this.props.history.location.pathname}/default`}>
                  Default Settings
                </Link>
              </TileText>
            </TileContainer>
            <TileContainer>
              <TileText>
                <Link to={`${this.props.history.location.pathname}/profile`}>
                  Profile | Admin
                </Link>
              </TileText>
            </TileContainer>
          </Container>
          <BoldText>Questions or Need Help?</BoldText>
          <p>Contact us at support@arioliving.com</p>
        </Content>
      </Wrapper>
    );
  }
}
const mapStateToProps = (state, props) => ({
  currentRoomsOccupied: state.currentRoomsOccupied,
  currentLightsOn: state.currentLightsOn,
  currentAlarmsSet: state.currentAlarmsSet,
  currentAlarmMostUsed: state.currentAlarmMostUsed,
  currentLightMostUsed: state.currentLightMostUsed,
  weeklyRoomsOccupied: state.weeklyRoomsOccupied,
  weeklyLightsOn: state.weeklyLightsOn,
  weeklyAlarmsSet: state.weeklyAlarmsSet,
  weeklyAlarmMostUsed: state.weeklyAlarmMostUsed,
  weeklyLightMostUsed: state.weeklyLightMostUsed,
  alerts: state.alerts
});
const mapDispatchToProps = dispatch => ({});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Property)
);

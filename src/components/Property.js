import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Hotel from "./Hotel";
import Header from "./Header";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  withRouter
} from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Content = styled.div`
  width: 100%;
  height: 100% - 300px;
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
`;
const MetricsContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const TileContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  background-color: rgba(59, 157, 254, 0.5);
  width: 18%;
  height: 200px;
  margin: 10px;
`;
const TileText = styled.p`
  font-size: 32px;
  color: white;
`;
const BoldText = styled.p`font-size: 20px; color: black: font-weight: bold;`;
class Property extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Wrapper>
        <Header />
        <Content>
          <Hotel />
          <Container>
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
              <Link
                to={`${this.props.history.location.pathname}/rooms`}
                style={{
                  textDecoration: "none",
                  color: "white",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <TileText>Room List</TileText>
              </Link>
            </TileContainer>

            <TileContainer>
              <Link
                to={`${this.props.history.location.pathname}/default`}
                style={{
                  textDecoration: "none",
                  color: "white",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <TileText>Default Settings</TileText>
              </Link>
            </TileContainer>
            <TileContainer>
              <Link
                to={`${this.props.history.location.pathname}/profile`}
                style={{
                  textDecoration: "none",
                  color: "white",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <TileText>Profile | Admin</TileText>
              </Link>
            </TileContainer>
          </Container>
          <BoldText>Questions or Need Help?</BoldText>
          <p>
            <a href="" style={{ color: "white" }}>
              {" "}
              Contact us at support@arioliving.com
            </a>
          </p>
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

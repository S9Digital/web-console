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
const HotelWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 50px;
  min-width: 500px;
`;

const HotelContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin: 10px;
`;
const HotelInfo = styled.p`
  font-size: 20px;
  color: white;
  margin-left: 15px;
  flex-wrap: nowrap;
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
const Login = styled.form`
  width: 200px;
  height: 130px;
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const LoginContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
`;
const SelectInput = styled.select`
  margin: 5px;
  border-radius: 5px;
  width-max: 50px;
  border-color: black;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const OptionInput = styled.option`
  width: 200px;
  height: 50px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SubmitInput = styled.input`
  width: 80px;
  height: 30px;
  margin: 5px;
  border-radius: 5px;
  background-color: #38352a;
  color: white;
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
  background-color: rgba(72, 175, 255, 0.83);
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
    this.state = { propertyId: "123" };
  }
  changeProperty(e) {
    this.setState({ propertyId: e.target.value });
  }
  renderPropertySelect(property) {
    return (
      <OptionInput key={property.id} value={property.id}>
        {property.name}
      </OptionInput>
    );
  }
  render() {
    return (
      <Wrapper>
        <Header />
        <Content>
          <HotelWrapper>
            <HotelContainer>
              <BoldText>Hotel:</BoldText>
              <LoginContainer>
                <Login>
                  <SelectInput
                    name="/property"
                    type="submit"
                    value={this.state.propertyId}
                    onSubmit={e => this.handleClick(e)}
                    onChange={e => this.changeProperty(e)}
                  >
                    {this.props.properties.map(property =>
                      this.renderPropertySelect(property)
                    )}
                  </SelectInput>
                </Login>
              </LoginContainer>
              {/* <HotelInfo>{this.props.hotel[0].name}</HotelInfo> */}
            </HotelContainer>
            <HotelContainer style={{ justifyContent: "flex-start" }}>
              <BoldText>Address:</BoldText>
              <HotelInfo>{this.props.hotel[0].location}</HotelInfo>
            </HotelContainer>
          </HotelWrapper>
          <Container>
            <MetricsContainer
              style={{ alignItems: "flex-end", marginRight: 40 }}
            >
              <BoldText>Current Metrics | Analytics</BoldText>
              <ul>
                <li>Rooms Occupied: {this.props.currentRoomsOccupied}</li>
                <li>Lights On: {this.props.currentLightsOn}</li>
                <li>Alarms Set: {this.props.currentAlarmsSet}</li>
                <li>Most Used Alarm: {this.props.currentAlarmMostUsed}</li>
                <li>Most Used Light: {this.props.currentLightMostUsed}</li>
              </ul>
            </MetricsContainer>

            <MetricsContainer
              style={{ alignItems: "flex-start", marginLeft: 40 }}
            >
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
                <TileText>Room Settings</TileText>
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
            Contact us at{" "}
            <a href="" style={{ color: "white" }}>
              support@arioliving.com
            </a>
          </p>
        </Content>
      </Wrapper>
    );
  }
}
const mapStateToProps = (state, props) => ({
  properties: state.properties,
  users: state.users,
  hotel: state.properties.filter(
    property => property.id === props.match.params.propertyId
  ),
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

import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
const MetricsContainer = styled.div`
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

const BoldText = styled.p`font-size: 20px; color: white: font-weight: bold;`;

class Hotel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <MetricsContainer>
        <HotelContainer>
          <BoldText>Hotel:</BoldText>
          <HotelInfo>{this.props.hotel[0].name}</HotelInfo>
        </HotelContainer>
        <HotelContainer style={{ justifyContent: "flex-start" }}>
          <BoldText>Address:</BoldText>
          <HotelInfo>{this.props.hotel[0].location}</HotelInfo>
        </HotelContainer>
      </MetricsContainer>
    );
  }
}
const mapStateToProps = (state, props) => ({
  hotel: state.properties.filter(
    property => property.id === props.match.params.propertyId
  ),
  address: state.address
});
const mapDispatchToProps = dispatch => ({});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Hotel)
);

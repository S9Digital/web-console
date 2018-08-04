import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

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

const HotelContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const HotelInfo = styled.p`
  font-size: 18;
  color: black;
  width: 150px;
  margin-left: 10px;
`;

const BoldText = styled.p`font-size: 20px; color: black: font-weight: bold;`;

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
          <HotelInfo>{this.props.hotel}</HotelInfo>
        </HotelContainer>
        <HotelContainer>
          <BoldText>Address:</BoldText>
          <HotelInfo>{this.props.address}</HotelInfo>
        </HotelContainer>
      </MetricsContainer>
    );
  }
}
const mapStateToProps = (state, props) => ({
  hotel: state.hotel,
  address: state.address
});
const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hotel);

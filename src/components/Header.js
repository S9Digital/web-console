import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Moment from "react-moment";

const Wrapper = styled.div`
  width: 100%;
  height: 120px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`;

const TitleContainer = styled.div`
  flex: 3;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;
const Title = styled.p`
  font-size: 36px;
  display: flex;
  flex: 1;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: flex-end;
`;
const Divider = styled.p`
  font-size: 36px;
  margin-right: 5px;
  margin-left: 5px;
`;
const TimeText = styled.p`
  font-size: 16;
  color: white;
  margin: 2.5px;
  flex-wrap: nowrap;
  width: 250px;
`;
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Wrapper>
        <Container style={{ alignItems: "flex-Start" }}>
          <img
            style={{ width: 80, height: 80, margin: 20 }}
            // src="../assets/mountain_background.jpg"
            src={require("./ArioLogo.png")}
          />
        </Container>
        <TitleContainer>
          <Title>Healthy Living Console</Title>
          {/* <Divider>|</Divider>
          <Title>Dashboard</Title> */}
        </TitleContainer>
        <Container>
          <Moment element={TimeText} format="dddd MMMM D, YYYY" />
          {/* set up users to pull from list of users correctly */}
          <TimeText>Welcome - John Smith</TimeText>
          {/* {this.props.user} */}
        </Container>
      </Wrapper>
    );
  }
}
const mapStateToProps = (state, props) => ({
  user: state.user
});
const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

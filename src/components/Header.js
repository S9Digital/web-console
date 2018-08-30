import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Moment from "react-moment";

const Wrapper = styled.div`
  width: 100%;
  height: 120px;
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid black;
`;
const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Logo = styled.div`
  width: 100px;
  height: 75px;
  border: 1px solid black;
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const TitleContainer = styled.div`
  flex: 1;
  display: flex;
  width: 600px;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
`;
const Title = styled.p`
  font-size: 26px;
  width: 267px;
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
`;
const Divider = styled.p`
  font-size: 36px;
  margin-right: 5px;
  margin-left: 5px;
`;
const TimeText = styled.p`
  font-size: 16;
  color: black;
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
        <Container>
          <Logo>LOGO</Logo>
        </Container>
        <TitleContainer>
          <Title>Healthy Living Console</Title>
          <Divider>|</Divider>
          <Title>Dashboard</Title>
        </TitleContainer>
        <Container>
          <Moment element={TimeText} format="dddd MMMM D, YYYY - H:mma z" />
          {/* set up users to pull from list of users correctly */}
          <TimeText>Welcome - {this.props.user}</TimeText>
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

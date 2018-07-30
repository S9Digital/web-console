import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <Wrapper>hi</Wrapper>;
  }
}
const mapStateToProps = (state, props) => ({});
const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);

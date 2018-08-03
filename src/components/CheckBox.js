import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const Box = styled.div`
  width: 20px;
  height: 20px;
  border: 1px solid black;
  background-color: #888888;
  box-shadow: 2px 2px rgba(14, 14, 14, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;
class CheckBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checked: false };
  }
  handleClick() {
    this.setState({ checked: true });
  }

  render() {
    return (
      <Box onClick={this.handleClick.bind(this)}>
        {this.state.checked ? "X" : null}
      </Box>
    );
  }
}
const mapStateToProps = (state, props) => ({});
const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckBox);

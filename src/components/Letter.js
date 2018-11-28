import React, { Component } from "react";
import styled from "styled-components";

const StyledLetter = styled.div`
  padding: 25px;
  background-color: black;
  color: white;
  margin: 25px;
  border: 1px solid ${props => props.borderColor};
  transition: transform 300ms ease-in-out;
`;

const Trigger = styled.div``;

class Letter extends Component {
  componentDidMount() {
    console.log("these are my props" + this.props);
  }
  render() {
    const { data, borderColor, isHome } = this.props;
    return (
      <Trigger isHome={isHome}>
        <StyledLetter borderColor={borderColor}>{data}</StyledLetter>
      </Trigger>
    );
  }
}

export default Letter;

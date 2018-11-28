import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

const bounceAnimation = keyframes`
  from {
    margin-left: ${props => props.margin}px;
    margin-top: ${props => props.margin}px;
  }
  100% {
    margin-left: ${props => props.margin}px;
    margin-top: 0;
  }`;

const StyledLetter = styled.div`
  padding: 25px;
  background-color: black;
  color: white;
  margin: 25px;
  border: 1px solid ${props => props.borderColor};
  transition: transform 3300ms ease-in-out;
`;

const Trigger = styled.div`
  margin-top: ${props => props.margin}px;
  margin-left: ${props => props.margin}px;
  position: absolute;
  animation: ${bounceAnimation} 5s infinite alternate;
`;

class Letter extends Component {
  render() {
    const { data, borderColor, isHome, margin } = this.props;
    return (
      <Trigger isHome={isHome} margin={margin}>
        <StyledLetter isHome={isHome} borderColor={borderColor}>
          {data}
        </StyledLetter>
      </Trigger>
    );
  }
}

export default Letter;

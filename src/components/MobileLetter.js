import React from "react";
import styled from "styled-components";
import SlideInAnimation from "../functions/SlideInAnimation";

const MobileLetterWrapper = styled.div`
  padding: 12px;
  background-color: black;
  color: white;
  margin: ${props => props.margin}px;
  border: 1px solid ${props => props.borderColor};
  font-size: 22px;
  font-weight: bold;
  animation: ${props => SlideInAnimation(props.margin)} 1s forwards;
  animation-delay: ${props => props.delay}s;
  opacity: 0;
`;

const MobileLetter = props => {
  return (
    <MobileLetterWrapper
      margin={props.margin}
      borderColor={props.borderColor}
      delay={props.delay}
    >
      {props.data}
    </MobileLetterWrapper>
  );
};

export default MobileLetter;

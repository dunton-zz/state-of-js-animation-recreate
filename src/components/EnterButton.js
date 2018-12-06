import React from "react";
import styled from "styled-components";
import MediaQuery from "react-responsive";
import SlideInAnimation from "../functions/SlideInAnimation";

const Button = styled.div`
  color: white;
  background-color: green;
  padding: 20px 50px;
  z-index: 100;
  cursor: pointer;
`;

const MobileButton = styled.div`
  color: white;
  background-color: red;
  padding: 20px 50px;
  z-index: 100;
  cursor: pointer;
  animation: ${props => SlideInAnimation(props.margin)} 1s forwards;
  animation-delay: ${props => props.delay}s;
  opacity: 0;
`;

const WrapButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const EnterButton = props => {
  const { buttonText, checkForHover, removeHover } = props;
  return (
    <WrapButton>
      <MediaQuery minDeviceWidth={782}>
        <Button
          onMouseEnter={checkForHover}
          onMouseLeave={removeHover}
          onClick={checkForHover}
        >
          {buttonText}
        </Button>
      </MediaQuery>
      <MediaQuery maxDeviceWidth={782}>
        <MobileButton margin={10} delay={4}>
          {buttonText}
        </MobileButton>
      </MediaQuery>
    </WrapButton>
  );
};

export default EnterButton;

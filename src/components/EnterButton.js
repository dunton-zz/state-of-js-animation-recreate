import React from "react";
import styled from "styled-components";
const Button = styled.div`
  color: white
  background-color: green;
  padding: 20px 50px;
  position: relative;
  z-index: 100;
`;
const EnterButton = props => {
  const { buttonText, checkForHover, removeHover } = props;
  return (
    <Button onMouseEnter={checkForHover} onMouseLeave={removeHover}>
      {buttonText}
    </Button>
  );
};

export default EnterButton;

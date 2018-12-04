import React from "react";
import styled from "styled-components";

const Button = styled.div`
  color: white;
  background-color: green;
  padding: 20px 50px;
  z-index: 100;
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
      <Button onMouseEnter={checkForHover} onMouseLeave={removeHover}>
        {buttonText}
      </Button>
    </WrapButton>
  );
};

export default EnterButton;

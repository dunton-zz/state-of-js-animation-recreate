import React, { Component } from "react";
import Letter from "./Letter";
import EnterButton from "./EnterButton";
import styled from "styled-components";

const NameWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
`;

const Wrapper = styled.section`
  height: 100vh;
  overflow: hidden;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      home: false
    };

    this.NameWrapper = null;
  }

  checkForHover = () => {
    this.setState({
      home: true
    });
  };
  removeHover = () => {
    this.setState({
      home: false
    });
  };
  componentDidMount() {
    const width = this.NameWrapper.getBoundingClientRect().width;
    this.setState({
      containerWidth: width
    });
  }
  render() {
    console.log(this.state);
    return (
      <Wrapper>
        <NameWrapper ref={div => (this.NameWrapper = div)}>
          <Letter
            data="R"
            borderColor="red"
            isHome={this.state.home}
            animationType={"y"}
            currentSide={"left"}
            currentTopOrBottom={"top"}
          />
          <Letter
            data="Y"
            borderColor="red"
            isHome={this.state.home}
            animationType={"x"}
            currentSide={"right"}
            currentTopOrBottom={"top"}
          />
          <Letter
            data="A"
            borderColor="red"
            isHome={this.state.home}
            animationType={"x"}
            currentSide={"left"}
            currentTopOrBottom={"top"}
          />
          <Letter
            data="N"
            borderColor="red"
            isHome={this.state.home}
            animationType={"y"}
            currentSide={"right"}
            currentTopOrBottom={"bottom"}
          />
        </NameWrapper>
        <ButtonWrapper>
          <EnterButton
            buttonText="Who am I?"
            checkForHover={this.checkForHover}
            removeHover={this.removeHover}
          />
        </ButtonWrapper>
      </Wrapper>
    );
  }
}

export default App;

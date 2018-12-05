import React, { Component } from "react";
import Letter from "./Letter";
import EnterButton from "./EnterButton";
import styled from "styled-components";

const NameWrapper = styled.div`
  display: flex;
  justify-content: center;

  flex-wrap: wrap;
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
      home: false,
      margin: 20
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
    return (
      <Wrapper>
        <NameWrapper ref={div => (this.NameWrapper = div)}>
          <Letter
            data="R"
            borderColor="red"
            isHome={this.state.home}
            animationType={"y"}
            currentLeftOrRight={"left"}
            currentTopOrBottom={"top"}
            margin={this.state.margin}
          />
          <Letter
            data="Y"
            borderColor="red"
            isHome={this.state.home}
            animationType={"x"}
            currentLeftOrRight={"right"}
            currentTopOrBottom={"top"}
            margin={this.state.margin}
          />

          <Letter
            data="A"
            borderColor="red"
            isHome={this.state.home}
            animationType={"x"}
            currentLeftOrRight={"left"}
            currentTopOrBottom={"top"}
            margin={this.state.margin}
          />
          <Letter
            data="N"
            borderColor="red"
            isHome={this.state.home}
            animationType={"y"}
            currentLeftOrRight={"right"}
            currentTopOrBottom={"bottom"}
            margin={this.state.margin}
          />
        </NameWrapper>
        <NameWrapper>
          <Letter
            data="D"
            borderColor="red"
            isHome={this.state.home}
            animationType={"x"}
            currentLeftOrRight={"right"}
            currentTopOrBottom={"bottom"}
            margin={this.state.margin}
          />
          <Letter
            data="U"
            borderColor="red"
            isHome={this.state.home}
            animationType={"y"}
            currentLeftOrRight={"left"}
            currentTopOrBottom={"bottom"}
            margin={this.state.margin}
          />
          <Letter
            data="N"
            borderColor="red"
            isHome={this.state.home}
            animationType={"y"}
            currentLeftOrRight={"right"}
            currentTopOrBottom={"top"}
            margin={this.state.margin}
          />
          <Letter
            data="T"
            borderColor="red"
            isHome={this.state.home}
            animationType={"y"}
            currentLeftOrRight={"left"}
            currentTopOrBottom={"top"}
            margin={this.state.margin}
          />
          <Letter
            data="O"
            borderColor="red"
            isHome={this.state.home}
            animationType={"y"}
            currentLeftOrRight={"right"}
            currentTopOrBottom={"bottom"}
            margin={this.state.margin}
          />
          <Letter
            data="N"
            borderColor="red"
            isHome={this.state.home}
            animationType={"y"}
            currentLeftOrRight={"left"}
            currentTopOrBottom={"bottom"}
            margin={this.state.margin}
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

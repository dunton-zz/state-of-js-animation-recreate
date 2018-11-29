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
  display: flex;
  justify-content: center;
  align-items: center;
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
      containerWidth: 0
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
            xMove={"left"}
            yMove={"top"}
            containerWidth={this.state.containerWidth}
          />
          <Letter
            data="Y"
            borderColor="red"
            isHome={this.state.home}
            xMove={"right"}
            yMove={"top"}
            containerWidth={this.state.containerWidth}
          />
          <Letter
            data="A"
            borderColor="red"
            isHome={this.state.home}
            xMove={"right"}
            yMove={"bottom"}
            containerWidth={this.state.containerWidth}
          />
          <Letter
            data="N"
            borderColor="red"
            isHome={this.state.home}
            xMove={"left"}
            yMove={"bottom"}
            containerWidth={this.state.containerWidth}
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

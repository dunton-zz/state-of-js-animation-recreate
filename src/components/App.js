import React, { Component } from "react";
import Letter from "./Letter";
import EnterButton from "./EnterButton";
import styled from "styled-components";

const NameWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.section``;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      home: false
    };
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
  render() {
    console.log(this.state);
    return (
      <Wrapper>
        <NameWrapper>
          <Letter data="R" borderColor="red" isHome={this.state.home} />
          <Letter data="Y" borderColor="red" isHome={this.state.home} />
          <Letter data="A" borderColor="red" isHome={this.state.home} />
          <Letter data="N" borderColor="red" isHome={this.state.home} />
        </NameWrapper>
        <NameWrapper>
          <Letter data="D" borderColor="red" isHome={this.state.home} />
          <Letter data="U" borderColor="red" isHome={this.state.home} />
          <Letter data="N" borderColor="red" isHome={this.state.home} />
          <Letter data="T" borderColor="red" isHome={this.state.home} />
          <Letter data="O" borderColor="red" isHome={this.state.home} />
          <Letter data="N" borderColor="red" isHome={this.state.home} />
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

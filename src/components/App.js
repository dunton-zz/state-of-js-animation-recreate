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
  height: 100%;
`;

const Wrapper = styled.section`
  height: 100vh;
`;

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
        <div>
          <Letter
            data="R"
            borderColor="red"
            isHome={this.state.home}
            margin={20}
          />
          <Letter
            data="Y"
            borderColor="red"
            isHome={this.state.home}
            margin={120}
          />
          <Letter
            data="A"
            borderColor="red"
            isHome={this.state.home}
            margin={220}
          />
          <Letter
            data="N"
            borderColor="red"
            isHome={this.state.home}
            margin={320}
          />
        </div>
        <div>
          <Letter
            data="D"
            borderColor="red"
            isHome={this.state.home}
            margin={520}
          />
          <Letter
            data="U"
            borderColor="red"
            isHome={this.state.home}
            margin={620}
          />
          <Letter
            data="N"
            borderColor="red"
            isHome={this.state.home}
            margin={720}
          />
          <Letter
            data="T"
            borderColor="red"
            isHome={this.state.home}
            margin={820}
          />
          <Letter
            data="O"
            borderColor="red"
            isHome={this.state.home}
            margin={920}
          />
          <Letter
            data="N"
            borderColor="red"
            isHome={this.state.home}
            margin={1020}
          />
        </div>
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

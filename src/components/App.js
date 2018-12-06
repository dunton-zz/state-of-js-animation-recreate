import React, { Component } from "react";
import MediaQuery from "react-responsive";
import styled from "styled-components";
import Desktop from "./Desktop";
import Mobile from "./Mobile";

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
    return (
      <Wrapper>
        <MediaQuery maxDeviceWidth={782}>
          <Mobile />
        </MediaQuery>
        <MediaQuery minDeviceWidth={783}>
          <Desktop
            margin={this.state.margin}
            home={this.state.home}
            checkForHover={this.checkForHover}
            removeHover={this.removeHover}
          />
        </MediaQuery>
      </Wrapper>
    );
  }
}

export default App;

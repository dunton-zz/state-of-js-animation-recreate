import React, { Component } from "react";
import MobileLetter from "./MobileLetter";
import MobileNameWrapper from "./MobileNameWrapper";
import MobileWrapper from "./MobileWrapper";
import EnterButton from "./EnterButton";

class Mobile extends Component {
  constructor() {
    super();
    this.state = {
      margin: 5
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        opacity: 1
      });
    }, 2000);
  }
  render() {
    return (
      <MobileWrapper>
        <MobileNameWrapper>
          <MobileLetter
            data="R"
            borderColor="red"
            margin={this.state.margin}
            delay={1}
          />
          <MobileLetter
            data="Y"
            borderColor="red"
            margin={this.state.margin}
            delay={1.3}
          />
          <MobileLetter
            data="A"
            borderColor="red"
            margin={this.state.margin}
            delay={1.6}
          />
          <MobileLetter
            data="N"
            borderColor="red"
            margin={this.state.margin}
            delay={1.7}
          />
        </MobileNameWrapper>
        <MobileNameWrapper>
          <MobileLetter
            data="D"
            borderColor="red"
            margin={this.state.margin}
            delay={2}
          />
          <MobileLetter
            data="U"
            borderColor="red"
            margin={this.state.margin}
            delay={2.3}
          />
          <MobileLetter
            data="N"
            borderColor="red"
            margin={this.state.margin}
            delay={2.6}
          />
          <MobileLetter
            data="T"
            borderColor="red"
            margin={this.state.margin}
            delay={2.9}
          />
          <MobileLetter
            data="O"
            borderColor="red"
            margin={this.state.margin}
            delay={3.2}
          />
          <MobileLetter
            data="N"
            borderColor="red"
            margin={this.state.margin}
            delay={3.5}
          />
        </MobileNameWrapper>
        <EnterButton buttonText={"Enter Site!"} />
      </MobileWrapper>
    );
  }
}

export default Mobile;

import React, { Component } from "react";
import NameWrapper from "./NameWrapper";
import ButtonWrapper from "./ButtonWrapper";
import Letter from "./Letter";
import EnterButton from "./EnterButton";

class Desktop extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <NameWrapper>
          <Letter
            data="R"
            borderColor="red"
            isHome={this.props.home}
            animationType={"y"}
            currentLeftOrRight={"left"}
            currentTopOrBottom={"top"}
            margin={this.props.margin}
          />
          <Letter
            data="Y"
            borderColor="red"
            isHome={this.props.home}
            animationType={"x"}
            currentLeftOrRight={"right"}
            currentTopOrBottom={"top"}
            margin={this.props.margin}
          />
          <Letter
            data="A"
            borderColor="red"
            isHome={this.props.home}
            animationType={"x"}
            currentLeftOrRight={"left"}
            currentTopOrBottom={"top"}
            margin={this.props.margin}
          />
          <Letter
            data="N"
            borderColor="red"
            isHome={this.props.home}
            animationType={"y"}
            currentLeftOrRight={"right"}
            currentTopOrBottom={"bottom"}
            margin={this.props.margin}
          />
        </NameWrapper>
        <NameWrapper>
          <Letter
            data="D"
            borderColor="red"
            isHome={this.props.home}
            animationType={"x"}
            currentLeftOrRight={"right"}
            currentTopOrBottom={"bottom"}
            margin={this.props.margin}
          />
          <Letter
            data="U"
            borderColor="red"
            isHome={this.props.home}
            animationType={"y"}
            currentLeftOrRight={"left"}
            currentTopOrBottom={"bottom"}
            margin={this.props.margin}
          />
          <Letter
            data="N"
            borderColor="red"
            isHome={this.props.home}
            animationType={"y"}
            currentLeftOrRight={"right"}
            currentTopOrBottom={"top"}
            margin={this.props.margin}
          />
          <Letter
            data="T"
            borderColor="red"
            isHome={this.props.home}
            animationType={"y"}
            currentLeftOrRight={"left"}
            currentTopOrBottom={"top"}
            margin={this.props.margin}
          />
          <Letter
            data="O"
            borderColor="red"
            isHome={this.props.home}
            animationType={"y"}
            currentLeftOrRight={"right"}
            currentTopOrBottom={"bottom"}
            margin={this.props.margin}
          />
          <Letter
            data="N"
            borderColor="red"
            isHome={this.props.home}
            animationType={"y"}
            currentLeftOrRight={"left"}
            currentTopOrBottom={"bottom"}
            margin={this.props.margin}
          />
        </NameWrapper>
        <ButtonWrapper>
          <EnterButton
            buttonText="Who am I?"
            checkForHover={this.props.checkForHover}
            removeHover={this.props.removeHover}
          />
        </ButtonWrapper>
      </div>
    );
  }
}

export default Desktop;

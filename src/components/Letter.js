import React, { Component } from "react";
import styled from "styled-components";
import { TweenLite, Linear } from "gsap";
import getNewCoordinates from "../functions/getNewCoordinates";
import sizeAnimationContainer from "../functions/sizeAnimationContainer";

const StyledLetter = styled.div`
  padding: 32px;
  background-color: black;
  color: white;
  margin: ${props => props.margin}px;
  border: 1px solid ${props => props.borderColor};
  font-size: 22px;
  font-weight: bold;
`;

const LetterWrapper = styled.div``;

class Letter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
      animationTime: 2,
      minTop: 0,
      maxTop: 0,
      maxRight: 0,
      minLeft: 0,
      currentLeftOrRight: null,
      currentTopOrBottom: null,
      animationType: "",
      endAnimation: false
    };
    // reference to the DOM node
    this.letterElement = null;
    // reference to the animation
    this.animation = null;
  }

  componentDidMount() {
    const {
      animationType,
      currentLeftOrRight,
      currentTopOrBottom,
      margin
    } = this.props;

    const {
      windowWidth,
      windowHeight,
      offsetTop,
      offsetLeft,
      elementHeight,
      elementX,
      elementWidth
    } = sizeAnimationContainer(this.letterElement);
    this.setState({
      minTop: -offsetTop - margin,
      maxTop: windowHeight - elementHeight + margin - offsetTop,
      maxRight: windowWidth - elementX - (elementWidth - margin),
      minLeft: -offsetLeft - margin,
      animationType,
      currentLeftOrRight,
      currentTopOrBottom
    });
  }

  moveElement = animationType => {
    const {
      minTop,
      maxTop,
      minLeft,
      maxRight,
      currentLeftOrRight,
      currentTopOrBottom
    } = this.state;
    const animationTime = Math.floor(Math.random() * 4) + 1;

    if (animationType === "x") {
      const newCoordinates = getNewCoordinates(
        minTop,
        maxTop,
        minLeft,
        maxRight,
        currentLeftOrRight
      );
      const { x, y, xDirection } = newCoordinates;

      this.setState({
        x,
        y,
        animationTime,
        currentLeftOrRight: xDirection,
        animationType
      });
    } else if (animationType === "y") {
      const newCoordinates = getNewCoordinates(
        minTop,
        maxTop,
        minLeft,
        maxRight,
        currentTopOrBottom
      );
      const { x, y, yDirection } = newCoordinates;

      this.setState({
        x,
        y,
        animationTime,
        currentTopOrBottom: yDirection,
        animationType: "y"
      });
    }
  };

  flipAnimation = () => {
    // alternate animation types
    const { animationType } = this.state;

    if (animationType === "x") {
      this.moveElement("y");
    } else if (animationType === "y") {
      this.moveElement("x");
    }
  };
  moveAnimation = () => {
    this.animation = TweenLite.to(
      this.letterElement,
      this.state.animationTime,
      {
        x: this.state.x,
        y: this.state.y,
        ease: Linear.easeNone,
        onComplete: this.flipAnimation
      }
    );
  };

  componentDidUpdate() {
    if (this.props.isHome) {
      this.returnToHome();
    }
    // check to see if isHome is false and endAnimation is true, means we left button
    if (!this.props.isHome && this.state.endAnimation) {
      this.setState({
        endAnimation: false
      });
      this.flipAnimation();
    }
    // fires whenever component updates
    this.moveAnimation();
  }

  returnToHome = () => {
    console.log("called");
    if (this.state.x !== 0) {
      this.setState({
        x: 0,
        y: 0,
        animationTime: 0.5,
        endAnimation: true
      });
    }
  };

  render() {
    const { data, borderColor, isHome, margin } = this.props;

    return (
      <LetterWrapper isHome={isHome} ref={div => (this.letterElement = div)}>
        <StyledLetter borderColor={borderColor} margin={margin}>
          {data}
        </StyledLetter>
      </LetterWrapper>
    );
  }
}

export default Letter;

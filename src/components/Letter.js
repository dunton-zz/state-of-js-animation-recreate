import React, { Component } from "react";
import styled from "styled-components";
import { TweenLite, Linear } from "gsap";
import leftToRightAnimation from "./leftToRightAnimation";
import topToBottomAnimation from "./topToBottomAnimation";

const StyledLetter = styled.div`
  padding: 25px;
  background-color: black;
  color: white;
  margin: 25px;
  border: 1px solid ${props => props.borderColor};
  transition: transform 3300ms ease-in-out;
`;

const Trigger = styled.div``;

class Letter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
      animationTime: 2,
      minTop: null,
      maxTop: null,
      maxRight: null,
      minLeft: null,
      currentSide: null,
      currentTopOrBottom: null,
      animationType: ""
    };
    // reference to the DOM node
    this.letterElement = null;
    // reference to the animation
    this.animation = null;
  }

  componentDidMount() {
    const { animationType, currentSide, currentTopOrBottom } = this.props;

    const windowWidth = window.innerWidth;
    this.setState(
      {
        minTop: -this.letterElement.offsetTop - 25,
        maxTop: this.letterElement.offsetHeight - 90,
        maxRight:
          windowWidth - this.letterElement.getBoundingClientRect().x - 90,
        minLeft: -this.letterElement.offsetLeft - 25,
        animationType,
        currentSide: currentSide,
        currentTopOrBottom
      },
      () => {
        this.moveElement(animationType);
      }
    );
  }

  moveElement = animationType => {
    const {
      minTop,
      maxTop,
      minLeft,
      maxRight,
      currentSide,
      currentTopOrBottom
    } = this.state;
    if (animationType === "x") {
      const newCoordinates = leftToRightAnimation(
        minTop,
        maxTop,
        minLeft,
        maxRight,
        currentSide
      );
      const { x, y, xDirection } = newCoordinates;
      const animationTime = Math.floor(Math.random() * 3) + 1;
      this.setState(
        {
          x,
          y,
          animationTime,
          currentSide: xDirection,
          animationType
        },
        () => {
          this.moveAnimation();
        }
      );
    } else if (animationType === "y") {
      const newCoordinates = topToBottomAnimation(
        minTop,
        maxTop,
        minLeft,
        maxRight,
        currentTopOrBottom
      );
      const { x, y, yDirection } = newCoordinates;
      const animationTime = Math.floor(Math.random() * 4) + 1;

      this.setState(
        {
          x,
          y,
          animationTime,
          currentTopOrBottom: yDirection,
          animationType: "y"
        },
        () => {
          this.moveAnimation();
        }
      );
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
        ease: Linear.EaseNone,
        onComplete: this.flipAnimation
      }
    );
  };

  render() {
    const { data, borderColor, isHome, margin } = this.props;
    return (
      <Trigger
        isHome={isHome}
        margin={margin}
        ref={div => (this.letterElement = div)}
      >
        <StyledLetter isHome={isHome} borderColor={borderColor}>
          {data}
        </StyledLetter>
      </Trigger>
    );
  }
}

export default Letter;

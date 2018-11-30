import React, { Component } from "react";
import styled from "styled-components";
import { TimelineMax, TweenLite } from "gsap";

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
      largestX: 0,
      largestY: 0,
      smallestX: 0,
      smallestY: -25,
      animationTime: 3,
      isHome: false,
      containerWidth: 0,
      animationType: null,
      stop: false
    };
    // reference to the DOM node
    this.letterElement = null;
    // reference to the animation
    this.animation = null;

    this.updateLetterPosition = this.updateLetterPosition.bind(this);
  }
  moveAnimationProps = animationStart => {
    const { largestY, largestX, smallestX, smallestY } = this.state;
    let newX, newY;
    if (animationStart === "x") {
      let yPos = Math.floor(Math.random() * largestY);
      // randomize
      let left = Math.random() >= 0.5; // if true left if false right
      newX = left ? smallestX : largestX;
      newY = yPos;
    } else if (animationStart === "y") {
      let xPos = Math.floor(Math.random() * largestX);
      // randomize
      let bottom = Math.random() >= 0.5; // if true bottom if false top
      newY = bottom ? largestY : smallestY;
      newX = xPos;
    }
    let animationLength = Math.random() * 4.5 + 1;
    this.setState({
      x: newX,
      y: newY,
      animationTime: animationLength
    });
  };
  updateLetterPosition() {
    // we take previous max/mins and add the new movements
    this.setState(
      prevState => {
        return {
          largestX: prevState.largestX - prevState.x,
          largestY: prevState.largestY - prevState.y,
          smallestX: prevState.smallestX + prevState.x,
          smallestY: prevState.smallestY + prevState.y
        };
      },
      () => {
        this.flipAnimation();
      }
    );
  }
  componentDidMount() {
    const { animationStart } = this.props;
    const windowWidth = window.innerWidth;
    this.setState(
      {
        animationType: animationStart,
        largestY: this.letterElement.offsetHeight - 95,
        largestX:
          windowWidth - 88 - this.letterElement.getBoundingClientRect().x,
        smallestX: -this.letterElement.offsetLeft - 25
      },
      () => {
        this.moveAnimationProps(animationStart);
        this.moveAnimation();
      }
    );
  }

  flipAnimation = () => {
    // alternate animation types
    const animationType = this.state.animationType;
    if (animationType === "x") {
      this.moveAnimationProps("y");
      this.moveAnimation();
    } else if (animationType === "y") {
      this.moveAnimationProps("x");
      this.moveAnimation();
    }
  };
  moveAnimation = () => {
    // this.animation = new TimelineMax({ repeat: -1, yoyo: true }).to(
    //   this.letterElement,
    //   this.state.animationTime,
    //   {
    //     x: this.state.x,
    //     y: this.state.y
    //   }
    // );
    this.animation = TweenLite.to(
      this.letterElement,
      this.state.animationTime,
      {
        x: this.state.x,
        y: this.state.y,
        onComplete: this.updateLetterPosition
      }
    );
  };

  componentDidUpdate() {
    // if (!this.state.isHome) {
    //   this.moveAnimation();
    // }
  }
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

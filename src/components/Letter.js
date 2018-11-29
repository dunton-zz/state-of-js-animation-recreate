import React, { Component } from "react";
import styled from "styled-components";
import { TimelineMax } from "gsap";

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
      animationTime: 3,
      isHome: false
    };
    // reference to the DOM node
    this.letterElement = null;
    // reference to the animation
    this.animation = null;
  }
  moveAnimationProps = (xValue, yValue) => {
    this.setState({
      x: 2,
      y: 0
    });
  };
  componentDidMount() {
    this.moveAnimationProps();
    this.moveAnimation(this.props.xValue, 200);
  }

  moveAnimation = () => {
    const largestY = this.letterElement.offsetHeight - 95;
    const smallestY = 0;
    const largestX =
      this.props.containerWidth - this.letterElement.getBoundingClientRect().x;
    const smallestX = -this.letterElement.offsetLeft - 25;

    this.animation = new TimelineMax({ repeat: -1, yoyo: true }).to(
      this.letterElement,
      this.state.animationTime,
      {
        x: smallestX,
        y: largestY
      }
    );
  };

  componentDidUpdate() {
    if (!this.state.isHome) {
      this.moveAnimation();
    }
  }
  render() {
    console.log(this.state);
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

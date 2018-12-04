const leftToRightAnimation = (
  minTop,
  maxTop,
  minLeft,
  maxRight,
  currentSide
) => {
  let moveLeftOrRight = Math.floor(Math.random() * 2) === 0;
  let xDirection;
  console.log(currentSide);
  if (currentSide === "left") {
    xDirection = "right";
  } else if (currentSide === "right") {
    xDirection = "left";
  } else {
    xDirection = moveLeftOrRight ? "left" : "right";
  }
  let x, y;
  if (xDirection === "left") {
    x = minLeft;
    y = Math.random() * maxTop + minTop;
  } else if (xDirection === "right") {
    x = maxRight;
    y = Math.random() * maxTop + minTop;
  }
  return { x, y, xDirection };
};

export default leftToRightAnimation;

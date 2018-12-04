const topToBottomAnimation = (
  minTop,
  maxTop,
  minLeft,
  maxRight,
  currentTopOrBottom
) => {
  let moveTopOrBottom = Math.floor(Math.random() * 2) === 0;
  let yDirection;
  if (currentTopOrBottom === "bottom") {
    yDirection = "top";
  } else if (currentTopOrBottom === "top") {
    yDirection = "bottom";
  } else {
    yDirection = moveTopOrBottom ? "top" : "bottom";
  }
  let x, y;
  if (yDirection === "top") {
    x = Math.random() * minLeft + maxRight;
    y = minTop;
  } else if (yDirection === "bottom") {
    x = Math.random() * minLeft + maxRight;
    y = maxTop;
  }
  return { x, y, yDirection };
};

export default topToBottomAnimation;

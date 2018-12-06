const getNewCoordinates = (minTop, maxTop, minLeft, maxRight, currentSide) => {
  let xDirection, yDirection, x, y;
  // alternate sides
  switch (currentSide) {
    case "left":
      xDirection = "right";
      x = maxRight;
      y = Math.random() * maxTop + minTop;
      break;
    case "right":
      xDirection = "left";
      x = minLeft;
      y = Math.random() * maxTop + minTop;
      break;
    case "top":
      yDirection = "bottom";
      x = Math.random() * minLeft + maxRight;
      y = minTop;
      break;
    case "bottom":
      yDirection = "top";
      x = Math.random() * minLeft + maxRight;
      y = maxTop;
      break;
    default:
      break;
  }
  return { x, y, xDirection, yDirection };
};

export default getNewCoordinates;

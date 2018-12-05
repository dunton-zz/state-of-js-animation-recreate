const sizeAnimationContainer = letterElement => {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const { offsetTop, offsetLeft } = letterElement;
  const elementHeight = letterElement.getBoundingClientRect().height;
  const elementX = letterElement.getBoundingClientRect().x;
  const elementWidth = letterElement.getBoundingClientRect().width;

  return {
    windowWidth,
    windowHeight,
    offsetTop,
    offsetLeft,
    elementHeight,
    elementX,
    elementWidth
  };
};

export default sizeAnimationContainer;

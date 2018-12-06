import { keyframes } from "styled-components";

const SlideInAnimation = margin => keyframes`
  0% { margin-top: 50px; opacity: 0;}
  40% { margin-top: 50px; opacity: .2}
  100% { margin-top: ${margin}px; opacity: 1}
`;

export default SlideInAnimation;

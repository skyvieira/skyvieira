import { keyframes } from "styled-components";

const swinging = keyframes`
  40% {
    transform: translateX(-4px) scale(.95) rotate(4deg);
    opacity: .4;
  }
  70% {
    transform: translateX(2px) scale(.9) rotate(-2deg);
    opacity: .6;
  }
`;

export default swinging
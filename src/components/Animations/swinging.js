import { keyframes } from "styled-components";

const swinging = keyframes`
  40% {
    transform: translateX(-5px) rotate(5deg);
    opacity: .4;
  }
  70% {
    transform: translateX(3px) rotate(-3deg);
    opacity: .6;
  }
`;

export default swinging
import { createGlobalStyle } from "styled-components";
import "../css/typography.css";

import noise from "../assets/images/noise.gif";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ::selection {
    background: #aaa;
  }

  body {
    font: 400 16px RoxboroughCF, georgia, serif;
    text-rendering: optimizelegibility;
    -webkit-font-smoothing: antialiased;
    word-wrap: break-word;
    font-kerning: normal;

    &:before {
      content: "";
      position: fixed;
      inset: -100px;
      background: url(${noise});
      opacity: ${props => props.isNoise ? '.06' : '0'};
      visibility: ${props => !props.isNoise && 'hidden'};
      transition: 1s;
      z-index: -1;
    }
  }
`;

export default GlobalStyle
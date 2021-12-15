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

  ::-webkit-scrollbar {
    position: absolute;
    width: 15px;
    border-radius: 10px;
    background: #00000020;
  }
  
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    border: 2px solid #555;
    background: #222;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #333;
  }

  body {
    font: 400 16px RoxboroughCF, georgia, serif;
    text-rendering: optimizelegibility;
    -webkit-font-smoothing: antialiased;
    word-wrap: break-word;
    font-kerning: normal;
    background: ${props => props.isDark && '#111'};
    overflow: hidden overlay;

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
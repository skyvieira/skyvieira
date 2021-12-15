import styled from "styled-components";

import swinging from "../../Animations/swinging";

export const Lamp = styled.div`
  position: absolute;
  top: 0;
  right: 25%;
  display: flex;
  justify-content: center;
  width: 4px;
  height: 30vh;
  background: #222;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Socket = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  width: .9rem;
  height: 1rem;
  border-radius: 3px 3px 0 0;
  background: #333;
  z-index: 1;

  &:before {
    content: '';
    position: absolute;
    top: -10px;
    width: 10px;
    height: 10px;
    border-radius: 50% 50% 0 0;
    background: #333;
  }
`;

export const Bulb = styled.div`
  position: absolute;
  bottom: -2.3rem;
  display: flex;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50% 50% 45% 45%;
  box-shadow: inset 0 0 20px #fff;
  background: ${props => props.isDark && '#fff'};
  transition: .6s;

  &:before {
    content: '';
    position: absolute;
    top: -8px;
    width: .95rem;
    height: 10px;
    border-radius: 50% 50% 0 0;
    background: #f8f8f8;
    opacity: ${props => props.isDark ? '.95' : '.9'};
    transition: .6s;
  }

  &:after {
    content: '';
    position: absolute;
    top: -1rem;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    background: radial-gradient(yellow, transparent 70%);
    transition: 1s;
    opacity: ${props => props.isDark ? '.25' : '0'};
  }
`;

export const Light = styled.div`
  position: absolute;
  top: -1.5rem;
  width: 20rem;
  height: 20rem;
  clip-path: polygon(50% 0, 100% 100%, 0 100%);
  border-radius: 0 0 20% 20%;
  background-image: linear-gradient(yellow, transparent);
  transition: .8s;
  opacity: ${props => props.isDark ? '.1' : '0'};
`;

export const Switch = styled.button`
  position: absolute;
  bottom: -5rem;
  left: 5px;
  display: flex;
  justify-content: center;
  width: 3px;
  height: 5.5rem;
  border: none;
  background: #333;
  animation: ${swinging} 2.5s infinite;
  cursor: pointer;
  opacity: .8;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #222;
  }
`;
import styled from "styled-components";

export const Box = styled.div`
  position: absolute;
  bottom: 5px;
  display: flex;
  justify-content: space-between;
  align-items: end;
`;

export const Mouse = styled.div`
  position: relative;
  bottom: 2px;
  left: 2px;
  width: 2.5rem;
  height: 3rem;
  clip-path: circle(45% at 40% 100%);
  border-radius: 0 0 10px 15px;
  box-shadow: 2px 5px 5px ${props => props.rgb};
  border-bottom: 1.5px solid #bbb;
  border-left: .6rem solid #bbb;
  background: #ddd;
  transition: .3s;
  cursor: pointer;

  &:after {
    content: '';
    position: absolute;
    top: 2rem;
    right: 35%;
    width: 5px;
    height: 3px;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 0 2px #fff;
    transform: rotate(20deg);
    transition: .3s;
  }

  &:hover {
    border-radius: 0 0 10px 10px;
    border-left-width: .4rem;
    transform: translate(2px, 2px) scaleX(.9);

    :after {
      top: 1.9rem;
    }

    div {
      left: 40%;
    }
  }
`;

export const MouseWheel = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  bottom: 2px;
  left: 45%;
  width: 4px;
  height: 8px;
  border-radius: 50%;
  border: 1px solid #555;
  box-shadow: inset .5px 0 1px #555;
  background: #aaa;
  transform: rotate(-8deg);
  transition: .3s;

  &:after {
    content: '';
    position: absolute;
    left: .8px;
    width: 70%;
    height: 3px;
    border-radius: 50%;
    box-shadow: 0 0 2px #fff;
    background: #fff;
  }
`;

export const Laptop = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 11rem;
  height: 1rem;
  border-radius: 0 0 60% 80%;
  box-shadow: inset 0 2px 5px #fff;
  border: 4px solid #ddd;
  border-right-width: 3px;
  border-top-color: #fff;
  background: #ccc;
`;

export const Screen = styled.div`
  position: absolute;
  bottom: 5px;
  right: 0;
  margin: 0 auto;
  width: 82%;
  height: 6rem;
  box-shadow: inset 0 20px 15px #eee;
  border: 5px solid #eee;
  border-right-width: 2px;
  border-bottom: none;
  border-radius: 8px 5px 5px 3px;
  background: #ddd;
  transform: rotate(-1deg);
`;
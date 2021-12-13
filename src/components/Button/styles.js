import styled from "styled-components";

export const Button = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  // margin: ${props => props.isNoise ? '4px 0' : '0 4px'} 5px 0;
  padding: .3rem 0;
  width: 2.8rem;
  color: ${props => props.color};
  font-size: .65em;
  font-weight: ${props => !props.isDark && '700'};
  letter-spacing: 2px;
  border-radius: 20px;
  // box-shadow: ${props => !props.isNoise && '1px 1px 0 #222'};
  background: #00000020;
  transition: .5s cubic-bezier(0, 0, 0.2, 1);
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    // left: ${props => props.isNoise ? '50%' : '10%'};
    width: 40%;
    height: 80%;
    border-radius: 50%;
    background: #000;
    mix-blend-mode: overlay;
    transition: .3s cubic-bezier(0, 0, 0.2, 1);
    opacity: .4;
  }
`;

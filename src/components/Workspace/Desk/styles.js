import styled from "styled-components";

export const Desk = styled.div`
  margin: 0 auto;
  width: 80%;
`;

export const Top = styled.div`
  height: 2.5rem;
  border-radius: 5px;
  border-top: 1.8rem solid ${props => props.isDark ? '#907438' : '#815247'};
  border-right: 5px solid ${props => props.isDark ? '#2d2412' : '#6b362a'};
  border-left: 3px solid ${props => props.isDark ? '#2d2412' : '#6b362a'};
  background:	${props => props.isDark ? '#907438' : '#7e3f31'};
  transition: .5s;
`;

export const Surface = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  z-index: 1;
`;

export const DeskLegs = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 90%;
  border-radius: 0 0 5% 5%;
  overflow: hidden;
`;

export const LeftLeg = styled.div`
  width: 10%;
  height: 10px;
  box-shadow: 5px -5px #111;
  border-right: 8px solid #00000040;
  border-left: 1px solid #888;
  border-radius: 0 0 5px 5px;
  background: #222;
`;

export const RightLeg = styled(LeftLeg)`
  box-shadow: -5px -5px #111;
`;

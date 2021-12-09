import styled from "styled-components";

export const Desk = styled.div`
  width: 90%;
`;

export const Top = styled.div`
  height: 3rem;
  border-radius: 5px;
  border-top: 2rem solid #e58642;
  border-right: 5px solid #5e2f0d;
  border-left: 3px solid #9c4e15;
  background: #7a3c11;
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

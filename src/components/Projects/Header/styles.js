import styled from "styled-components";

export const Container = styled.header`
  position: relative;
  margin-bottom: 4rem;
  height: calc(100vh - 4rem);
`;

export const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(${props => props.background});
  z-index -2;
`;

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  height: 100%;
  text-align: center;
  color: ${props => props.color};
`;

export const Title = styled.h1`
  width: 100%;
  font-size: 5em;
  font-weight: 700;
  text-transform: uppercase;
  text-shadow: -3px -1px 0 ${props => props.isDark ? '#221' : '#555'};
  transition: .4s;
`;
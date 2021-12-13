import styled from "styled-components";

export const Container = styled.main``;

export const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(${props => props.background});
  z-index -2;
`;

export const Wrapper = styled.div`
  height: 100vh;
`;

export const Project = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 6rem;
  width: 100vw;
  border: 10px solid ${props => props.isDark ? '#111' : '#fff'};
  color: ${props => props.color};
  transition: .5s;
`;

export const Demo = styled.figure`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 80%;
  height: 100%;
  border-radius: 20px;
  overflow: hidden;
  transition: .5s;

  &:hover {
    filter: drop-shadow(0 0 30px #ffffff30);

    img {
      transform: scale(1.1);
    }

    figcaption {
      bottom: 0;
    }
  }
`;

export const DemoGif = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: -2rem;
  transition: .5s;
`;

export const About = styled.figcaption`
  position: absolute;
  bottom: -6rem;
  right: 0;
  display: flex;
  align-items: center;
  text-align: center;
  min-height: 4rem;
  min-width: 40%;
  border-radius: 30px 0 0;
  border-right: 12px solid ${props => props.isDark ? '#111' : '#ccc'};
  background: ${props => props.isDark ? '#222' : '#fff'};
  box-shadow: 0 0 20px #111;
  transition: .2s;
  z-index: 1;
`;

export const Title = styled.h2`
  width: 100%;
  color: ${props => props.color};
`;

export const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  width: 10%;
`;

export const Icon = styled.img`
  width: 2.5rem;
  filter: invert(${props => props.isDark && '1'});
`;
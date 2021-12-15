import styled from "styled-components";

export const Container = styled.main`
`;

export const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(${props => props.background});
  z-index -2;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  border: 10px solid ${props => props.isDark ? '#111' : '#fff'};
  color: ${props => props.color};

  @media (min-width: 1024px) {
    height: 100vh;
  }
`;

export const Project = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 2rem;
  padding: 4rem 3rem;
  width: calc(100vw - 10px);
  background: #ffffff10;
  transition: .5s;
  overflow: hidden;

  @media (max-width: 1024px) {
    flex-direction: column;
    margin: 0 0 1rem 0;
    padding: 2rem 1rem 1rem;
    width: 100%;
  }
`;

export const Demo = styled.figure`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 70%;
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

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const DemoGif = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 5%;
  transition: .5s;
`;

export const About = styled.figcaption`
  position: absolute;
  bottom: -6rem;
  right: 0;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  min-height: 4rem;
  min-width: 40%;
  text-align: center;
  border-radius: 30px 0 0;
  border-right: 12px solid ${props => props.isDark ? '#111' : '#ccc'};
  background: ${props => props.isDark ? '#222' : '#fff'};
  box-shadow: 0 0 20px ${props => props.isDark ? '#111' : '#ccc'};
  transition: .2s;
  z-index: 1;

  @media (max-width: 1024px) {
    min-height: 3rem;
  }
`;

export const Title = styled.h2`
  width: 100%;
  color: ${props => props.color};

  @media (max-width: 768px) {
    font-size: 1.1em;
  }
`;

export const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 1rem;
  width: 25%;
  height: 100%;

  @media (max-width: 1024px) {
    flex-direction: row;
    width: 100%;
    height: 20%;
  }
`;

export const Icon = styled.img`
  width: 2.5rem;
  filter: invert(${props => props.isDark && '1'});
  transition: .2s;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 1024px) {
    width: 2rem;
  }
`;
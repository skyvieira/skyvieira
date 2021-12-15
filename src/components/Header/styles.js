import styled from "styled-components";

export const Container = styled.header``;

export const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: linear-gradient(${props => props.background});
  z-index -2;
`;

export const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 85%;
  height: 100vh;
  color: ${props => props.color};

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  height: 100%;

  @media (max-width: 1024px) {
    font-size: .8rem;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 330px) {
    font-size: .6rem;
  }
`;

export const Title = styled.h1`
  display: flex;
  flex-direction: column;
  font: 400 1.3em/1 'Times New Roman', georgia, serif;
  letter-spacing: 3px;
  text-transform: uppercase;
  text-shadow: 0 0 1px #000;
  transition: .4s;

  span {
    font-weight: 700;
    font-size: 10em;
    letter-spacing: 0;
    text-transform: lowercase;
    text-shadow: -6px -1px 0 ${props => props.isDark ? '#221' : '#666'};

    @media (max-width: 1024px) {
      font-size: 8em;
    }
  }
`;

export const About = styled.div`
  padding-top: 1rem;
  width: 68%;

  @media (max-width: 1024px) {
    width: 80%;
  }
`;

export const Subtitle = styled.h2`
  font-size: 1.4em;
  font-weight: 700;
  text-shadow: 0 0 1px black;
  transition: .5s;
  opacity: .8;
`;

export const Tags = styled.ul`
  display: flex;
  margin: 1.5rem 0 2rem;
  color: ${props => props.isDark ? 'pink' : '#777'};
  font: 700 1.2em Consolas, georgia, serif;
  letter-spacing: 3px;
  text-transform: uppercase;
  transition: .5s;

  @media (max-width: 1024px) {
    margin: 1.2rem 0;
  }
`;

export const Tag = styled.li`
  display: flex;
  align-items: center;
  list-style: none;

  &:not(:first-child) :before {
    content: '•';
    margin: 0 1rem;
    padding-bottom: 2px;
    color: #999;
    font-size: 1.1em;

    @media (max-width: 1024px) {
      margin: 0 8px;
      font-size: 1em;
    }
  }
`;

export const Text = styled(Subtitle)``;
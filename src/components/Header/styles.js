import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: center;
`;

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
  width: 92%;
  height: 100vh;
  color: ${props => props.color};
  transition: .5s;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  height: 100%;
`;

export const Title = styled.h1`
  display: flex;
  flex-direction: column;
  font-size: 10em;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 2px;
  text-transform: lowercase;
  text-shadow: ${props => props.isDark && '-10px -2px 0 #221a'};
  transition: .4s;

  span {
    font-size: .12em;
    letter-spacing: 8px;
    text-transform: uppercase;
    text-shadow: none;
  }
`;

export const About = styled.div`
  width: 60%;
`;

export const Subtitle = styled.h2`
  font-size: 1.4em;
  font-weight: ${props => props.isDark ? '400' : '700'};
  opacity: .8;
  transition: .5s;
`;

export const Tags = styled.ul`
  display: flex;
  margin: 1.5rem 0 2rem;
  color: ${props => props.isDark ? 'pink' : 'grey'};
  font-size: 1.1em;
  font-weight: 700;
  text-transform: uppercase;
  transition: .5s;
`;

export const Tag = styled.li`
  display: flex;
  align-items: center;
  font-weight: 700;
  list-style: none;
  transition: .5s;

  &:not(:first-child) :before {
    content: '•';
    margin: 0 1rem;
    padding-bottom: 2px;
    color: #ccc;
    font-size: 1.3em;
    transition: .5s;
  }
`;

export const Text = styled(Subtitle)``;
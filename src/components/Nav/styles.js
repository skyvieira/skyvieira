import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";

export const Navigation = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  width: 100%;
  height: 100vh;

  & > :nth-child(odd) {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;

export const Tools = styled.div``;

export const Logo = styled.img`
  width: 3rem;
  filter: invert${props => props.iconColor ? '(1)' : '(0)'};
  transition: .5s;
`;

export const LinkBox = styled.ul`
  list-style: none;
`;

export const Link = styled(GatsbyLink)`
  color: ${props => props.color};
  text-decoration: none;
  transition: .5s;
`;

export const SetNoise = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 7.6rem;
  color: ${props => props.color};
  font-size: 1.1em;
  transition: .5s;
`;

export const NoiseBtn = styled.button`
  position: relative;
  margin: ${props => props.isNoise ? '8px 0' : '0 8px'} 0 0;
  padding: .4rem 0;
  width: 4rem;
  color: ${props => props.color};
  font-size: .7em;
  font-weight: ${props => !props.isDark && '700'};
  letter-spacing: 2px;
  border-radius: 20px;
  box-shadow: ${props => !props.isNoise && '3px 3px 0 #222'};
  background: #00000010;
  transition: .5s cubic-bezier(0, 0, 0.2, 1);
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: ${props => props.isNoise ? '50%' : '0'};
    width: 50%;
    height: 100%;
    border-radius: 50%;
    background: ${props => props.isDark ? '#ccc' : '#000'};
    mix-blend-mode: overlay;
    transition: .3s cubic-bezier(0, 0, 0.2, 1);
  }
`;

import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";

export const Navigation = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 5rem;
  width: 100%;
  z-index: 1;

  & > :first-child,
  ul {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  @media (max-width: 1024px) {
    padding: 1rem 1.5rem;
  }
`;

export const Row = styled.div``;

export const Logo = styled.img`
  width: 2.5rem;
  filter: invert${props => props.iconColor ? '(1)' : '(0)'};
  transition: .5s;
`;

export const Tools = styled.div`
  display: flex;
  align-items: center;
  font-family: Courier;
`;

export const Gear = styled.button`
  position: relative;
  margin-left: 1rem;
  width: 1.2em;
  height: 1.2em;
  background: none;
  border-radius: 50%;
  border: calc(1.2em / 3.5) solid ${props => props.color};
  transform: ${props => props.tools && 'rotate(45deg)'};
  transition: .2s;
  cursor: pointer;

  &:before,
  &:after {
    content: '×';
    position: absolute;
    transform: translate(-50%, -50%);
    font-family: serif;
    font-weight: bold;
    font-size: 3em;
    color: ${props => props.color};
  }

  &:after {
    transform: translate(-50%,-50%) rotate(45deg);
  }
`;

export const Switch = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 6rem;
  color: ${props => props.color};
  font-size: .85em;
  transition: .5s;

  &:first-child {
    display: ${props => props.home ? 'none' : 'flex'};

    @media (max-width: 768px) {
      display: flex;
    }
  }
  
  &:not(:first-child) {
    margin-left: 1rem;
  }

  @media (max-width: 370px) {
    display: block !important;
    min-width: 3rem;
  }
`;

export const LinkRow = styled.ul`
  position: relative;
  top: 84vh;
  font-size: 1.05em;
  font-family: Consolas;
  list-style: none;

  @media (max-width: 370px) {
    font-size: .9em;
  }
`;

export const Link = styled(GatsbyLink)`
  color: ${props => props.color};
  text-decoration: none;
  transition: .5s;

  &:after {
    content: '';
    position: relative;
    bottom: -2px;
    display: block;
    margin: 0 auto;
    width: 3px;
    height: 3px;
    border-radius: 10px;
    background: ${props => props.color};
    transition: .3s;
    opacity: .5;
  }
  
  &:hover :after {
    width: 12px;
  }
`;
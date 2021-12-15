import React, { useEffect } from "react";
import styled from "styled-components";

const Cursor = styled.div`
  position: fixed;
  width: 6rem;
  height: 6rem;
  border: 1px solid #fff;
  border-radius: 50%;
  mix-blend-mode: difference;
  transition: transform 0.3s;
  pointer-events: none;
  overflow: hidden;
  z-index: 10;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export default function CustomCursor() {
  useEffect(() => {
    document.addEventListener('mousemove', (e) => {
      const cursor = document.getElementById('cursor');
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;

      const target = e.target;

      if (e.target.matches('button,a') 
        || target.parentElement?.matches('button,a')
      ) {
        cursor.style.transform = 'scale(.5) translate(-100%, -100%)';
      } else {
        cursor.style.transform = 'translate(-50%, -50%)';
      }
    });
  }, []);
  
  return <Cursor id="cursor" />
}
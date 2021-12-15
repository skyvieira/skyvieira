import React, { useEffect } from "react";
import styled from "styled-components";

const Cursor = styled.div`
  position: fixed;
  border: 1px solid #fff;
  border-radius: 50%;
  transition: width 0.3s, height 0.3s;
  transform: translate(-50%, -50%);
  mix-blend-mode: difference;
  pointer-events: none;
  overflow: hidden;
  z-index: 10;
`;

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.getElementById('cursor');

    document.addEventListener('mousemove', (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;

      const target = e.target;

      if(target.localName === 'button' 
        || target.localName === 'a' 
        || target.parentElement?.localName === 'a'
      ) {
        cursor.style.width = '3rem';
        cursor.style.height = '3rem';
      } else {
        cursor.style.width = '6rem';
        cursor.style.height = '6rem';
      }
    });
  }, []);

  return <Cursor id="cursor" />
}
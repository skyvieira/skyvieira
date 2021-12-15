import React, { useEffect } from "react";
import styled from "styled-components";

const Cursor = styled.div`
  position: fixed;
  width: 5rem;
  height: 5rem;
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
    document.addEventListener('mousemove', (e) => {
      const cursor = document.getElementById('cursor');
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    });
  }, []);

  return <Cursor id="cursor" />
}
import React, { useEffect } from "react";
import styled from "styled-components";

const Cursor = styled.div`
  position: fixed;
  width: 80px;
  height: 80px;
  border: 1px solid #fff;
  border-radius: 50%;
  transition: width 0.3s, height 0.3s;
  mix-blend-mode: difference;
  pointer-events: none;
  overflow: hidden;
  z-index: 10;
`;

export default function CustomCursor() {
  useEffect(() => {
    document.addEventListener('mousemove', (e) => {
      const cursor = document.getElementById('cursor');
      cursor.style.transform = `translate3d(${e.pageX}px, ${e.pageY}px, 0) translate(-50%, -50%)`;
    });
  }, []);

  return <Cursor id="cursor" />
}
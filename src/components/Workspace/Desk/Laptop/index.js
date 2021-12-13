import React, { useState, useContext } from "react";
import Context from "../../../../store/context";
import * as S from "./styles";

export default function Laptop() {
  const [rgb, setRgb] = useState('rgba(255,255,255,.4)');

  const handleRGB = () => {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);

    setRgb(`rgba(${x},${y},${z},.8)`);
  };

  const { state } = useContext(Context);

  return (
    <S.Box>
      <S.Mouse onClick={() => handleRGB()} rgb={rgb}>
        <S.MouseWheel />
      </S.Mouse>
      
      <S.Laptop isDark={state.isDark}>
        <S.Screen />
      </S.Laptop>
    </S.Box>
  );
}
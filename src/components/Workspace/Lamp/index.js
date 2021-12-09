import React, { useContext } from "react";
import Context from "../../../store/context";
import * as S from "./styles";

export default function Lamp() {
  const { state, dispatch } = useContext(Context);

  return (
    <S.Lamp>
      <S.Socket />
      <S.Bulb isDark={state.isDark}>
        <S.Light isDark={state.isDark} />
      </S.Bulb>
      <S.Switch onClick={() => dispatch({ type: 'TOGGLE_DARK_MODE' })} />
    </S.Lamp>
  );
}
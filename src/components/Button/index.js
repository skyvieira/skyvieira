import React, { useContext } from "react";
import Context from "../../store/context";
import * as S from "./styles";

export default function Button({ children, toggleNoise, toggleDark, color }) {
  const { state, dispatch } = useContext(Context);

  return <S.Button
    onClick={() => dispatch({ type: toggleNoise 
      ? 'TOGGLE_NOISE' 
      : toggleDark && 'TOGGLE_DARK_MODE' })}
    isNoise={state.isNoise}
    isDark={state.isDark}
    color={color()}
  >
    {children}
  </S.Button>
}
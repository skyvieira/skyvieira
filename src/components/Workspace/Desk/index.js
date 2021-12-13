import React, { useContext } from "react";
import Context from "../../../store/context";
import * as S from "./styles";

import Laptop from "./Laptop";

export default function Desk() {
  const { state } = useContext(Context);

  return (
    <S.Desk>
      <S.Top isDark={state.isDark}>
        <S.Surface>
          <Laptop />
        </S.Surface>
      </S.Top>
      
      <S.DeskLegs>
        <S.LeftLeg />
        <S.RightLeg />
      </S.DeskLegs>
    </S.Desk>
  );
}
import React from "react";
import * as S from "./styles";

import Laptop from "./Laptop";

export default function Desk() {
  return (
    <S.Desk>
      <S.Top>
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
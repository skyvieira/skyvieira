import React, { useContext } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Context from "../../../store/context";
import { useTheme } from "@emotion/react";
import * as S from "./styles";

export default function Header() {
  const data = useStaticQuery(graphql`
    query {
      blogdata {
        projects {
          headerTitle
          headerLightBg
          headerDarkBg
        }
      }
    }
  `);

  const query = data.blogdata.projects[0];

  const { state } = useContext(Context);
  const theme = useTheme();

  const setBackground = () => {
    return state.isDark 
    ? query.headerDarkBg
    : query.headerLightBg
  };

  const setFontColor = () => {
    return state.isDark 
    ? theme.home.dark.font 
    : theme.home.light.font
  };

  return (
    <S.Container>
      <S.Background background={setBackground()} />
      
      <S.Wrapper color={setFontColor()} >
        <S.Title>{query.headerTitle}</S.Title>
      </S.Wrapper>
    </S.Container>
  );
}
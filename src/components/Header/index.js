import React, { useContext } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Context from "../../store/context";
import { useTheme } from "@emotion/react";
import * as S from "./styles";

import Workspace from "../Workspace";

export default function Header() {
  const data = useStaticQuery(graphql`
    query {
      blogdata {
        headers {
          welcomeMsg
          subtitle
          tags
          about
          lightBgDeg
          lightBgColor1 {
            hex
          }
          lightBgColor2 {
            hex
          }
          darkBgDeg
          darkBgColor1 {
            hex
          }
          darkBgColor2 {
            hex
          }
        }
      }
    }
  `);

  const query = data.blogdata.headers[0];
  
  const { state } = useContext(Context);
  const theme = useTheme();

  const setBackground = () => {
    if(state.isDark) {
      return `
        ${query.darkBgDeg}deg, 
        ${query.darkBgColor1.hex}, 
        ${query.darkBgColor2.hex}
      `
    } else {
      return `
        ${query.lightBgDeg}deg, 
        ${query.lightBgColor1.hex}, 
        ${query.lightBgColor2.hex}
      `
    }
  };

  const tags =  query.tags.split(' ');

  const setFontColor = () => {
    return state.isDark ? theme.home.dark.font : theme.home.light.font
  };

  return (
    <S.Container>
      <S.Background background={setBackground()}/>

      <S.Wrapper color={setFontColor()}>
        <S.Content>
          <S.Title isDark={state.isDark}>
            <span>{query.welcomeMsg}</span> Livia.
          </S.Title>
          <S.About>
            <S.Subtitle isDark={state.isDark}>{query.subtitle}</S.Subtitle>
            <S.Tags isDark={state.isDark}>
              {tags.map((item, i) => (
                <S.Tag
                  key={i}
                  isDark={state.isDark}
                >
                  {item}
                </S.Tag>
              ))}
            </S.Tags>
            <S.Text isDark={state.isDark}>{query.about}</S.Text>
          </S.About>
        </S.Content>

        <Workspace />
      </S.Wrapper>
    </S.Container>
  );
}
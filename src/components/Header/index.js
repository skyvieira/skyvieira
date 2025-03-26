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
          lightBg
          darkBg
        }
      }
    }
  `);

  const query = data.blogdata.headers[0];
  
  const { state } = useContext(Context);
  const theme = useTheme();

  const setBackground = () => {
    return state.isDark 
    ? query.darkBg 
    : query.lightBg
  };

  const setFontColor = () => {
    return state.isDark 
    ? theme.home.dark.font 
    : theme.home.light.font
  };

  const tags =  query.tags.split(' ');

  return (
    <S.Container>
      <S.Background background={setBackground()}/>

      <S.Wrapper color={setFontColor()}>
        <S.Content>
          <S.Title isDark={state.isDark}>
            {query.welcomeMsg} <span>Sky.</span>
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

        {/* <Workspace /> */}
      </S.Wrapper>
    </S.Container>
  );
}

import React, { useContext } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Context from "../../store/context";
import { useTheme } from "@emotion/react";
import * as S from "./styles";

import Lamp from "../Workspace/Lamp";

export default function Nav({ home }) {
  const data = useStaticQuery(graphql`
    query {
      blogdata {
        navigations {
          logo {
            url
          }
          link1
          link2
        }
      }
    }
  `);

  const query = data.blogdata.navigations[0];

  const { state, dispatch } = useContext(Context);
  const theme = useTheme();
  
  const setFontColor = () => {
    return state.isDark ? theme.home.dark.font : theme.home.light.font
  };

  return (
    <S.Navigation>
      <S.Tools>
        <S.Link to="/" title="Icon made by Freepik">
          <S.Logo
            iconColor={state.isDark}
            src={query.logo.url}
            alt="Gatinho minimalista"
          />
        </S.Link>

        <S.SetNoise color={setFontColor()}>
          Noise
          <S.NoiseBtn
            onClick={() => dispatch({ type: 'TOGGLE_NOISE' })}
            isNoise={state.isNoise}
            isDark={state.isDark}
            color={setFontColor()}
          >
            {state.isNoise ? 'ON' : 'OFF'}
          </S.NoiseBtn>
        </S.SetNoise>
      </S.Tools>

      {home && <Lamp />}

      <S.LinkBox>
        <li>
          <S.Link
            to="/sobre"
            color={setFontColor()}
          >
            {query.link1}
          </S.Link>
        </li>
        <li>
          <S.Link
            to="/projetos"
            color={setFontColor()}
          >
            {query.link2}
          </S.Link>
        </li>
      </S.LinkBox>
    </S.Navigation>
  );
}
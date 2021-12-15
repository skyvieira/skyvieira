import React, { useContext, useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Context from "../../store/context";
import { useTheme } from "@emotion/react";
import * as S from "./styles";

import Lamp from "../Workspace/Lamp";
import Button from "../Button";

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
          linkedinIcon {
            url
          }
          githubIcon {
            url
          }
        }
      }
    }
  `);

  const query = data.blogdata.navigations[0];

  const [tools, setTools] = useState(false);
  const { state } = useContext(Context);
  const theme = useTheme();
  
  const setFontColor = () => {
    return state.isDark 
    ? theme.home.dark.font 
    : theme.home.light.font
  };

  return (
    <S.Navigation>
      <S.Row>
        <S.Link to="/" title="Icon made by Freepik">
          <S.Logo
            iconColor={state.isDark}
            src={query.logo.url}
            alt="Gatinho minimalista"
          />
        </S.Link>

        <S.Tools>
          {tools &&
            <>
              <S.Switch home={home} color={setFontColor()}>
                Dark
                <Button
                  toggleDark
                  color={setFontColor}
                >
                  {state.isDark ? 'ON' : 'OFF'}
                </Button>
              </S.Switch>
              <S.Switch color={setFontColor()}>
                Noise
                <Button
                  toggleNoise
                  color={setFontColor}
                >
                  {state.isNoise ? 'ON' : 'OFF'}
                </Button>
              </S.Switch>
            </>
          }

          <S.Gear
            onClick={() => setTools(!tools)}
            tools={tools}
            color={setFontColor()}
          />
        </S.Tools>
      </S.Row>

      {home && <Lamp />}

      <S.LinkRow>
        {/* <li>
          <S.Link
            to="/sobre"
            color={setFontColor()}
          >
            {query.link1}
          </S.Link>
        </li> */}
        <li>
          <S.Link
            to="/projetos"
            color={setFontColor()}
          >
            {query.link2}
          </S.Link>
        </li>

        <S.SocialBox>
          <a href="https://github.com/liviavieira" target="_blank" rel="noopener noreferrer">
            <S.Icon isDark={state.isDark} src={query.githubIcon.url} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/vieirana/" target="_blank" rel="noopener noreferrer">
            <S.Icon isDark={state.isDark} src={query.linkedinIcon.url} alt="LinkedIn" />
          </a>
        </S.SocialBox>
      </S.LinkRow>
    </S.Navigation>
  );
}
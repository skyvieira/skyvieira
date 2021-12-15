import React, { useContext } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Context from "../../../store/context";
import { useTheme } from "@emotion/react";
import * as S from "./styles";

import HorizontalContainer from "react-scroll-horizontal";

export default function Header() {
  const data = useStaticQuery(graphql`
    query {
      blogdata {
        projects {
          mainLightBg
          mainDarkBg
          projectDemo {
            url
          }
          projectTitle
          linkIcon {
            url
          }
          githubIcon {
            url
          }
          websiteLink
          githubLink
        }
      }
    }
  `);
  
  const query = data.blogdata.projects[0];

  const demo = query.projectDemo.map(demo => demo.url);
  const content = [];
  
  for (let i = 0; i < demo.length; i++) {
    content.push({
      demo: demo[i],
      title: query.projectTitle[i],
      link: query.websiteLink[i],
      github: query.githubLink[i]
    })
  };

  const { state } = useContext(Context);
  const theme = useTheme();

  const setBackground = () => {
    return state.isDark 
    ? query.mainDarkBg
    : query.mainLightBg
  };

  const setFontColor = () => {
    return state.isDark 
    ? theme.home.dark.font 
    : theme.home.light.font
  };

  return (
    <S.Container>
      <S.Background background={setBackground()} />
      <S.Wrapper color={setFontColor()}>
        <HorizontalContainer
          reverseScroll = { true }
          config = {{ stiffness: 300, damping: 100 }}
        >
          {content.map((project, i) => (
            <S.Project
              key={i}
              isDark={state.isDark}
            >
              <S.Demo>
                <S.DemoGif src={project.demo} alt="" />
                <S.About isDark={state.isDark}>
                  <S.Title color={setFontColor()}>
                    {project.title}
                  </S.Title>
                </S.About>
              </S.Demo>

              <S.LinkColumn>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <S.Icon
                    isDark={state.isDark}
                    src={query.linkIcon.url}
                    alt="Website Link"
                  />
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <S.Icon
                    isDark={state.isDark}
                    src={query.githubIcon.url}
                    alt="GitHub Link"
                  />
                </a>
              </S.LinkColumn>
            </S.Project>
          ))}
        </HorizontalContainer>
      </S.Wrapper>
    </S.Container>
  );
}
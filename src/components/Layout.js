import React, { useContext } from "react";
import { useLocation } from "@reach/router";
import { Helmet } from "react-helmet";
import Context from "../store/context";

import Cursor from "./Cursor";
import GlobalStyles from "./GlobalStyles";
import Nav from "./Nav";

export default function Layout({ children, home }) {
  const { state } = useContext(Context);

  const SetTitle = () => {
    const path = useLocation().pathname;
    let location = '';
    const title = 'Livia. Front-End Developer';

    if(path === '/') {
      location = 'Home'
    } else {
      location = path[1].toUpperCase() + path.slice(2)
    };

    return `${location} | ${title}`
  };

  return (
    <>
      <Helmet>
        <title>{SetTitle()}</title>
      </Helmet>

      <Cursor />
      
      <GlobalStyles
        isDark={state.isDark}
        isNoise={state.isNoise}
      />

      <>
        <Nav home={home} />
        {children}
      </>
    </>
  );
}
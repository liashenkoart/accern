import React, { useState, useReducer, useEffect, useRef } from "react";
import Header from "../components/header";
import ContentLoader from "../components/contentloader";
import PosedRouter from "../components/pseudorouter";
import { globalHistory } from "@reach/router";
import { Context } from "../context/context";
import reducerLayout from "../context/reducerLayout";
import reducerPages from "../context/reducerPages";
import reducerNotifi from "../context/reducerNotifi";
import reducerModals from "../context/reducerModals";
import reducerUserMail from "../context/reducerUserMail";
import reducerApp from "../context/reducerApp";
import { settings } from "../data/settings";
import Loader from "../components/loader/Loader";
import Scrollbar from 'react-smooth-scrollbar';
import ReactDynamicImport from "react-dynamic-import";
import Modals from "../components/modals";
import SmoothScrollbar from 'smooth-scrollbar';
import StopScrollPlugin from "../utils/plugins/ScrollStop";

SmoothScrollbar.use(StopScrollPlugin);

const _hsq = window._hsq = window._hsq || [];

import "./App.scss";
import "../styles/style.scss";

const App = () => {

  const [state, dispatchLayout] = useReducer(reducerLayout, {
    loadderState: "destroyed",
    //loadderState: "load",
    isShowContent: true,
    preloadStatus: "loading",
    isPause: false,
    headerState: "",
    isDisabledPreloader: false,
  });

  const [modals, dispatchModals] = useReducer(reducerModals, { isRequestTrial: false });
  const [userMail, dispatchUserMail] = useReducer(reducerUserMail, "");
  const [app, dispatchApp] = useReducer(reducerApp, {});

  const [components, setComponents] = useState([])

  const [scroll, setScroll] = useState(0);

  const [scrollB, setScrollB] = useState(null);

  const [pages, dispatchPages] = useReducer(reducerPages, {});
  const [notification, dispatchNotifi] = useReducer(reducerNotifi, {});
  const [isRendered, setIsRendered] = useState(false);

  const [page, setPage] = useState({ currentPage: window.location.pathname, previousPage: null });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if(scrollB) state.isSelectFocus ? scrollB.scrollbar.updatePluginOptions('stop', { open: true }) : scrollB.scrollbar.updatePluginOptions('stop', { open: false });
  },[state.isSelectFocus])

  useEffect(() => {

    importComponents();

    setTimeout(() => {
      dispatchLayout({ type: "SET_LAYOUT", data: { isShowContent: true } });
      setIsVisible(true);
    }, 100);

    setTimeout(() => {
      if(document.querySelector("#loader-bg")) document.querySelector("#loader-bg").remove();
      setTimeout(() => {
        dispatchLayout({ type: "SET_LAYOUT", data: { loadderState: "loaded" } });
      }, 1000)

      setTimeout(() => {
        dispatchLayout({ type: "SET_LAYOUT", data: { loadderState: "destroyed" } });
      }, 2200)
    }, 1000);

  }, []);

  // useEffect(() => {
  //   if (scrollB) {
  //     setInterval(() => {
  //       setScroll(scrollB.scrollbar.scrollTop);
  //     }, 100)
  //   }
  // }, [scrollB])

  useEffect(() => {
    setlayout();
  }, [page.currentPage]);

  globalHistory.listen((params) => {
    setPage(prevState => ({ ...prevState, currentPage: params.location.pathname }));
  })

  const setlayout = () => {
    const { currentPage } = page;

    setPreloader();
    setPage(prevState => ({ ...prevState, previousPage: currentPage }));

    setTimeout(() => {
      _hsq.push(['setPath', currentPage]);
      _hsq.push(['trackPageView']);
    }, 2000)
  }

  const setPreloader = () => {
    const { currentPage } = page;
    const { isDisabledPreloader } = state;

    if (!isDisabledPreloader) {
      if (currentPage == "/") {
        dispatchLayout({ type: "SET_LAYOUT", data: { preloadStatus: 'loaded' } });
      } else {
        dispatchLayout({ type: "SET_LAYOUT", data: { preloadStatus: 'loading' } });
      }
    }
  }

  const importComponent = (name, link, data, i) => {
    const loader = () => import(`../pages/${name}`);
    const Component = ReactDynamicImport({ loader });
    
    return <Component key={`r-${i}`} path={link} data={data}/>
  }

  const importComponents = () => {
    const comps = [];

    settings.navigation.map((nav, i) => {
      if (nav.component) {
        comps.push(importComponent(nav.component, nav.link, nav.data, i));
      }

      if (nav.sub) {
        nav.sub.columns.forEach((column) => {
          column.links.forEach((link, z) => {
            link.component && comps.push(importComponent(link.component, link.link, link.data, i + z));
          });

        })
      }
    })

    setComponents(comps);

    return comps;
  }

  return (
    <Context.Provider value={{ app, dispatchApp, dispatchLayout, pages, dispatchPages, notification, dispatchNotifi, modals, dispatchModals, userMail, dispatchUserMail, scroll, page, scrollB }}>
      <Header state={state.headerState} isFluid={state.isFluid} />
      <Scrollbar className="scoll-bar" ref={e => { if (e) { setScrollB(e); e.scrollbar.track.xAxis.element.remove(); } }}>
        <div className="app">
          <ContentLoader preloadStatus={state.preloadStatus} />
          <PosedRouter isPause={state.isPause} isDisabledPreloader={state.isDisabledPreloader}>
            {state.isShowContent && components}
          </PosedRouter>
        </div>
      </Scrollbar>
      <Modals />
      <Loader loaderState={state.loadderState} />
    </Context.Provider >
  );
}

export default App;

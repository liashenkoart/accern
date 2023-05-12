import React from "react";
import Hero from "../sections/global/hero";
import { page } from "../data/pages/news-room";
import NewsViewer from "../sections/news/newsviewer";
import Seo from "../components/seo";
import Footer from "../sections/global/footer";
import GetStarted from "../components/getstarted";
import SEO from "../data/seo.json";

import VisibilitySensor from '../utils/react-visibility-sensor';

const NewsRoom = ({path}) => {

  const sections = [
    { component: Hero, page: page.hero },
    { component: NewsViewer, page: page.news },
    { component: GetStarted, page: page },
    { component: Footer, isMinimal: true },
  ]

  return (
    <div>
      <Seo seo={SEO[path] ? SEO[path] : SEO["/"]} />
      {sections.map((section, i) => (
        <VisibilitySensor partialVisibility={true} once={true} key={`p-${i}`}>
          {({ isVisible }) =>
            React.createElement(section.component, { key: `s-${i}`, isVisible: isVisible, page: section.page, isSimple: section.isSimple ? true : false, isMinimal: section.isMinimal ? true : false })
          }
        </VisibilitySensor>
      ))}
    </div>
  );
}

export default NewsRoom;

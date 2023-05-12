import React from "react";
import Hero from "../sections/global/hero";
import Footer from "../sections/global/footer";
import { page } from "../data/pages/banking";
import Seo from "../components/seo";
import SEO from "../data/seo.json";

import VisibilitySensor from '../utils/react-visibility-sensor';

const Banking = ({path}) => {

  const sections = [
    {component: Hero, page: page.hero},
    {component: Footer},
  ]

  return (
    <div>
      <Seo seo={SEO[path] ? SEO[path] : SEO["/"]} />
      {sections.map((section, i) => (
        <VisibilitySensor partialVisibility={true} once={true} key={`p-${i}`}>
          {({ isVisible }) =>
            React.createElement(section.component, { key: `s-${i}`, isVisible: isVisible, page:section.page })
          }
        </VisibilitySensor>
      ))}
    </div>
  );
}

export default Banking;

import React from "react";
import Hero from "../sections/global/hero";
import Footer from "../sections/global/footer";
import Stats from "../sections/global/stats";
import Blocks from "../sections/global/blocks";
import { page } from "../data/pages/adaptiveNLP";
import Rows from "../sections/global/rows";
import Parser from "../sections/adaptivenlp/parser";
import Seo from "../components/seo";
import SEO from "../data/seo.json";

import VisibilitySensor from '../utils/react-visibility-sensor';

const AdaptiveNLP = ({path}) => {

  const sections = [
    {component: Hero, page: page.hero},
    {component: Parser, page: page.integratedNLP},
    {component: Stats, page: page.industryLeading},
    {component: Rows, page: page.features},
    {component: Blocks, page: page.dataOutput},
    {component: Blocks, page: page.additionalFeatures},
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

export default AdaptiveNLP;

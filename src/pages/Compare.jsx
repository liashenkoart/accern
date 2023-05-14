import React from "react";
import CoverBlock from "../sections/global/coverblock";
import Footer from "../sections/global/footer";
import { page } from "../data/pages/compare";
import Seo from "../components/seo";
import Rows from "../sections/global/rows";
import Related from "../sections/global/related";
import Hero from "../sections/global/hero";
import Comparing from "../sections/global/comparing";
import Vs from "../sections/global/vs";
import ServicesViewer from "../sections/global/servicesViewer";
import Quote from "../components/quote";
import SEO from "../data/seo.json";

import VisibilitySensor from '../utils/react-visibility-sensor';

const Compare = ({ path }) => {

  const sections = [
    { component: Hero, props: { page: page.hero } },
    { component: Rows, props: { page: page.meet } },
    { component: Comparing, props: { page: page.comparing } },
    { component: Vs, props: { page: page.vs } },
    // { component: ServicesViewer, props: {page: page.features} },
    { component: Related, props: { page: page.related } },
    { component: Rows, props: { page: page.csv } },
    { component: Footer, props: { isMinimal: true, page:page } },
  ]

  return (
    <div>
      <Seo seo={SEO[path] ? SEO[path] : SEO["/"]} />
      {sections.map((section, i) => (
        <VisibilitySensor partialVisibility={true} once={true} key={`p-${i}`}>
          {({ isVisible }) =>
            React.createElement(section.component, { ...section.props, key: `s-${i}`, isVisible: isVisible })
          }
        </VisibilitySensor>
      ))}
    </div>
  );
}

export default Compare;

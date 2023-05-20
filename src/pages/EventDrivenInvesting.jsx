import React from "react";
import CoverBlock from "../sections/global/coverblock";
import Footer from "../sections/global/footer";
import { page } from "../data/pages/event-driven-investing";
import Seo from "../components/seo";
import Rows from "../sections/global/rows";
import Related from "../sections/global/related";
import Hero from "../sections/global/hero";
import SEO from "../data/seo.json";

import VisibilitySensor from '../utils/react-visibility-sensor';

const EventDrivenInvesting = ({ path }) => {

  const sections = [
    { component: Hero, props: { page: page.hero } },
    { component: Rows, props: { page: page.intro } },
    { component: Rows, props: { page: page.dataEngineers } },
    { component: Rows, props: { page: page.features } },
    { component: Related, props: { page: page.related } },
    // { component: CoverBlock, props: { page: page.whitepaper } },
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

export default EventDrivenInvesting;

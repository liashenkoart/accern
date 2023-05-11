import React from "react";
import Hero from "../sections/global/hero";
import Footer from "../sections/global/footer";
import Blocks from "../sections/global/blocks";
import Rows from "../sections/global/rows";
import { page } from "../data/pages/deployments";
import Seo from "../components/seo";

import VisibilitySensor from '../utils/react-visibility-sensor';

const Deployments = () => {

  const sections = [
    {component: Hero, page: page.hero},
    {component: Rows, page: page.features},
    {component: Blocks, page: page.additionalFeatures},
    {component: Footer},
  ]

  return (
    <div>
      <Seo seo={page.seo} />
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

export default Deployments;

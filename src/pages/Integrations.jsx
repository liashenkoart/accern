import React from "react";
import Hero from "../sections/global/hero";
import Footer from "../sections/global/footer";
import Blocks from "../sections/global/blocks";
import ThemedBlock from "../sections/global/themedblock";
import { page } from "../data/pages/integrations";
import Seo from "../components/seo";

import VisibilitySensor from '../utils/react-visibility-sensor';

const Integrations = () => {

  const sections = [
    {component: Hero, page: page.hero},
    {component: Blocks, page: page.socials },
    {component: ThemedBlock, page: page.requestIntegration},
    {component: Blocks, page: page.additionalFeatures },
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

export default Integrations;

import React from "react";
import Hero from "../sections/global/hero";
import Footer from "../sections/global/footer";
import Blocks from "../sections/global/blocks";
import Tiles from "../sections/global/tiles";
import ThemedBlock from "../sections/global/themedblock";
import Cover from "../sections/global/cover";
import { page } from "../data/pages/careers";
import Seo from "../components/seo";
import OpenPositions from "../sections/global/openpositions";
import GetStarted from "../components/getstarted";

import VisibilitySensor from '../utils/react-visibility-sensor';

const Careers = () => {

  const sections = [
    {component: Hero, page: page.hero},
    {component: ThemedBlock, page: page.ourMission, variant: "advanced"},
    {component: Blocks, page: page.benefits },
    {component: Tiles, page: page.remoteEnvironment },
    {component: OpenPositions, page: page.openPositions },
    {component: Cover, page: page.cover},
    {component: GetStarted, page: page},
    
    {component: Footer, isMinimal: true},
  ]

  return (
    <div>
      <Seo seo={page.seo} />
      {sections.map((section, i) => (
        <VisibilitySensor partialVisibility={true} once={true} key={`p-${i}`}>
          {({ isVisible }) =>
            React.createElement(section.component, { key: `s-${i}`, isVisible: isVisible, page: section.page, isMinimal: section.isMinimal ? true : false, variant: section.variant })
          }
        </VisibilitySensor>
      ))}
    </div>
  );
}

export default Careers;

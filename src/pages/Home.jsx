import React from "react";
import HomeHero from "../sections/home/homehero"
import Footer from "../sections/global/footer";
import Solutions from "../sections/home/solutions";
import Rows from "../sections/global/rows";
import AiPlatform from "../sections/home/aiplatform";
import Awards from "../sections/home/awards";
import Advantages from "../sections/home/advantages";
import Brands from "../sections/global/brands";
import BlockAdv from "../sections/global/blockadv";
import Blocks from "../sections/global/blocks";
import { page } from "../data/pages/homepage";
import Seo from "../components/seo";
import SEO from "../data/seo.json";

import VisibilitySensor from '../utils/react-visibility-sensor';

const Home = ({path}) => {

  const sections = [
    { component: HomeHero, page:page.hero },
    { component: Brands, page: page.brands },
    { component: BlockAdv, page: page.ourmission },
    { component: Solutions },
    { component: Advantages },
    // { component: Awards },
    { component: AiPlatform },
    { component: Rows, page: page.features },
    // { component: Blocks, page: page.industry },
    { component: Footer },
  ]

  return (
    <div>
      <Seo seo={SEO[path] ? SEO[path] : SEO["/"]} />
      {sections.map((section, i) => (
        <VisibilitySensor partialVisibility={true} once={true} key={`p-${i}`}>
          {({ isVisible }) =>
            React.createElement(section.component, { key: `s-${i}`, isVisible: isVisible, page: section.page })
          }
        </VisibilitySensor>
      ))}
    </div>
  );
}

export default Home;

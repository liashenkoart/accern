import React from "react";
import Hero from "../sections/global/hero";
import Footer from "../sections/global/footer";
import Brands from "../sections/global/brands";
import BlockAdv from "../sections/global/blockadv";
import SimpleBlocks from "../sections/global/simpleblocks";
import SimpleCarousel from "../sections/global/simplecarousel";
import Blocks from "../sections/global/blocks";
import { page } from "../data/pages/company";
import Seo from "../components/seo";

import VisibilitySensor from '../utils/react-visibility-sensor';

const Home = () => {

  const sections = [
    { component: Hero, page: page.hero },
    { component: BlockAdv, page: page.weAccelerating },
    { component: SimpleBlocks, page:page.keyHighlights },
    { component: Blocks, page:page.awards},
    { component: Brands, page: page.brands },
    { component: Blocks, page: page.team },
    { component: SimpleCarousel, page:page.investors },
    { component: SimpleCarousel, page:page.media },
    { component: Footer, page: page.footer },
  ]

  return (
    <div>
      <Seo seo={page.seo} />
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

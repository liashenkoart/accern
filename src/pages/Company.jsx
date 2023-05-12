import React from "react";
import Hero from "../sections/global/hero";
import Footer from "../sections/global/footer";
import Brands from "../sections/global/brands";
import CoverBlock from "../sections/global/coverblock";
import Cover from "../sections/global/cover";
import SimpleCarousel from "../sections/global/simplecarousel";
import Blocks from "../sections/global/blocks";
import WhatIs from "../sections/global/whatis";
import FeaturedBlocks from "../sections/global/featuredblocks";
import { page } from "../data/pages/company";
import Seo from "../components/seo";
import SEO from "../data/seo.json";

import VisibilitySensor from '../utils/react-visibility-sensor';
import CoverCta from "../sections/global/covercta";

const Home = ({path}) => {

  const sections = [
    { component: Hero, page: page.hero },
    { component: CoverBlock, page: page.weAccelerating },
    { component: WhatIs, page: page.whatIs },
    { component: Cover, page: page.cover },
    { component: FeaturedBlocks, page: page.awards },
    { component: Brands, page: page.brands },
    { component: Blocks, page: page.team },
    { component: Blocks, page: page.boardMembers },
    { component: CoverCta, page: page.coverCta },
    { component: SimpleCarousel, page: page.investors },
    { component: SimpleCarousel, page: page.media },
    { component: Footer, page: page.footer },
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

import React from "react";
import CoverBlock from "../sections/global/coverblock";
import Footer from "../sections/global/footer";
import { page } from "../data/pages/privatemarkets";
import Seo from "../components/seo";
import Rows from "../sections/global/rows";
import Related from "../sections/global/related";
import CTA from "../sections/global/cta";
import SEO from "../data/seo.json";

import VisibilitySensor from '../utils/react-visibility-sensor';

const PrivateMarkets = ({path}) => {

  const sections = [
    {component: CoverBlock, page: page.hero},
    { component: Rows, page: page.features },
    {component: Related, page: page.related},
    {component: CoverBlock, page: page.whitepaper},
    { component: CTA, page: page.cta },
    {component: Footer, isMinimal: true},
  ]

  return (
    <div>
      <Seo seo={SEO[path] ? SEO[path] : SEO["/"]} />
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

export default PrivateMarkets;

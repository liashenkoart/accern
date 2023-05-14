import React from "react";
import CoverBlock from "../sections/global/coverblock";
import Footer from "../sections/global/footer";
import WhitePapers from "../sections/whitepapers";
import { page } from "../data/pages/whitepapers";
import Seo from "../components/seo";
import SEO from "../data/seo.json";

import VisibilitySensor from '../utils/react-visibility-sensor';

const WhitePapersPage = ({path}) => {

  const sections = [
    {component: CoverBlock, props:{page: page.hero}},
    {component: WhitePapers, props:{page: page.whitePapers}},
    {component: Footer, props: {isMinimal:true}},
  ]

  return (
    <div>
      <Seo seo={SEO[path] ? SEO[path] : SEO["/"]} />
      {sections.map((section, i) => (
        <VisibilitySensor partialVisibility={true} once={true} key={`p-${i}`}>
          {({ isVisible }) =>
            React.createElement(section.component, { ...section.props, key: `s-${i}`, isVisible: isVisible})
          }
        </VisibilitySensor>
      ))}
    </div>
  );
}

export default WhitePapersPage;

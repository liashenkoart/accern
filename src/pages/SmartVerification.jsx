import React from "react";
import CoverBlock from "../sections/global/coverblock";
import Footer from "../sections/global/footer";
import { page } from "../data/pages/smart-verification";
import { page as marketplace } from "../data/pages/marketplace";
import Seo from "../components/seo";
import Rows from "../sections/global/rows";
import Related from "../sections/global/related";
import FeaturedClient from "../sections/global/featuredClient";
import FeaturedUseCases from "../sections/cases/faeturedUseCases";
import SEO from "../data/seo.json";

import VisibilitySensor from '../utils/react-visibility-sensor';

const SmartVerification = ({ path }) => {

  const sections = [
    { component: CoverBlock,  props: { page: page.hero } },
    { component: Rows, props: { page: page.features } },
    // { component: FeaturedUseCases, props: {page: {...page.useCases, useCases: marketplace.useCases}} },
    // { component: FeaturedClient, props: {page: page.featuredClients} },
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

export default SmartVerification;

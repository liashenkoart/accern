import React from "react";
import CoverBlock from "../sections/global/coverblock";
import Footer from "../sections/global/footer";
import { page } from "../data/pages/credit-risk-solution";
import { page as marketplace } from "../data/pages/marketplace";
import Seo from "../components/seo";
import Rows from "../sections/global/rows";
import Related from "../sections/global/related";
import Hero from "../sections/global/hero";
import Quote from "../components/quote";
import Video from "../sections/global/video";
import FeaturedClient from "../sections/global/featuredClient";
import FeaturedUseCases from "../sections/cases/faeturedUseCases";
import SEO from "../data/seo.json";

import VisibilitySensor from '../utils/react-visibility-sensor';

const CreditRiskSolution = ({ path }) => {

  const sections = [
    { component: Hero, props: { page: page.hero } },
    // { component: Video, props: { page: page.video } },
    { component: Rows, props: { page: page.intro } },
    { component: Rows, props: { page: page.dataEngineers } },
    // { component: Quote, props: { data: page.quote } },
    { component: Rows, props: { page: page.features } },
    // { component: FeaturedUseCases, props: {page: {...page.useCases, useCases: marketplace.useCases}} },
    // { component: FeaturedClient, props: {page: page.featuredClients} },
    { component: Related, props: { page: page.related } },
    { component: CoverBlock, props: { page: page.whitepaper } },
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

export default CreditRiskSolution;

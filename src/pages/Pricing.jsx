import React from "react";
import CoverBlock from "../sections/global/coverblock";
import Footer from "../sections/global/footer";
import PricingViewer from "../sections/global/pricingviewer";
import PackagesAddons from "../sections/global/packagesaddons";
import ThemedBlock from "../sections/global/themedblock";
import FAQ from "../sections/global/faq";
import { page } from "../data/pages/pricing";
import Seo from "../components/seo";
import RequestQuote from "../components/requestquote";

import VisibilitySensor from '../utils/react-visibility-sensor';

const Pricing = () => {

  const sections = [
    {component: CoverBlock, page: page.hero},
    {component: PricingViewer, page: page.pricing},
    {component: ThemedBlock, page: page.cta, variant: "wide"},
    {component: PackagesAddons, page: page},
    {component: FAQ, page: page.faq},
    {component: ThemedBlock, page: page.getInTouch},
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
      <RequestQuote />
    </div>
  );
}

export default Pricing;

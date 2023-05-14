import React from "react";
import Hero from "../sections/global/hero"
import Footer from "../sections/global/footer";
import { page } from "../data/pages/customer-stories";
import SliderBlocks from "../sections/global/sliderblocks";
import Related from "../sections/global/related";
import Feedbacks from "../sections/global/feedbacks";
import Seo from "../components/seo";
import SEO from "../data/seo.json";

import VisibilitySensor from '../utils/react-visibility-sensor';

const CustomerStories = ({path}) => {

  const sections = [
    { component: Hero, props: {page:page.hero} },
    { component: Related, props: {page:page.related} },
    { component: Feedbacks, props: {page: page.feedbacks} },
    { component: SliderBlocks, props: {page: page.successfulCompanies} },
    { component: Footer, props: {isMinimal:true} },
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

export default CustomerStories;

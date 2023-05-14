import React from "react";
import Hero from "../sections/global/hero";
import { page } from "../data/pages/partners";
import Seo from "../components/seo";
import Footer from "../sections/global/footer";
import Tabs from "../sections/global/tabs";
import SEO from "../data/seo.json";

import VisibilitySensor from '../utils/react-visibility-sensor';

const RequestMorningstar = ({path}) => {

  const sections = [
    { component: Hero, props: {page:page.hero} },
    { component: Tabs, props: {page:page.partners} },
    { component: Footer, props: {isMinimal: true} },
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

export default RequestMorningstar;

import React from "react";
import RequestWhitepaperForm from "../sections/requests/requestWhitepaperForm";
import Hero from "../sections/global/hero";
import { page } from "../data/pages/request-whitepaper";
import Seo from "../components/seo";
import Footer from "../sections/global/footer";
import SEO from "../data/seo.json";

import VisibilitySensor from '../utils/react-visibility-sensor';

const RequestWhitepaper = ({path}) => {

  const sections = [
    { component: Hero, props: {page:page.hero} },
    { component: RequestWhitepaperForm, props: {page:page.requestForm} },
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

export default RequestWhitepaper;

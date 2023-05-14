import React from "react";
import BecomePartnerForm from "../sections/requests/becomePartnerForm";
import Hero from "../sections/global/hero";
import { page } from "../data/pages/become-partner";
import Seo from "../components/seo";
import Footer from "../sections/global/footer";
import SEO from "../data/seo.json";

import VisibilitySensor from '../utils/react-visibility-sensor';

const BecomePartner = ({path}) => {

  const sections = [
    { component: Hero, props: {page:page.hero} },
    { component: BecomePartnerForm, props: {page:page.requestForm} },
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

export default BecomePartner;

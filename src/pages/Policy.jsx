import React from "react";
import Title from "../sections/global/title";
import SupportPolicy from "../sections/policy";
import Footer from "../sections/global/footer";
import { page } from "../data/pages/policy";
import Seo from "../components/seo";

import VisibilitySensor from '../utils/react-visibility-sensor';

const Policy = () => {

  const sections = [
    {component: Title, page: page.hero},
    {component: SupportPolicy},
    {component: Footer},
  ]

  return (
    <div>
      <Seo seo={page.seo} />
      {sections.map((section, i) => (
        <VisibilitySensor partialVisibility={true} once={true} key={`p-${i}`}>
          {({ isVisible }) =>
            React.createElement(section.component, { key: `s-${i}`, isVisible: isVisible, page:section.page })
          }
        </VisibilitySensor>
      ))}
    </div>
  );
}

export default Policy;

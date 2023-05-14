import React from "react";
import Hero from "../sections/global/hero";
import Footer from "../sections/global/footer";
import SolutionsViewer from "../sections/solutions/solutionsViewer";
import { page } from "../data/pages/solutions";
import Seo from "../components/seo";
import SEO from "../data/seo.json";

import VisibilitySensor from '../utils/react-visibility-sensor';

const Solutions = ({path}) => {

  const sections = [
    {component: Hero, props: {page: page.hero}},
    {component: SolutionsViewer, props: {page: page.solutions}},
    {component: Footer, props: {isMinimal: true}},
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

export default Solutions;

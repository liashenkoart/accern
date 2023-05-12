import React from "react";
import Title from "../sections/global/title";
import DocumentationViewer from "../sections/global/documentationviewer";
import Footer from "../sections/global/footer";
import { page } from "../data/pages/documentation";
import Seo from "../components/seo";
import SEO from "../data/seo.json";

import VisibilitySensor from '../utils/react-visibility-sensor';

const Documentation = ({path}) => {

  const sections = [
    {component: DocumentationViewer, page: page},
  ]

  return (
    <div>
      <Seo seo={SEO[path] ? SEO[path] : SEO["/"]} />
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

export default Documentation;

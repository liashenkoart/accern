import React from "react";
import FormHero from "../sections/contact/formhero"
import { page } from "../data/pages/contact";
import Seo from "../components/seo";
import SimpleBlocks from "../sections/global/simpleblocks";
import Footer from "../sections/global/footer";
import SEO from "../data/seo.json";

import VisibilitySensor from '../utils/react-visibility-sensor';

const Contact = ({path}) => {

  const sections = [
    { component: FormHero, page:page.hero },
    { component: SimpleBlocks, page:page.emails },
    { component: Footer, isSimple: true },
  ]

  return (
    <div>
      <Seo seo={SEO[path] ? SEO[path] : SEO["/"]} />
      {sections.map((section, i) => (
        <VisibilitySensor partialVisibility={true} once={true} key={`p-${i}`}>
          {({ isVisible }) =>
            React.createElement(section.component, { key: `s-${i}`, isVisible: isVisible, page: section.page, isSimple: section.isSimple ? true : false })
          }
        </VisibilitySensor>
      ))}
    </div>
  );
}

export default Contact;

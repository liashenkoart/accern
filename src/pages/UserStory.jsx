import React from "react";
import Footer from "../sections/global/footer";
import { page } from "../data/pages/userstory";
import CaseStudies from "../sections/global/casestudies";
import Seo from "../components/seo";
import SimpleBlocks from "../sections/global/simpleblocks";
import Quote from "../sections/global/quote";
import Rows from "../sections/global/rows";
import CTA from "../sections/global/cta";
import Related from "../sections/global/related";
import DownloadFile from "../components/downloadfile";

import VisibilitySensor from '../utils/react-visibility-sensor';

const UserStory = ({data}) => {

  const sections = [
    { component: CaseStudies, page: page[data].caseStudies },
    { component: SimpleBlocks, page: page[data].infoColumns },
    { component: Quote, page: page[data].quote },
    { component: Rows, page: page[data].features },
    { component: CTA, page: {...page[data].cta, stats:page[data].caseStudies.stats, modal: page[data].caseStudies.modal} },
    { component: Related, page: page[data].related },
    { component: Footer },
  ]

  return (
    <div>
      <Seo seo={page[data].seo} />
      {sections.map((section, i) => (
        <VisibilitySensor partialVisibility={true} once={true} key={`p-${i}`}>
          {({ isVisible }) =>
            React.createElement(section.component, { key: `s-${i}`, isVisible: isVisible, page: section.page, isMinimal: section.isMinimal ? true : false, variant: section.variant })
          }
        </VisibilitySensor>
      ))}
      <DownloadFile />
    </div>
  );
}

export default UserStory;

import React from "react";
import CoverBlock from "../sections/global/coverblock";
import Footer from "../sections/global/footer";
import { page } from "../data/pages/data-engineers";
import { data as dataCourses } from "../data/shared/courses";
import Seo from "../components/seo";
import Rows from "../sections/global/rows";
import Related from "../sections/global/related";
import { page as marketplace } from "../data/pages/marketplace";
import SliderBlocks from "../sections/global/sliderblocks";
import Courses from "../sections/courses";
import Hero from "../sections/global/hero";
import Quote from "../components/quote";
import ServicesViewer from "../sections/global/servicesViewer";
import Subscribers from "../sections/global/subscribers";
import SEO from "../data/seo.json";
import {filterIt} from "../utils/scripts";

import VisibilitySensor from '../utils/react-visibility-sensor';

const DataEngineers = ({ path }) => {

  const columns = marketplace.useCases.solutions.options.filter(option => (option.value != "All")).map((item)=>({...item, by: "Solution"}));
  const columns2 = [
    ...marketplace.useCases.workflows.options
    .filter(option => (option.value != "All"))
    .map((item)=>({...item, by: "Workflow"})),
    ...marketplace.useCases.industries.options
    .filter(option => (option.value != "All"))
    .map((item)=>({...item, by: "Industry"}))
  ]

  const sections = [
    { component: Hero, props: { page: page.hero } },
    { component: Rows, props: { page: page.dataEngineers } },
    { component: SliderBlocks, props: {page: {...page.marketPlace, columns:columns, columns2:columns2}} },
    { component: Rows, props: { page: page.features } },
    // { component: Quote, props: { data: page.quote } },
    // { component: Subscribers, props: { page: page.subscribers } },
    { component: Related, props: { page: page.related } },
    // { component: Courses, props: { page: {...page.courses, list: filterIt(dataCourses, "free", "status").slice(0, 4)} } },
    // { component: CoverBlock, props: { page: page.whitepaper } },
    { component: Footer, props: { isMinimal: true, page:page } },
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

export default DataEngineers;

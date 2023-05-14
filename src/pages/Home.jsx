import React from "react";
import Hero from "../sections/global/hero"
import Footer from "../sections/global/footer";
import Columns from "../sections/global/columns";
import FeaturedClient from "../sections/global/featuredClient";
import { page } from "../data/pages/homepage";
import { page as marketplace } from "../data/pages/marketplace";
import TilesLinks from "../sections/global/tilesLinks";
import SliderBlocks from "../sections/global/sliderblocks";
import ServicesViewer from "../sections/global/servicesViewer";
import Seo from "../components/seo";
import SEO from "../data/seo.json";

import VisibilitySensor from '../utils/react-visibility-sensor';

const Home = ({path}) => {

  const columns = marketplace.useCases.solutions.options.filter(option => (option.value != "All")).map((item)=>({...item, by: "Solution"}));
  const columns2 = [
    ...marketplace.useCases.workflows.options
    .filter(option => (option.value != "All"))
    .map((item)=>({...item, by: "Workflows"})),
    ...marketplace.useCases.industries.options
    .filter(option => (option.value != "All"))
    .map((item)=>({...item, by: "Industry"}))
  ]

  const sections = [
    { component: Hero, props: {page:page.hero} },
    { component: Columns, props: {page: page.ourmission} },
    { component: SliderBlocks, props: {page: {...page.aiMarketplace, columns:columns, columns2:columns2}} },
    { component: ServicesViewer, props: {page: page.services} },
    { component: FeaturedClient, props: {page: page.featuredClient} },
    { component: SliderBlocks, props: {page: page.awardsAndPress} },
    { component: TilesLinks, props: {page: page.resources} },
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

export default Home;

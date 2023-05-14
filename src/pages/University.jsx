import React from "react";
import Hero from "../sections/global/hero"
import Footer from "../sections/global/footer";
import { page } from "../data/pages/university";
import { data as dataCourses } from "../data/shared/courses";
import FeaturedCourses from "../sections/courses/Featured";
import TilesLinks from "../sections/global/tilesLinks";
import Seo from "../components/seo";
import SEO from "../data/seo.json";
import {filterIt} from "../utils/scripts";

import VisibilitySensor from '../utils/react-visibility-sensor';

const University = ({path}) => {

  const sections = [
    { component: Hero, props: {page:page.hero} },
    { component: Hero, props: {page:page.featuredCourse} },
    { component: FeaturedCourses, props: {page:{...page.advanced, list:filterIt(dataCourses, "Advanced", "level").slice(0, 4)}} },
    { component: TilesLinks, props: {page: page.resources} },
    { component: FeaturedCourses, props: {page:{...page.basics, list:filterIt(dataCourses, "free", "status").slice(0, 4)}} },
    { component: FeaturedCourses, props: {page:{...page.experts, list:filterIt(dataCourses, "Intermediate", "level").slice(0, 4)}} },
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

export default University;

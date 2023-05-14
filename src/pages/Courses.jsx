import React from "react";
import Hero from "../sections/global/hero"
import Footer from "../sections/global/footer";
import { page } from "../data/pages/courses";
import { data as dataCourses } from "../data/shared/courses";
import CoursesList from "../sections/courses/CoursesList";
import FeaturedCourses from "../sections/courses/Featured";
import Seo from "../components/seo";
import SEO from "../data/seo.json";
import {filterIt} from "../utils/scripts";

import VisibilitySensor from '../utils/react-visibility-sensor';

const Courses = ({path}) => {

  const sections = [
    { component: Hero, props: {page:page.hero} },
    { component: Hero, props: {page:page.featuredCourse} },
    { component: FeaturedCourses, props: {page:{...page.featured, list:filterIt(dataCourses, true, "isFeatured").slice(0, 4)}} },
    { component: CoursesList, props: {page:{...page.coursesList, list:dataCourses}} },
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

export default Courses;

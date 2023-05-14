import React, { useState, useEffect } from "react";
import { page } from "../data/pages/course";
import CourseViewer from "../sections/courses/CourseViewer";
import { data as dataCourses } from "../data/shared/courses";
import Seo from "../components/seo";
import Hero from "../sections/global/hero";
import FeaturedCourses from "../sections/courses/Featured";
import Footer from "../sections/global/footer";
import { settings } from "../data/settings";
import {filterIt} from "../utils/scripts";

import VisibilitySensor from '../utils/react-visibility-sensor';

const Post = ({ path }) => {

  const temp = window.location.href.split("/");
  const courseId = temp[temp.length - 1];
  const course = filterIt(dataCourses, courseId, "id")[0];

  const sections = [
    { component: Hero, props: { page:  {...page.hero, ...course}} },
    { component: CourseViewer, props: { page: { ...page.course, course:course} } },
    { component: FeaturedCourses, props: {page:{...page.featured, list:filterIt(dataCourses, true, "isFeatured").slice(0, 4)}} },
    { component: Footer, props: {isMinimal: true} },
  ]

  return (
    <div>
      <Seo seo={course && course.seo} />
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

export default Post;

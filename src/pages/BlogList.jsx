import React, { useEffect, useState } from "react";
import { page } from "../data/pages/blog-list";
import Seo from "../components/seo";
import Footer from "../sections/global/footer";
import GetStarted from "../components/getstarted";
import BlogListViewer from "../sections/blog/blogListViewer";

import VisibilitySensor from '../utils/react-visibility-sensor';
import { settings } from "../data/settings";
import SEO from "../data/seo.json";

import GhostContentAPI from '@tryghost/content-api';

const BlogList = ({path}) => {

  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const api = new GhostContentAPI({
      url: settings.ghostURL,
      key: settings.ghostKey,
      version: settings.ghostVersion,
    });

    api.posts
      .browse({ limit: "all", order: 'published_at DESC', include: 'tags,authors' })
      .then((posts) => {
        setPosts(posts)
      })
      .catch((err) => {
        console.error(err);
      });
  }, [])

  const sections = [
    { component: BlogListViewer, props: { page:{data:page.blogList, posts: posts }} },
    { component: GetStarted, props: { page: page } },
    { component: Footer, props: { isMinimal: true } },
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

export default BlogList;

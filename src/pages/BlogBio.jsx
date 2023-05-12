import React, { useState, useEffect } from "react";
import { page } from "../data/pages/blog";
import Seo from "../components/seo";
import Footer from "../sections/global/footer";
import GetStarted from "../components/getstarted";
import BlogPopular from "../sections/blog/blogpopular";
import CoverBlock from "../sections/global/coverblock";
import { settings } from "../data/settings";
import SEO from "../data/seo.json";

import VisibilitySensor from '../utils/react-visibility-sensor';
import GhostContentAPI from '@tryghost/content-api';

const BlogBio = ({path}) => {

  const temp = window.location.href.split("/");
  const userId = temp[temp.length - 1];
  const [popular, setPopular] = useState(null);
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    const api = new GhostContentAPI({
      url: settings.ghostURL,
      key: settings.ghostKey,
      version: settings.ghostVersion,
    });

    api.posts
      .browse({ filter: `author:[${userId}]`, limit: "5", order: 'published_at DESC', include: 'tags,authors' })
      .then((posts) => {
        setPopular(posts)
      })
      .catch((err) => {
        console.error(err);
      });

    api.authors.read({ slug: userId }, { include: 'count.posts' })
      .then((user) => {
        setAuthor({...user, seo: { title: `Accern - ${user.name}`, meta: [{ name: "description", content: `Accern - ${user.bio}` }, { name: "og:title", content: `Accern - ${user.name}` }] }})
      })
      .catch((err) => {
        console.error(err);
      });

  }, [])

  const sections = [
    { component: CoverBlock, props: { page: { ...author, isIconRight: true, variant: "bio", className: "mb-5", description: author && author.bio, isDisableShape: true, title: author && author.name} } },
    { component: BlogPopular, props: { page: { posts: popular } } },
    { component: GetStarted, props: { page: page } },
    { component: Footer, isMinimal: true },
  ]

  return (
    <div>
      {userId && <>
        <Seo seo={author && author.seo} />
        {sections.map((section, i) => (
          <VisibilitySensor partialVisibility={true} once={true} key={`p-${i}`}>
            {({ isVisible }) =>
              React.createElement(section.component, { ...section.props, key: `s-${i}`, isVisible: isVisible })
            }
          </VisibilitySensor>
        ))}
      </>}
    </div>
  );
}

export default BlogBio;

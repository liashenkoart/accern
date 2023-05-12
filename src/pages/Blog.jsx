import React, { useEffect, useState } from "react";
import Hero from "../sections/global/hero";
import { page } from "../data/pages/blog";
import BlogRecent from "../sections/blog/blogrecent";
import Seo from "../components/seo";
import Footer from "../sections/global/footer";
import GetStarted from "../components/getstarted";
import BlogRandom from "../sections/blog/blograndom";
import BlogPopular from "../sections/blog/blogpopular";
import BlogCategories from "../sections/blog/blogcategories";
import { randomFromInterval } from "../utils/scripts";
import SEO from "../data/seo.json";

import VisibilitySensor from '../utils/react-visibility-sensor';
import { settings } from "../data/settings";

import GhostContentAPI from '@tryghost/content-api';

const Blog = ({path}) => {

  const [tags, setTags] = useState(null);
  const [recent, setRecent] = useState(null);
  const [latest, setLatest] = useState(null);
  const [popular, setPopular] = useState(null);
  const [random, setRandom] = useState(null);

  useEffect(() => {
    const api = new GhostContentAPI({
      url: settings.ghostURL,
      key: settings.ghostKey,
      version: settings.ghostVersion,
    });

    if (!tags) api.tags
      .browse({ order: 'slug ASC' })
      .then((tags) => {
        setTags(tags);
      })
      .catch((err) => {
        console.error(err);
      });

    api.posts
      .browse({ limit: 4, order: 'published_at DESC', include: 'tags,authors' })
      .then((posts) => {
        if (posts.length > 0) {
          setRecent(posts[0]);
          setLatest(posts.slice(1));
        }
      })
      .catch((err) => {
        console.error(err);
      });

    api.posts
      .browse({ limit: 5, order: 'published_at DESC', include: 'tags,authors' })
      .then((posts) => {
        if (posts.length > 0) {
          setPopular(posts);
        }
      })
      .catch((err) => {
        console.error(err);
      });

    api.posts
      .browse({ limit: "all", order: 'published_at DESC', include: 'tags,authors' })
      .then((posts) => {
        if (posts.length > 0) {
          setRandom(posts[randomFromInterval(0, posts.length - 1)]);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, [])

  const sections = [
    { component: Hero, page: page.hero },
    { component: BlogRecent, page: { data: page, recent: recent, latest: latest } },
    { component: BlogCategories, page: { data: page.categories, tags: tags } },
    { component: BlogPopular, page: { posts: popular, data: page.popular } },
    { component: BlogRandom, page: { data: page.random, post: random } },
    { component: BlogPopular, page: { posts: popular, data: page.essentials } },
    { component: GetStarted, page: page },
    { component: Footer, isMinimal: true },
  ]

  return (
    <div>
      <Seo seo={SEO[path] ? SEO[path] : SEO["/"]} />
      {sections.map((section, i) => (
        <VisibilitySensor partialVisibility={true} once={true} key={`p-${i}`}>
          {({ isVisible }) =>
            React.createElement(section.component, { key: `s-${i}`, isVisible: isVisible, page: section.page, isSimple: section.isSimple ? true : false, isMinimal: section.isMinimal ? true : false })
          }
        </VisibilitySensor>
      ))}
    </div>
  );
}

export default Blog;

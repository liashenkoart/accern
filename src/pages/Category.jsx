import React, { useState, useEffect } from "react";
import { page } from "../data/pages/blog";
import Seo from "../components/seo";
import Footer from "../sections/global/footer";
import GetStarted from "../components/getstarted";
import CoverBlock from "../sections/global/coverblock";
import BlogPopular from "../sections/blog/blogpopular";
import BlogCoverPost from "../sections/blog/blogcoverpost";
import { settings } from "../data/settings";
import BlogCategories from "../sections/blog/blogcategories";

import VisibilitySensor from '../utils/react-visibility-sensor';
import GhostContentAPI from '@tryghost/content-api';

const Category = ({path}) => {

  const temp = window.location.href.split("/");
  const catId = temp[temp.length - 1];
  const [category, setCategory] = useState(null);
  const [posts, setPosts] = useState(null);
  const [tags, setTags] = useState(null);

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
      .browse({ filter: `tags:[${catId}]`, limit: "all", order: 'published_at DESC', include: 'tags,authors' })
      .then((posts) => {
        setPosts(posts)
      })
      .catch((err) => {
        console.error(err);
      });

    api.tags
      .read({ slug: catId })
      .then((tag) => {
        setCategory({ ...tag, seo: { title: `Accern - ${tag.name}`, meta: [{ name: "description", content: `Accern - ${tag.description}` }, { name: "og:title", content: `Accern - ${tag.name}` }] } })
      })
      .catch((err) => {
        console.error(err);
      });

  }, [])

  const sections = [
    { component: CoverBlock, props: { page: { ...category, isIconRight: true, className: "mb-5", isDisableShape: true, title: category && category.name, label: settings.texts.ReadingList } } },
    { component: BlogCoverPost, props: { page: { post: posts && posts.length > 0 ? posts[0] : null } } },
    { component: BlogPopular, props: { page: { posts: posts, data: { variant: "essentials" } } } },
    { component: BlogPopular, props: { page: { posts: posts, data: { variant: "popular" } } } },
    { component: BlogCategories, props: { page: { data: page.categories, tags: tags } } },
    { component: GetStarted, props: { page: page } },
    { component: Footer, props: { isMinimal: true } },
  ]

  return (
    <div>
      {catId && <>
        <Seo seo={category && category.seo} />
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

export default Category;

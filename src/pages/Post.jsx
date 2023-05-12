import React, { useState, useEffect } from "react";
import { page } from "../data/pages/blog";
import PostViewer from "../sections/blog/postviewer";
import Seo from "../components/seo";
import Footer from "../sections/global/footer";
import GetStarted from "../components/getstarted";
import BlogPopular from "../sections/blog/blogpopular";
import { settings } from "../data/settings";

import VisibilitySensor from '../utils/react-visibility-sensor';
import GhostContentAPI from '@tryghost/content-api';

const Post = ({path}) => {

  const temp = window.location.href.split("/");
  const postId = temp[temp.length - 1];
  const [popular, setPopular] = useState(null);
  const [post, setPost] = useState(null);

  useEffect(() => {
    const api = new GhostContentAPI({
      url: settings.ghostURL,
      key: settings.ghostKey,
      version: settings.ghostVersion,
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

    api.posts.read({ slug: postId, include: 'tags,authors' })
      .then((post) => {
        if (post) {
          setPost({...post, seo: {title:`Accern - ${post.title}`, meta: [{name: "description", content: `Accern - ${post.excerpt}`}, {name: "og:title", content: `Accern - ${post.title}`}]}});
        }
      })
      .catch((err) => {
        console.error(err);
      });

  }, [])

  const sections = [
    { component: PostViewer, page: post },
    { component: BlogPopular, page: { posts: popular, data: page.youMightLike } },
    { component: GetStarted, page: page },
    { component: Footer, isMinimal: true },
  ]

  return (
    <div>
      {postId && <>
        <Seo seo={post && post.seo} />
        {sections.map((section, i) => (
          <VisibilitySensor partialVisibility={true} once={true} key={`p-${i}`}>
            {({ isVisible }) =>
              React.createElement(section.component, { key: `s-${i}`, isVisible: isVisible, page: section.page, isSimple: section.isSimple ? true : false, isMinimal: section.isMinimal ? true : false })
            }
          </VisibilitySensor>
        ))}
      </>}
    </div>
  );
}

export default Post;

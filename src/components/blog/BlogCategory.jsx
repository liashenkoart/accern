import React from "react";

import "./Blog.scss"

const BlogCategory = ({ data, className, onClick }) => {

  return (
    <div className={`blog-category ${className ? className : ""}`} onClick={onClick}>
      <div className="blog-category-bg" style={{ backgroundImage: `url(${data.feature_image})` }}>
      </div>
      <div className="blog-category-name">
        <span>{data.name}</span>
      </div>
    </div>
  );
}

export default BlogCategory;
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "@reach/router";
import { settings } from "../../data/settings";
import { dateFormat } from "../../utils/scripts";

import "./Blog.scss"

const BlogNew = ({ data, className, isFull, label }) => {

  return (
    <div className={`blog-new ${className ? className : ""}`}>
      {data && <>
        <div className="blog-new-title">
          <h2 className="text-title-medium-sm">{label ? label : settings.texts.New}</h2>
          {!isFull && <Link className="text-label text-primary" to="/blog-list">{settings.texts.ViewAll}</Link>}
        </div>

        <div className="blog-new-list mt-4">
          {data.map((post, i) => (
            i < (isFull ? 1000 : 3) && <Link key={`pi-${i}`} to={`/post/${post.slug}`} className="blog-new-list-item">
              <div className="mb-0 mb-md-2"><span className="text-label-gray">{dateFormat(post.date, "dd mmm yyyy")}</span></div>
              <div><span className="text-medium text-dark">{post.title}</span></div>
            </Link>
          ))}
        </div>
      </>
      }
    </div>
  );
}

export default BlogNew;
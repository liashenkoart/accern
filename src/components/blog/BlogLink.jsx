import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "@reach/router";
import { settings } from "../../data/settings";
import { filterIt } from "../../utils/scripts";
import Icon from "../icon";

import "./Blog.scss"

const BlogLink = ({ data, className }) => {

  return (
    <Link to={`/post/${data.slug}`} className={`blog-link ${className ? className : ""}`}>
      {data && <>
        {data.tags && <div className="mb-3">{data.tags.map((tag, i) => (<span key={`bi-${i}`} className="text-label" style={{ color: tag.accent_color }}>{tag.name}</span>))}</div>}
        <h4 className="text-medium text-dark">{data.title}</h4>
        <Icon variant="arrow-right" />
      </>
      }
    </Link>
  );
}

export default BlogLink;
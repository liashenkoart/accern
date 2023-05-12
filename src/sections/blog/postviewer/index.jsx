import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogRecentCover from "../../../components/blog/BlogRecentCover";
import BlogAuthor from "../../../components/blog/BlogAuthor"

import "./PostViewer.scss";

const PostViewer = ({ isVisible, page }) => {

  return (
    <div className={`blog-post mt-5 ${page && page.className ? page.className : ""} mb-5 ${isVisible ? "active" : ''}`}>
      <Container>
        <Row>
          <Col md={12}>
            <BlogRecentCover data={page} isShowDate={true} isRemoveLink={true} />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <div className="blog-content" dangerouslySetInnerHTML={{ __html: page && page.html }}></div>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <BlogAuthor data={page && page.authors} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PostViewer;
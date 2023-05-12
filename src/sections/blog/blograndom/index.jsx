import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogRecentCover from "../../../components/blog/BlogRecentCover";
import {settings} from "../../../data/settings";

const BlogRandom = ({ isVisible, page }) => {

  return (
    <div className={`blog-random ${page.data.className ? page.data.className : ""} mb-5 ${isVisible ? "active" : ''}`}>
      <Container>
        <Row>
          <Col className="mb-4 mt-4"><span className="text-label">{page.data.label}</span></Col>
        </Row>
        <Row>
          <Col md={12}>
            <BlogRecentCover data={page.post} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BlogRandom;
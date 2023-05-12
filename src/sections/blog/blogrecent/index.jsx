import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogRecentCover from "../../../components/blog/BlogRecentCover";
import BlogNew from "../../../components/blog/BlogNew";

import "./BlogRecent.scss";

const BlogRecent = ({ isVisible, page }) => {

  return (
    <div className={`blog-recent ${page.data.className ? page.data.className : ""} mb-5 ${isVisible ? "active" : ''}`}>
      <Container>
        <Row>
          <Col md={7}>
            <BlogRecentCover data={page.recent} />
          </Col>
          <Col md={5} className="pt-5 pt-md-0">
            <BlogNew data={page.latest}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BlogRecent;
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogRecentCover from "../../../components/blog/BlogRecentCover";

const BlogCoverPost = ({ isVisible, page }) => {

  return (
    <div className={`blog-cover-post ${page.className ? page.className : ""} mb-5 ${isVisible ? "active" : ''}`}>
      <Container>
        <Row>
          <Col>
            <BlogRecentCover data={page.post} isShowDate={true} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BlogCoverPost;
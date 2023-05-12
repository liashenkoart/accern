import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogNew from "../../../components/blog/BlogNew";

const BlogListViewer = ({ isVisible, page }) => {

  return (
    <div className={`blog-list-viewer ${page.data.className ? page.data.className : ""} mb-5 ${isVisible ? "active" : ''}`}>
      <Container>
        <Row>
          <Col md={12} className="pt-5 pt-md-0">
            <BlogNew data={page.posts} isFull={true} label={page.data.label}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BlogListViewer;
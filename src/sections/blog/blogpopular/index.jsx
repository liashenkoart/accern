import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogRecentCover from "../../../components/blog/BlogRecentCover";
import { settings } from "../../../data/settings";
import BlogLink from "../../../components/blog/BlogLink";

const BlogPopular = ({ isVisible, page }) => {

  const renderPopular = () => {
    switch (page.data && page.data.variant) {
      case "essentials":
        return <><Col md={6} className="mb-4 mb-md-0">
          {page.posts.length > 1 ?
            <div className={`blog-links column-2 ${page.posts.length - 1 < 4 ? `c-${page.posts.length - 1}` : ""}`}>
              {page.posts.slice(1).map((post, i) => (
                <BlogLink key={`bli-${i}`} data={post} />
              ))}
            </div>
            :
            <div className="blog-coming-soon">
              {settings.texts.ComingSoon}
            </div>
          }
        </Col>
          <Col md={6}>
            <BlogRecentCover data={page.posts[0]} />
          </Col>
        </>
      case "popular":
      default:
        return <>
          <Col md={6} className="mb-4 mb-md-0">
            <BlogRecentCover data={page.posts[0]} />
          </Col>
          <Col md={6}>
            {page.posts.length > 1 ?
              <div className={`blog-links column-2 ${page.posts.length - 1 < 4 ? `c-${page.posts.length - 1}` : ""}`}>
                {page.posts.slice(1).map((post, i) => (
                  <BlogLink key={`bli-${i}`} data={post} />
                ))}
              </div>
              :
              <div className="blog-coming-soon">
                {settings.texts.ComingSoon}
              </div>
            }
          </Col>
        </>
    }
  }

  return (
    <div className={`blog-random ${page.className ? page.className : ""} mb-5 ${isVisible ? "active" : ''}`}>
      <Container>
        {page.data && page.data.label &&
          <Row>
            <Col className="mb-4 mt-4"><span className="text-label">{page.data.label}</span></Col>
          </Row>
        }
        <Row>
          {page.posts && renderPopular()}
        </Row>
      </Container>
    </div>
  );
}

export default BlogPopular;
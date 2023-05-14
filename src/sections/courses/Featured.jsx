import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CourseBlock from "./CourseBlock";
import LinkAdv from "../../components/linkadv";

import "./Courses.scss"

const CoursesList = ({ isVisible, page }) => {

  const render = () => {
    return page.list.map((course, i) => (
      <Col md={3} key={`ci-${i}`}>
        <CourseBlock data={course} more={page.more} />
      </Col>))
  }

  return (
    <div className={`courses-featured sect-spacer ${page.className ? page.className : ""} ${isVisible ? "active" : ''}`}>
      <Container>
        <Row className="mb-4">
          <Col md={12} className="mb-5">
            <div className="courses-featured-label">
              {page.label && <div><span className="text-label">{page.label}</span></div>}
              {page.button && <LinkAdv data={page.button}/>}
            </div>
            {page.description && <div><span>{page.description}</span></div>}
          </Col>
          {render()}
        </Row>
      </Container>
    </div>
  );
}

export default CoursesList;
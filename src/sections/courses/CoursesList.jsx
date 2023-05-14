import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { filterIt } from "../../utils/scripts";
import CourseBlock from "./CourseBlock";
import { settings } from "../../data/settings";

import "./Courses.scss"

const CoursesList = ({ isVisible, page }) => {

  const renderCourses = (variant) => {
    switch (variant) {
      case "Advanced":
        return filterIt(page.list, variant, "level").map((course, i) => (
          <Col md={3} key={`ci-${i}`}>
            <CourseBlock data={course} />
          </Col>
        ))

      case "Intermediate":
        return filterIt(page.list, variant, "level").map((course, i) => (
          <Col md={3} key={`ci-${i}`}>
            <CourseBlock data={course} />
          </Col>
        ))

      case "Beginer":
        return filterIt(page.list, variant, "level").map((course, i) => (
          <Col md={3} key={`ci-${i}`}>
            <CourseBlock data={course} />
          </Col>
        ))

      case "featured":
      default:
        return filterIt(page.list, true, "isFeatured").slice(0, 4).map((course, i) => (
          <Col md={3} key={`ci-${i}`}>
            <CourseBlock data={course} isFeatured={true} />
          </Col>
        ))
    }
  }

  return (
    <div className={`courses-list sect-spacer ${page.className ? page.className : ""} ${isVisible ? "active" : ''}`}>
      <Container>
        <Row className="mb-4">
          <Col md={12}>
            <div className="mb-5"><span className="text-label">{page.labelBeginer}</span></div>
          </Col>
          {renderCourses("Beginer")}
        </Row>
        <Row className="mb-4">
          <Col md={12}>
            <div className="mb-5"><span className="text-label">{page.labelIntermediate}</span></div>
          </Col>
          {renderCourses("Intermediate")}
        </Row>
        <Row className="mb-4">
          <Col md={12}>
            <div className="mb-5"><span className="text-label">{page.labelAdvanced}</span></div>
          </Col>
          {renderCourses("Advanced")}
        </Row>
      </Container>
    </div>
  );
}

export default CoursesList;
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LinkAdv from "../../components/linkadv";
import Icon from "../../components/icon";

import "./Courses.scss"

const CourseViewer = ({ isVisible, page }) => {

  return (
    <div className={`course-viewer sect-spacer ${page.className ? page.className : ""} ${isVisible ? "active" : ''}`}>
      <Container>
        <Row>
          <Col md={7}>
            <div className="mb-4"><span className="text-label">{page.labelSummarry}</span></div>
            <div className="course-viewer-thumb" style={{ backgroundImage: `url(/assets/img/${page.course.img})` }}></div>
            {page.course.description && <p className="mt-4 mb-5 text-medium">{page.course.description}</p>}
            <div><span className="text-label">{page.labelRequirements}</span></div>
            {page.course.requirements && page.course.requirements.description && <p className="mt-4 mb-4 text-medium">{page.course.requirements.description}</p>}
            {page.course.requirements && page.course.requirements.list && <ul className="list-dark mb-5">{page.course.requirements.list.map((item, i) => (
              <li key={`li-${i}`}>{item.name}</li>
            ))}</ul>}
            {page.course.requirements.button &&
              <LinkAdv
                variant={page.course.requirements.button.variant ? page.course.requirements.button.variant : "simple"}
                data={page.course.requirements.button} />
            }
          </Col>
          <Col className="pl-3 pt-5 pt-md-0 pl-md-5" md={5}>
            <div className="mb-4"><span className="text-label">{page.labelCoursesList}</span></div>
            {page.course.lessons.map((lesson, i)=>(
              <div className="mb-5" key={`li-${i}`}>
                <div className="mb-4"><span className="text-medium">{lesson.name}</span></div>
                {lesson.list.map((item, i)=>(
                  <div className="course-viewer-lesson" key={`lis-${i}`}>
                    <div><Icon className="mr-2" variant="play-circle"/><span>{item.name}</span></div><span>{item.time}</span>
                  </div>
                ))}
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CourseViewer;
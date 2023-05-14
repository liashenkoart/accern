import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Title from "../../components/title";
import LinkAdv from "../../components/linkadv";

import "./Courses.scss"

const Courses = ({ isVisible, page }) => {

  return (
    <div className={`courses sect-spacer pb-0 ${isVisible ? "active" : ''}`}>
      <Container>
        <Row>
          <Col>
            <Title page={page} />
          </Col>
        </Row>
        <Row className="mt-5">
          {page.list.map((course, i) => (
            i < 4 &&
            <Col key={`ci-${i}`} lg={6}>
              <div className="courses-inner">
                <div className="courses-img">
                  <img src={`./assets/img/${course.img}`} />
                </div>
                <div className="courses-content">
                  <h4>{course.title}</h4>
                  <p>{course.description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        {page.link &&
          <Row>
            <Col>
              <LinkAdv data={page.link} variant="outline-light" className="w-100"/>
            </Col>
          </Row>
        }
      </Container>
    </div>
  );
}

export default Courses;
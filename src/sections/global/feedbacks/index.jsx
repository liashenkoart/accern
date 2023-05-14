import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Title from "../../../components/title";

import "./Feedbacks.scss"

const Feedbacks = ({ isVisible, page }) => {


  return (
    <div className={`feedbacks sect-spacer ${page.className ? page.className : ''} ${isVisible ? "active" : ''}`}>
      <Container>
        <Row>
          <Col>
            <Title page={page}/>
          </Col>
        </Row>
          <Row className="mt-5">
            {page.columns && page.columns.map((column, i) => (
              <Col key={`fci-${i}`} md={6}>
                <div className={`feedbacks-item v-${i} ${(i + 1) % 2 == 0 ? "f-odd" : ""}`}>
                  <p className="text-medium text-dark">"{column.feedback}"</p>
                  <div className="feedbacks-row">
                    <div className="feedbacks-img" style={{ backgroundImage: `url(./assets/img/${column.img})` }}></div>
                    <div className="feedbacks-content">
                      <h4>{column.name}</h4>
                      <span className="text-small">{column.title}</span>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
      </Container>
    </div>
  );
}

export default Feedbacks;
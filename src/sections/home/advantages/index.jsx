import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { page } from "../../../data/pages/homepage";

import "./Advantages.scss"

const Advantages = ({ isVisible }) => {

  return (
    <div className={`advantages sect-spacer-2 ${isVisible ? "active" : ''}`}>
      <div className="shape-lines variant-3"></div>
      <Container>
        <Row className="flex-column-reverse flex-md-row">
          <Col md={6} lg={5}>
            <div className={`blocks vertical h-100`}>
              {page.advantages.columns.map((column, i) => (
                <div key={`ac-${i}`} className={`block`}>
                  <Container className="p-0" fluid>
                    <Row>
                      <Col xs={3}>
                        <div className="mb-4 mb-md-0"><img className="icon-medium" src={`../../assets/img/${column.icon}`} alt="" /></div>
                      </Col>
                      <Col xs={8}>
                        <div>
                          <h4 className="text-title">{column.title}</h4>
                          <p className="mb-0 text-medium">{column.description}</p>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
              ))}
            </div>
          </Col>
          <Col md={6} lg={7} className="d-flex justify-content-start justify-content-lg-end">
            <div className="preset-illustration-1 mb-5 mb-md-0"><img src={`../../assets/img/${page.advantages.img}`} alt="" /></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Advantages;
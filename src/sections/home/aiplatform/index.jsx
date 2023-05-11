import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { page } from "../../../data/pages/homepage";

import "./AiPlatform.scss"

const AiPlatform = ({ isVisible }) => {

  return (
    <div className={`aiplatform sect-spacer ${page.aiplatform.className ? page.aiplatform.className : ""} ${isVisible ? "active" : ''}`}>
      <div className="shape-lines variant-2"></div>
      <Container>
        <Row>
          <Col>
            <div className="text-label"><span>{page.aiplatform.label}</span></div>
            <h2 className="mw-550 mb-0 effect-title effect-primary">{page.aiplatform.titleEF}</h2>
            <h2 className="mw-550">{page.aiplatform.title}</h2>
          </Col>
        </Row>
        <Row className="mt-0 mt-lg-5">
          <Col>
            <div className={`blocks margin-negative-2 mt-4 mt-md-5 columns-${page.aiplatform.columns.length}`}>
              {page.aiplatform.columns.map((column, i) => (
                <div key={`ic-${i}`} className={`block shadow-adv ${i < page.aiplatform.columns.length - 1 ? "" : "last"}`}>
                  <div><img className="icon-medium" src={`../../assets/img/${column.icon}`} alt="" /></div>
                  <div className="h-100 mt-d">
                    <h4>{column.title}</h4>
                    <p className="mb-0">{column.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AiPlatform;
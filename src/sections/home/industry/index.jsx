import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { page } from "../../../data/pages/homepage";

import "./Industry.scss"

const Industry = ({ isVisible }) => {

  return (
    <div className={`industry bg-light sect-spacer ${isVisible ? "active" : ''}`}>
      <div className="shape-dots-medium"></div>
      <Container>
        <Row>
          <Col>
            <div className="text-label"><span>{page.industry.label}</span></div>
            <h2 className="mw-550">{page.industry.title}</h2>
          </Col>
        </Row>
        <Row className="mt-0 mt-lg-5">
          <Col>
            <div className={`blocks margin-negative-2 mt-5 columns-${page.industry.columns.length}`}>
              {page.industry.columns.map((column, i) => (
                <div key={`ic-${i}`} className={`block as-link shadow-adv ${i < page.industry.columns.length - 1 ? "" : "last"}`}>
                  <div><img className="icon-medium" src={`../../assets/img/${column.icon}`} alt="" /></div>
                  <div className="h-100 mt-d">
                    <h4>{column.title}</h4>
                    <p className="mb-0 text-small">{column.description}</p>
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

export default Industry;
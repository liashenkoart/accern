import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import "./CaseStudies.scss"

const CaseStudies = ({ isVisible, page }) => {

  return (
    <div className={`case-studies ${isVisible ? "active" : ""} ${page.className ? page.className : ""} ${page.variant ? page.variant : ""}`}>
      <Container>
        <Row>
          <Col>
            <div className="case-studies-row">
              <div className="case-studies-c1">
                <div>
                  {page.label && <span className="text-label text-white">{page.label}</span>}
                  {page.title && <h3 className="text-title-white" dangerouslySetInnerHTML={{ __html: page.title }}></h3>}
                </div>
                {page.stats &&
                  <div className="case-studies-stats">
                    {page.stats.map((stat, i) => (
                      <div key={`si-${i}`}>
                        <div className="text-title-el-white">{stat.value}</div>
                        <div className="text-white op-07">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                }
              </div>
              <div className="case-studies-c2">
                {page.logo && <img src={`../assets/img/${page.logo}`} alt="" />}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CaseStudies;
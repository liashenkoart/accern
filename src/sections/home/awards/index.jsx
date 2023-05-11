import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { page } from "../../../data/pages/homepage";
import { Link } from "@reach/router";

import "./Awards.scss"

const Awards = ({ isVisible }) => {

  return (
    <div className={`awards mb-5 ${isVisible ? "active" : ''}`}>
      <Container>
        <Row>
          <Col>
            <div className="text-label mb-4 mb-md-5"><span>{page.awards.label}</span></div>
          </Col>
        </Row>
        </Container>
        <Container fluid className="p-0 position-relative z-1">
        <div className="awards-bg effect-bg"></div>
        <Row>
          <Col>
            <Container className="p-ef">
              <Row>
                <Col>
                  <div className="blocks justify-content-between">
                    {page.awards.columns.map((award, i) => (
                      <Link to={award.link} key={`aw-${i}`} className="block">
                        <div className="preset-img-2"><img src={`../../assets/img/${award.logo}`} alt="" /></div>
                        <h4 className="text-light mb-1">{award.name}</h4>
                        <p className="text-small text-light mb-0 op-08">{award.description}</p>
                      </Link>
                    ))}
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Awards;
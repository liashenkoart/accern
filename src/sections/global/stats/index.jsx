import React, {useContext} from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import LinkAdv from "../../../components/linkadv";

import "./Stats.scss"

const Stats = ({ isVisible, page }) => {

  return (
    <div className={`stats ${page.className ? page.className : ""} sect-spacer ${isVisible ? "active" : ''}`}>
      {page.isShape && <div className="shape-dots-medium"></div>}
      <Container>
        <Row>
          <Col>
            {page.label && <div className="text-label"><span>{page.label}</span></div>}
            {page.title && <h2 className={`${page.titleCL ? page.titleCL : "mw-550"}`}>{page.title}</h2>}
            {page.description && <p className="mt-4 mb-0 mw-900  text-medium">{page.description}</p>}
          </Col>
        </Row>
        {page.rows.map((row, i) => (
          <Row key={`r-${i}`} className="mt-4">
            <Col md={12}>
              <h4 className="text-primary-sub-title mb-5">{row.title}</h4>
            </Col>
            {row.stats.map((stat, i) => (
              <Col key={`s-${i}`} lg={6} className="mb-4">
                <Container fluid className="p-0">
                  <Row>
                    <Col md={5} className="mb-2 mb-md-0">
                      <div className="text-strong mb-2">{`${stat.value}%`}</div>
                      <div className="text-small-light">{stat.name}</div>
                    </Col>
                    <Col md={{ span: 7 }} className="d-flex align-items-end pr-5">
                      <ProgressBar className={`mb-2" ${isVisible ? "active" : ''}`} now={stat.value} />
                    </Col>
                  </Row>
                </Container>
              </Col>
            ))}
            <Col md={12} className="mt-4">
              {row.label && <p className="text-small mb-4 text-italic">{row.label}</p>}
              {row.link && <LinkAdv data={row.link} className="d-block" variant="link"/>}
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  );
}

export default Stats;
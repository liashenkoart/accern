import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import LinkAdv from "../../../components/linkadv";

import "./ThemedBlock.scss"

const ThemedBlock = ({ isVisible, page, variant }) => {

  const renderBlock = () => {
    switch (variant) {
      case "advanced":
        return <Container>
          <Row>
            <Col lg={5} className="text-center text-lg-left p-ef-adv themed-advanced-bg">
              {page.title && <h2 className="text-light lh-1 mb-3" dangerouslySetInnerHTML={{ __html: page.title }}></h2>}
              {page.description && <p className={`text-light op-08 text-center text-md-left ${page.descrCL ? page.descrCL : "mw-340"} mb-0 mw-md-100`} dangerouslySetInnerHTML={{ __html: page.description }}></p>}
            </Col>
            <Col lg={7} className="d-flex align-items-center justify-content-center justify-content-lg-end p-ef-adv">
              {page.content && <h3 className="text-large-light text-center text-md-left mw-1000 mb-0" dangerouslySetInnerHTML={{ __html: page.content }}></h3>}
            </Col>
          </Row>
        </Container>
      case "wide":
        return <Container className="p-ef">
          <Row>
            <Col lg={12} className="text-center text-lg-left">
              {page.title && <h2 className="text-light lh-1 mb-3" dangerouslySetInnerHTML={{ __html: page.title }}></h2>}
              {page.description && <p className="text-medium-light text-center text-md-left mw-1000 mb-0" dangerouslySetInnerHTML={{ __html: page.description }}></p>}
            </Col>
          </Row>
        </Container>
      default:
        return <Container className="p-ef">
          <Row>
            <Col lg={6} className="text-center text-lg-left">
              <h2 className="text-light lh-1 mb-3">{page.title}</h2>
              <p className={`text-light op-07 ${page.descrCL ? page.descrCL : "mw-340"} mb-4 mb-lg-0 mx-auto mx-lg-0`}>{page.description}</p>
            </Col>
            <Col lg={6} className="d-flex align-items-center justify-content-center justify-content-lg-end">
              {page.button && <LinkAdv data={page.button} variant="btn-light" />}
            </Col>
          </Row>
        </Container>
    }
  }

  return (
    <div className={`themed-block ${isVisible ? "active" : ""} ${page.className ? page.className : ""} ${variant && variant}`}>
      <Container fluid className="position-relative z-1">
        {variant != "advanced" && <div className="awards-bg effect-bg"></div>}
        <Row>
          <Col>
            {renderBlock()}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ThemedBlock;
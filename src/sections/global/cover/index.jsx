import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import "./Cover.scss"

const Cover = ({ isVisible, page, variant }) => {

  return (
    <div className={`cover ${isVisible ? "active" : ""} ${page.className ? page.className : ""} ${page.variant ? page.variant  : ""} ${variant ? variant : ""}`}>
      <Container>
        <Row>
          <Col>
            <div className="cover-bg" style={{ background: `url(./assets/img/${page.img})` }}>
              {(page.title || page.description) && <div className="cover-details">
                {page.title && <h2 className="text-title-white-sm fw-300 mb-4 mt-0">{page.title}</h2>}
                {page.description && <p className="text-light-sub fw-300 mb-0">{page.description}</p>}
              </div>}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Cover;
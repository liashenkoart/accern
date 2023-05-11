import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import "./Cover.scss"

const Cover = ({ isVisible, page, variant }) => {

  return (
    <div className={`cover ${isVisible ? "active" : ""} ${page.className ? page.className : ""} ${variant ? variant : ""}`}>
      <Container>
        <Row>
          <Col>
            <div className="cover-bg" style={{background:`url(./assets/img/${page.img})`}}></div>
          </Col>
        </Row>
        </Container>
    </div>
  );
}

export default Cover;
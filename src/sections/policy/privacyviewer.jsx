import React, { useState, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./SupportPolicy.scss"

const PrivacyPolicy = ({ isVisible, page }) => {

  return (
    <div className={`privacy-policy pt-0 sect-spacer ${isVisible ? "active" : ''}`}>
      <Container>
        <Row>
          <Col lg={12}>
            
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PrivacyPolicy;
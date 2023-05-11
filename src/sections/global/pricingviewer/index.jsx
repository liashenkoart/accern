import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Packages from "../../../components/pricing/Packages";

import "./PricingViewer.scss"

const PricingViewer = ({ isVisible, page }) => {

  return (
    <div className={`pricing-viewer ${page.className ? page.className : ''} ${isVisible ? "active" : ''}`}>
      <Container>
        <Row>
          <Col md={12}>
            <Packages data={page.packages} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PricingViewer;
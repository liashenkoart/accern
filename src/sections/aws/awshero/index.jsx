import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Icon from "../../../components/icon";
import FormComp from "../../../components/form";
import AwsMarketplace from "../../../components/aws-marketplace";

import "./AwsHero.scss"

const AwsHero = ({ isVisible, page }) => {

  return (
    <div className={`aws-hero ${isVisible ? "active" : ''}`}>
      <Container>
        <Row>
          <Col lg={6}>
            <AwsMarketplace data={page.awsMarketplace} />
          </Col>
          <Col lg={6} className="d-flex align-items-center justify-content-center justify-content-lg-start">
            {page.isForm && <FormComp from="Aws Registration" data={page.form} />}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AwsHero;
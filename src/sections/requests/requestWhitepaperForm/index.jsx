import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import FormComp from "../../../components/form";
import AboutWhitepaper from "../../../components/about-whitepaper";

const RequestForm = ({ isVisible, page }) => {

  return (
    <div className={`request-form sect-spacer ${isVisible ? "active" : ''}`}>
      <Container>
        <Row>
          <Col lg={7} className="pb-5 pb-lg-0">
            <AboutWhitepaper data={page.about} />
          </Col>
          <Col lg={5} className="d-flex align-items-center justify-content-center justify-content-lg-start">
            <FormComp from={page.form.from} data={page.form} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default RequestForm;
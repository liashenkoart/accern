import React, { useState, useContext, useRef, useEffect } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { settings } from "../../data/settings";
import { Context } from "../../context/context";
import * as bootstrapValidate from 'bootstrap-validate';
import LinkAdv from "../../components/linkadv";

import "./FooterCTA.scss"

const FooterCTA = ({ data }) => {

  const [valid, setValid] = useState("");
  const inputR = useRef();

  useEffect(() => {
    validate();
  }, []);

  const validate = () => {
    if (inputR.current) bootstrapValidate(inputR.current, 'email:', setValidaion);
  }

  const setValidaion = (isValid) => {
    setTimeout(() => {
      isValid ? setValid("is-valid") : setValid("is-invalid");
    }, 50)
  }

  return (
    <div className={`footer-cta ${data && data.className ? data.className : ""}`}>
      <Container fluid className="position-relative z-1">
        <Row>
          <Col>
            <Container className="p-ef">
              <Row>
                <Col lg={12} className="text-center">
                  <div className="text-label text-primary mb-4">{data.label}</div>
                  <h2 className="text-title-extra mb-4" dangerouslySetInnerHTML={{ __html: data.title}}></h2>
                  <p className="text-medium-white fw-300 mw-500 mb-5 text-center mx-auto" dangerouslySetInnerHTML={{ __html: data.description }}></p>
                </Col>
                <Col lg={12} className="text-center">
                  <LinkAdv variant="primary-arrow" data={data.button} />
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FooterCTA;
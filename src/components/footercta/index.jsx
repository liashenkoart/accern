import React, { useState, useContext, useRef, useEffect } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { settings } from "../../data/settings";
import { Context } from "../../context/context";
import { OpenModal } from "../../services/modalsManager";
import * as bootstrapValidate from 'bootstrap-validate';
import { navigate } from "@reach/router";
import Icon from "../icon";

import "./FooterCTA.scss"

const FooterCTA = ({ page }) => {

  const { dispatchModals } = useContext(Context);
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
    <div className={`footer-cta ${page && page.footerGetStarted.className ? page.footerGetStarted.className : ""}`}>
      <Container fluid className="position-relative z-1">
        <Row>
          <Col>
            <Container className="p-ef">
              <Row>
                <Col lg={12} className="text-center">
                  <div className="text-label text-primary mb-4">{page ? page.footerGetStarted.label : settings.footerGetStarted.label}</div>
                  <h2 className="text-title-extra mb-4">{page ? page.footerGetStarted.title : settings.footerGetStarted.title}</h2>
                  <p className="text-medium-white fw-300 mw-500 mb-5 text-center mx-auto" dangerouslySetInnerHTML={{ __html: page ? page.footerGetStarted.description : settings.footerGetStarted.description }}></p>
                </Col>
                <Col lg={12} className="text-center">
                  <Button variant="primary" onClick={() => page && page.footerGetStarted && page.footerGetStarted.link.link ? navigate(page.footerGetStarted.link.link) : OpenModal(page && page.footerGetStarted.link.modal ? page.footerGetStarted.link.modal : "request", dispatchModals)}>{page ? page.footerGetStarted.link.name : settings.footerGetStarted.link.name}<Icon variant="arrow-right"/></Button>
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
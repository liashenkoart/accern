import React, { useState, useContext, useRef, useEffect } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { settings } from "../../data/settings";
import { Context } from "../../context/context";
import { OpenModal } from "../../services/modalsManager";
import * as bootstrapValidate from 'bootstrap-validate';
import Icon from "../../components/icon";
import {navigate} from "@reach/router";

import "./GetStarted.scss"

const GetStarted = ({page}) => {

  const {userMail, dispatchUserMail} = useContext(Context);
  const { dispatchModals } = useContext(Context);
  const [valid, setValid] = useState("");
  const inputR = useRef();

  useEffect(() => {
    validate();
  }, []);

  const validate = () => {
    if(inputR.current) bootstrapValidate(inputR.current, 'email:', setValidaion);
  }

  const setValidaion = (isValid) => {
    setTimeout(() => {
      isValid ? setValid("is-valid") : setValid("is-invalid");
    }, 50)
  }

  return (
    <div className={`get-started ${page && page.getstarted.className ? page.getstarted.className : "" }`}>
      <Container fluid className="position-relative z-1">
        <div className="awards-bg effect-bg"></div>
        <Row>
          <Col>
            <Container className="p-ef">
              <div className="shape-dots-small"></div>
              <Row>
                <Col lg={6} className="text-center text-lg-left">
                  <h2 className="text-light lh-1 mb-3">{page ? page.getstarted.title : settings.getstarted.title}</h2>
                  <p className="text-light op-07 mw-340 mb-4 mb-lg-0 mx-auto mx-lg-0" dangerouslySetInnerHTML={{__html: page ? page.getstarted.description : settings.getstarted.description}}></p>
                </Col>
                <Col lg={6} className="d-flex align-items-center justify-content-left justify-content-md-end">
                  <Form className="d-inline-flex w-480">
                    <div className="w-100 d-flex flex-column flex-md-row justify-content-end">
                      {page && page.getstarted.isDisableForm ? <></> : <div className={`position-relative ${valid}`}>{valid == "is-invalid" && <div className="icon-error"><Icon variant="icon-close-small"/></div>}<Form.Control ref={inputR} className="theme-light mb-4 mb-md-0" type="email" value={userMail} onChange={e => dispatchUserMail({type: "SET_USER_MAIL", data:e.target.value})} placeholder={page ? page.getstarted.placeholder : settings.getstarted.placeholder} required /></div>}
                      <Button variant="light" onClick={()=>page && page.getstarted && page.getstarted.link.link ? navigate(page.getstarted.link.link) : OpenModal(page && page.getstarted.link.modal ? page.getstarted.link.modal : "request", dispatchModals)}>{page ? page.getstarted.link.name : settings.getstarted.link.name}</Button>
                    </div>
                  </Form>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default GetStarted;
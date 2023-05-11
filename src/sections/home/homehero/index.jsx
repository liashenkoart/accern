import React, { useState, useContext, useRef, useEffect } from "react";
import { Link } from "@reach/router";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Typed from "react-typed";
import { Context } from "../../../context/context";
import { OpenModal } from "../../../services/modalsManager";
import * as bootstrapValidate from 'bootstrap-validate';
import Icon from "../../../components/icon";

import "./HomeHero.scss"

const HomeHero = ({ isVisible, page }) => {

  const { dispatchModals } = useContext(Context);
  const { userMail, dispatchUserMail } = useContext(Context);
  const [valid, setValid] = useState("");
  const inputR = useRef();

  useEffect(() => {
    validate();
  }, []);

  const validate = () => {
    bootstrapValidate(inputR.current, 'email:', setValidaion);
  }

  const setValidaion = (isValid) => {
    setTimeout(() => {
      isValid ? setValid("is-valid") : setValid("is-invalid");
    }, 50)
  }

  const onSubmit = (e) => {
    e.preventDefault();
    OpenModal("request", dispatchModals);
  }

  return (
    <div className={`home-hero sect-spacer ${isVisible ? "active" : ''}`}>
      <Container>
        <Row>
          <Col lg={6} className="d-flex align-items-center justify-content-center justify-content-lg-start">
            <div className="mt-n-50">
              <div className="position-relative mt-5 mb-5 mt-lg-0 mb-lg-0">
                <div className="shape-homehero"><img src="../../assets/img/dots-medium-2.svg" alt="" /></div>
                <div className="mb-2 text-center text-md-left"><span className="text-label">{page.label}</span></div>
                <h1 className="mb-4 text-center text-md-left">{page.title} <div className="font-weight-medium">
                  <Typed
                    strings={page.strings}
                    typeSpeed={50}
                    backSpeed={30}
                    backDelay={2000}
                    showCursor
                    className="text-center text-md-left"
                    loop
                  />
                </div>
                </h1>
                {page.form && page.form.isActive &&
                  <Form onSubmit={onSubmit} className="form-base d-inline-flex w-480 mb-4">
                    <div className="w-100 d-flex flex-column flex-md-row">
                      <div className={`position-relative ${valid}`}>{valid == "is-invalid" && <div className="icon-error"><Icon variant="icon-close-small"/></div>}<Form.Control ref={inputR} type="email" className="input-shadow mb-4 mb-md-0" value={userMail} onChange={e => dispatchUserMail({ type: "SET_USER_MAIL", data: e.target.value })} placeholder={page.form.placeholder} required /></div>
                      <Button variant="primary" onClick={() => OpenModal("request", dispatchModals)}>{page.form.button}</Button>
                    </div>
                  </Form>
                }
                {page.loginLink && page.loginLink.isActive && <div className="text-center text-md-left mb-2 mt-2 mt-md-0"><span className="text-gray-medium">{page.loginLink.label} <Link to={page.loginLink.link}>{page.loginLink.name}</Link></span></div>}
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="preset-img-1">
              <img src={`../../assets/img/${page.img}`} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomeHero;
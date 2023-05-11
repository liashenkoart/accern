import React, { useState, useContext } from "react";
import { Link, navigate } from "@reach/router";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Typed from "react-typed";
import { Context } from "../../../context/context";
import { OpenModal } from "../../../services/modalsManager";

import "./Hero.scss"

const Hero = ({ isVisible, page }) => {

  const { dispatchModals, scrollB, userMail, dispatchUserMail } = useContext(Context);

  const onSubmit = (e) => {
    e.preventDefault();
    OpenModal("request", dispatchModals);
  }

  const scrollTo = (elmId) => {
    const position = document.querySelector(`#${elmId}`).getBoundingClientRect().top;
    scrollB.scrollbar.scrollTo(0, position, 1000);
  }

  return (
    <div className={`hero sect-spacer ${isVisible ? "active" : ''}`}>
      <Container>
        <Row>
          <Col lg={6} className="d-flex align-items-center justify-content-center justify-content-lg-start">
            <div className="">
              <div className="position-relative mt-5 mb-5 mt-lg-0 mb-lg-0">
                <div className="shape-homehero-2"><img src="../../assets/img/dots-medium-4.svg" alt="" /></div>
                <div className="mb-2 text-center text-md-left"><span className="text-label">{page.label}</span></div>
                {!page.strings && <h1 className={`mb-4 text-center text-md-left ${page.titleCL ? page.titleCL : "mw-550"}`} dangerouslySetInnerHTML={{ __html: page.title }}></h1>}
                {page.strings &&
                  <h1 className={`mb-4 text-center text-md-left ${page.titleCL ? page.titleCL : "mw-550"}`}>
                    {page.title}
                    <span className="font-weight-medium">
                      <Typed
                        strings={page.strings}
                        typeSpeed={50}
                        backSpeed={30}
                        backDelay={2000}
                        showCursor={page.strings.length > 1 ? true : false}
                        className="text-center text-md-left"
                        loop={page.strings.length > 1 ? true : false}
                      />
                    </span>
                  </h1>
                }
                {page.description &&
                  <p className={`text-medium mb-4 mb-lg-5 text-center text-md-left ${page.descriptionCL ? page.descriptionCL : "mw-550"}`}>{page.description}</p>
                }
                {page.form && page.form.isActive &&
                  <Form onSubmit={onSubmit} className="form-base d-inline-flex w-480 mb-4">
                    <div className="w-100 d-flex flex-column flex-md-row">
                      <Form.Control type="email" className="input-shadow mb-4 mb-md-0" value={userMail} onChange={e => dispatchUserMail({ type: "SET_USER_MAIL", data: e.target.value })} placeholder={page.form.placeholder} required />
                      <Button variant="primary" onClick={() => OpenModal("request", dispatchModals)}>{page.form.button}</Button>
                    </div>
                  </Form>
                }
                {page.loginLink && page.loginLink.isActive && <div className="text-center text-md-left mb-2 mt-2 mt-md-0"><span className="text-gray-medium">{page.loginLink.label} <Link to={page.loginLink.link}>{page.loginLink.name}</Link></span></div>}
                {page.button &&
                  <div className="text-center text-md-left">
                    <Button onClick={() => page.button.scrollTo ? scrollTo(page.button.scrollTo) : page.button.modal ? OpenModal(page.button.modal, dispatchModals) : page.button.link.indexOf('@') != -1 ? location.href = page.button.link : navigate(page.button.link)} variant="outline-primary">
                      {page.button.name}
                    </Button>
                  </div>
                }
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="preset-img-5">
              <img src={`../../assets/img/${page.img}`} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;
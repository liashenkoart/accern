import React, { useState, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./Title.scss"

const Title = ({ isVisible, page }) => {

  return (
    <div className={`title sect-spacer pb-0 ${isVisible ? "active" : ''}`}>
      <Container>
        <Row>
          <Col lg={12} className="d-flex align-items-center justify-content-center justify-content-lg-start">
            <div className="">
              <div className="position-relative mt-5 mb-5 mt-lg-0 mb-lg-0">
                <div className="shape-homehero-2"><img src="../../assets/img/dots-medium-3.svg" alt="" /></div>
                <div className="mb-2 text-center text-md-left"><span className="text-label">{page.label}</span></div>
                {!page.strings && <h1 className={`mb-4 text-center text-md-left ${page.titleCL ? page.titleCL : "mw-550"}`} dangerouslySetInnerHTML={{ __html: page.title }}></h1>}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Title;
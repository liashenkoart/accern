import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import LinkAdv from "../../../components/linkadv";

import "./CoverBlock.scss"

const CoverBlock = ({ isVisible, page }) => {

  return (
    <div className={`cover-block ${isVisible ? "active" : ""} ${page.className ? page.className : ""}`}>
      <Container fluid className="position-relative z-1">
        <div className={`${page.bgClassName ? page.bgClassName : "effect-bg-2"}`}></div>
        <Row>
          <Col>
            <Container className="p-ef-2">
              <Row>
                <Col lg={12} className="position-relative text-center text-lg-left">
                  {!page.isDisableShape && <div className="shape-homehero-3"><img src="../../assets/img/dots-medium-4.svg" alt="" /></div>}
                  {page.icon && <img className="cover-block-icon" src={`./assets/img/${page.icon}`} />}
                  {page.label && <div className={`mb-2 text-center text-md-left ${page.labelCL ? page.labelCL : ""}`}><span className="text-label text-white">{page.label}</span></div>}
                  {page.title && <h2 className={`text-light lh-1 mb-3 ${page.titleCL ? page.titleCL : "" }`} dangerouslySetInnerHTML={{ __html: page.title }}></h2>}
                  {page.description && <p className="text-light op-07 mw-340 mb-4 mb-lg-0 mx-auto mx-lg-0">{page.description}</p>}
                  {page.button && <LinkAdv data={page.button} className="mt-4" variant="btn-light" />}
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CoverBlock;
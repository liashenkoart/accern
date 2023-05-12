import React, { useContext } from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import SimpleBlocks from "../simpleblocks";

import "./WhatIs.scss"

const WhatIs = ({ isVisible, page }) => {

  return (
    <div className={`what-is ${page.className ? page.className : ""} sect-spacer ${isVisible ? "active" : ''}`}>
      <Container>
        <Row>
          <Col md={6} className="position-relative">
            <img className="what-is-dots" src="./assets/img/dots-lg.svg" alt=""/>
            {page.img && <img className="w-100 position-relative z-1" src={`./assets/img/${page.img}`}/>}
          </Col>
          <Col md={6} className="d-flex align-items-center pl-md-5 pl-3">
            <div>
              {page.title && <h2 className="text-title-light-sm mb-4 mt-5 mt-md-0">{page.title}</h2>}
              {page.description && <p className="text-light-sub mb-0">{page.description}</p>}
              <div>
                <SimpleBlocks page={page.keyHighlights} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div >
  );
}

export default WhatIs;
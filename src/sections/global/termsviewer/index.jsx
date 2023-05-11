import React, { useState, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./TermsViewer.scss"

const TermsViewer = ({ isVisible, page }) => {

  return (
    <div className={`terms-viewer pt-0 sect-spacer ${isVisible ? "active" : ''}`}>
      <Container>
        <Row>
          <Col lg={12}>
            <h1 className={`mb-4 text-center text-md-left ${page.titleCL ? page.titleCL : "mw-550"}`} dangerouslySetInnerHTML={{ __html: page.title }}></h1>
            {page.description && <p dangerouslySetInnerHTML={{ __html: page.description }}></p>}
            {page.sections && page.sections.map((section, i) => (
              <div key={`si-${i}`}>
                {section.title && <h4>{section.title}</h4>}
                {section.subs &&
                  section.subs.map((sub, i) => (
                    <div key={`subi-${i}`}>
                      {sub.title && <h5 className={`${sub.titleCL ? sub.titleCL : ""}`}>{sub.title}</h5>}
                      <p dangerouslySetInnerHTML={{ __html: sub.content }}></p>
                    </div>
                  ))
                }
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TermsViewer;
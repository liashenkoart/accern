import React from "react";
import { Container, Row, Col, Badge, Collapse } from "react-bootstrap";

import "./Tiles.scss";

const Tiles = ({ isVisible, page }) => {

  return (
    <div className={`module-tiles ${page.className ? page.className : ""} sect-spacer ${isVisible ? "active" : ''}`}>
      {page.isShape && <div className="shape-dots-medium"></div>}
      <Container>
        <Row>
          <Col>
            {page.label && <div className="text-label"><span>{page.label}</span></div>}
            {page.title && <h2 dangerouslySetInnerHTML={{ __html: page.title }} className={`${page.titleCL ? page.titleCL : "mw-550"}`}></h2>}
            {page.description && <p className={`mt-4 ${page.type == "filter" ? "mb-5" : "mb-0"} ${page.descrCL ? page.descrCL : "mw-550"}  text-medium`}>{page.description}</p>}
          </Col>
        </Row>
        <Row className="mt-5 pt-3">
          {page.team && page.team.map((member, i) => (
            <Col md={3} key={`mi-${i}`}>
              <div className="tile">
                <div style={{background:`${member.img ? `url(./assets/img/${member.img})` : "" }`}}></div>
              </div>
            </Col>
          ))
          }
        </Row>
      </Container>
    </div>
  );
}

export default Tiles;
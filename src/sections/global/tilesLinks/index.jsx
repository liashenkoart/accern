import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {Link} from "@reach/router";

import "./TilesLinks.scss";

const TilesLinks = ({ isVisible, page }) => {

  return (
    <div className={`tiles-links ${page.className ? page.className : ""} sect-spacer ${isVisible ? "active" : ''}`}>
      <Container>
        <Row>
          <Col>
            {page.label && <div className="text-label"><span>{page.label}</span></div>}
            {page.title && <h2 dangerouslySetInnerHTML={{ __html: page.title }} className={`${page.titleCL ? page.titleCL : "mw-550"}`}></h2>}
            {page.description && <p className={`mt-4 ${page.descrCL ? page.descrCL : "mw-550"}  text-medium`}>{page.description}</p>}
          </Col>
        </Row>
        <Row className="mt-5 pt-3">
          {page.links && page.links.map((link, i) => (
            <Col md={link.size} key={`tli-${i}`} className="mb-g">
              <Link to={link.link ? link.link : "/"} className={`tile-links-item ${link.theme ? link.theme : "t1"}`}>
                {link.icon && <img className="icon-medium mb-3 mb-md-5" src={`../assets/img/${link.icon}`}/>}
                {link.title && <h3 className="text-sub-light" dangerouslySetInnerHTML={{ __html: link.title }}></h3>}
                {link.description && <p className={`text-regular mt-4 mb-0 ${link.descriptionCL ? link.descriptionCL : "mw-400"}`}>{link.description}</p>}
              </Link>
            </Col>
          ))
          }
        </Row>
      </Container>
    </div>
  );
}

export default TilesLinks;
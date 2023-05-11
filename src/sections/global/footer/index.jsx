import React from "react";
import { Link } from "@reach/router";
import { Container, Row, Col } from "react-bootstrap";
import { settings } from "../../../data/settings";
import GetStarted from "../../../components/getstarted";

import "./Footer.scss"

const Footer = ({ isVisible, isSimple, page, isMinimal }) => {

  return (
    <footer className={`footer ${isVisible ? "active" : ''}`}>
      {!isSimple && !isMinimal && <GetStarted page={page}/>}
      <Container>
        {!isSimple && <Row>
          <Col>
            <div className={`footer-columns ${isMinimal ? "section-spacer-top" : ""}`}>
              {
                settings.footer.columns.map((column, i) => (
                  <ul key={`fc-${i}`} className="list-simple mb-4">
                    <li className="text-label mb-2">{column.title}</li>
                    {column.rows.map((row, ip) => (
                      <li key={`fr-${ip}`}>{row.link ? (row.link.indexOf('@') != -1) || (row.link.indexOf('.') != -1) ? <a href={row.link}>{row.name}</a> : <Link to={row.link}>{row.name}</Link> : <span>{row.name}</span>}</li>
                    ))}
                  </ul>
                ))
              }
            </div>
          </Col>
        </Row>}
        <Row className="mt-5 mb-5">
          <Col lg={6} className="d-flex justify-content-lg-start justify-content-center mb-2 mb-lg-0">
            <span className="text-label-light text-center text-md-left">{settings.footer.copyright}</span>
          </Col>
          <Col lg={6} className="d-flex justify-content-lg-end justify-content-center">
            <div className="text-center text-md-left">
              {settings.footer.links.map((link, i) => (
                <span key={`fl-${i}`}>{link.link ? <Link className="text-label-light" to={link.link}>{link.name}</Link> : <span className="text-label-light">{link.name}</span>}{i < settings.footer.links.length - 1 ? <span className="mr-3 ml-3">/</span> : <span></span>}</span>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
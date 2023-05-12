import React from "react";
import { Link } from "@reach/router";
import { Container, Row, Col } from "react-bootstrap";
import { settings } from "../../../data/settings";
import GetStarted from "../../../components/getstarted";
import FooterCTA from "../../../components/footercta";
import Icon from "../../../components/icon";

import "./Footer.scss"

const Footer = ({ isVisible, isSimple, page, isMinimal }) => {

  return (
    <footer className={`footer ${isVisible ? "active" : ''}`}>
      {!isSimple && !isMinimal && <GetStarted page={page} />}
      <div className="footer-inner">
        <div className="footer-shape-top"><img src="../assets/img/footer-shape.svg" alt="" /></div>
        <div className="footer-cta-container">
          <FooterCTA />
          <div className={`footer-brands mt-5 mb-lg-5 mb-0`}>
            <Container>
              <Row>
                <Col>
                  <div className="blocks mobile-wrap mt-5 mt-lg-0">
                    {settings.brands.columns.map((brand, i) => (
                      <div key={`bc-${i}`} className="block d-flex align-items-center justify-content-center justify-content-lg-start mb-4 mb-lg-0">
                        {brand.link ? <Link to={brand.link} className={brand.className}><img src={`../../assets/img/${brand.logo}`} alt="" /></Link> : <div className={brand.className}><img src={`../../assets/img/${brand.logo}`} alt="" /></div>}
                      </div>
                    ))}
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <img className="footer-shape" src="../assets/img/shape-triangles-primary.svg" />
        <Container>
          {!isSimple && <Row>
            <Col>
              <div className={`footer-columns ${isMinimal ? "section-spacer-top" : ""}`}>
                {
                  settings.footer.columns.map((column, i) => (
                    <ul key={`fc-${i}`} className="footer-list mb-4">
                      <li className="text-label mb-2">{column.title}</li>
                      {column.rows.map((row, ip) => (
                        <li key={`fr-${ip}`}>
                          {row.socials ?
                            <div className="footer-socials">
                              {row.socials.map((social, i) => (
                                <a key={`si-${i}`} target="_blank" href={social.link}><Icon variant={social.icon} /></a>
                              ))}
                            </div>
                            :
                            row.link ?
                              (row.link.indexOf('@') != -1) || (row.link.indexOf('.') != -1) ?
                                <a href={row.link}>{row.name}</a>
                                :
                                <Link to={row.link}>{row.name}</Link>
                              :
                              row.label ?
                                <span className="text-primary text-tiny text-uppercase fw-500">{row.label}</span>
                                :
                                <span>{row.name}</span>
                          }
                        </li>
                      ))}
                    </ul>
                  ))
                }
              </div>
            </Col>
          </Row>}
          <Row className="mt-5">
            <Col lg={6} className="d-flex justify-content-lg-end justify-content-center">
              <div className="text-center text-md-left">
                {settings.footer.links.map((link, i) => (
                  <span key={`fl-${i}`}>
                    {link.link ?
                      <Link className="text-label-light" to={link.link}>{link.name}</Link>
                      :
                      <span className="text-label-light">{link.name}</span>}{i < settings.footer.links.length - 1 ? <span className="mr-3 ml-3">/</span> : <span></span>
                    }
                  </span>
                ))}
              </div>
            </Col>
            <Col lg={6} className="d-flex justify-content-lg-end justify-content-center mb-2 mb-lg-0">
              <span className="text-label-light text-white text-center text-md-left">{settings.footer.copyright}</span>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
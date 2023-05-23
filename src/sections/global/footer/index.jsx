import React, {useContext} from "react";
import { Link } from "@reach/router";
import { Container, Row, Col } from "react-bootstrap";
import { settings } from "../../../data/settings";
import GetStarted from "../../../components/getstarted";
import FooterCTA from "../../../components/footercta";
import Icon from "../../../components/icon";
import Subscribe from "../../../components/subscribe";
import { Context } from "../../../context/context";
import { OpenModal } from "../../../services/modalsManager";

import "./Footer.scss"

const Footer = ({ isVisible, isSimple, page, isMinimal }) => {

  const { dispatchModals, dispatchApp } = useContext(Context);

  const setAction = (row) => {
    if(row.action) dispatchApp({ type: "SET_APP_VALUES", data: { linkAction: {name: row.action, data: row.data} } });

    setTimeout(()=>{
      dispatchApp({ type: "SET_APP_VALUES", data: { linkAction: {} } });
    }, 2000)
  }

  return (
    <footer className={`footer ${isVisible ? "active" : ''}`}>
      {!isSimple && !isMinimal && <GetStarted page={page} />}
      <div className={`footer-inner ${!settings.isGetStarted ? "without-get-started" : ""}`}>
        {/* <div className="footer-shape-top"><img src="../assets/img/footer-shape.svg" alt="" /></div> */}
        {settings.isGetStarted &&
          <div className="footer-cta-container">
            <FooterCTA data={page && page.footerGetStarted ? page.footerGetStarted : settings.footerGetStarted} />
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
        }
        <Container>
          {!isSimple && <>
            <Row>
              <Col>
                <div className={`footer-columns`}>
                  {
                    settings.footer.columns.map((column, i) => (
                      <ul key={`fc-${i}`} className={`footer-list mb-4 ${column.isFullWidthMobile ? "w-md-100" : ""}`}>
                        <li className="text-label mb-2">{column.title}</li>
                        {column.description &&
                          <p>{column.description}</p>
                        }
                        {column.rows && column.rows.map((row, ip) => (
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
                                  <Link onClick={()=>{setAction(row)}} to={row.link}>{row.name}</Link>
                                :
                                row.label ?
                                  <span className="text-primary text-tiny text-uppercase fw-500">{row.label}</span>
                                  :
                                  row.modal ?
                                    <span className="cursor-pointer" onClick={() => OpenModal(row.modal, dispatchModals)}>{row.name}</span>
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
            </Row>
            <Row className="mt-4">
              <Col md={5}>
                <Subscribe data={settings.footer.subscribe} />
              </Col>
              <Col md={7} className="text-center text-md-right mt-5 mt-md-0">
                {settings.footer.contacts && settings.footer.contacts.rows.map((row, i) => (
                  <div className="footer-additional-links text-gray-small mb-2" key={`rci-${i}`}>
                    <a href={row.link}>{row.name}</a>
                  </div>
                ))}
                {settings.footer.socials &&
                  <div className="footer-socials mt-4">
                    {settings.footer.socials.map((social, i) => (
                      <a key={`si-${i}`} target="_blank" href={social.link}><Icon variant={social.icon} /></a>
                    ))}
                  </div>
                }
              </Col>
            </Row>
          </>}
        </Container>
        <div className="footer-bottom">
          <Container>
            <Row>
              <Col lg={6} className="d-flex justify-content-lg-start justify-content-center">
                <span className="text-label-neutral text-center text-md-left">{settings.footer.copyright}</span>
              </Col>
              <Col lg={6} className="d-flex align-items-center justify-content-lg-end justify-content-center mt-2 mt-lg-0">
                <div className="text-center text-md-left">
                  {settings.footer.links.map((link, i) => (
                    <span key={`fl-${i}`}>
                      {link.link ?
                        <Link className="footer-bottom-link" to={link.link}>{link.name}</Link>
                        :
                        <span className="footer-bottom-link">{link.name}</span>
                      }
                    </span>
                  ))}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
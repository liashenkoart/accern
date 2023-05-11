import React, {useContext} from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import LinkAdv from "../../../components/linkadv";
import { OpenModal } from "../../../services/modalsManager";
import { Context } from "../../../context/context";

import "./CTA.scss"

const CTA = ({ isVisible, page }) => {

  const { dispatchModals } = useContext(Context);

  const renderCTA = () => {
    switch (page.variant) {
      case "simple":
        return <div className={`cta p-0 border-0 ${page.className ? page.className : ''} ${isVisible ? "active" : ''}`}>
          <Container fluid className="p-0">
            <Row>
              <Col md={12} className="d-flex align-items-center justify-content-center">
                <div className="text-center">
                  {page.label && <div className="text-label"><span>{page.label}</span></div>}
                  {page.title && <h2 className={`text-title-light ${page.titleCL ? page.titleCL : "mw-440"} mb-d`} dangerouslySetInnerHTML={{ __html: page.title }}></h2>}
                  {page.description && <p className="mb-5 fw-300">{page.description}</p>}
                  {page.link && renderButton(page.link)}
                </div>
              </Col>
            </Row>
          </Container>
        </div>;
      case "with-illustration":
      default:
        return <div className={`cta ${page.className ? page.className : ''} ${isVisible ? "active" : ''}`}>
          <Container fluid className="p-0">
            <Row>
              <Col md={6} className="d-flex align-items-center">
                <div>
                  {page.label && <div className="text-label"><span>{page.label}</span></div>}
                  {page.title && <h2 className={`${page.titleCL ? page.titleCL : "mw-440"} mb-d`} dangerouslySetInnerHTML={{ __html: page.title }}></h2>}
                  {page.description && <p className="mb-5 mw-540 fw-300">{page.description}</p>}
                  {page.link && renderButton(page.link)}
                </div>
              </Col>
              <Col md={6} className="d-flex align-items-center">
                <div className="w-100 mt-5 mt-md-0">
                  <img className="w-100" src={`../../assets/img/${page.img}`} alt="" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>;
    }
  }

  const onAction = () => {
    switch(page.link.action){
      case "download-case-study":
        OpenModal("downloadFile", dispatchModals, {stats: page.stats, url: page.link.data, modal:page.modal});
        break;
    }
  }

  const renderButton = (link) => {
    if (link.action) return <Button variant="outline-primary" onClick={()=>onAction()}>{link.name}</Button>
    if (link.link) return <LinkAdv data={link} variant="outline-primary">{link.name}</LinkAdv>
  }

  return (
    <Container>
      <Row>
        <Col>
          {renderCTA()}
        </Col>
      </Row>
    </Container>
  );
}

export default CTA;
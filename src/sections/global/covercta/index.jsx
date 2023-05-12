import React, { useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import LinkAdv from "../../../components/linkadv";
import Icon from "../../../components/icon";
import { Context } from "../../../context/context";

import "./CoverCta.scss"

const CoverCta = ({ isVisible, page }) => {

  const { dispatchModals } = useContext(Context);

  return (
    <div className={`cover-cta ${isVisible ? "active" : ""} ${page.className ? page.className : ""} ${page.variant ? page.variant : ""}`}>
      <Container>
        <Row>
          <Col>
            <div className="cover-cta-inner">
              <div className="cover-cta-bg" style={{ backgroundImage: `url(./assets/img/${page.img})` }}></div>
              <a href={page.button && page.button.link ? page.button.link : "#"} target="_blank" className="cover-cta-content" style={{ backgroundImage: `url(./assets/img/${page.cover})` }}>
                {page.title && <h2 className="text-white">{page.title}</h2>}
                {page.description && <p className="text-white-sub-title mb-5">{page.description}</p>}
                <div className="d-flex align-items-center justify-content-between">
                  {page.logo && <img className="cover-cta-logo" src={`./assets/img/${page.logo}`} />}
                  <div><Icon variant="arrow-right"/></div>
                </div>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CoverCta;
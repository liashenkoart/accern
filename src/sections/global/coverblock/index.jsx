import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import LinkAdv from "../../../components/linkadv";
import Icon from "../../../components/icon";

import "./CoverBlock.scss"

const CoverBlock = ({ isVisible, page }) => {

  const renderBlock = () => {
    switch (page.variant) {
      case "bio":
        return <Container fluid className="position-relative z-1">
          <div className={`${page.bgClassName ? page.bgClassName : "effect-bg-2"}`}></div>
          <Row>
            <Col>
              <Container className="p-ef-2">
                <Row>
                  <Col lg={6} className="position-relative">
                    {!page.isDisableShape && <div className="shape-homehero-3"><img src="../../assets/img/dots-medium-4.svg" alt="" /></div>}
                    {!page.isIconRight && page.icon && <img className="cover-block-icon" src={`../assets/img/${page.icon}`} />}
                    {page.label && <div className={`mb-2 text-center text-md-left ${page.labelCL ? page.labelCL : ""}`}><span className="text-label text-white">{page.label}</span></div>}
                    <div className="d-flex align-items-center mb-3">
                      {page.profile_image &&
                        <div>
                          <img className="cover-block-author-img" src={`${page.profile_image}`} alt="" />
                        </div>
                      }
                      {page.title && <h2 className={`cover-block-author-name mb-0 ${page.titleCL ? page.titleCL : ""}`} dangerouslySetInnerHTML={{ __html: page.title }}></h2>}</div>
                    {page.description && <p className="text-light op-07 mw-900 mb-4 mb-lg-0 mx-auto mx-lg-0">{page.description}</p>}
                    {page.button && <LinkAdv data={page.button} className="mt-4" variant="btn-light" />}
                  </Col>
                  <Col lg={6} className="d-flex align-items-center justify-content-start justify-content-lg-end">
                    <div className="cover-block-socials">
                      {page.twitter && <a href={page.twitter} target="_blank"><Icon variant="icon-twitter" /></a>}
                      {page.facebook && <a href={page.facebook} target="_blank"><Icon variant="icon-facebook" /></a>}
                      {page.website && <a href={page.website} target="_blank"><Icon variant="icon-linkedin" /></a>}
                    </div>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>

      default:
        return <Container fluid className="position-relative z-1">
          <div className={`${page.bgClassName ? page.bgClassName : "effect-bg-2"}`}></div>
          <Row>
            <Col>
              <Container className="p-ef-2">
                <Row>
                  <Col className="position-relative text-center text-lg-left">
                    {!page.isDisableShape && <div className="shape-homehero-3"><img src="../../assets/img/dots-medium-4.svg" alt="" /></div>}
                    {!page.isIconRight && page.icon && <img className="cover-block-icon" src={`../assets/img/${page.icon}`} />}
                    {page.label && <div className={`mb-2 text-center text-md-left ${page.labelCL ? page.labelCL : ""}`}><span className="text-label text-white">{page.label}</span></div>}
                    {page.title && <h2 className={`text-light lh-1 mb-3 ${page.titleCL ? page.titleCL : ""}`} dangerouslySetInnerHTML={{ __html: page.title }}></h2>}
                    {page.description && <p className="text-light op-07 mw-340 mb-4 mb-lg-0 mx-auto mx-lg-0">{page.description}</p>}
                    {page.button && <LinkAdv data={page.button} className="mt-4" variant="btn-light" />}
                  </Col>
                  {page.isIconRight &&
                    <Col className="d-flex align-items-center justify-content-end">
                      {page.icon && <img className="cover-block-icon" src={`../assets/img/${page.icon}`} />}
                    </Col>
                  }
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
    }
  }

  return (
    <div className={`cover-block ${isVisible ? "active" : ""} ${page.className ? page.className : ""}`}>
      {renderBlock()}
    </div>
  );
}

export default CoverBlock;
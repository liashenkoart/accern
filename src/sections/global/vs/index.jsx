import React from "react";
import { Container, Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import Icon from "../../../components/icon";
import Title from "../../../components/title";

import "./Vs.scss"

const Vs = ({ isVisible, page }) => {

  return (
    <div className={`vs sect-spacer ${page.className ? page.className : ''} ${isVisible ? "active" : ''}`}>
      <Container>
        <Row>
          <Col>
            <Title page={page} />
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <div className="vs-opponents">
              {page.opponents.map((opponent, i) => (
                <img key={`oi-${i}`} src={`./assets/img/${opponent.img}`} alt="" />
              ))}
            </div>
            <div className="vs-title">
              <h3 className="text-sub-light mw-300">{page.section.title}
                {page.section.tooltip && <OverlayTrigger key="compare" placement="bottom" overlay={
                  <Tooltip className="vs-tooltip" id="help-compare">
                    <img src={`./assets/img/${page.section.tooltip.img}`} />
                    {page.section.tooltip.description}
                  </Tooltip>
                }
                >
                  <div className="d-inline-block"><Icon variant="help-circle" /></div>
                </OverlayTrigger>}
              </h3>
              <p className="mw-400">{page.section.description}</p>
            </div>
            {page.section.rows.map((row, i) => (
              <div className="vs-row" key={`ri-${i}`}>
                <div className="vs-row-inner">
                  <div className="vs-row-item" style={{ left: row.item.start, width: row.item.end }}>
                    <h3 className="text-subtitle fw-400">{row.item.title}</h3>
                    <p className="text-medium fw-300 text-dark">{row.item.description}</p>
                  </div>
                </div>
                <div className="vs-row-opponents">
                  {row.opponents.map((opponent, i) => (
                    <div key={`ori-${i}`}>
                      <img src={`./assets/img/${opponent.img}`} alt="" />
                      <p className="vs-row-opponents-description">{opponent.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Vs;
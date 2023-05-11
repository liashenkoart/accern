import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Icon from "../../../components/icon";
import {navigate} from "@reach/router";

import "./Related.scss"

const Related = ({ isVisible, page }) => {

  return (
    <div className={`related sect-spacer ${page.className ? page.className : ''} ${isVisible ? "active" : ''}`}>
      <Container>
        <Row>
          <Col>
            <h2 dangerouslySetInnerHTML={{ __html: page.title }}></h2>
          </Col>
        </Row>
        <Row className="mt-5">
          {page.columns.map((item, i) => (
            <Col key={`ri-${i}`} md={12 / page.columns.length}>
              <div className="related-column" onClick={()=>navigate(item.link)}>
                <div>
                  <div><span className="text-label text-primary">{item.label}</span></div>
                  <div className="mw-400"><span className="text-title-light-sm">{item.description}</span></div>
                </div>
                <div className="related-link">
                  <Icon variant="arrow-right" />
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Related;
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "@reach/router";
import Icon from "../../components/icon";
import LinkAdv from "../../components/linkadv";

import "./Block.scss"

const Block = ({ data, className, i, isNumbered }) => {

  return (
    <div className={`mudule-block sect-spacer ${className}`}>
      <Container>
        <Row className="flex-column-reverse flex-md-row">
          <Col md={7} lg={6} className="d-flex align-items-center">
            <div className="position-relative">
              {isNumbered && <div className="mudule-block-number">0{i+1}</div>}
              {data.label && <div className={`text-label ${data.labelCL ? data.labelCL : ""}`}><span>{data.label}</span></div>}
              {data.title && <h2 className={`${data.titleCL ? data.titleCL : "mw-440"} mb-d`} dangerouslySetInnerHTML={{ __html: data.title }}></h2>}
              {data.description && <p className="mb-5 mw-540  text-medium" dangerouslySetInnerHTML={{ __html: data.description }}></p>}
              {data.link && <LinkAdv variant={`${data.link.variant ? data.link.variant : "link"}`} data={data.link} />}
            </div>
          </Col>
          <Col md={5} lg={6} className="d-flex align-items-center">
            <div className="preset-illustration mb-5 mb-md-0">
              <img src={`../../assets/img/${data.img}`} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Block;
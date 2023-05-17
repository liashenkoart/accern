import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Icon from "../../../components/icon";

import "./Columns.scss"

const Columns = ({ page, isVisible }) => {

  const renderLines = () => {
    let lines = [];
    for (let i = 0; i < 6; i++) {
      lines.push(<Col key={`li-${i}`}></Col>)
    }
    return lines;
  }

  return (
    <div className={`columns sect-spacer ${isVisible ? "active" : ''} ${page.className ? page.className : ""}`}>
      <Container>
        <Row className="mb-d-2">
          <Col>
            {page.label && <div className="text-label text-primary"><span>{page.label}</span></div>}
            {page.title && <h2 className="mw-1000">{page.title}</h2>}
          </Col>
        </Row>
        <Row className="columns-lines">
          {renderLines()}
        </Row>
        <Row className="columns-items">
          {page.columns.map((column, i) => (
            <Col md={4} key={`sc-${i}`} className={i < page.columns.length - 1 ? "" : "last"}>
              <div className="h-100 pl-4">
                <div><img className="icon-medium-2" src={`../../assets/img/${column.icon}`} alt="" /></div>
                <h3 className="font-weight-normal text-sub-label mb-4 mt-4 mw-300 mw-lg-260">{column.title}</h3>
                <p className="mw-260 mw-md-100 text-regular mb-0">{column.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Columns;
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Icon from "../../../components/icon";
import { navigate } from "@reach/router";
import LinkAdv from "../../../components/linkadv";
import Title from "../../../components/title";

import "./Comparing.scss"

const Comparing = ({ isVisible, page }) => {

  return (
    <div className={`comparing sect-spacer ${page.className ? page.className : ''} ${isVisible ? "active" : ''}`}>
      <Container>
        <Row>
          <Col>
            <Title page={page} />
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <div className="comparing-table">
              {page.rows.map((row, i) => (
                <div className="comparing-row" key={`ri-${i}`}>
                  {row.columns.map((column, z) => (
                    <div key={`ci-${i}-c-${z}`}>
                      <div>
                      { column.logo ? <img src={`./assets/img/${column.logo}`}/> : <span className={`comparing-list-item dot-color-${column.dotColor}`}>{column.name}</span>}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Comparing;
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Author from "../../components/author";

import "./Quote.scss"

const Quote = ({ data }) => {

  return (
    <div className={`quote sect-spacer ${data.className ? data.className : ""}`}>
      <Container>
        <Row>
          <Col>
            <div className="border-top pb-5">

            </div>
          </Col>
        </Row>
        <Row>
          <Col md={8} className="d-flex align-items-center position-relative">
            <img className="quote-icon" src="./assets/img/quote.png" alt=""/>
            <div>
              <h2 className={`text-title-light-sm ${data.titleCL ? data.titleCL : "mw-600"}`} dangerouslySetInnerHTML={{ __html: data.title}}></h2>
            </div>
          </Col>
          <Col md={4} className="d-flex align-items-center border-left pl-4 pt-4 pt-md-0">
            <Author data={data.author} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Quote;
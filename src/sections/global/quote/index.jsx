import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./Quote.scss"

const SimpleBlocks = ({ page }) => {

  return (
    <div className={`quote ${page.className ? page.className : ""}`}>
      <Container>
        <Row>
          <Col>
            <div><span className="text-title-light">“{page.title}”</span></div>
            <div className="quote-author">
              <div className="quote-author-img">
                <img src={`./assets/img/${page.avatar}`} alt=""/>
              </div>
              <div>
                <h4 className="text-medium-strong mb-0">{page.author}</h4>
                <span className="text-small">{page.position}</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SimpleBlocks;
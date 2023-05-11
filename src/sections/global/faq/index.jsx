import React, { useState } from "react";
import { Collapse, Container, Row, Col } from "react-bootstrap";
import Icon from "../../../components/icon";

import "./FAQ.scss"

const FAQ = ({ page, isVisible }) => {
  const [active, setActive] = useState(null);

  return (
    <div className={`faq sect-spacer pt-0 ${page.className ? page.className : ''} ${isVisible ? "active" : ''}`}>
      <Container>
        <Row>
          <Col>
            <div className="mb-4"><span className="text-label-primary">{page.label}</span></div>
            <div className="custom-collapse">
              {page && page.list.map((question, i) => (
                <div key={`fai-${i}`} className={`custom-collapse-item ${active == i ? "active" : ""}`}>
                  <div className="custom-collapse-label" onClick={() => setActive(i == active ? null : i)}><Icon variant="chevron-right" />{question.question}</div>
                  <Collapse in={active == i}>
                    <div>
                      <div className="custom-collapse-content">
                        {question.answer}
                      </div>
                    </div>
                  </Collapse>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FAQ;
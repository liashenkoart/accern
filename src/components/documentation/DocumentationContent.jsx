import React, { useState, useContext, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import VisibilitySensor from '../../utils/react-visibility-sensor';
import Icon from "../icon";
import DocumentationCode from "./DocumentationCode";

import "./Documentation.scss"

const DocumentationContent = ({ data, onVisible }) => {

  const renderContent = (data, i) => {
    switch (data.type) {
      case "html":
        return <div className={`documentation-paragraph ${data.cl ? data.cl : ""}`} key={`sc-${i}`} dangerouslySetInnerHTML={{ __html: data.content }}></div>
      case "links":
        return <div key={`sc-${i}`} className={`documentation-paragraph ${data.cl ? data.cl : ""}`}>
          {data.content.map((link, i) => (
            <a key={`sda-${i}`} className="link-block mb-2" href={link.link}><div><h4>{link.name}</h4><p>{link.description}</p></div><Icon variant="arrow-right" /></a>
          ))}</div>
      case "question":
        return <div className={`documentation-paragraph ${data.cl ? data.cl : ""}`} key={`sc-${i}`}>
          <div className="documentation-qustion">
            <div>{data.content.question}</div>
            <div>
              {data.content.answers.map((answer, i) => (
                <button key={`sdb-${i}`}>{answer.name}</button>
              ))}
            </div>
          </div>
        </div>

      case "code":
        return <DocumentationCode key={`sc-${i}`} data={data} />

    }
  }

  const renderSection = (section) => {
    if (section.column2) {
      return <Container fluid className="p-0">
        <Row>
          <Col md={6}>
            {section.column1.map((sec, i) => (
              renderContent(sec, i)
            ))}
          </Col>
          <Col md={6}>
            {section.column2.map((sec, i) => (
              renderContent(sec, `c2-${i}`)
            ))}
          </Col>
        </Row>
      </Container>
    } else {
      return <Container fluid className="p-0">
        <Row>
          <Col md={12}>
            {section.column1.map((sec, i) => (
              renderContent(sec, i)
            ))}
          </Col>
        </Row>
      </Container>
    }
  }

  return (
    data.documentation && data.documentation.sections.map((section, i) => (
      <div key={`sdc-${i}`}>
        <VisibilitySensor onChange={(e) => onVisible(e, section.id)} partialVisibility={true} intervalDelay={500} offset={{ top: 0, bottom: 600 }} minTopValue={100}>
          {({ isVisible }) =>
            <div id={`${section.id ? section.id : ""}`} className={`documentation-margin ${isVisible ? "active" : ""}`}>
              {section.label && <span className="text-label text-primary">{section.label}</span>}
              {section.title && <h2 className={`text-title-light-sm pb-4 ${section.titleCL ? section.titleCL : ""} border-bottom`}>{section.title}</h2>}
              {section.column1 && renderSection(section)}
            </div>
          }
        </VisibilitySensor>
      </div>
    ))
  );
}

export default DocumentationContent;
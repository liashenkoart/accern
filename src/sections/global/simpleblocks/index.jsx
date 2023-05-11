import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./SimpleBlocks.scss"

const SimpleBlocks = ({ page }) => {

  const renderBlocks = () => {
    switch (page.variant) {
      case "bordered":
        return <Container>
          <Row>
            <Col>
              <Container fluid className="border">
                <Row>
                  {page.columns.map((item, i) => (
                    <Col key={`sb-${i}`} lg={6} md={6}>
                      <div className={`simple-block-wb ${item.className ? item.className : ""}`}>
                        {item.label && <div className="text-label"><span>{item.label}</span></div>}
                        {item.title && <h4 className="text-medium">{item.title}</h4>}
                        {item.description && <p className="mb-0 text-small fw-300">{item.description}</p>}
                      </div>
                    </Col>
                  ))}
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      default:
        return <Container>
          {page.label &&
            <Row>
              <Col>
                <div className="text-label mb-d"><span>{page.label}</span></div>
              </Col>
            </Row>
          }
          <Row>
            {page.columns.map((item, i) => (
              <Col key={`sb-${i}`} lg={3} md={6} className="pb-g">
                {item.link ?
                  <a href={item.link.link} className={`simple-block ${item.className ? item.className : ""}`}>
                    {item.label && <div className="text-label"><span>{item.label}</span></div>}
                    {item.link.name && <div className="text-medium">{item.link.name}</div>}
                    {item.title && <h4 className="text-subtitle-strong">{item.title}</h4>}
                    {item.description && <p className="mb-0 text-small">{item.description}</p>}
                  </a> :
                  <div className={`simple-block ${item.className ? item.className : ""}`}>
                    {item.label && <div className="text-label"><span>{item.label}</span></div>}
                    {item.title && <h4 className="text-subtitle-strong">{item.title}</h4>}
                    {item.description && <p className="mb-0 text-small">{item.description}</p>}
                  </div>}
              </Col>
            ))}
          </Row>
        </Container>
    }
  }

  return (
    <div className={`simple-blocks ${page.className ? page.className : ""}`}>
      {renderBlocks()}
    </div>
  );
}

export default SimpleBlocks;
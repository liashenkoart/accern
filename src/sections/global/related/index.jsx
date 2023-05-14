import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Icon from "../../../components/icon";
import { navigate } from "@reach/router";
import LinkAdv from "../../../components/linkadv";
import Title from "../../../components/title";

import "./Related.scss"

const Related = ({ isVisible, page }) => {

  const renderRelated = () => {
    switch (page.variant) {
      case "advanced":
        return <Row className="mt-5">
          {page.columns.map((item, i) => (
            <Col key={`ri-${i}`} md={12 / page.columns.length}>
              <div className={`related-column-2 ${i < page.columns.length - 1 ? "pb-5 pb-md-0" : ""}`}>
                <div>
                  <div className="related-img" style={{ backgroundImage: `url(./assets/img/${item.img})` }}>
                    <img src={`./assets/img/${item.logo}`} alt="" />
                  </div>
                  <div className="mb-3"><span className="text-label-medium">{item.label}</span></div>
                  {item.title && <h3 className="text-subtitle fw-400">{item.title}</h3>}
                  <div><span className="text-light-gray">{item.description}</span></div>
                </div>
                {item.button && <div className="mt-4"><LinkAdv data={item.button} /></div>}
              </div>
            </Col>
          ))}
        </Row>
      default:
        return <Row className="mt-5">
          {page.columns.map((item, i) => (
            <Col key={`ri-${i}`} md={12 / page.columns.length}>
              <div className="related-column" onClick={() => navigate(item.link)}>
                <div>
                  <div><span className="text-label text-primary">{item.label}</span></div>
                  {item.title && <h3 className="text-subtitle fw-400">{item.title}</h3>}
                  <div className="mw-440"><span className="text-title-light-sm">{item.description}</span></div>
                </div>
                <div className="related-link">
                  <Icon variant="arrow-right" />
                </div>
              </div>
            </Col>
          ))}
        </Row>
    }
  }

  return (
    <div className={`related sect-spacer ${page.className ? page.className : ''} ${isVisible ? "active" : ''}`}>
      <Container>
        <Row>
          <Col>
            <Title page={page} />
          </Col>
        </Row>
        {renderRelated()}
      </Container>
    </div>
  );
}

export default Related;
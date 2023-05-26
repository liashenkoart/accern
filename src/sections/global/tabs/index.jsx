import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Collapse, Button, Tabs, Tab, Nav } from "react-bootstrap";
import { settings } from "../../../data/settings";
import BlockCase from "../../../components/blocks/blockcase";
import { Context } from "../../../context/context";
import { filterIt } from "../../../utils/scripts";

import "./Tabs.scss";

const TabsComp = ({ isVisible, page }) => {

  const renderNews = (filter) => {
    return <Container fluid className="p-0">
      <Row>
        {filter == "All" ?
          page.columns.map((item, i) => (
            !item.isExcludeAll &&
            <Col atr={`${i}`} key={`baai-${i}`} md={3} onClick={() => { }}>
              <BlockCase variant="neutral" data={item} />
            </Col>
          ))
          :
          filterIt(page.columns, filter, "filter").map((item, i) => (
            <Col atr={`${i}`} key={`bai-${i}`} md={3} onClick={() => { }}>
              <BlockCase variant="neutral" data={item} />
            </Col>
          ))}
      </Row>
    </Container>
  }

  return (
    <div className={`tabs ${page.className ? page.className : ""} mb-5 ${isVisible ? "active" : ''}`}>
      <Container>
        <Row>
          <Col md={12}>
            <Tab.Container id="news-tabs" defaultActiveKey={page.filters[0]}>
              <Row className="pt-3">
                <Col lg={12}>
                  <Nav className="tabs-simple-link">
                    {page.filters.map((filter, i) => (
                      <Nav.Item key={`tfi-${i}`}>
                        <Nav.Link eventKey={filter}>{filter}</Nav.Link>
                      </Nav.Item>
                    ))}
                  </Nav>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <Tab.Content>
                    {page.filters.map((filter, i) => (
                      <Tab.Pane key={`tci-${i}`} eventKey={filter}>
                        {renderNews(filter)}
                      </Tab.Pane>
                    ))}
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TabsComp;
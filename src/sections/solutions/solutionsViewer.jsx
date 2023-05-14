import React, { useState, useContext } from "react";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import { settings } from "../../data/settings";
import BlockCase from "../../components/blocks/blockcase";
import { Context } from "../../context/context";
import { Link } from "@reach/router";

import "./Solutions.scss";

const Solutions = ({ isVisible, page }) => {

  const { dispatchModals, scrollB, app } = useContext(Context);
  const [key, setKey] = useState(app.linkAction && app.linkAction.name == "solution-filter" ? app.linkAction.data : "all");
  const [position, setPosition] = useState(null);

  const renderSolutions = (type) => {
    return <>
      {type.indexOf("industry") != -1 &&
        <Row className="mt-5">
          <Col md={12}>
            <div className="text-label mb-5">{page.industries.labelFilter}</div>
          </Col>
          {page.industries.options.slice(1).map((industry, i) => (
            <Col key={`bi-${i}`} md={4}>
              <Link to={industry.link ? industry.link : "/solutions"}><BlockCase variant="simple-filter" data={{ ...industry, name: industry.label }} /></Link>
            </Col>
          ))}
        </Row>
      }
      {type.indexOf("function") != -1 && <>
        <Row>
          <Col md={12}>
            <div className="text-label mb-5 mt-5">{page.function.labelFilter}</div>
          </Col>
        </Row>
        <Row className="block-case-border-3n ml-0 mr-0">
          {page.function.options.slice(1).map((solution, i) => (
            <Col key={`bi-${i}`} lg={4} md={6} className="p-0">
              <Link to={solution.link ? solution.link : "/solutions"}><BlockCase variant="filter-sm" data={{ ...solution, name: solution.label }} /></Link>
            </Col>
          ))}
        </Row>
      </>
      }
      {type.indexOf("workflow") != -1 &&
        <Row>
          <Col md={12}>
            <div className="text-label mb-5 mt-5">{page.workflows.labelFilter}</div>
          </Col>
          {page.workflows.options.slice(1).map((workflow, i) => (
            <Col key={`bi-${i}`} lg={4} md={6}>
              <Link to={workflow.link ? workflow.link : "/solutions"}><BlockCase variant="filter-bg" data={{ ...workflow, name: workflow.label }} /></Link>
            </Col>
          ))}
        </Row>
      }
      {type.indexOf("users") != -1 &&
        <Row>
          <Col md={12}>
            <div className="text-label mb-5 mt-5">{page.users.labelFilter}</div>
          </Col>
          {page.users.options.slice(1).map((user, i) => (
            <Col key={`bi-${i}`} lg={4} md={6}>
              <Link to={user.link ? user.link : "/solutions"}><BlockCase variant="filter-bn" data={{ ...user, name: user.label }} /></Link>
            </Col>
          ))}
        </Row>
      }
    </>
  }

  const scrollTo = () => {
    scrollB.scrollbar.scrollTo(0, 0, 1000);
  }

  return (
    <div className={`solutions ${page.className ? page.className : ""} mb-5 ${isVisible ? "active" : ''}`}>
      <Container>
        <Row className="mt-5" ref={(e) => { if (e && !position) { setPosition(e.getBoundingClientRect().top - 100) } }}>
          <Col>
            <Tabs className="tabs-simple" activeKey={key} onSelect={(k) => setKey(k)} id="tab-solutions">
              <Tab eventKey="all" title={settings.texts.AllSolutions}>
                {renderSolutions(["industry", "function", "workflow", "users"])}
              </Tab>
              <Tab eventKey="industry" title={settings.texts.ByIndustry}>
                {renderSolutions(["industry"])}
              </Tab>
              <Tab eventKey="function" title={settings.texts.ByFunction}>
                {renderSolutions(["function"])}
              </Tab>
              <Tab eventKey="workflow" title={settings.texts.ByWorkflow}>
                {renderSolutions(["workflow"])}
              </Tab>
              <Tab eventKey="users" title={settings.texts.ByUsers}>
                {renderSolutions(["users"])}
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Solutions;
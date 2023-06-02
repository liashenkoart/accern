import React, { useState, useEffect, useContext, useRef } from "react";
import { Container, Row, Col, Collapse, Button, Tabs, Tab } from "react-bootstrap";
import Select from "../../../components/inputs/select";
import Icon from "../../../components/icon";
import Search from "../../../components/inputs/search";
import { settings } from "../../../data/settings";
import BlockCase from "../../../components/blocks/blockcase";
import { filterItFull, filterIt } from "../../../utils/scripts";
import { Context } from "../../../context/context";
import { OpenModal } from "../../../services/modalsManager";

import "./UseCases.scss";

const UseCases = ({ isVisible, page }) => {

  const [industry, setIndustry] = useState({ ...page.industries.options[0], label: `${page.industries.options[0].label} (${page.list.length})` });
  const [workflow, setWorkflow] = useState({ ...page.workflows.options[0], label: `${page.workflows.options[0].label} (${page.list.length})` });
  const [solution, setSolution] = useState({ ...page.solutions.options[0], label: `${page.solutions.options[0].label} (${page.list.length})` });
  const [searchValue, setSearchValue] = useState("");
  const [filtered, setFiltered] = useState(page.list);
  const { dispatchModals, scrollB, app } = useContext(Context);
  const [key, setKey] = useState('discover');
  const [position, setPosition] = useState(null);

  useEffect(()=>{
    if(app && app.linkAction && app.linkAction.name == "filter-marketplace") {
      onFilterChange({ value: app.linkAction.data.value, label: app.linkAction.data.value }, app.linkAction.data.by.toLowerCase());
      setKey("all");
    }
    if(app && app.linkAction && app.linkAction.name == "filter-marketplace-multiple") {
      app.linkAction.data.map((item, i)=>{
        setTimeout(()=>{
          onFilterChange({ value: item.value, label: item.value }, item.by.toLowerCase());
        }, 2000 + 100*(i*3))
      })
      
      setKey("all");
    }
  }, [app])

  const onSearchChange = (value) => {
    setSearchValue(value.name);
  }

  const onClearSearch = () => {
    setSearchValue("");
  }

  const getDetails = (name) => {
    const solution = filterIt(page.workflows.options, name, "value");

    return solution.length > 0 ? { img: solution[0].img, variant: solution[0].variant } : { img: "use-case-primary.svg", variant: "primary" };
  }

  const onFilterChange = (e, variant) => {
    let temp = page.list;

    switch (variant) {
      case "industry":
        if (e.value != "All") temp = filterItFull(temp, e.value, "industry");
        if (solution.value != "All") temp = filterItFull(temp, solution.value, "solution");
        if (workflow.value != "All") temp = filterItFull(temp, workflow.value, "workflow");
        setIndustry({ ...e, label: `${e.value} (${temp.length})` });
        setSolution({ ...solution, label: `${solution.value} (${temp.length})` });
        setWorkflow({ ...workflow, label: `${workflow.value} (${temp.length})` });
        break;
      case "solution":
        if (e.value != "All") temp = filterItFull(temp, e.value, "solution");
        if (industry.value != "All") temp = filterItFull(temp, industry.value, "industry");
        if (workflow.value != "All") temp = filterItFull(temp, workflow.value, "workflow");
        setSolution({ ...e, label: `${e.value} (${temp.length})` });
        setIndustry({ ...industry, label: `${industry.value} (${temp.length})` });
        setWorkflow({ ...workflow, label: `${workflow.value} (${temp.length})` });
        break;
      case "workflow":
        if (e.value != "All") temp = filterItFull(temp, e.value, "workflow");
        if (solution.value != "All") temp = filterItFull(temp, solution.value, "solution");
        if (industry.value != "All") temp = filterItFull(temp, industry.value, "industry");
        setWorkflow({ ...e, label: `${e.value} (${temp.length})` });
        setIndustry({ ...industry, label: `${industry.value} (${temp.length})` });
        setSolution({ ...solution, label: `${solution.value} (${temp.length})` });
        break;
    }

    setFiltered(temp);
  }

  const renderFeatured = (type) => {
    switch (type) {
      case "all":
        return <Container fluid className="p-0">
          <Row>
            {filtered.map((item, i) => (
              <Col key={`bi-${i}`} lg={4} md={6} onClick={() => OpenModal("requestAccess", dispatchModals, { ...item, ...getDetails(item.workflow) })}>
                <BlockCase data={{ ...item, ...getDetails(item.workflow) }} />
              </Col>
            ))}
          </Row>
        </Container>
      case "latest":
        return <Container fluid className="p-0">
          <Row>
            {page.list.map((item, i) => (
              i < 3 &&
              <Col key={`bi-${i}`} lg={4} md={6} onClick={() => OpenModal("requestAccess", dispatchModals, { ...item, ...getDetails(item.workflow) })}>
                <BlockCase data={{ ...item, ...getDetails(item.workflow) }} />
              </Col>
            ))}
          </Row>
        </Container>
      case "popular":
        return <Container fluid className="p-0">
          <Row>
            {filterIt(page.list, "discover", "type").map((item, i) => (
              i < 3 &&
              <Col key={`bi-${i}`} lg={4} md={6} onClick={() => OpenModal("requestAccess", dispatchModals, { ...item, ...getDetails(item.workflow) })}>
                <BlockCase data={{ ...item, ...getDetails(item.workflow) }} />
              </Col>
            ))}
          </Row>
        </Container>
      case "discover":
      default:
        return <Container fluid className="p-0">
          <Row>
            {filterIt(page.list, "discover", "type").map((item, i) => (
              i < 3 &&
              <Col key={`bi-${i}`} lg={4} md={6} onClick={() => OpenModal("requestAccess", dispatchModals, { ...item, ...getDetails(item.workflow) })}>
                <BlockCase data={{ ...item, ...getDetails(item.workflow) }} />
              </Col>
            ))}
          </Row>
        </Container>
    }
  }

  const calcSelect = (value, key) => {
    let temp = page.list;

    if (key == "industry") {
      if (value != "All") temp = filterItFull(temp, value, "industry");
    } else {
      if (industry.value != "All") temp = filterItFull(temp, industry.value, "industry");
    }

    if (key == "solution") {
      if (value != "All") temp = filterItFull(temp, value, "solution");
    } else {
      if (solution.value != "All") temp = filterItFull(temp, solution.value, "solution");
    }

    if (key == "workflow") {
      if (value != "All") temp = filterItFull(temp, value, "workflow");
    } else {
      if (workflow.value != "All") temp = filterItFull(temp, workflow.value, "workflow");
    }

    return temp.length;

  }

  const generateOptions = (list, key) => {
    return list.map((item) => {
      return { ...item, label: `${item.label} (${calcSelect(item.value, key)})` }
    })
  }

  const scrollTo = () => {
    scrollB.scrollbar.scrollTo(0, 0, 1000);
  }

  return (
    <div className={`use-cases ${page.className ? page.className : ""} mb-5 ${isVisible ? "active" : ''}`}>
      <Container>
        <Row className="mt-2 mt-md-5 pt-3">
          <Col lg={5} className="d-flex align-items-center">
            <div className="pb-2 pb-lg-0 h-100 w-100">
              <Search value={searchValue} onChange={onSearchChange} onSetValue={(value) => { setSearchValue(value.name); value.name && OpenModal("requestAccess", dispatchModals, value) }} data={page.list.map((item) => ({ ...item, ...getDetails(item.workflow) }))} onClear={onClearSearch} placeholder={page.search.label} searchField="name" variant="usecases" />
            </div>
          </Col>
          <Col lg={2}>
            <div className="mb-2 mb-lg-0">
              <Select
                value={industry}
                onChange={(e) => onFilterChange(e, "industry")}
                options={generateOptions(page.industries.options, "industry")}
                label={page.industries.label}
                className="select-small"
              />
            </div>
          </Col>
          <Col lg={2}>
            <div className="mb-2 mb-lg-0">
              <Select
                value={solution}
                onChange={(e) => onFilterChange(e, "solution")}
                options={generateOptions(page.solutions.options, "solution")}
                label={page.solutions.label}
                className="select-small"
              />
            </div>
          </Col>
          <Col lg={3}>
            <div className="mb-2 mb-lg-0 filter-actions">
              <Select
                value={workflow}
                onChange={(e) => onFilterChange(e, "workflow")}
                options={generateOptions(page.workflows.options, "workflow")}
                label={page.workflows.label}
                className="select-small w-100"
              />
              <Button variant="primary" onClick={()=>OpenModal("findYourIdea", dispatchModals, page)}><Icon variant="zap"/></Button>
            </div>
          </Col>
        </Row>
        <Row className="mt-5" ref={(e)=>{if(e && !position) {setPosition(e.getBoundingClientRect().top-100)}}}>
          <Col>
            <Tabs className="tabs-simple" activeKey={key} onSelect={(k) => setKey(k)} id="tab-usecases">
              <Tab eventKey="discover" title={settings.texts.Discover}>
                {renderFeatured("discover")}
              </Tab>
              {/*<Tab eventKey="popular" title={settings.texts.Popular}>*/}
              {/*  {renderFeatured("popular")}*/}
              {/*</Tab>*/}
              {/*<Tab eventKey="latest" title={settings.texts.Latest}>*/}
              {/*  {renderFeatured("latest")}*/}
              {/*</Tab>*/}
              <Tab eventKey="all" title={settings.texts.All}>
                {renderFeatured("all")}
              </Tab>
            </Tabs>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={12}>
            <div className="text-label mb-5">{page.industries.labelFilter}</div>
          </Col>
          {page.industries.options.slice(1).map((industry, i) => (
            <Col key={`bi-${i}`} md={4} onClick={() => {
              onFilterChange({ value: industry.value, label: industry.label }, "industry");
              setKey("all");
              scrollTo("tabs-container");
            }}>
              <BlockCase variant="simple-filter" data={{ ...industry, name: industry.label }} />
            </Col>
          ))}
        </Row>
        <Row className="mt-4">
          <Col md={12}>
            <div className="text-label mb-5">{page.solutions.labelFilter}</div>
          </Col>
        </Row>
        <Row className="block-case-border-3n ml-0 mr-0">
          {page.solutions.options.slice(1).map((solution, i) => (
            <Col key={`bi-${i}`} lg={4} md={6} className="p-0" onClick={() => {
              onFilterChange({ value: solution.value, label: solution.label }, "solution");
              setKey("all");
              scrollTo("tabs-container");
            }}>
              <BlockCase variant="filter-sm" data={{ ...solution, name: solution.label }} />
            </Col>
          ))}
        </Row>
        <Row className="mt-4">
          <Col md={12}>
            <div className="text-label mb-5">{page.workflows.labelFilter}</div>
          </Col>
        </Row>
        <Row>
          {page.workflows.options.slice(1).map((workflow, i) => (
            <Col key={`bi-${i}`} lg={4} md={6} onClick={() => {
              onFilterChange({ value: workflow.value, label: workflow.label }, "workflow");
              setKey("all");
              scrollTo("tabs-container");
            }}>
              <BlockCase variant="filter-bg" data={{ ...workflow, name: workflow.label }} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default UseCases;
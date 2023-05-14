import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Select from "../../components/inputs/select";
import Search from "../../components/inputs/search";
import { filterItFull } from "../../utils/scripts";
import { navigate } from "@reach/router";
import Hero from "../global/hero";

const WhitePapers = ({ isVisible, page }) => {

  const [industry, setIndustry] = useState({ ...page.industries.options[0], label: `${page.industries.options[0].label} (${page.list.length})` });
  const [category, setCategory] = useState({ ...page.category.options[0], label: `${page.category.options[0].label} (${page.list.length})` });
  const [searchValue, setSearchValue] = useState("");
  const [filtered, setFiltered] = useState(page.list);

  const onSearchChange = (value) => {
    setSearchValue(value.name);
  }

  const onFilterChange = (e, variant) => {
    let temp = page.list;

    switch (variant) {
      case "industry":
        if (e.value != "All") temp = filterItFull(temp, e.value, "industry");
        setIndustry({ ...e, label: `${e.value} (${temp.length})` });
        setCategory({ ...category, label: `${category.value} (${temp.length})` });
        break;
      case "category":
        if (e.value != "All") temp = filterItFull(temp, e.value, "category");
        setCategory({ ...e, label: `${e.value} (${temp.length})` });
        setIndustry({ ...industry, label: `${industry.value} (${temp.length})` });
        break;
    }

    setFiltered(temp);
  }

  const calcSelect = (value, key) => {
    let temp = page.list;

    if (key == "industry") {
      if (value != "All") temp = filterItFull(temp, value, "industry");
    } else {
      if (industry.value != "All") temp = filterItFull(temp, industry.value, "industry");
    }

    return temp.length;

  }

  const onClearSearch = () => {
    setSearchValue("");
  }

  const generateOptions = (list, key) => {
    return list.map((item) => {
      return { ...item, label: `${item.label} (${calcSelect(item.value, key)})` }
    })
  }

  return (
    <div className={`use-cases ${page.className ? page.className : ""} mb-5 ${isVisible ? "active" : ''}`}>
      <Container>
        <Row className="mt-2 mt-md-5 pt-3">
          <Col md={8} className="d-flex align-items-center">
            <div className="pb-2 pb-md-0 h-100 w-100">
              <Search value={searchValue} onChange={onSearchChange} onSetValue={(value) => { setSearchValue(value.name); }} data={page.list} onClear={onClearSearch} placeholder={page.search.label} searchField="name" variant="whitepapers" />
            </div>
          </Col>
          <Col md={2}>
            <div className="mb-2 mb-md-0">
              <Select
                value={category}
                onChange={(e) => onFilterChange(e, "category")}
                options={page.category.options}
                label={page.category.label}
                className="select-small"
              />
            </div>
          </Col>
          <Col md={2}>
            <div className="mb-2 mb-md-0">
              <Select
                value={industry}
                onChange={(e) => onFilterChange(e, "industry")}
                options={generateOptions(page.industries.options, "industry")}
                label={page.industries.label}
                className="select-small"
              />
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="p-0 mt-5 mb-5">
        <Row>
          <Col>
            <Row>
              {filtered.map((item, i) => (
                <Col className="mb-5" md={12} key={`bi-${i}`}>
                  <Hero page={{...item, description: "", button: {...page.button, data: {modal:item}}}} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default WhitePapers;
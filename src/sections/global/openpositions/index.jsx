import React, { useState } from "react";
import { Container, Row, Col, Collapse, Button } from "react-bootstrap";
import Select from "react-select";
import Icon from "../../../components/icon";
import { filterIt, filterItFull } from "../../../utils/scripts";

import "./OpenPositions.scss";

const OpenPositions = ({ isVisible, page }) => {

  const [location, setLocation] = useState(page.locations[0]);
  const [department, setDepartment] = useState(page.departments[0]);
  const [filtered, setFiltered] = useState(page.positions);
  const [active, setActive] = useState(null);
  const [limit, setLimit] = useState(5);

  const getPositions = () => {
    let temp = filtered;
    if (location != page.locations[0]) temp = filterIt(temp, location.value, "location");
    if (department != page.departments[0]) temp = filterItFull(temp, department.value, "department");

    return temp;
  }

  return (
    <div className={`open-positions ${page.className ? page.className : ""} sect-spacer ${isVisible ? "active" : ''}`} id="open-positions">
      <Container>
        <Row>
          <Col>
            {page.label && <div className="text-label"><span>{page.label}</span></div>}
            {page.title && <h2 dangerouslySetInnerHTML={{ __html: page.title }} className={`${page.titleCL ? page.titleCL : "mw-550"}`}></h2>}
            {page.description && <p className={`mt-4 ${page.type == "filter" ? "mb-5" : "mb-0"} ${page.descrCL ? page.descrCL : "mw-550"}  text-medium`}>{page.description}</p>}
          </Col>
        </Row>
        <Row className="mt-2 mt-md-5 pt-3">
          <Col md={4}>
            <Select
              value={location}
              onChange={(e) => setLocation(e)}
              options={page.locations}
              classNamePrefix={"acr-select"}
              className="acr-select select mt-2"
            />
          </Col>
          <Col md={4}>
            <Select
              value={department}
              onChange={(e) => setDepartment(e)}
              options={page.departments}
              classNamePrefix={"acr-select"}
              className="acr-select select mt-2"
            />
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            {getPositions().length > 0 ?
              <div>
                {getPositions().map((item, i) => (
                  i < limit &&
                  <a href={item.link} target="blank" key={`poi-${i}`} className={`open-position-item pr-0 ${active == i ? "active" : ""}`}>
                    <div className="d-flex justify-content-between" onClick={() => setActive(i == active ? null : i)}>
                      <div>
                        <h4 className="text-subtitle-strong">{item.name}</h4><span className="text-darker">{item.location} - {item.department}</span>
                      </div>
                      <Icon className="mr-4" variant="arrow-right" />
                    </div>
                    <div className="open-position-item-content">
                      <div className="pl-0 pr-0">
                        <div className="border-top pt-3 text-light-mid" dangerouslySetInnerHTML={{ __html: item.content }}></div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
              :
              <div className="text-center">{page.notFound}</div>
            }
            {limit == page.limit && getPositions().length > page.limit && <Button className="mt-4 w-100" variant="primary" onClick={() => setLimit(1000)}>{page.button.name}</Button>}
            {page.question && <div className="text-center mw-500 mx-auto pt-5" dangerouslySetInnerHTML={{ __html: page.question }}></div>}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default OpenPositions;
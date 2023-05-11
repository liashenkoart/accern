import React, { useState, useEffect } from "react";
import { Container, Row, Col, Fade, Collapse } from "react-bootstrap";
import ReactJson from 'react-json-view';
import Scrollbar from 'react-smooth-scrollbar';
import LinkAdv from "../../../components/linkadv";

import "./Parses.scss"

const Parses = ({ isVisible, page }) => {

  const [collapses, setCollapses] = useState(page.items.map((e, i) => (i == 0 ? true : false)));

  useEffect(() => {
    window.addEventListener("resize", () => {
      let c = [];
      collapses.forEach((elm, i) => c.push(i == 0 ? true : false))
      setCollapses(c);
    })
  }, []);

  const setActive = (i) => {
    let c = [];

    if (window.innerWidth > 1100) {
      collapses.forEach((elm, z) => {
        i == z ? c.push(true) : c.push(false);
      })
    } else {
      collapses.forEach((elm, z) => {
        c.push(elm)
      })
      c[i] = !c[i];
    }

    setCollapses(c);

  }

  return (
    <div className={`parser ${page.className ? page.className : ""} sect-spacer ${isVisible ? "active" : ''}`}>
      {page.isShape && <div className="shape-dots-medium"></div>}
      <Container>
        <Row>
          <Col>
            {page.label && <div className="text-label"><span>{page.label}</span></div>}
            {page.title && <h2 className={`${page.titleCL ? page.titleCL : "mw-550"}`}>{page.title}</h2>}
            {page.description && <p className="mt-4 mb-0 mw-540  text-medium">{page.description}</p>}
          </Col>
        </Row>
        <Row className="mt-d2 align-items-stretch">
          <Col lg={4}>
            <div className="parser-sidebar">
              {page.items.map((item, i) => (
                <div key={`ps-${i}`}>
                  <div onClick={() => setActive(i)} className={`parser-sidebar-item ${item.isComing ? "coming" : ""}  ${collapses[i] ? "active" : ""}`}>
                    <div className="parser-sidebar-item-content">
                      <div><h4 className="text-medium">{item.name}</h4></div>
                      <div><span className="text-primary">{item.tag}</span><span> - {item.label}</span></div>
                    </div>
                  </div>
                  <div className="parser-content in-collapse d-block d-lg-none">
                    <Collapse in={collapses[i]} key={`pc-${i}`}>
                      <div>
                        <div className="parser-content-inner">
                          <div><h4 className="mb-4">{item.details.title}</h4></div>
                          <div><p className="mw-540 mb-d">{item.details.description}</p></div>
                          <Scrollbar alwaysShowTracks={true}>
                            <div className="parser-content-code">
                              {item.details.isText ?
                                item.details.data.split(",").map((string, i) => (
                                  <div key={`st-${i}`}>{string}</div>
                                ))
                                :
                                <ReactJson src={item.details.data} enableClipboard={false} displayObjectSize={false} displayDataTypes={false} />
                              }
                            </div>
                          </Scrollbar>
                            {item.details.link && <LinkAdv data={item.details.link} className="d-block mt-4" variant="link"/>}
                        </div>
                      </div>
                    </Collapse>
                  </div>
                </div>
              ))}
            </div>
          </Col>
          <Col lg={8} className="d-none d-lg-block">
            <div className="parser-content">
              {page.items.map((item, i) => (
                <Fade in={collapses[i]} key={`pc-${i}`}>
                  <div className="parser-content-inner">
                    <div><h4 className="mb-4">{item.details.title}</h4></div>
                    <div><p className="mw-540 mb-d">{item.details.description}</p></div>
                    <Scrollbar alwaysShowTracks={true}>
                      <div className="parser-content-code">
                        {item.details.isText ?
                          item.details.data.split(",").map((string, i) => (
                            <div key={`std-${i}`}>{string}</div>
                          ))
                          :
                          <ReactJson src={item.details.data} enableClipboard={false} displayObjectSize={false} displayDataTypes={false} />
                        }
                      </div>
                    </Scrollbar>
                    {item.details.link && <LinkAdv data={item.details.link} className="d-block mt-4" variant="link"/>}
                  </div>
                </Fade>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Parses;
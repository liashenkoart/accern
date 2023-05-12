import React, { useState, useEffect } from "react";
import { Container, Row, Col, Badge, Collapse } from "react-bootstrap";
import { Link } from "@reach/router";
import LinkAdv from "../../../components/linkadv";

import "./FeaturedBlocks.scss";

const FeaturedBlocks = ({ isVisible, page }) => {

  return (
    <div className={`featured-blocks ${page.className ? page.className : ""} sect-spacer ${isVisible ? "active" : ''}`}>
      <Container>
        {(page.label || page.title || page.description) &&
          <Row>
            <Col>
              {page.label && <div className="text-label"><span>{page.label}</span></div>}
              {page.title && <h2 dangerouslySetInnerHTML={{ __html: page.title }} className={`${page.titleCL ? page.titleCL : "mw-550"}`}></h2>}
              {page.description && <p className={`mt-4 ${page.type == "filter" ? "mb-5" : "mb-0"} mw-540  text-medium`}>{page.description}</p>}
            </Col>
          </Row>
        }
        <Row className="mt-4">
          <Col>
            <div className={`featured-blocks-inner ${page.preRow ? `c-${preRow}` : "c-5"}`}>
              {page.columns && page.columns.map((column, i) => (
                <a href={column.link ? column.link : "#" } target="_blank" key={`cfi-${i}`}>
                  {column.img &&
                    <div className="featured-blocks-logo">
                      <img src={`./assets/img/${column.img}`} />
                    </div>
                  }
                  {column.title && <div><span className="text-dark featured-blocks-title">{column.title}</span></div>}
                  {column.description && <span className="text-small">{column.description}</span>}
                </a>
              ))
              }
            </div>
          </Col>
        </Row>
        <Row>
          <Col>{page.link && <LinkAdv data={page.link} className="d-block mt-5" variant="link" />}</Col>
        </Row>
      </Container>
    </div>
  );
}

export default FeaturedBlocks;
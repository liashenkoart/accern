import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { page } from "../../../data/pages/homepage";
import { Link } from "@reach/router";

import "./Brands.scss"

const Brands = ({ isVisible, page }) => {

  return (
    <div className={`brands ${page.className ? page.className : "" } ${isVisible ? "active" : ''}`}>
      <Container>
        <Row>
          <Col>
            {page.label && <div className="text-label mb-d">{page.label}</div>}
            <div className="blocks mobile-wrap mt-5 mt-lg-0">
              {page.columns.map((brand, i) => (
                <div key={`bc-${i}`} className="block d-flex align-items-center justify-content-center justify-content-lg-start mb-4 mb-lg-0">
                  {brand.link ? <Link to={brand.link} className={brand.className}><img src={`../../assets/img/${brand.logo}`} alt="" /></Link> : <div className={brand.className}><img src={`../../assets/img/${brand.logo}`} alt="" /></div>}
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Brands;
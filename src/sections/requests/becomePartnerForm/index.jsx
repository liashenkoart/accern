import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import FormComp from "../../../components/form";

const becomePartnerForm = ({ isVisible, page }) => {

  return (
    <div className={`sect-spacer ${isVisible ? "active" : ''}`}>
      <Container>
        <Row>
          <Col lg={7} className="pb-5 pb-lg-0">
            <div className="pr-0 pr-md-0 mw-700">
              {page.about.label && <div className="mb-4"><span className="text-label">{page.about.label}</span></div>}
              {page.about.description && <p className="text-medium-link about-partner-description mb-4">{page.about.description}</p>}
              {page.about.label_2 && <div className="mb-4"><span className="text-label mb-4">{page.about.label_2}</span></div>}
              {page.about.description_2 && <p className="text-medium-link about-partner-description mb-4">{page.about.description_2}</p>}
              {page.about.list && <ul className="list-dark">
                {page.about.list.map((item, i) => (
                  <li key={`li-${i}`} dangerouslySetInnerHTML={{ __html: item.name }}></li>
                ))}
              </ul>}
            </div>
          </Col>
          <Col lg={5} className="d-flex align-items-center justify-content-center justify-content-lg-start">
            <FormComp from={page.form.from} data={page.form} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default becomePartnerForm;
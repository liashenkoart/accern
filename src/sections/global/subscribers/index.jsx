import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./Subscribers.scss"

const Subscribers = ({ page }) => {

  return (
    <div className={`subscribers ${page.className ? page.className : ""}`}>
      <Container>
        <Row>
          <Col>
            <div className="subscribers-inner pt-5">
              <div className="subscribers-users">
                {page.favorite.map((user, i) => (
                  <div className="subscribers-user" key={`ui-${i}`}>
                    <img src={`./assets/img/${user.img}`} alt="" />
                  </div>
                ))}
                <div className="subscribers-user bg-primary">{page.count}</div>
              </div>
              <div className="subscribers-description">
                <span className="text-subtitle fw-300" dangerouslySetInnerHTML={{ __html: page.description }}></span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Subscribers;
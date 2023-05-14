import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Title from "../../../components/title";
import Icon from "../../../components/icon";

import "./Video.scss"

const Video = ({ isVisible, page, variant }) => {

  return (
    <div className={`video sect-spacer ${isVisible ? "active" : ""} ${page.className ? page.className : ""}`}>
      <Container>
        <Row className="mb-5">
          <Col>
            <Title page={page}/>
          </Col>
        </Row>
      </Container>
      <Container className="position-relative z-1">
        <div className="video-bg"></div>
        <div className="video-lines-shape"><Icon variant="lines-shape" /></div>
        <Row>
          <Col>
            <div className="video-container">
              <div className="video-play"><Icon variant="play" /></div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Video;
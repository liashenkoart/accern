import React, {useContext} from "react";
import { Link } from "@reach/router";
import { Container, Row, Col } from "react-bootstrap";
import { page } from "../../../data/pages/homepage";
import Icon from "../../../components/icon";
import { Context } from "../../../context/context";
import { OpenModal } from "../../../services/modalsManager";
import {page as userstory} from "../../../data/pages/userstory";

import "./Solutions.scss"

const Solutions = ({ isVisible }) => {

  const { dispatchModals } = useContext(Context);

  const onAction = (action, data) => {
    switch(action){
      case "download-case-study":
        OpenModal("downloadFile", dispatchModals, {stats: userstory[data].caseStudies.stats, url: userstory[data].cta.link.data, modal:userstory[data].caseStudies.modal});
        break;
    }
  }

  return (
    <div className={`solutions sect-spacer ${isVisible ? "active" : ''}`}>
      <div className="shape-lines variant-1"></div>
      <Container>
        <Row>
          <Col>
            <div className="text-label"><span>{page.solutions.label}</span></div>
            <h2 className="mw-550">{page.solutions.title}</h2>
          </Col>
        </Row>
        <Row className="mt-0 mt-md-5">
          {page.solutions.columns.map((column, i) => (
            <Col md={4} key={`sc-${i}`} className={i < page.solutions.columns.length - 1 ? "" : "last" }>
              <div className="block h-100 simple">
                <div><img className="icon-big" src={`../../assets/img/${column.icon}`} alt="" /></div>
                <h3 className="font-weight-normal mb-d mt-4 mt-md-5 mw-300 mw-lg-230">{column.title}</h3>
                {column.link ? 
                column.link.modal ? <div className="link-arrow" onClick={()=>OpenModal(column.link.modal, dispatchModals)}>{column.link.name} <Icon className="ml-2" variant="arrow-right"/></div> : 
                column.link.action ? <div className="link-arrow" onClick={()=>onAction(column.link.action, column.link.data)}>{column.link.name} <Icon className="ml-2" variant="arrow-right"/></div>
                : <Link className="link-arrow" to={column.link}>{column.link.name} <Icon className="ml-2" variant="arrow-right"/></Link> : <></>}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Solutions;
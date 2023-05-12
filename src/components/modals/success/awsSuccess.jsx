import React, { useContext } from "react";
import { Modal, Container, Row, Col } from "react-bootstrap";
import { settings } from "../../../data/settings";
import Icon from "../../icon";
import { Context } from "../../../context/context";

import "./RequestTrial.scss"

const RequestSuccess = ({ }) => {

  const { modals, dispatchModals } = useContext(Context);

  console.log(modals)

  return (
    <Modal className="modal-custom" show={modals.isAwsSuccess} onHide={() => dispatchModals({ type: "SET_MODALS", data: { isAwsSuccess: false } })} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body className="bg-white">
        <div className="modal-close text-dark" onClick={() => dispatchModals({ type: "SET_MODALS", data: { isAwsSuccess: false } })}><Icon variant="icon-close" /></div>
        <Container>
          <Row>
            <Col lg={12} className="modal-padding">
              <div className={`success-animated-icon ${modals.isAwsSuccess ? "active" : ""}`}><Icon variant="icon-success" /></div>
              <h2 className="text-large text-primary text-center">{modals.data ? modals.data.title : settings.texts.Thankyou}</h2>
              <p className="text-strong text-center fw-300">{modals.data ? modals.data.description : settings.texts.Wewillbeintouch}</p>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default RequestSuccess;
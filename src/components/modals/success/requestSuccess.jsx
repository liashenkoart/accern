import React, { useContext } from "react";
import { Modal, Container, Row, Col } from "react-bootstrap";
import { settings } from "../../../data/settings";
import Icon from "../../icon";
import { Context } from "../../../context/context";

import "./RequestTrial.scss"

const RequestSuccess = ({ }) => {

  const { modals, dispatchModals } = useContext(Context);

  return (
    <Modal className="modal-custom" show={modals.isRequestSuccess} onHide={() => dispatchModals({ type: "SET_MODALS", data: { isRequestSuccess: false } })} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body className="bg-white">
        <div className="modal-close text-dark" onClick={() => dispatchModals({ type: "SET_MODALS", data: { isRequestSuccess: false } })}><Icon variant="icon-close" /></div>
        <Container>
          <Row>
            <Col lg={12} className="modal-padding">
              <div className={`success-animated-icon ${modals.isRequestSuccess ? "active" : ""}`}><Icon variant="icon-success" /></div>
              <h2 className="text-large text-primary text-center">{settings.texts.Thankyou}</h2>
              <p className="text-large text-center fw-300">{settings.texts.Wewillbeintouch}</p>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default RequestSuccess;
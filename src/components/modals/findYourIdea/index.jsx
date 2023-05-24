import React, { useContext, useState } from "react";
import { Modal, Container, Row, Col, Button } from "react-bootstrap";
import { settings } from "../../../data/settings";
import Icon from "../../icon";
import { Context } from "../../../context/context";
import Steps from "../../steps";
import Select from "../../inputs/select";

import "./FindYourIdea.scss";
import { page } from "../../../data/pages/marketplace";

const FindYourIdea = ({ }) => {

  const { modals, dispatchModals } = useContext(Context);
  const [step, setStep] = useState(0);
  const { findUseCase: { label }, findUseCase: { title }, findUseCase: { button }, findUseCase: { steps }, industries } = modals.data;

  return (
    <Modal className="modal-custom" show={modals.isFindYourIdea} onHide={() => dispatchModals({ type: "SET_MODALS", data: { isFindYourIdea: false } })} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body>
        <div className="modal-close" onClick={() => dispatchModals({ type: "SET_MODALS", data: { isFindYourIdea: false } })}><Icon className="text-dark" variant="icon-close" /></div>
        <Container>
          <Row>
            <Col lg={12} className="bg-white d-flex align-items-center modal-padding">
              <div className="w-100">
                <div className="text-label"><span>{label}</span></div>
                <h2 className="text-title-light-sm mb-4">{title}</h2>
                <Select
                  onChange={(e) => console.log("industry")}
                  options={industries.options}
                  label={steps[0].plahecolder}
                  className="select-small"
                />
                <div className="filter-steps mb-5 mt-5">
                  {step > 0 && <Button onClick={() => setStep(step > 0 ? step - 1 : step)} variant="neutral"><Icon className="m-0" variant="arrow-left" /></Button>}
                  <Button onClick={() => setStep(step < 4 ? step + 1 : step)} variant="primary">{button} ({step + 1}/4)</Button>
                </div>
                <div>
                  <Steps length={4} current={step} onStepChange={setStep} />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default FindYourIdea;
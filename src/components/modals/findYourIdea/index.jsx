import React, { useContext, useState } from "react";
import { Modal, Container, Row, Col, Button } from "react-bootstrap";
import { settings } from "../../../data/settings";
import Icon from "../../icon";
import { Context } from "../../../context/context";
import Steps from "../../steps";
import Select from "../../inputs/select";
import FormComp from "../../form";

import "./FindYourIdea.scss";
import { page } from "../../../data/pages/marketplace";

const FindYourIdea = ({ }) => {

  const { modals, dispatchModals } = useContext(Context);
  const { findUseCase: { label }, findUseCase: { title }, findUseCase: { button }, findUseCase: { steps }, findUseCase: { form }, industries, solutions } = modals.data;
  const [step, setStep] = useState(0);
  const [industry, setIndustry] = useState(industries.options[1]);
  const [solution, setSolution] = useState(solutions.options[1]);
  const [role, setRole] = useState(settings.role.options[0]);
  const [looking, setLooking] = useState(settings.looking.options[0]);

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
                {step == 0 &&
                  <Select
                    value={industry}
                    onChange={(e) => setIndustry(e)}
                    options={industries.options.filter(item => item.value != "All")}
                    label={steps[step].plahecolder}
                    className="simple-border-bottom label-uppercase select-small-text"
                    additionalLabel={steps[step].label}
                    maxMenuHeight={200}
                  />
                }
                {step == 1 &&
                  <Select
                    value={solution}
                    onChange={(e) => setSolution(e)}
                    options={solutions.options.filter(item => item.value != "All")}
                    label={steps[step].plahecolder}
                    className="simple-border-bottom label-uppercase select-small-text"
                    additionalLabel={steps[step].label}
                    maxMenuHeight={200}
                  />
                }
                {step == 2 &&
                  <Select
                    value={role}
                    onChange={(e) => setRole(e)}
                    options={settings.role.options.filter(item => item.value != "All")}
                    label={steps[step].plahecolder}
                    className="simple-border-bottom label-uppercase select-small-text"
                    additionalLabel={steps[step].label}
                    maxMenuHeight={200}
                  />
                }
                {step == 3 &&
                  <Select
                    value={looking}
                    onChange={(e) => setLooking(e)}
                    options={settings.looking.options.filter(item => item.value != "All")}
                    label={steps[step].plahecolder}
                    className="simple-border-bottom label-uppercase select-small-text"
                    additionalLabel={steps[step].label}
                    maxMenuHeight={200}
                  />
                }

                {step == 4 &&
                  <FormComp from="Find Your Idea" data={{ ...form, additional: `<b>${settings.texts.Industry}</b>: ${industry}<br><b>${settings.texts.Function}</b>: ${solution}<br><b>${settings.texts.Role}</b>: ${role}<br><b>${settings.texts.Looking}</b>: ${looking}<br>` }} onCompleted={() => console.log("completed")} />
                }

                {step != 4 && <>
                  <div className="filter-steps mb-5 mt-5">
                    {step > 0 && <Button onClick={() => setStep(step > 0 ? step - 1 : step)} variant="neutral"><Icon className="m-0" variant="arrow-left" /></Button>}
                    <Button onClick={() => setStep(step < 4 ? step + 1 : step)} variant="primary">{button} ({step + 1}/4)</Button>
                  </div>
                  <div>
                    <Steps length={4} current={step} onStepChange={setStep} />
                  </div>
                </>}
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default FindYourIdea;
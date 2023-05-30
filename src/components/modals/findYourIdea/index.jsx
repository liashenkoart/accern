import React, { useContext, useState, useEffect } from "react";
import { Modal, Container, Row, Col, Button } from "react-bootstrap";
import { settings } from "../../../data/settings";
import Icon from "../../icon";
import { Context } from "../../../context/context";
import Steps from "../../steps";
import Select from "../../inputs/select";
import FormComp from "../../form";
import { customSingleValue, customOptionValue } from "../../inputs/select/Custom";
import FormGroup from "../../formgroup";
import { filterIt } from "../../../utils/scripts";
import { OpenModal } from "../../../services/modalsManager";

import "./FindYourIdea.scss";
import { page } from "../../../data/pages/marketplace";

const FindYourIdea = ({ }) => {

  const generateUseCases = () => {
    return page.useCases.list.map((uc) => ({...uc, value: uc.name, label: uc.name }))
  }

  const { modals, dispatchModals, dispatchApp } = useContext(Context);
  const {
    findUseCase: { label, title, button, steps, form, send },
    industries,
    solutions,
    workflows } = modals.data;
  const [step, setStep] = useState(0);
  const [industry, setIndustry] = useState(industries.options[1].value);
  const [solution, setSolution] = useState(solutions.options[1].value);
  const [role, setRole] = useState(settings.role.options[0]);
  const [useCase, setUseCase] = useState(page.useCases.list[0].name);
  const [useCases, setUseCases] = useState(generateUseCases());
  const [filtered, setFiltered] = useState([]);
  const [isEnterIndustry, setIsEnterIndustry] = useState(false);
  const [isEnterFunction, setIsEnterFunction] = useState(false);
  const [isEnterUseCase, setIsEnterUseCase] = useState(false);
  const [isCompletedNotFound, setIsCompletedNotFound] = useState(false);

  useEffect(() => {
    let f = page.useCases.list;

    if (industry) {
      f = filterIt(f, industry, "industry");
    }
    if (solution) {
      f = filterIt(f, solution, "solution");
    }

    dispatchApp({ type: "SET_APP_VALUES", data: { linkAction: { name: "filter-marketplace-multiple", data: [{ value: industry, by: "industry" }, { value: solution, by: "solution" }] } } });

    setTimeout(() => {
      dispatchApp({ type: "SET_APP_VALUES", data: { linkAction: {} } });
    }, 2000)

    f = f.map((uc) => ({ ...uc, value: uc.name, label: uc.name }));

    if (f.length > 0) {
      setUseCase(f[0])
      setUseCases([...f, { value: settings.texts.Enternew, label: settings.texts.Enternew, isPrimary: true, icon: <Icon variant="plus" /> }]);
      setFiltered(f);
    } else {
      setUseCase('')
      setUseCases([{ value: settings.texts.Enternew, label: settings.texts.Enternew, isPrimary: true, icon: <Icon variant="plus" /> }])
    }

  }, [industry, solution])

  const generateIndustriesOptions = () => {
    let options = industries.options.filter(item => item.value != "All");
    options.push({ value: settings.texts.Enternew, label: settings.texts.Enternew, isPrimary: true, icon: <Icon variant="plus" /> });

    return options
  }

  const generateSolutionsOptions = () => {
    let options = solutions.options.filter(item => item.value != "All");
    options.push({ value: settings.texts.Enternew, label: settings.texts.Enternew, isPrimary: true, icon: <Icon variant="plus" /> });

    return options
  }

  const getDetails = (name) => {
    const s = filterIt(workflows.options, name, "value");

    return s.length > 0 ? { img: s[0].img, variant: s[0].variant } : { img: "use-case-primary.svg", variant: "primary" };
  }

  const onCompleted = () => {
    if (filtered.length == 0) setIsCompletedNotFound(true);
  }

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
                {isCompletedNotFound ?
                  <>
                    {isCompletedNotFound && <h3 className="border-top pt-4" dangerouslySetInnerHTML={{ __html: form.message }}></h3>}
                  </>
                  :
                  <>
                    {step == 0 && (
                      !isEnterIndustry ? <Select
                        value={{ value: industry, label: industry }}
                        onChange={(e) => { if (e.value == settings.texts.Enternew) { setIsEnterIndustry(true); setIndustry(""); } else { setIndustry(e.value) } }}
                        options={generateIndustriesOptions()}
                        label={steps[step].plahecolder}
                        className="simple-border-bottom label-uppercase select-small-text"
                        additionalLabel={steps[step].label}
                        maxMenuHeight={200}
                        components={{ SingleValue: customSingleValue, Option: customOptionValue }}
                      />
                        :
                        <FormGroup onChange={e => setIndustry(e)} value={industry} name="new-industry" controlId={`form-new-industry`} as="input" className="mb-2 mb-md-4 advanced" type="text" placeholder={settings.texts.EnternewIndustry} />
                    )
                    }
                    {step == 1 && (
                      !isEnterFunction ?
                        <Select
                          value={{ value: solution, label: solution }}
                          onChange={(e) => { if (e.value == settings.texts.Enternew) { setIsEnterFunction(true); setSolution(""); } else { setSolution(e.value) } }}
                          options={generateSolutionsOptions()}
                          label={steps[step].plahecolder}
                          className="simple-border-bottom label-uppercase select-small-text"
                          additionalLabel={steps[step].label}
                          maxMenuHeight={200}
                          components={{ SingleValue: customSingleValue, Option: customOptionValue }}
                        /> :
                        <FormGroup onChange={e => setSolution(e)} value={solution} name="new-function" controlId={`form-new-function`} as="input" className="mb-2 mb-md-4 advanced" type="text" placeholder={settings.texts.EnternewFunction} />
                    )
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
                    {step == 3 && (
                      !isEnterUseCase ?
                        <Select
                          value={useCase ? { value: useCase.value, label: useCase.value } : ''}
                          onChange={(e) => { if (e.value == settings.texts.Enternew) { setIsEnterUseCase(true); setUseCase(""); } else { setUseCase(e); } }}
                          options={useCases}
                          label={steps[step].plahecolder}
                          className="simple-border-bottom label-uppercase select-small-text"
                          additionalLabel={steps[step].label}
                          maxMenuHeight={200}
                          placeholder={settings.texts.NotFound}
                          components={{ SingleValue: customSingleValue, Option: customOptionValue }}
                        />
                        :
                        <FormGroup onChange={e => setUseCase(e)} value={useCase.value} name="new-usecase" controlId={`form-new-usecase`} as="input" className="mb-2 mb-md-4 advanced" type="text" placeholder={settings.texts.EnternewUseCase} />
                    )
                    }

                    {step == 4 &&
                      <FormComp from="Find Your Idea" to={send} data={{ ...form, additional: `<b>${settings.texts.Industry}</b>: ${industry}<br><b>${settings.texts.Function}</b>: ${solution}<br><b>${settings.texts.Role}</b>: ${role}<br><b>${settings.texts.Looking}</b>: ${useCase}<br>` }} onCompleted={onCompleted} />
                    }

                    {step < 4 && <>
                      <div className="filter-steps mb-5 mt-5">
                        {(isEnterIndustry || isEnterFunction || isEnterUseCase) &&
                          <Button onClick={() => {
                            setIsEnterIndustry(false);
                            setIsEnterFunction(false);
                            setIsEnterUseCase(false);
                            setIndustry(industries.options[1].value);
                            setSolution(solutions.options[1].value);
                            setUseCase(filtered.length > 0 ? filtered[0].value : '');
                          }}
                            variant="neutral">
                            <Icon className="m-0" variant="arrow-left" />
                          </Button>}
                        {(!isEnterIndustry && !isEnterFunction && !isEnterUseCase) && step > 0 && <Button onClick={() => setStep(step > 0 ? step - 1 : step)} variant="neutral"><Icon className="m-0" variant="arrow-left" /></Button>}
                        <Button onClick={() => {
                          if(step == 3 && useCase && typeof useCase != 'string') OpenModal("requestAccess", dispatchModals, { ...useCase, ...getDetails(useCase.workflow) })
                          
                          setStep(step < 4 ? step + 1 : step);
                          setIsEnterUseCase(false);
                          setIsEnterIndustry(false);
                          setIsEnterFunction(false);
                        }}
                          variant="primary"
                          disabled={
                            (isEnterIndustry && industry.length < 2) ||
                            (isEnterFunction && solution.length < 2) ||
                            (isEnterUseCase && useCase.length < 2)
                          }>
                          {button} ({step + 1}/4)
                    </Button>
                      </div>
                      <div>
                        <Steps length={4} current={step} onStepChange={setStep} />
                      </div>
                    </>
                    }
                  </>
                }
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default FindYourIdea;
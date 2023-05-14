import React, { useState, useContext } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import FormGroup from "../formgroup";
import { ApiService } from "../../services/ApiService";
import { OpenModal } from "../../services/modalsManager";
import { Context } from "../../context/context";
import { settings } from "../../data/settings";
import LinkAdv from "../linkadv";

import "./Form.scss";

const FormComp = ({ data, from, onCompleted }) => {

  const [isCompleted, setIsCompleted] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const { dispatchModals } = useContext(Context);

  const onSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsButtonDisabled(true);

    const data = new FormData(e.target);

    let fields = [];

    data.forEach(function (value, key) {
      fields.push({ "name": key, "value": value });
    });

    let json = {
      "fields": [
      ],
      "skipValidation": "true",
      "context": {
        "pageUri": window.location.hostname,
        "pageName": from
      }
    }

    json.fields = fields;

    ApiService.post(data).then(result => {
      if (result.data = "success") {
        ApiService.post(JSON.stringify(json), `https://api.hsforms.com/submissions/v3/integration/submit/${settings.hubspotID}/${settings.formID}`, {
          headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
          }
        }).then(result => {
          setIsCompleted(true);
          OpenModal(data.succesModal ? data.succesModal.name : "request-success", dispatchModals, data.succesModal)
          if (gtag) gtag('event', 'Form Submitted');
          if (onCompleted) onCompleted();
        }, error => {
          console.log(error)
        })
      }
    }, error => {
      console.log(error)
    })
  }

  const renderForm = () => {
    return <Form className={data.variant != "bordered" ? "mt-2 mt-lg-5" : ""} onSubmit={onSubmit}>
      <input type="hidden" name="form-type" value={data.formType ? data.formType : "getInTouch"} />
      <input type="hidden" name="additional" value={data.additional ? data.additional : ""} />
      <Container fluid className="p-0">
        <Row>
          {data.fields.map((field, i) => (
            <Col key={`ff-${i}`} md={field.isFullWidth ? 12 : 6}>
              <FormGroup className="mb-2 mb-md-4 advanced" name={field.name} pattern={field.pattern} controlId={`form${field.name}`} as={field.type == "textarea" ? "textarea" : "input"} required={field.required ? true : false} type={field.type} placeholder={field.placeholder} />
            </Col>
          ))}
          <Col>
            <LinkAdv
              data={{ name: data.button }}
              disabled={isButtonDisabled ? true : false}
              className="mt-4 w-100"
              variant="primary-arrow"
              type="submit"
            />
          </Col>
        </Row>
      </Container>
    </Form>
  }

  const renderFormContainer = () => {
    switch (data.variant) {
      case "bordered":
        return <div className={`form ${data.className ? data.className : ""}`}>
          {!isCompleted &&
            <>
              <div>
                <div className="position-relative mt-2 mb-2 mt-lg-0 mb-lg-0">
                  {data.label && <div className="mb-2"><span className="text-label">{data.label}</span></div>}
                  {data.title && <h1 className={`mb-4 ${data.titleCL ? data.titleCL : "mw-550"}`} dangerouslySetInnerHTML={{ __html: data.title }}></h1>}
                  {data.description &&
                    <p className="text-medium mw-550 mb-4 mb-lg-5">{data.description}</p>
                  }
                </div>
              </div>
              <div className="p-4 p-xl-5 border mt-d">
                {renderForm()}
              </div>
            </>
          }
          <div className={`form-message ${isCompleted ? "active" : ""}`}>
            <h1>{data.message}</h1>
          </div>
        </div>
      default:
        return <div className={`form ${data.className ? data.className : ""}`}>
          {!isCompleted &&
            <>
              <div>
                <div className="position-relative mt-2 mb-2 mt-lg-0 mb-lg-0">
                  <div className="shape-homehero z-1"><img src="../../assets/img/dots-medium-3.svg" alt="" /></div>
                  {data.label && <div className="mb-2 text-center text-md-left"><span className="text-label">{data.label}</span></div>}
                  {data.title && <h1 className={`mb-4 text-center text-md-left ${data.titleCL ? data.titleCL : "mw-550"}`} dangerouslySetInnerHTML={{ __html: data.title }}></h1>}
                  {data.description &&
                    <p className="text-medium mw-550 mb-4 mb-lg-5 text-center text-md-left">{data.description}</p>
                  }
                </div>
              </div>
              {renderForm()}
            </>
          }
          <div className={`form-message ${isCompleted ? "active" : ""}`}>
            <h1>{data.message}</h1>
          </div>
        </div>
    }
  }

  return renderFormContainer();
}

export default FormComp;
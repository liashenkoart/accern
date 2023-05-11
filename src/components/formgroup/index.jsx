import React, { useState, useContext, useRef } from "react";
import { Form } from "react-bootstrap";
import { Context } from "../../context/context";
import * as bootstrapValidate from 'bootstrap-validate';
import Icon from "../icon";

import "./FormGroup.scss"
import { useEffect } from "react";

const FormGroup = ({ className, controlId, as, type, placeholder, required, name, pattern, equal }) => {

  const [active, setActive] = useState(false);
  const [value, setValue] = useState("");
  const [valid, setValid] = useState("");
  const { userMail, dispatchUserMail } = useContext(Context);
  const inputR = useRef();
  const patterns = pattern ? { pattern: pattern } : {};

  useEffect(() => {
    validate();
  }, []);

  const validate = () => {

    switch (name) {
      case "email":
      case "email_confirmation":
        bootstrapValidate(inputR.current, 'email:', setValidaion);
        break;
      case "name":
      case "first_name":
      case "last_name":
      case "company":
      case "title":
      case "country":
        bootstrapValidate(inputR.current, 'min:2:', setValidaion);
        break;
      case "company":
        bootstrapValidate(inputR.current, 'min:0:', setValidaion);
        break;
      case "phone":
        bootstrapValidate(inputR.current, 'min:0:', setValidaion);
        break;
      case "message":
        bootstrapValidate(inputR.current, 'min:5:', setValidaion);
        break;
    }
  }

  const setValidaion = (isValid) => {
    setTimeout(() => {
      isValid ? setValid("is-valid") : setValid("is-invalid");
    }, 50)
  }

  return (
    <Form.Group className={`${className ? className : ""} ${valid} ${name == "email" ? userMail.length > 0 ? "not-empty" : "" : value.length > 0 ? "not-empty" : ""} ${active ? "active" : ""}`} controlId={`${controlId ? controlId : ""}`}>
      {placeholder && <Form.Label>{placeholder}</Form.Label>}
      {valid == "is-invalid" && <div className="icon-error"><Icon variant="icon-close-small" /></div>}
      <Form.Control
        as={`${as ? as : ""}`}
        type={`${type ? type : ""}`}
        ref={inputR}
        name={name} required={required ? true : false}
        value={name == "email" ? userMail : value}
        {...patterns}
        onChange={(e) => { name == "email" ? dispatchUserMail({ type: "SET_USER_MAIL", data: e.target.value }) : setValue(e.target.value) }}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
      />
    </Form.Group>
  );
}

export default FormGroup;
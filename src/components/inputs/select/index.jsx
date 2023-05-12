import React, { useState, useEffect, useContext } from "react";
import Select from 'react-select';
import { Context } from "../../../context/context";

import "./Select.scss";

const SelectAdv = ({ value, options, onChange, label, variant, components, className, defaultValue, menuPlacement, name }) => {

  const [val, setVal] = useState(value);
  const { dispatchLayout } = useContext(Context);

  useEffect(()=>{
    setVal(value)
  },[value])

  return (
    <div className={`select ${className ? className : ""} ${variant ? variant : ""}`}>
      {label && <label>{label}</label>}
      <Select
        value={onChange ? value : val}
        defaultValue={defaultValue}
        onChange={(e) => {onChange ? onChange(e) : setVal(e);dispatchLayout({ type: "SET_LAYOUT", data: { isSelectFocus: false } })}}
        options={options}
        className={`acr-select-c`}
        classNamePrefix={"acr-select-c"}
        components={components}
        menuPlacement={menuPlacement}
        name={name}
        onFocus={()=>dispatchLayout({ type: "SET_LAYOUT", data: { isSelectFocus: true } })}
        onBlur={()=>dispatchLayout({ type: "SET_LAYOUT", data: { isSelectFocus: false } })}
      />
    </div>
  );
}

export default SelectAdv;
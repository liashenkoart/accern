import React, { useState, useContext } from "react";
import Icon from "../../icon";
import { filterItFull, capitalize } from "../../../utils/scripts";
import Scrollbar from 'react-smooth-scrollbar';
import { Context } from "../../../context/context";
import { Form } from "react-bootstrap";
import { settings } from "../../../data/settings";
import { generateToken, filterIt } from "../../../utils/scripts";
import { OpenModal } from "../../../services/modalsManager";

import "./Search.scss";

const Search = ({ value, placeholder, onChange, onClear, data, searchField, categories, onSetValue, className, showCategory, showSwitch, isFilter, filterModal, variant }) => {

  const [isTyped, setIsTyped] = useState(false);
  const [result, setResult] = useState([]);
  const { app, dispatchApp } = useContext(Context);
  const { dispatchModals } = useContext(Context);

  const onValueChange = (e) => {
    onChange(e.target.value);

    if (e.target.value.length > 0) {
      let r = [];

      switch (variant) {
        case "usecases":
          r = filterItFull(data, capitalize(e.target.value), searchField);
          break;
        case "news":
          r = filterItFull(data, capitalize(e.target.value), searchField);
          console.log(r)
          break;

      }

      setIsTyped(true);
      r.length > 0 ? setResult(r) : setResult([]);

    } else {
      onSetValue("");
      setResult([]);
      setIsTyped(false);
    }
  }

  const onValueClear = () => {
    onSetValue("");
    onClear();
    setResult([]);
    setIsTyped(false);
  }

  const setValue = (name, id) => {
    onSetValue(name, id);
    onChange(name, id);
    setResult([]);
  }

  const clearFilter = () => {
    dispatchApp({ type: "SET_APP_VALUES", data: { filterUsers: "", filterTaxonomy: "" } });
  }

  const isFilters = () => {
    return false;
  }

  const renderResult = () => {
    switch (variant) {
      case "usecases":
        return result.map((elm, i) => (
          <div key={`sr-${i}`} className="search-result-item" onClick={() => setValue(elm)}>
            <div className="d-flex align-items-center">
              <div>
                <img className="mr-4 preset-icon-md" src={`./assets/img/${elm.img}`} />
              </div>
              <div>
                <h4>{elm.name}</h4>
                <p className="mb-0">{elm.description}</p>
              </div>
            </div>
          </div>
        ));
      case "news":
        return result.map((elm, i) => (
          <div key={`sr-${i}`} className="search-result-item" onClick={() => setValue(elm)}>
            <div className="d-flex align-items-center">
              <div>
                <img className="mr-4 preset-icon-md" src={`./assets/img/${elm.img}`} />
              </div>
              <div>
                {elm.title && <h4>{elm.title}</h4>}
                <p className="mb-0">{elm.description}</p>
              </div>
            </div>
          </div>
        ));
    }
  }

  return (
    <div className={`search ${className ? className : ""}`}>
      {className && className.indexOf("reverse") != -1 ?
        !isTyped && <div className="search-icon">
          <Icon variant="search" />
        </div> :
        <div className="search-icon">
          <Icon variant="search" />
        </div>
      }
      {!isFilters() && <input type="text" value={value} name="search" onChange={onValueChange} placeholder={placeholder} autoComplete="off" />}
      {isTyped && <div className="search-close" onClick={() => onValueClear()}><Icon variant="icon-close" /></div>}
      {!isTyped && isFilter && <div className="search-filter" onClick={() => OpenModal(filterModal, dispatchModals)}><Icon variant="slider" /></div>}
      {isFilters() && <div className="search-filter-label"><span>{settings.texts.Filter}</span><div onClick={() => clearFilter()}><Icon variant="icon-close" /></div></div>}
      <div className={`search-result ${variant} ${result.length > 0 ? "active" : ""}`}>
        <Scrollbar className="scoll-bar">
          {renderResult()}
        </Scrollbar>
      </div>
    </div>
  );
}

export default Search;
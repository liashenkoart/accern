import React, { useState, useContext } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { settings } from "../../data/settings";
import Icon from "../icon";
import { filterItFull } from "../../utils/scripts";

import "./Search.scss";

const Search = ({ data, onSelect }) => {

  const [value, setValue] = useState("");
  const [results, setResults] = useState(null);
  const [active, setActive] = useState(null);

  const onChange = (e) => {
    const result = e.target.value ? filterItFull(data.sections, e.target.value, "title") : null;
    setValue(e.target.value);
    setResults(result ? result.length > 0 ? result : null : null);
  }

  const onClear = () => {
    setValue("");
    setResults(null);
  }

  const onResultClick = (id) => {
    onClear();
    onSelect(id);
  }

  const onKeyPress = (e) => {
    switch (e.keyCode) {
      case 40:
        if (results) {
          console.log(active, results.length)
          active != null ? setActive(active < results.length - 1 ? active + 1 : active) : setActive(0);
        }
        break;
      case 38:
        if (results) {
          active == null ? setActive(null) : setActive(active > 0 ? active - 1 : null);
        }
        break;
      case 13:
        if (results) {
         if(active != null) onSelect(results[active].id); onClear();
        }
        break;
    }
  }

  return (
    <div className={`search`}>
      <div className="search-input">
        <div className="search-icon"><Icon variant="search" /></div>
        <Form.Control value={value} onKeyDown={onKeyPress} onChange={onChange} placeholder={settings.texts.FindADocument} />
        {value.length > 0 && <div className="search-clear" onClick={onClear}><Icon variant="icon-close" /></div>}
      </div>
      {results && <div className="search-result">
        {results.map((result, i) => (
          <a className={`${active == i ? "active" : ""}`} key={`dl-${i}`} onClick={() => onResultClick(result.id)}><h4>{result.title}</h4><span>{result.id ? settings.texts.SectionTitle : settings.texts.SectionDescription}</span></a>
        ))}
      </div>}
    </div>
  );
}

export default Search;
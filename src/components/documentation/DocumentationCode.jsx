import React, { useState } from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import customTheme from './custom-theme';
import Icon from "../icon";
import Select from "react-select";
import { buildOptions, capitalize, filterIt } from "../../utils/scripts";

import "./Documentation.scss"

const DocumentationCode = ({ data }) => {

  const [isCopied, setIsCopied] = useState(false);
  const [code, setCode] = useState(data.content[0].code);
  const [language, setLanguage] = useState(data.content[0].language);

  const onCopy = () => {
    setIsCopied(true);

    navigator.permissions.query({ name: "clipboard-write" }).then(result => {
      if (result.state == "granted" || result.state == "prompt") {
        navigator.clipboard.writeText(code).then(function () {
          setTimeout(() => {
            setIsCopied(false);
          }, 3000);
        }, function () {
          console.log("error: can't copy")
        });
      }
    });
  }

  const onLanguageChange = (e) => {
    setLanguage(e.value);
    setCode(filterIt(data.content, e.value, "language")[0].code)
  }

  const getLanguage = (lang) => {
    switch (lang) {
      case "csv":
      case "api":
        return "xml";
      default:
        return lang;
    }
  }

  return (
    <div className={`documentation-code ${data.class ? data.class : ""}`}>
      {data.title || data.content.length > 1 ?
        <div className="documentation-code-title">
          <div>{data.title}</div>
          {data.content.length > 1 &&
            <div>
              <Select
                value={{ value: language, label: capitalize(language) }}
                onChange={onLanguageChange}
                options={buildOptions(data.content, "language")}
                className={`acr-select`}
                classNamePrefix={"acr-select"}
                className="select-code"
              />
            </div>
          }
        </div> : <></>
      }
      <SyntaxHighlighter wrapLines={true} language={getLanguage(language)} style={customTheme}>
        {code}
      </SyntaxHighlighter>
      {!data.notification && <div onClick={onCopy} className={`documentation-code-copy absolute ${data.content.length > 1 ? "bottom" : ""} ${isCopied ? "copied" : ""}`}><Icon variant="copy" /><Icon variant="allow" /></div>}
      {data.notification && <div className="documentation-code-notification">
        <div>{data.notification}</div>
        <div onClick={onCopy} className={`documentation-code-copy ${isCopied ? "copied" : ""}`}><Icon variant="copy" /><Icon variant="allow" /></div>
      </div>
      }
    </div>
  )
}

export default DocumentationCode;
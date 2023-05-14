import React from "react";
import Icon from "../../../components/icon";
import { dateFormat } from "../../../utils/scripts";
import { navigate } from "@reach/router";

import "./BlockCase.scss"

const BlockCase = ({ data, className, variant }) => {

  const renderBlock = () => {
    switch (variant) {
      case "simple-news":
        return <a target="_blank" href={data.link && data.link.link ? data.link.link : "#"} className={`block-case ${className ? className : ""} ${variant ? variant : ""}`}>
          <div className="block-case-shape" style={{ backgroundImage: `url(./assets/img/${data.shape ? data.shape : "shape-line-primary.svg"})` }}></div>
          <div>
            <div>
              {data.img && <div className="block-case-img-container"><img className="block-case-img" src={`./assets/img/${data.img}`} alt="" /></div>}
              {data.name && <h3>{data.name}</h3>}
              {data.description && <p className="block-case-description mw-400" dangerouslySetInnerHTML={{ __html: data.description }}></p>}
            </div>
          </div>
          {data.date && <p className="mt-4 text-dark text-medium">{dateFormat(data.date, "dd mmm yyyy")}</p>}
          <Icon variant="arrow-right" />
        </a>
      case "simple":
        return <div className={`block-case ${className ? className : ""} ${variant ? variant : ""}`}>
          <div className="d-flex align-items-center">
            {data.img && <img className="block-case-img" src={`./assets/img/${data.img}`} alt="" />}
            <div>
              {data.name && <h3>{data.name}</h3>}
              {data.description && <p className="block-case-description">{data.description}</p>}
            </div>
          </div>
          <Icon variant="arrow-right" />
        </div>
      case "simple-filter":
        return <div className={`block-case ${className ? className : ""} ${variant ? variant : ""}`}>
          <div>
            {data.img && <img className="block-case-img" src={`./assets/img/${data.img}`} alt="" />}
            <div>
              {data.name && <h3>{data.name}</h3>}
              {data.description && <p className="block-case-description">{data.description}</p>}
            </div>
          </div>
        </div>
      case "filter-sm":
        return <div className={`block-case ${className ? className : ""} ${variant ? variant : ""}`}>
          <div className="d-flex align-items-center">
            {data.img && <img className="block-case-img" src={`./assets/img/${data.img}`} alt="" />}
            <div>
              {data.description && <p className="block-case-description mb-2">{data.description}</p>}
              {data.name && <h3 className="mb-0">{data.name}</h3>}
            </div>
          </div>
          <Icon variant="arrow-right" />
        </div>
      case "filter-bg":
        return <div className={`block-case case ${className ? className : ""} ${variant ? variant : ""} ${data.variant ? data.variant : ""}`}>
          <div className="block-case-bg"></div>
          <div className="block-case-shape"></div>
          <div className="d-flex align-items-center">
            {data.img && <img className="block-case-img mb-0 mr-4" src={`./assets/img/${data.img}`} alt="" />}
            <div>
              {data.description && <p className="block-case-description mt-0">{data.description}</p>}
              {data.name && <h3 className="mb-0">{data.name}</h3>}
            </div>
          </div>
        </div>
      case "filter-bn":
        return <div className={`block-case ${className ? className : ""} ${variant ? variant : ""}`}>
          <div className="d-flex align-items-center">
            {data.img && <img className="block-case-img" src={`./assets/img/${data.img}`} alt="" />}
            <div>
              {data.name && <h3>{data.name}</h3>}
              {data.description && <p className="block-case-description">{data.description}</p>}
            </div>
          </div>
        </div>
      case "neutral":
        return <a href={data.link && data.link.link ? data.link.link : "#"} target="blank" className={`block-case ${className ? className : ""} ${variant ? variant : ""}`}>
          <div>
            {data.img && <img className="block-case-img" src={`./assets/img/${data.img}`} alt="" />}
          </div>
        </a>
      default:
        return <div className={`block-case case pb-4 ${className ? className : ""} ${data.variant ? data.variant : ""}`}>
          <div className="block-case-bg"></div>
          <div className="block-case-shape"></div>
          <div>
            {data.img && <img className="block-case-img" src={`./assets/img/${data.img}`} alt="" />}
            {data.workflow && <div className="block-case-badge">{data.workflow}</div>}
            <div>
              {data.industry && <div className="text-label mb-2">{data.industry}</div>}
              {data.name && <h3>{data.name}</h3>}
              {data.description && <p className="block-case-description">{data.description}</p>}
            </div>
          </div>
          <div>
            <div className="block-case-border"></div>
            {data.solution && <div className="block-case-bottom">{data.solution}</div>}
          </div>
        </div>
    }
  }

  return renderBlock();
}

export default BlockCase;
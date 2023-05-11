import React, { useRef } from "react";
import Icon from "../icon";

import "./Pricing.scss";
import { settings } from "../../data/settings";

const Package = ({ data, isFirst, containerHeight, containerTop }) => {

  const cnt = useRef();

  const calcPosition = () => {
    if (window.innerWidth > 1100) {
      const cntHeight = cnt.current ? cnt.current.getBoundingClientRect().height : 0;

      if (Math.abs(containerTop) < containerHeight - cntHeight) {
        return Math.abs(containerTop);
      } else {
        return containerHeight - cntHeight;
      }
    } else {
      return 0;
    }
  }

  return (
    <div ref={cnt}
      className={`package ${isFirst ? "first" : ""} ${data.isHighlighted && "highlighted"} ${window.innerWidth > 1100 && containerTop < 0 ? "with-shadow" : ""}`}
      style={{ transform: `translateY(${containerTop < 0 ? calcPosition() + "px" : 0 + "px"})` }}
    >
      <div className="package-title">
        <div className="package-title-bg" style={data.isHighlighted && { background: "url(./assets/img/shape-package.svg)" }}></div>
        <Icon variant={data.icon} />
        <div className="ml-3">
          <h3 className="text-subtitle fw-400 mb-0">{data.name}</h3>
          <p className="text-tiny">{data.description}</p>
        </div>
      </div>
      <div className="package-content">
        <div>
          <div className="text-sub-title-large">{data.price}<span className="text-title op-05">/{settings.texts.mo}</span></div>
          <div className="package-description"><span className="text-small text-gray">{data.priceLabel}</span></div>
        </div>
      </div>
    </div>
  );
}

export default Package;
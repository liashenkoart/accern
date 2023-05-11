import React from "react";
import Block from "../../../components/block";

import "./Rows.scss"

const Rows = ({ isVisible, page }) => {

  return (
    <div className={`rows ${page.isSmallDescription ? "small-description" : ""} ${page.isSmallTitle ? "small-title" : "" } ${page.className ? page.className : ""} ${page.isReducedMargin ? "reduced-margin" : ""} ${page.isMiddle ? "rows-middle" : ""} ${page.isReducedMargin ? "reduced-margin" : ""} ${page.isWithoutPadding ? "remove-padding" : ""} ${isVisible ? "active" : ''}`}>
      {page.rows.map((row, i) => (
        <Block className={`${(i % 2) ? "reverse" : ""} ${i==0 ? "first-row" : ""}`} data={row} key={`fr-${i}`}/>
      ))}
    </div>
  );
}

export default Rows;
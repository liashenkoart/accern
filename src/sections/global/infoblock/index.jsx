import React from "react";
import Block from "../../../components/block";

import "./InfoBlock.scss"

const InfoBlock = ({ isVisible, page }) => {

  return (
    <div className={`info-block ${page.className ? page.className : ''} ${isVisible ? "active" : ''}`}>
      <Block data={page} className={page.reverse ? "reverse" : ""}/>
    </div>
  );
}

export default InfoBlock;
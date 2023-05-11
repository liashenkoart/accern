import React from "react";

import "./Dot.scss"

const Dot = ({  }) => {

  return (
    <div className={`dot`}>
      <div className="dot-middle"></div>
      <div className="dot-shape"></div>
      <div className="dot-border"></div>
    </div>
  );
}

export default Dot;
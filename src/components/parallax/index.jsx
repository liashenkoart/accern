import React from "react";
import Rellax from "react-rellax";

import "./Parallax.scss";

const Parralax = ({ variant, className }) => {

  let count = 5;
  let shapes = []

  // const Rellax = new Rellax({
  //   wrapper: ".scroll-content"
  // })

  const renderElement = () => {
    switch (variant) {
      case "primary":

        for (let i = 0; i < count; i++) {
          shapes.push(<Rellax wrapper=".scoll-bar" key={`r-${i}`}><div className="parallax-shape"></div></Rellax>)
        }

        return shapes;
    }
  }

  return (
    <div className={`parallax ${variant ? variant : ''} ${className ? className : ''}`}>
      {renderElement()}
    </div>
  );
}

export default Parralax;
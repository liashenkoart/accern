import React from "react";

import "./Effect.scss"

const Effect = ({ children, variant, className }) => {

  const renderEffect = () => {
    switch (variant) {
      case "primary":
        return <div className={`effect ${variant ? variant : ''} ${className ? className : ''}`}>
          {children}
        </div>

      case "primary-angle":
        return <div className={`effect ${variant ? variant : ''} ${className ? className : ''}`}>
          <div className="shape"></div>
          {children}
        </div>
    }
  }

  return (
    renderEffect()
  );
}

export default Effect;
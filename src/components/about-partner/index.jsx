import React from "react";
import { settings } from "../../data/settings";

import "./AboutPartner.scss"

const AboutPartner = ({ data }) => {

  return (
    <div className="about-partner">
      {data.label && <span className="text-label">{data.label}</span> }
      <div className="about-partner-bg mt-d" style={{backgroundImage: `url(../assets/img/${data.bg})`}}>
        {data.logo && <img src={`../assets/img/${data.logo}`}/>}
      </div>
      {data.description && <p className="text-medium-link about-partner-description">{data.description}</p>}
    </div>
  );
}

export default AboutPartner;
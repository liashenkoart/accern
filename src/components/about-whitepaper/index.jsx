import React from "react";

import "./AboutWhitepaper.scss"

const AboutWhitepaper = ({ data }) => {

  return (
    <div className="about-whitepaper">
      {data.label && <div className="mb-4"><span className="text-label">{data.label}</span></div>}
      {data.description && <p className="text-medium-link about-partner-description mb-4">{data.description}</p>}
      {data.label_2 && <div className="mb-4"><span className="text-label mb-4">{data.label_2}</span></div>}
      {data.description_2 && <p className="text-medium-link about-partner-description mb-4">{data.description_2}</p>}
      {data.list && <ul className="list-dark">
        {data.list.map((item, i) => (
          <li key={`li-${i}`} dangerouslySetInnerHTML={{ __html: item.name }}></li>
        ))}
      </ul>}
    </div>
  );
}

export default AboutWhitepaper;
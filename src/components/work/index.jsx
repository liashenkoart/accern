import React, { Component } from "react";

import './Work.scss';

const Work = (props) => {

  const { img, name, techniques, links, onProjectOver, onProjectLeave, isVisible } = props;

  return (
    <div onMouseEnter={onProjectOver} onMouseLeave={onProjectLeave} className={`project ${isVisible ? 'active' : ''}`}>
      <div className="project-preview"><div style={{ background: "url(" + img + ")" }}></div>
      </div>
      <div className="project-description">
        <div className="project-name"><h2>{name}</h2></div>
        <div className="project-techniques"><span><strong>Techniques:</strong> {techniques}</span></div>
        {
          links.map((link, i) => (
            <a key={`l-${i}`} target="_blank" href={link.Link} className="btn-radial-primary mt-1"><i className="icon-chevron-right"></i><div>{`preview ${i == 0 ? "" : i}`}</div></a>
          ))
        }
      </div>
    </div>
  );
}

export default Work;

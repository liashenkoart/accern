import React from "react";

import "./Author.scss"

const Author = ({ data }) => {

  return (
    <div className={`author ${data.className ? data.className : ""}`}>
      <img src={`./assets/img/${data.img}`} alt="" />
      <div>
        <h4>{data.name}</h4>
        <p className="mb-0">{data.title}</p>
      </div>
    </div>
  );
}

export default Author;
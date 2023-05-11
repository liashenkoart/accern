import React from "react";
import { settings } from "../../data/settings";

import "./AwsMarketplace.scss"

const AwsMarketplace = ({ data }) => {

  return (
    <div className="aws-marketplace">
      <div className="aws-marketplace-title">
        <h3 className="text-title-white-sm mb-0">{data.title}</h3>
        <p className="text-medium-white op-09">{data.description}</p>
      </div>
      <div className="aws-marketplace-fields">
        {data.fields && data.fields.map((field, i) => (
          <div key={`fi-${i}`}>
            <div>{field.name}</div>
            <div className="text-sub-label text-dark">{field.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AwsMarketplace;
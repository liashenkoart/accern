import React, {useState, useEffect} from "react";

import "./Steps.scss"

const Steps = ({ length, current, onStepChange }) => {

  const [step, setStep] = useState(current ? current : 0);

  useEffect(()=>{
    setStep(current);
  }, [current])

  const renderSteps = () => {
    let s = [];

    for(let i=0; i<length; i++) {
      s.push(<div key={`stp-${i}`} onClick={()=>{setStep(i); if(onStepChange) onStepChange(i)}} className={`steps-step ${i <= step ? "active" : ""}`}></div>)
    }

    return s;
  }

  return (
    <div className={`steps`}>
      {renderSteps()}
    </div>
  );
}

export default Steps;
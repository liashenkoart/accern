import React from "react";
import Particles from 'react-particles-js';

import './Loader.scss';

const Loader = ({ loaderState }) => {

  return (
    loaderState != "destroyed" &&
      <div className={`loader ${loaderState}`}>
      <img className="loader-logo" src="../../assets/img/logo.svg" alt=""/>
      <Particles
        params={{
          particles: {
            number: {
              value: 200,
              density: {
                enable: true,
                value_area: 1000,
              }
            },
            color: {
              value: "#000000"
            },
            size: {
              value: 3,
            },
            opacity: {
              value: 0.2,
            },
            line_linked: {
              opacity: 0.2,
              color: "#000000",
            },
          },
        }}
      />
    </div>
  );
}

export default Loader;
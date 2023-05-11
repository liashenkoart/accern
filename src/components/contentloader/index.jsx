import React from "react";
import './ContentLoader.scss';

const ContentLoader = ({ preloadStatus }) => {

  return (
    <div className={`content-loader ${preloadStatus}`}>
    </div>
  );
}


export default ContentLoader;

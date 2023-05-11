import React from "react";
import MetaTags from 'react-meta-tags';
import { settings } from "../../data/settings";

const Seo = ({ seo }) => {

  const renderSeo = () => {
    const metaTemp = [];

    if(!seo) seo = settings.seo; 

    if(seo.meta) seo.meta.forEach((meta, i) => {
      const m = {};
      Object.keys(meta).forEach((key) => {
        m[key] = meta[key]
      })
      metaTemp.push(<meta key={`s-${i}`} {...m} />);
    })

    return <MetaTags>
      <title>{seo.title}</title>
      {metaTemp}
    </MetaTags>
  }

  return (renderSeo())
  
}

export default Seo;
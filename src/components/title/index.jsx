import React from "react";
import LinkAdv from "../linkadv";

const Title = ({ page }) => {

  return <>
    {page.label && <div className="text-label"><span>{page.label}</span></div>}
    {page.title && <h2 dangerouslySetInnerHTML={{ __html: page.title }} className={`${page.titleCL ? page.titleCL : "mw-550"}`}></h2>}
    {page.description && <p className={`mt-4 mw-540  text-medium`}>{page.description}</p>}
    {page.button && <div className="mt-5 mb-4"><LinkAdv data={page.button} variant={page.button.variant ? page.button.variant : "link"} /></div>}
  </>
}

export default Title;
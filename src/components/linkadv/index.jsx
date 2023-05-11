import React, { useContext } from "react";
import { settings } from "../../data/settings";
import { Context } from "../../context/context";
import { OpenModal } from "../../services/modalsManager";
import { Link } from "@reach/router";
import { Button } from "react-bootstrap";
import Icon from "../icon";

import "./LinkAdv.scss"

const LinkAdv = ({ data, variant, className }) => {

  const { dispatchModals } = useContext(Context);

  const renderLink = () => {
    switch (variant) {
      case "link":
        return data ? data.modal ?
          <div className={`link-arrow ${className ? className : ""}`} onClick={() => OpenModal(data.modal, dispatchModals, data.data)}>{data.name ? data.name : settings.defaultLinkName} <Icon className="ml-2" variant="arrow-right" /></div>
          :
          <Link disabled={data.link ? false : true} className={`link-arrow ${className ? className : ""}`} to={data.link}>{data.name ? data.name : settings.defaultLinkName} <Icon className="ml-2" variant="arrow-right" /></Link>
          :
          null;
      case "btn-primary":
        return;
      case "outline-primary":
        return data ? data.modal ?
          <Button className={`${className ? className : ""}`} variant="light" onClick={() => OpenModal(data.modal, dispatchModals, data.data)}>{data.name ? data.name : settings.defaultLinkName}</Button>
          :
          <Link disabled={data.link ? false : true} className={`btn btn-outline-primary ${className ? className : ""}`} to={data.link}>{data.name ? data.name : settings.defaultLinkName}</Link>
          :
          null;;
      case "btn-light":
        return data ? data.modal ?
          <Button className={`${className ? className : ""}`} variant="light" onClick={() => OpenModal(data.modal, dispatchModals, data.data)}>{data.name ? data.name : settings.defaultLinkName}</Button>
          :
          <Link disabled={data.link ? false : true} className={`btn btn-light ${className ? className : ""}`} to={data.link}>{data.name ? data.name : settings.defaultLinkName}</Link>
          :
          null;
      case "link-simple":
        return data ? data.modal ?
          <div className={`link-simple ${className ? className : ""}`} onClick={() => OpenModal(data.modal, dispatchModals, data.data)}>{data.name ? data.name : settings.defaultLinkName}</div>
          :
          <Link disabled={data.link ? false : true} className={`link-simple ${className ? className : ""}`} to={data.link}>{data.name ? data.name : settings.defaultLinkName}</Link>
          :
          null;

    }
  }

  return (
    renderLink()
  );
}

export default LinkAdv;
import React, { useContext } from "react";
import { settings } from "../../data/settings";
import { Context } from "../../context/context";
import { OpenModal } from "../../services/modalsManager";
import { Link } from "@reach/router";
import { Button } from "react-bootstrap";
import Icon from "../icon";

import "./LinkAdv.scss"

const LinkAdv = (props) => {

  const { data, variant, className, onClick, children, ...restProps } = props;

  const { dispatchModals } = useContext(Context);
  const name = data.name ? data.name : settings.defaultLinkName;

  const isButton = () => {
    return data.modal || onClick || restProps.type == "submit";
  }

  const onButtonClick = () => {
    onClick ? onClick() : OpenModal(data.modal, dispatchModals, data.data);
  }

  const renderLink = () => {
    switch (variant) {
      case "link":
      default:
        return data ? isButton() ?
          <div className={`link-arrow ${data.className ? data.className : ""} ${className ? className : ""}`} onClick={onButtonClick}>{name} <Icon className="ml-2" variant="arrow-right" /></div>
          :
          <Link disabled={data.link ? false : true} className={`link-arrow ${className ? className : ""} ${data.className ? data.className : ""}`} to={data.link}>{name} <Icon className="ml-2" variant="arrow-right" /></Link>
          :
          null;
      case "primary":
        return data ? isButton() ?
          <Button {...restProps} className={`${className ? className : ""}`} variant="primary" onClick={onButtonClick}>{name}</Button>
          :
          <Link {...restProps} disabled={data.link ? false : true} className={`btn primary ${className ? className : ""}`} to={data.link}>{name}</Link>
          :
          null;
      case "outline-primary":
        return data ? isButton() ?
          <Button className={`${className ? className : ""}`} variant="outline-primary" onClick={onButtonClick}>{name}</Button>
          :
          <Link disabled={data.link ? false : true} className={`btn btn-outline-primary ${className ? className : ""}`} to={data.link}>{name}</Link>
          :
          null;
      case "outline-light":
        return data ? isButton() ?
          <Button className={`${className ? className : ""}`} variant="outline-light" onClick={onButtonClick}>{name}</Button>
          :
          <Link disabled={data.link ? false : true} className={`btn btn-outline-light ${className ? className : ""}`} to={data.link}>{name}</Link>
          :
          null;
      case "btn-light":
        return data ? isButton() ?
          <Button className={`${className ? className : ""}`} variant="light" onClick={onButtonClick}>{name}</Button>
          :
          <Link disabled={data.link ? false : true} className={`btn btn-light ${className ? className : ""}`} to={data.link}>{name}</Link>
          :
          null;
      case "primary-arrow":
        return data ? isButton() ?
          <Button {...restProps} className={`${className ? className : ""} ${data.className ? data.className : ""} with-box-arrow`} variant="primary" onClick={onButtonClick}>
            {name}
            <div className="arrow-box"><Icon variant="arrow-right" /></div>
          </Button>
          :
          <Link {...restProps} disabled={data.link ? false : true} className={`btn btn-primary ${data.className ? data.className : ""} ${className ? className : ""} with-box-arrow`} to={data.link}>
            {name}
            <div className="arrow-box"><Icon variant="arrow-right" /></div>
          </Link>
          :
          null;
      case "link-simple":
        return data ? isButton() ?
          <div className={`link-simple ${className ? className : ""}`} onClick={onButtonClick}>{name}</div>
          :
          <Link disabled={data.link ? false : true} className={`link-simple ${className ? className : ""}`} to={data.link}>{name}</Link>
          :
          null;
    }
  }

  return (
    renderLink()
  );
}

export default LinkAdv;
import React, { useContext, useEffect, useState } from "react";
import { Link } from "@reach/router";
import { Nav, Container, Row, Col, Button } from "react-bootstrap";
import { settings } from "../../data/settings";
import { Context } from "../../context/context";
import Icon from "../icon";
import { OpenModal } from "../../services/modalsManager";
import {filterIt} from "../../utils/scripts";

import "./Header.scss"

const Header = ({ scroll, isFluid }) => {

  const [direction, setDirection] = useState("down");
  const [lastPos, setLastPos] = useState(scroll);
  const [subActive, setSubActive] = useState(false);
  const [subs, setSubs] = useState(settings.navigation.map(() => false));
  const [isActiveMobile, setIsActiveMobile] = useState(false);
  const { dispatchModals, page } = useContext(Context);

  useEffect(() => {
    if (lastPos > scroll) {
      setDirection("up");
      setSubActive(false);

    } else {
      setDirection("down");
      setSubActive(false);
    }

    if (scroll < 500) setDirection("");

    setLastPos(scroll);
  }, [scroll]);

  const renderSubLink = (link) => {
    return (link.link ? <Link onClick={hideAll} className={`nav-sub-link ${link.icon ? "with-icon" : ""}`} to={link.link}>
      {link.icon && <div><img src={`../../assets/img/${link.icon}`} alt="" /></div>}
      <div><h4 className="text-medium-link">{link.name}</h4><p className="mb-0 mw-200">{link.description}</p></div>
      {link.isSimple ? <Icon variant="arrow-right" /> : null}
    </Link>
      : <div className={`nav-sub-link cursor-pointer ${link.icon ? "with-icon" : ""}`}>
        {link.icon && <div><img src={`../../assets/img/${link.icon}`} alt="" /></div>}
        <div><h4 className="text-medium-link">{link.name}</h4><p className="mb-0 mw-200">{link.description}</p></div>
        {link.isSimple ? <Icon variant="arrow-right" /> : null}
      </div>)
  }

  const renderSub = (sub, i) => {
    return (
      <div className={`nav-sub-mask ${subs[i] ? "active" : ""}`} onClick={handleClickSub}>
        <div className="nav-sub">
          <Container>
            <Row>
              {sub.columns.map((column, i) => (
                <Col key={`nlk-${i}`} lg={column.size} className={`column-link-cont ${i != 0 ? "pl-5 pr-5" : "pr-0"} pb-5 ${column.className ? column.className : ""}`}>
                  <div className="column-link">
                    <div className={`nav-label-padding mb-2 ${column.label ? "border-bottom" : ""}`}><span className="text-label">{column.label}</span></div>
                    <div className={`blocks margin-negative-1 ${column.size > 4 ? column.size < 12 ? column.size == 9 ? "columns-3" : "columns-2" : "columns-4" : "columns-1"}`}>
                      {column.links.map((link, i) => (
                        <div key={`s-${i}`} className={`block shadow-link ${link.orderMobile ? `${`order-${link.orderMobile}`} ${`order-lg-${i + 1}`}` : ""} ${link.isSimple ? "simple-link" : ""} ${link.isComing ? "coming-link" : ""}`}>
                          {renderSubLink(link)}
                        </div>
                      ))}
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </div>
    )
  }

  const handleClickSub = (e) => {
    if (!e.target.closest(".nav-sub")) hideAll();
  }

  const handleClickLink = (i) => {
    let temp = [];

    hideAll(false);

    subs.map((el, z) => {
      i == z ? temp.push(!subs[z]) : temp.push(false);
    })

    setSubs(temp);

  }

  const hideAll = (onMobile) => {
    let temp = [];
    subs.map(() => temp.push(false))
    setSubs(temp);
    if (onMobile) setIsActiveMobile(false);
  }

  const checkFluid = () => {
    return filterIt(settings.navigation, page.currentPage, "link").length > 0 ? filterIt(settings.navigation, page.currentPage, "link")[0].isFluid ? true : false : false;
  }

  return (
    <header className={`${lastPos > 500 ? "hide" : ""} ${lastPos > 50 ? "bg-white" : ""} ${direction} ${subActive ? "sub-active" : ""}`}>
      <Container fluid={checkFluid()}>
        <Row>
          <Col className={`d-flex align-items-center z-1 ${checkFluid() ? "pl-3 pl-md-4" : ""}`} md={2} xs={2}>
            <Link className="nav-link p-0" onClick={() => hideAll(true)} to="/"><img className="nav-logo" src="../../assets/img/logo.svg" alt="" /></Link>
          </Col>
          <Col md={10} xs={10}>
            <div className={`menu-toggle x ${!isActiveMobile ? "collapsed" : ""}`} onClick={() => setIsActiveMobile(!isActiveMobile)}>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </div>
            <div className={`nav-collapse-mask ${isActiveMobile ? "active" : ""}`}>
              <div className="nav-collapse">
                <Container fluid={checkFluid()}>
                  <Row>
                    <Col className="nav-collapse-inner">
                      <Nav activeKey="/">
                        {settings.navigation.map((nav, i) => (
                          !nav.excludeNav &&
                          <Nav.Item key={`nav-${i}`}>
                            {nav.link ? <Link onClick={() => hideAll(true)} className={`nav-link ${nav.isDisabled ? "disabled" : ""}`} to={nav.link}>{nav.name}</Link>
                              : <div className={`nav-link ${nav.isDisabled ? "disabled" : ""} cursor-pointer ${subs[i] ? "sub-active" : ""}`} onClick={() => nav.sub ? handleClickLink(i) : null}>
                                {nav.name}{nav.sub && <Icon variant="chevron-down" />}
                              </div>}
                            {nav.sub && renderSub(nav.sub, i)}
                          </Nav.Item>
                        ))}
                      </Nav>
                      {settings.headerButton && settings.headerButton.isActive ? settings.headerButton.modal ? <Button className="ml-0 ml-lg-4 w-auto w-md-100" variant="primary" onClick={() => OpenModal(settings.headerButton.modal, dispatchModals)}>{settings.headerButton.name}</Button> : <Link className="ml-0 ml-lg-4 w-auto w-md-100 btn btn-primary" to={settings.headerButton.link}>{settings.headerButton.name}</Link> : null}
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
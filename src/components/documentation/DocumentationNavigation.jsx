import React, { useState, useContext, useEffect } from "react";
import { Collapse } from "react-bootstrap";
import Scrollbar from 'react-smooth-scrollbar';
import { filterIt } from "../../utils/scripts";
import Icon from "../icon";

import "./Documentation.scss"

const DocumentationNavigation = ({ navigations, scroll, active, link, onLinkClick }) => {

  const [collapse, setCollapse] = useState(null);

  useEffect(() => {
    if(window.innerWidth > 991) {
      for (let nav in navigations) {
        if (navigations[nav].subs) {
          if (filterIt(navigations[nav].subs, active, "target").length > 0) {
            setCollapse(nav);
            break;
          } else {
            setCollapse(null);
          }
        }
      }
    }
  }, [active])

  useEffect(() => {
    if(link) navigateTo(link);
  }, [link])

  const onClick = (nav, i) => {
    if (nav.target) {
      navigateTo(nav.target);
      onLinkClick();
    } else {
      setCollapse(collapse != i ? i : !i)
    }
  }

  const navigateTo = (target) => {
    const position = document.querySelector(`#${target}`).getBoundingClientRect().top - 130;
    scroll.current.scrollbar.scrollTop = scroll.current.scrollbar.scrollTop + position;
  }

  return (
    <div className={`documentation-navigation`}>
      {navigations && navigations.map((navigation, i) => (
        <div key={`ndc-${i}`}>
          <div onClick={() => onClick(navigation, i)} className={`documentation-navigation-item ${navigation.target && navigation.target == active && window.innerWidth > 991 ? "active" : ""}`}>
            <div>{navigation.icon && <Icon variant={navigation.icon} />}{navigation.name}</div>{navigation.subs && <Icon className={`documentation-navigation-item-toggler ${collapse == i ? "active" : ""}`} variant="chevron-down" />}
          </div>
          {navigation.subs &&
            <Collapse in={collapse == i}>
              <div>
                {navigation.subs.map((sub, i) => (
                  <div key={`sdc-${i}`} onClick={() => onClick(sub, i)} className={`documentation-navigation-subitem ${sub.target && sub.target == active && window.innerWidth > 991 ? "active" : ""}`}>
                    {sub.name}
                  </div>
                ))}
              </div>
            </Collapse>
          }
        </div>
      ))}
    </div>
  );
}

export default DocumentationNavigation;
import React from "react";
import { Router, Link, Location } from '@reach/router';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import './PseudeRouter.scss';

const PseudoRouter = ({ children, isPause, isDisabledPreloader }) => {

  return (
    <Location>
      {({ location }) => (
        <TransitionGroup className="transition-group">
          <CSSTransition key={location.key} classNames="fade" timeout={isDisabledPreloader ? 0 : 600}>
            <Router location={location} className="router">
              {children}
            </Router>
          </CSSTransition>
        </TransitionGroup>
      )}
    </Location>
  );
}

export default PseudoRouter;
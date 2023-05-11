import React, { useState, useContext, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Scrollbar from 'react-smooth-scrollbar';
import DocumentationNavigation from "../../../components/documentation/DocumentationNavigation";
import DocumentationContent from "../../../components/documentation/DocumentationContent";
import Search from "../../../components/search";
import Icon from "../../../components/icon";

import "./DocumentationViewer.scss"

const DocumentationViewer = ({ isVisible, page }) => {

  const [activeSection, setActiveSection] = useState(0);
  const [link, setLink] = useState(null)
  const scrollB = useRef();
  const [activeSidebar, setActiveSidebar] = useState(false);

  const onVisible = (e, i) => {
    if (e) setActiveSection(i);
  }

  return (
    <div className={`documentation-viewer ${isVisible ? "active" : ''}`}>
      <Container fluid>
        <Row>
          <Col className="documentation-sidebar-w border-right pl-4 pr-0 h-md-auto">
            <div className={`documentation-sidebar ${activeSidebar ? "active" : ""}`}>
              <Scrollbar className="scoll-bar">
                <div className={`documentation-sidebar-toggler ${activeSidebar ? "active" : ""}`} onClick={() => setActiveSidebar(!activeSidebar)}><Icon variant="chevron-right" /></div>
                <Search data={page.documentation} onSelect={(e) => { setLink(e); setActiveSidebar(false) }} />
                <DocumentationNavigation onLinkClick={() => setActiveSidebar(false)} link={link} scroll={scrollB} navigations={page.navigation} active={activeSection} />
              </Scrollbar>
            </div>
          </Col>
          <Col className="documentation-content-w">
            <div className="documentation-viewer-content">
              <Scrollbar className="scoll-bar" ref={scrollB}>
                <DocumentationContent data={page} onVisible={onVisible} />
              </Scrollbar>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default DocumentationViewer;
import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Collapse, Button, Tabs, Tab, Nav } from "react-bootstrap";
import { settings } from "../../../data/settings";
import BlockCase from "../../../components/blocks/blockcase";
import { Context } from "../../../context/context";
import { filterIt } from "../../../utils/scripts";

import "./NewsViewer.scss";

const NewsViewer = ({ isVisible, page }) => {

  const [searchValue, setSearchValue] = useState("");
  const [filtered, setFiltered] = useState(page.list.sort(function (a, b) { return new Date(b.date) - new Date(a.date); }));
  const { dispatchModals } = useContext(Context);
  const [limitNews, setLimitNews] = useState(8);
  const [limitPress, setLimitPress] = useState(8);
  const [limitArticle, setLimitArticle] = useState(8);
  const [limitAwards, setLimitAwards] = useState(8);

  useEffect(() => {
    let temp = page.list;

    setFiltered(temp);

  }, [searchValue])

  const renderNews = (type) => {
    switch (type) {
      case "article":
        return <Container fluid className="p-0">
          <Row>
            {filterIt(page.list, "article", "type").map((item, i) => (
              i < limitArticle &&
              <Col atr={`${i}`} key={`bai-${i}`} md={6} onClick={() => { }}>
                <BlockCase variant="simple-news" data={item} />
              </Col>
            ))}
          </Row>
        </Container>
      case "awards":
        return <Container fluid className="p-0">
          <Row>
            {filterIt(page.list, "awards", "type").map((item, i) => (
              i < limitAwards &&
              <Col atr={`${i}`} key={`bai-${i}`} md={6} onClick={() => { }}>
                <BlockCase variant="simple-news" data={item} />
              </Col>
            ))}
          </Row>
        </Container>
      case "press-releases":
        return <Container fluid className="p-0">
          <Row>
            {filterIt(page.list, "press-release", "type").map((item, i) => (
              i < limitPress &&
              <Col key={`bpi-${i}`} md={6} onClick={() => { }}>
                <BlockCase variant="simple-news" data={item} />
              </Col>
            ))}
          </Row>
        </Container>
      case "news":
      default:
        return <Container fluid className="p-0">
          <Row>
            {filterIt(page.list, "news", "type").map((item, i) => (
              i < limitNews &&
              <Col key={`bni-${i}`} md={6} onClick={() => { }}>
                <BlockCase variant="simple-news" data={item} />
              </Col>
            ))}
          </Row>
        </Container>
    }
  }

  return (
    <div className={`use-cases ${page.className ? page.className : ""} mb-5 ${isVisible ? "active" : ''}`}>
      <Container>
        <Row>
          <Col md={12}>
            <Tab.Container id="news-tabs" defaultActiveKey="news">
              <Row className="pt-3">
                <Col lg={12}>
                  <Nav className="tabs-simple-link">
                    <Nav.Item>
                      <Nav.Link eventKey="news">{settings.texts.IntheNews}</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="press-releases">{settings.texts.PressRoom}</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="article">{settings.texts.ThoughtLeadership}</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="awards">{settings.texts.AwardsandRecognition}</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                {/* <Col lg={8}>
                  <div className="pb-2 pb-md-0 pt-lg-0 pt-4 h-100">
                    <Search value={searchValue} onChange={onSearchChange} onSetValue={(value) => { setSearchValue(value.description); }} data={page.list} onClear={onClearSearch} placeholder={page.search.label} searchField="description" variant="news" />
                  </div>
                </Col> */}
              </Row>
              <Row>
                <Col md={12}>
                  <Tab.Content>
                    <Tab.Pane eventKey="news">
                      {renderNews("news")}
                      <Col md={12}>{limitNews < 100 && filterIt(filtered, "news", "type").length > limitNews && <Button className="w-100 mb-5 mt-4" onClick={() => setLimitNews(1000)}>{settings.texts.ViewMore}</Button>}</Col>
                    </Tab.Pane>
                    <Tab.Pane eventKey="press-releases">
                      {renderNews("press-releases")}
                      <Col md={12}>{limitPress < 100 && filterIt(filtered, "press-releases", "type").length > limitPress && <Button className="w-100 mb-5 mt-4" onClick={() => setLimitPress(1000)}>{settings.texts.ViewMore}</Button>}</Col>
                    </Tab.Pane>
                    <Tab.Pane eventKey="article">
                      {renderNews("article")}
                      <Col md={12}>{limitArticle < 100 && filterIt(filtered, "article", "type").length > limitArticle && <Button className="w-100 mb-5 mt-4" onClick={() => setLimitArticle(1000)}>{settings.texts.ViewMore}</Button>}</Col>
                    </Tab.Pane>
                    <Tab.Pane eventKey="awards">
                      {renderNews("awards")}
                      <Col md={12}>{limitAwards < 100 && filterIt(filtered, "awards", "type").length > limitAwards && <Button className="w-100 mb-5 mt-4" onClick={() => setLimitAwards(1000)}>{settings.texts.ViewMore}</Button>}</Col>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NewsViewer;
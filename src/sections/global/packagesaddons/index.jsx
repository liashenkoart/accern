import React, { useState, useContext } from "react";
import { Container, Row, Col, Collapse, Table } from "react-bootstrap";
import Icon from "../../../components/icon";
import { Link } from "@reach/router";
import LinkAdv from "../../../components/linkadv";

import "./PackagesAddons.scss"

const PackagesAddons = ({ isVisible, page }) => {

  const [active, setActive] = useState(null);

  return (
    <div className={`packages-addons sect-spacer ${page.addons.className ? page.addons.className : ''} ${isVisible ? "active" : ''}`}>
      <Container>
        <Row>
          <Col md={12}>
            <div>
              {page.addons.label && <div className="text-label"><span>{page.addons.label}</span></div>}
              {page.addons.title && <h2 className={`${page.addons.titleCL ? page.addons.titleCL : "mw-440"} mb-d`}>{page.addons.title}</h2>}
              {page.addons.description && <p className="mb-5 mw-540  text-medium">{page.addons.description}</p>}
              {page.addons.link && <LinkAdv variant="link" data={page.addons.link} />}
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="custom-collapse without-padding">
              {page && page.addons.list.map((addon, i) => (
                <div key={`addon-${i}`} className={`custom-collapse-item ${active == i ? "active" : ""}`}>
                  <div className="custom-collapse-label text-uppercase fw-500" onClick={() => setActive(i == active ? null : i)}><Icon variant="chevron-right" />{addon.name}</div>
                  <Collapse in={active == i}>
                    <div>
                      <div className="custom-collapse-content pr-0 pb-0">
                        {addon.isUnits &&
                          <div className="bg-primary-cover custom-collapse-negative">
                            <Container className="p-0" fluid>
                              <Row>
                                <Col md={6} className="text-center text-md-left pt-3 pb-3"><span className="text-primary" dangerouslySetInnerHTML={{ __html: page.pricing.packages.unitsDescription }}></span></Col>
                                <Col md={6} className="text-center text-md-right pb-3 pt-3"><span className="text-small" dangerouslySetInnerHTML={{ __html: page.pricing.packages.unitsNotification }}></span></Col>
                              </Row>
                            </Container>
                          </div>
                        }
                        {addon.table &&
                          <Table className={`table-${addon.table ? addon.table.type : ""}`} responsive>
                            {addon.table.head &&
                              <thead>
                                <tr>
                                  {addon.table.head.map((h, i) => (
                                    <th key={`th-${i}`} className={`${h.className ? h.className : ""}`} width={`${h.width ? h.width : ""}`} dangerouslySetInnerHTML={{ __html: h.name }}></th>
                                  ))}
                                </tr>
                              </thead>
                            }
                            <tbody>
                              {addon.table.body.map((r, i) => (
                                <tr key={`tri-${i}`}>
                                  {r.map((c, i) => (
                                    <td key={`tc-${i}`} width={`${c.width ? c.width : ""}`} className={`${c.className ? c.className : ""}`}>
                                      {c.link ? <LinkAdv variant="link-simple" data={c.link} />
                                        :
                                        c.content && <span dangerouslySetInnerHTML={{ __html: c.content }}></span>
                                      }
                                      {c.icon && <Icon variant={c.icon} />}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </Table>
                        }
                        {addon.description && <div className="pb-4 pr-2"><span className="text-small text-gray">{addon.description}</span></div>}
                      </div>
                    </div>
                  </Collapse>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PackagesAddons;
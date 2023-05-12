import React, { useContext } from "react";
import { Modal, Container, Row, Col } from "react-bootstrap";
import FormComp from "../../form";
import { settings } from "../../../data/settings";
import Icon from "../../icon";
import { Link } from "@reach/router";
import { Context } from "../../../context/context";
import { filterIt } from "../../../utils/scripts";

import "./RequestAccess.scss";

const RequestAccess = ({ }) => {

  const { modals, dispatchModals } = useContext(Context);

  const getIcon = (name) => {
    const industry = filterIt(settings.industries, name, "name");

    return industry.length > 0 ? industry[0].icon : "";
  }

  return (
    <Modal className="modal-custom" show={modals.isRequestAccess} onHide={() => dispatchModals({ type: "SET_MODALS", data: { isRequestAccess: false } })} size="xl" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body>
        <div className="modal-close" onClick={() => dispatchModals({ type: "SET_MODALS", data: { isRequestAccess: false } })}><Icon className="text-dark" variant="icon-close" /></div>
        <Container>
          <Row>
            <Col lg={5} className="bg-white position-relative">
              <div className={`modal-bg ${modals.data && modals.data.variant ? modals.data.variant : ""}`}></div>
              <div className="request-access-details">
                <div className="z-1">
                  {modals.data && modals.data.industry && <div className="preset-icon-lg text-white"><Icon variant={getIcon(modals.data.industry)} /></div>}
                  {modals.data && modals.data.name && <h3 className="mt-4">{modals.data.name}</h3>}
                  {modals.data && modals.data.description && <p className="mb-4 request-access-details-description">{modals.data.description}</p>}
                  {modals.data && modals.data.industry && <div className="mb-4"><span className="request-access-details-label">{settings.texts.Industry}</span><p className="request-access-details-detail">{modals.data.industry}</p></div>}
                  {modals.data && modals.data.solution && <div className="mb-4"><span className="request-access-details-label">{settings.texts.Solution}</span><p className="request-access-details-detail">{modals.data.solution}</p></div>}
                  {modals.data && modals.data.workflow && <div className="mb-4"><span className="request-access-details-label">{settings.texts.Workflow}</span><p className="request-access-details-detail">{modals.data.workflow}</p></div>}
                </div>
              </div>
            </Col>
            <Col lg={7} className="modal-padding bg-white">
              <FormComp from="Use Cases" data={{
                ...settings.requestAccess.form, label: modals.data && modals.data.name && modals.data.name, additional: modals.data && modals.data.name ? `<b>${settings.texts.UseCase}:</b>${modals.data.name} (${modals.data.id})<br><b>${settings.texts.Industry}:</b>${modals.data.industry}<br><b>${settings.texts.Solution}:</b>${modals.data.solution}<br><b>${settings.texts.Role}:</b>${modals.data.role}<br><b>${settings.texts.Producer}:</b>${modals.data.producer}<br>` : ""
              }} />
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal >
  );
}

export default RequestAccess;
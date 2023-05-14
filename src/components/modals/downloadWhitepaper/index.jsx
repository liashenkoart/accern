import React, { useContext } from "react";
import { Modal, Container, Row, Col } from "react-bootstrap";
import FormComp from "../../form";
import { settings } from "../../../data/settings";
import Icon from "../../icon";
import { Context } from "../../../context/context";

const DownloadFile = ({ }) => {

  const { modals, dispatchModals } = useContext(Context);

  const onContactSent = () => {
    window.open(`./assets/files/${modals.data.url}`);
  }

  return (
    <Modal className="modal-custom" show={modals.isDownloadWhitepaper} onHide={() => dispatchModals({ type: "SET_MODALS", data: { isDownloadWhitepaper: false } })} size="xl" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body>
        <div className="modal-close" onClick={() => dispatchModals({ type: "SET_MODALS", data: { isDownloadWhitepaper: false } })}><Icon className="text-dark" variant="icon-close" /></div>
        <Container>
          <Row>
            <Col lg={6} className="bg-white d-flex align-items-center modal-padding">
              <div className="z-1">
                <div>
                  {modals.data && modals.data.modal.label && <div className="text-label text-primary"><span>{modals.data.modal.label} {settings.downloadWhitepaper.label}</span></div>}
                  {modals.data && modals.data.modal.for && <div className="text-light-gray"><span>{modals.data.modal.for}</span></div>}
                  {modals.data && modals.data.modal.title && <h2 className="mb-4">{modals.data.modal.title}</h2>}
                  {modals.data && modals.data.modal.description && <p className="text-small-light mw-500 mb-0">{modals.data.modal.description}</p>}
                </div>
              </div>
            </Col>
            <Col lg={6} className="modal-padding bg-white">
              <FormComp from="Download whitepaper" data={{ ...settings.downloadWhitepaper.form, additional: modals.data && modals.data.url ? modals.data.url : "" }} onCompleted={() => onContactSent()} />
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default DownloadFile;
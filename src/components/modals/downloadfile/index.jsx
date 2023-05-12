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
    <Modal className="modal-custom" show={modals.isDownloadFile} onHide={() => dispatchModals({ type: "SET_MODALS", data: { isDownloadFile: false } })} size="xl" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body>
        <div className="modal-close" onClick={() => dispatchModals({ type: "SET_MODALS", data: { isDownloadFile: false } })}><Icon variant="icon-close" /></div>
        <Container>
          <Row>
            <Col lg={7} className="modal-padding bg-white">
              <FormComp from="Home page" data={{...settings.downloadCaseStudy.form, additional: modals.data && modals.data.url ? modals.data.url : ""}} onCompleted={() => onContactSent()} />
            </Col>
            <Col lg={5} className="position-relative bg-primary d-none d-lg-flex align-items-end p-3 pt-5 pb-5 p-md-5">
              <div className="shape-blue"></div>
              <div className="z-1">
                <div>
                  {modals.data && modals.data.modal.label && <div className="text-label text-light"><span>{modals.data.modal.label}</span></div>}
                  {modals.data && modals.data.modal.title && <h2 className="text-light mb-4">{modals.data.modal.title}</h2>}
                  {modals.data && modals.data.modal.description && <p className="text-small mw-400 text-light op-07">{modals.data.modal.description}</p>}
                </div>
                <div className="mt-request">
                  <div className="d-flex justify-content-between flex-wrap">
                    {modals.data && modals.data.stats.map((stat, i) => (
                      <div key={`si-${i}`}>
                        <div className="text-title-el-white-md">{stat.value}</div>
                        <div className="text-white mw-100p text-tiny op-07">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default DownloadFile;
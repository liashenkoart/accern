import React, { useContext } from "react";
import { Modal, Container, Row, Col } from "react-bootstrap";
import Icon from "../../icon";
import { Context } from "../../../context/context";

const Video = ({ }) => {

  const { modals, dispatchModals } = useContext(Context);

  return (
    <Modal className="modal-custom video" show={modals.isVideo} onHide={() => dispatchModals({ type: "SET_MODALS", data: { isVideo: false } })} size="xl" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body>
        <div className="modal-close circle-over" onClick={() => dispatchModals({ type: "SET_MODALS", data: { isVideo: false } })}><Icon variant="icon-close" /></div>
        <Container>
          <Row>
            <Col lg={12}>
              <iframe style={{width: "100%", height: "70vh"}} src={modals.data.url} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default Video;
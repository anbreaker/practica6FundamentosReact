import React, {useState} from 'react';
import {Button, Modal} from 'react-bootstrap';

function ModalComponent(props) {
  const {deleteAdById} = props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <React.Fragment>
      <Button className="btn btn-danger mt-4 mb-4" onClick={handleShow}>
        Delete Advert
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Advert!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to remove the ad?</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            No, Close
          </Button>
          <Button variant="danger" onClick={deleteAdById}>
            Yes, Delete!
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}

export default ModalComponent;

import React from 'react'
import Modal from 'react-bootstrap/Modal';

const Modal_Preview = (props) => {
 
    return (
      <Modal show={props.show}    size="xl"  centered >
      <Modal.Header >
        <span className="close_btn" onClick={props.handleClose}  ><i className="bi bi-x-lg"></i></span>
      </Modal.Header>
      <Modal.Body>
      <img src={props.src} width="auto" className="card-img-top " alt="..."/>
      </Modal.Body>
    </Modal>
    
    )
}

export default Modal_Preview

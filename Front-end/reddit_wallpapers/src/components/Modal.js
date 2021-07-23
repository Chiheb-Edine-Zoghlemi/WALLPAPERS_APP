import React from 'react'

const Modal = () => {
    return (
    <div className="modal fade" id="preview" data-bs-backdrop="preview" data-bs-keyboard="false"  aria-labelledby="preview" aria-hidden="true">
    <div className="modal-dialog modal-xl">
      <div className="modal-content">
        <div className="modal-header">
          <a data-bs-dismiss="modal" aria-label="Close" ><i className="bi bi-x-lg"></i></a>
        </div>
        <div className="modal-body">
          <img loading="lazy"  src="https://raw.githubusercontent.com/Chiheb-Edine-Zoghlemi/Wall_papers/main/anomaly-by-tobias-roetsch-1920%C3%971080.jpg" width="auto" className="card-img-top  "/>
        </div>
        
      </div>
    </div>
  </div>
    )
}

export default Modal

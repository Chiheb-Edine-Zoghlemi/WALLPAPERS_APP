import React from 'react'
//import {Form} from 'react-bootstrap'
export const Footer = () => {
    return (
        <footer className="">
        <div className="container-fluid pt-2 ">
          <div className="row mt-2 mb-2">
            <div className="col-6  mt-2 mb-2">
             Powered   by   
            <a href="mailto:chihebedine.zoghlemi@gmail.com"    > Zoghlemi Chiheb Edine </a> © 
            </div>
            
          </div>
        </div>
      </footer>
    )
}

/*
            <div className='col-6 d-flex justify-content-around'>
             <span><Form.Control type="text" placeholder="You Email" /> </span>
            <button className='btn more_data'> subscripe</button>
            </div>
*/
export default Footer;
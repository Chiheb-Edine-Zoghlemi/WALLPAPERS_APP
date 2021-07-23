import React from 'react'
import { useState } from 'react';

const Card = (props) => {

  const [loaded, setLoaded] = useState(false);

  
 
    return (
        <div  style={loaded ? {} : { display: 'none' }} id={'card_item'+props.card[0]}  className="col-sm-12 col-md-6  col-lg-4 ">
          <div className="card " style={{'width': '85%'}}>
          <img   src={props.card[1]} className="card-img-top  show_card" alt="..."  onLoad={() => setLoaded(true)}/>
          <div className="card-body ">
            <p className='d-flex justify-content-between'>
            <span className='p-2 d-flex justify-content-around'>
             <span className='p-2' ><i className="bi bi-eye"></i> {props.card[3]}     </span>
             <span className='p-2' ><i className="bi bi-download"></i> {props.card[4]} </span>
            </span>
          
             <span className='p-2 d-flex justify-content-around'>
            <span     onClick={() => {
              props.sendDataToParent(props.card[1]);
            }}  className='p-2'><i className="bi bi-box-arrow-up "></i></span>
            <span    className='p-2' data-bs-toggle="modal" data-bs-target="#preview" ><i className="bi bi-zoom-in"></i></span>
            <span    className='p-2' ><i className="bi bi-cloud-download"></i></span>
            </span>
            </p>
          </div>
        </div>    
      </div>
    )
}

export default Card

import React from 'react'
import { useState  } from 'react';
import axios from 'axios'
const Card = (props) => {
  const [loaded, setLoaded] = useState(false);
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null ;
    axios.get('/wallpapers/download/'+props.card[0], {
      headers: {
        'x-access-tokens': window.token
      }}
    ).then(response =>  {
      add_view();
      props.setdownload(!props.download);
    }
    );
   
  }
  const add_view = () => {
    axios.get('/wallpapers/view/'+props.card[0] , {
      headers: {
        'x-access-tokens': window.token
      }}
      ).then(response =>  {
    });
  }
  
 
    return (
        <div  style={loaded ? {} : { display: 'none' }} id={'card_item'+props.card[0]}  className="col-sm-12 col-md-6  col-lg-4 show_card ">
          <div className="card " style={{'width': '85%'}}>
          <img  onClick={() => {
              add_view();
              props.openModal(props.card[1]);
            }}  src={props.card[1]} className="card-img-top " alt="..."  onLoad={() => setLoaded(true)}/>
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
           
           <span    className='p-2' onClick={ () => {openInNewTab(props.card[1])}} ><i className="bi bi-cloud-download"></i></span>
            </span>
            </p>
          </div>
        </div>    
      </div>
    )
}
/* 
 <span    className='p-2'   onClick={() => {
              add_view();
              props.openModal(props.card[1]);
            }}><i className="bi bi-zoom-in"></i></span>
*/
export default Card

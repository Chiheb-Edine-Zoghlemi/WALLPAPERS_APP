
import './App.css';
import Header from './components/Header'
import Footer  from './components/Footer';
import Card from './components/Card';
import Cover from './components/Cover';
import Modal_Preview from './components/Modal';
import { useEffect,useState } from 'react';
import $ from 'jquery';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

function App() {
  const [covr_url, setcovr_url] = useState('https://raw.githubusercontent.com/Chiheb-Edine-Zoghlemi/Wall_papers/main/sinister-shack-image-1920%C3%971080.jpg');
 
  const sendDataToParent = (url) => { 
    setcovr_url(url);
    go_up();
  };
  const loadMoreWallpapers = () => { 
    setPage(page+9);
  }

  const [modal_url, setmodal_url] = useState(null);
  
  
  const [show, setShow] = useState(false);

  const openModal = (src) => {
    setShow(true);
    setmodal_url(src)
  }
  const handleClose = () => setShow(false)

  const go_up = () => {
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  }
  const go_down = () => {
    window.scrollTo({
      top:  document.body.scrollHeight, 
      behavior: 'smooth'
    });
  }
  const scrollFunction= () => {
    const scrolled = document.documentElement.scrollTop;
  if (scrolled > 30 ) {
    $("#myBtn").fadeIn(500);
  } else {
    $("#myBtn").fadeOut(500);
  }
  if (scrolled >   (document.body.scrollHeight -1200)) {
    $("#myBtn2").fadeOut(500);
  } else {
    $("#myBtn2").fadeIn(500);
  
  }

}
window.addEventListener('scroll', scrollFunction);

  const [page, setPage] = useState(10);
  const [Data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [download, setdownload] = useState(false);
 

    useEffect(() => {
      console.log(Data)
      const loadData = async () => {
        try {
          setIsLoading(true);
          const response = await axios.get(
            `/wallpapers?arg=${page}`, {
              headers: {
                'x-access-tokens': window.token 
              }}
          );
    
          setData([...response.data]);
          
        } catch (error) {
          console.warn(error)
        } finally {
          setIsLoading(false);
        }
      };
     
      loadData();
      
    }, [page,show,download]);
    




  return (
    <Router>
    <div className="App" >
      <Header/>
      
      <Switch>
      <Route exact path="/">
      <Cover cover={covr_url}/>
      <main className="m-5">
      <div className="container-fluid">
        <hr className=" mt-5 " />
       
        <div className="row">
            { Data ? Data.map((c, index) => (
            <Card download={download} setdownload={setdownload} openModal={openModal}  card={c} key={index} sendDataToParent={sendDataToParent} />))
              : 
              <div className="col-12 text-center"> <h4>No Data Found</h4> </div>
          }
        </div>
         
        <div className="row">
          <div className="col-12 text-center mt-5 mb-4">
            { isLoading ? <h4 id="is_loading" style={{'color':'var(--text)'}}>Loading<span >.</span> <span>.</span> <span>.</span> </h4>   : <button className={'btn more_data'}  onClick={()=>{loadMoreWallpapers();}} > Load More</button> }
          </div>
        </div>
      </div>
    </main>
    <button  className='btn  myBtn' onClick={()=>{go_up()}}  id="myBtn">
      <span className='d-flex flex-column'>
        <i className="bi bi-chevron-up"></i>
      <i className="bi bi-chevron-up "></i>
      <i className="bi bi-chevron-up "></i>
      </span>
    </button>
    <button  className='btn  myBtn2'  onClick={()=>{go_down()}} id="myBtn2">
      <span className='d-flex flex-column'>
        <i className="bi bi-chevron-down"></i>
      <i className="bi bi-chevron-down "></i>
      <i className="bi bi-chevron-down "></i>
      </span>
    </button>
      </Route>
      <Route path='*'> 
      <div className="container-fluid" id='notfound'>
        <div className="row mt-5 mb-5">
          <div className='col-12 text-center'>
          <h1 className='notfound' style={{'color':'var(--text)'}} >4<span style={{'color':'var(--theme)'}}>0</span>4</h1>
          <span className='notfound' style={{'color':'var(--text)'}} >The requested Page is not found</span>
          </div>
        </div>
      </div>
       </Route>
    </Switch>
      <Footer/>
      <Modal_Preview handleClose={handleClose} show={show} src={modal_url}/>
    </div>
    </Router>
  );
}

export default App;


import './App.css';
import Header from './components/Header'
import Footer  from './components/Footer';
import Card from './components/Card';
import Cover from './components/Cover';
import Modal from './components/Modal';
import { useEffect,useState } from 'react';
import $ from 'jquery';

function App() {
  const [covr_url, setcovr_url] = useState('https://raw.githubusercontent.com/Chiheb-Edine-Zoghlemi/Wall_papers/main/anomaly-by-tobias-roetsch-1920%C3%971080.jpg');
  const sendDataToParent = (url) => { 
    setcovr_url(url);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  const loadMoreWallpapers = () => { 
    setPage(Data.length);
  }

  

  const go_up = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  const scrollFunction= () => {
    
  
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    $("#myBtn").fadeIn(800);
  } else {
    $("#myBtn").fadeOut(800);
  }
}

  window.addEventListener('scroll', scrollFunction);
  const [page, setPage] = useState(0);
  const [Data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

 

    useEffect(() => {
      fetch(
        `http://localhost:5000/wallpapers?arg=${page}`,
        {
          method: "GET"
        }
      )
        .then(res => res.json())
        .then(response => {
          //console.log(response)
          setData([...Data,...response]);
          setIsLoading(false);
        })
        .catch(error => console.log(error));
    }, [page]);




  return (
    <div className="App" >
      <Header/>
      <Cover cover={covr_url}/>
      <main className="m-5">
      <div className="container-fluid">
        <hr className=" mt-5 " />
       
        <div className="row">
            { Data ? Data.map((c, index) => (
            <Card   loaded={Data.length} card={c} key={index} sendDataToParent={sendDataToParent} />))
              : 
              <div className="col-12 text-center"> <h4>No Data Found</h4> </div>
          }
        </div>
         
        <div className="row">
          <div className="col-12 text-center">
            { isLoading ? <span>Loading...</span>   : <button className={'btn more_data'}  onClick={loadMoreWallpapers} > Load More</button> }
          </div>
        </div>
      </div>
    </main>
    <button  className='btn  myBtn' onClick={go_up}  id="myBtn">
      <span className='d-flex flex-column'>
        <i className="bi bi-chevron-up"></i>
      <i className="bi bi-chevron-up "></i>
      <i className="bi bi-chevron-up "></i>
      </span>
  
    

    </button>
      <Footer/>
      <Modal/>
    </div>
  );
}

export default App;

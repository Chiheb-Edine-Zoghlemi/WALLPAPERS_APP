import React from 'react'
import { useState } from 'react';
import $ from 'jquery';

export const Header = () => {
   const [color, setcolor] = useState('#ff4500');
   let root = document.documentElement;
    const theme_changed =(e) => {
        root.style.setProperty('--theme', document.getElementById('color_theme').value);
        setcolor(document.getElementById('color_theme').value); 
    }
    const [bg, switch_bg] = React.useState('bi bi-moon-stars');
    const [iter, setiter] = React.useState(0);
    const change_bg =(e) => {
    $("#bg_theme").fadeOut();
    if ( iter % 2 === 0 ) {
        root.style.setProperty('--text','#2d3939' );
        root.style.setProperty('--background','#fff' );
        switch_bg('bi bi-brightness-high');
        $('body').animate({backgroundColor:'#fff'}, 1000); 
       
    }else {
        root.style.setProperty('--text','#fff' );
        root.style.setProperty('--background', '#2d3939' );
        switch_bg('bi bi-moon-stars');
        $('body').animate({height: "300px"});
        $('body').animate({backgroundColor:'#2d3939'}, 1000); 
    }
    $("#bg_theme").fadeIn("slow");
    setiter(iter+1);
      
    }
      
    return (
        <nav className="navbar   navbar-expand-lg navbar-light   ">
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <i className="bi bi-list" ></i>
              </button>
              <span className="navbar-brand ">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="40"
                  viewBox="0 0 510.644 510.644"  >
                <g transform="translate(0 1)">
                  <path style={{fill:'var(--theme)'}} d="M254.02,84.424c-40.786,0.868-81.573,16.488-111.078,34.712
                    c-6.942-6.942-17.356-10.414-27.769-10.414c-22.563,0-41.654,18.224-41.654,41.654c0,14.753,7.81,28.637,19.959,35.58
                    c-0.868,3.471-0.868,7.81-0.868,12.149c0,29.505,17.356,57.275,48.597,78.102c10.414,6.942,20.827,12.149,32.976,16.488
                    c-23.431,11.281-39.919,38.183-39.919,69.424c0,35.58,20.827,65.085,48.597,72.895c2.603,6.942,4.339,13.017,6.942,19.092
                    c-0.868,0-2.603,0-3.471,0c-25.166,0-46.861,17.356-46.861,38.183c0,3.471,0.868,8.678,1.736,13.017
                    c2.603,2.603,5.207,4.339,8.678,4.339h210.007c3.471,0,6.075-1.736,6.942-5.207c0.868-3.471,0-9.546,0-12.149
                    c0-20.827-18.224-38.183-43.39-38.183c-0.868,0-1.736,0-2.603,0c2.603-6.075,5.207-13.017,6.942-19.092
                    c27.77-7.81,48.597-37.315,48.597-72.895c0-31.241-16.488-58.142-39.919-69.424c12.149-4.339,22.563-10.414,32.976-16.488
                    c31.241-20.827,48.597-48.597,48.597-78.102c0-4.339,0-7.81-0.868-12.149c12.149-6.942,19.959-20.827,19.959-35.58
                    c0-22.563-18.224-41.654-41.654-41.654c-10.414,0-19.959,4.339-27.77,10.414C340.8,101.78,301.749,86.16,262.698,84.424H254.02
                    L254.02,84.424z"/>
                  <g>
                    <path style={{fill:'var(--background)'}} d="M227.987,179.882c0-14.753-11.281-26.034-26.034-26.034s-26.034,11.281-26.034,26.034
                      s11.281,26.034,26.034,26.034C216.705,205.915,227.987,194.634,227.987,179.882"/>
                    <path style={{fill:'var(--background)'}} d="M332.122,179.882c0-14.753-11.281-26.034-26.034-26.034c-14.753,0-26.034,11.281-26.034,26.034
                      s11.281,26.034,26.034,26.034C320.841,205.915,332.122,194.634,332.122,179.882"/>
                    <path style={{fill:'var(--background)'}}d="M254.02,266.661c-23.431,0-45.993-7.81-58.142-19.959c-3.471-3.471-3.471-8.678,0-12.149
                      c3.471-3.471,8.678-3.471,12.149,0c6.942,6.942,22.563,14.753,45.993,14.753s39.051-7.81,45.993-14.753
                      c3.471-3.471,8.678-3.471,12.149,0c3.471,3.471,3.471,8.678,0,12.149C300.014,258.851,277.451,266.661,254.02,266.661z"/>
                  </g>
                  <g>
                    <path style={{fill:'var(--theme)'}} d="M254.02,93.102c-0.868,0-1.736,0-2.603,0c-4.339-1.736-6.942-6.075-6.075-10.414l21.695-72.895
                      c2.603-7.81,10.414-12.149,18.224-10.414l61.614,17.356c4.339,1.736,6.942,6.075,6.075,10.414
                      c-1.736,4.339-6.075,6.942-10.414,6.075l-59.01-17.356l-20.827,71.159C260.963,90.499,257.492,93.102,254.02,93.102z"/>
                    <path  style={{fill:'var(--theme)'}} d="M410.224,41.034c0-19.092-15.62-34.712-34.712-34.712c-19.092,0-34.712,15.62-34.712,34.712
                      s15.62,34.712,34.712,34.712C394.604,75.746,410.224,60.126,410.224,41.034"/>
                  </g>
                  <path style={{fill:'transparent'}} d="M268.773,466.254h-26.034c-23.431-13.885-40.786-57.275-40.786-110.21
                    c0-12.149,0.868-24.298,2.603-35.58c15.62,4.339,32.976,6.942,51.2,6.942s34.712-2.603,51.2-6.942
                    c1.736,11.281,2.603,23.431,2.603,35.58C309.559,408.98,292.203,452.37,268.773,466.254"/>
                </g>
                </svg>
                <span className="tracking-in-expand">  <span>R</span>eddit-<span>W</span>allpapers  </span>
              </span>
              
              <div className="collapse navbar-collapse " id="navbarTogglerDemo02">
                
                <ul className="navbar-nav ms-auto" >
                  <li>
                    <input onChange={theme_changed} type="color" className="form-control form-control-color" id="color_theme" value={color}  title="Choose your color"/>   
                    <span className="d-lg-none   d-sm-inline ">&nbsp;Theme</span> 
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " id="theme" onClick={change_bg}>
                      <i className={bg} id="bg_theme"></i>
                  </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link"  href="https://www.facebook.com/ChihebEdineZoghlemi/" rel="noopener noreferrer" target="_blank" ><i className="bi bi-facebook" ></i> <span className="d-lg-none   d-sm-inline ">&nbsp;Facebook</span> </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="https://github.com/Chiheb-Edine-Zoghlemi" rel="noopener noreferrer"  target="_blank" ><i className="bi bi-github"></i><span className="d-lg-none  d-sm-inline ">&nbsp;Github</span> </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="https://www.linkedin.com/in/chihebedinezoghlemi/"  rel="noopener noreferrer"  target="_blank" ><i className="bi bi-linkedin"></i ><span className="d-lg-none   d-sm-inline ml-5">&nbsp;Linkedin</span> </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
    
    )
}

export default Header;

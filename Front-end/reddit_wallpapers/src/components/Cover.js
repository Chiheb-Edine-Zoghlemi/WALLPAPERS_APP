import React from 'react'

const Cover = (props) => {
    return (
        <div  id="cover"  className=" h-100 d-flex justify-content-center align-items-center" style={{'backgroundImage': "url("+props.cover+")" }} >
        <div className="text-right" style={{'color': '#fff'}}>
            <h1>Reddit Wallpapers</h1> 
            <span>Where everything is beautiful and free</span>
        </div>
      </div>
    )
}

export default Cover

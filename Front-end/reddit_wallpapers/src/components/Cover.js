import React from 'react'

const Cover = (props) => {
    return (  
        <div  id="cover"  className=" h-100 d-flex justify-content-center align-items-center" style={{'backgroundImage': "  linear-gradient(to bottom, rgba(0, 0, 0, 0.75), rgba(127, 140, 141, 0.2)), url("+props.cover+")" }} >
        <div className="text-center w-50" style={{'color': '#fff'}}>
            <h1>Reddit Wallpaper Collection</h1> 
            <span>
            This wallpaper collection is delivered by <strong>Chiheb Edine Zoghlemi</strong>,
            the Wallpapers are collected from different sources and sub reddits with the help of bots and crawlers.
            </span>
        </div>
      </div>
    )
}

export default Cover

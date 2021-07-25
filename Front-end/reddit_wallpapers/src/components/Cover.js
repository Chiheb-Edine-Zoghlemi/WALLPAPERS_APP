import React from 'react'

const Cover = (props) => {
    return (
        <div  id="cover"  className=" h-100 d-flex justify-content-center align-items-center" style={{'backgroundImage': "url("+props.cover+")" }} >
        <div className="text-right w-50" style={{'color': '#fff'}}>
            <h1>Reddit Wallpaper Collection</h1> 
            <span>
            This wallpaper collection is delivered by <strong>Chiheb Edine Zoghlemi</strong>,
            the Wallpapers are collected from different sources and sub reddits with the help of bots and crawlers.<br></br>
            A free desktop appilication will be available soon,<strong>subscripe with email to get an early access</strong>
            </span>
        </div>
      </div>
    )
}

export default Cover

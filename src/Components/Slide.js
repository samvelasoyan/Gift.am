import React from 'react'

export default function Slide({Background1}){
    return(
        <div className='slide'  style={{background: `url(${Background1}) no-repeat`, backgroundSize: '100%', backgroundOrigin: 'border-box'}}>
            <div className='slide-logo'></div>
            <div className='slide-text'>
                <p>Trust</p>
                <h1>Gift.am</h1>
                <p>Let Gift.am work it's magic to create the perfect gift for your budget</p>
            </div>
        </div>
    )
}
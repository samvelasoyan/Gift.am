import React from 'react';
import Slide from './Slide';
import Background1 from '../images/IMG_14223.jpg'

export default function SlideShow(){
    return(
        <div className='slideShow' >
            <Slide Background1={Background1}/>
        </div>
    )
}
import React from 'react';
import Slide from './Slide';
import Background1 from '../images/background-1.JPEG'

export default function SlideShow(){
    return(
        <div className='slideShow' >
            <Slide Background1={Background1}/>
        </div>
    )
}
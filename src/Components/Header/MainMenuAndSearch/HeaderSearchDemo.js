import React from 'react';

export default function HeaderSearchDemo ({show}){
    return(
        <div className='HeaderSearchDemo'>
            <button className='HeaderSearchDemoButton' onClick={show}>
                <i className="fas fa-search"></i>
            </button>
        </div>
    )
}

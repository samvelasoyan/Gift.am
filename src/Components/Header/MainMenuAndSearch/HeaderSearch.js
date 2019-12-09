import React from 'react';

export default function HeaderSearch (){
        return(
        <div className='HeaderSearch'>
            <form>
                <input type='search' className='HeaderSearchInput' ></input>
                <button className='HeaderSearchButton'>
                    <i className="fas fa-search"></i>
                </button>
            </form>
        </div>
    )
}

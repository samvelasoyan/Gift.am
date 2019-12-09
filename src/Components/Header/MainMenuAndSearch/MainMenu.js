import React from 'react';


export default function MainMenu (){
        return(
        <ul className='MenuUL'>
            <li className='mainMenuList'>
                <a href='#home'>Home</a>
            </li>
            <li className='mainMenuList'>
                <a href='#categories'>Categories</a>
            </li>
            <li className='mainMenuList'>
                <a href='#bestsellers'>Bestsellers</a>
            </li>
            <li className='mainMenuList'>
                <a href='#aboutUs'>About Us</a>
            </li>
        </ul>
    )
}

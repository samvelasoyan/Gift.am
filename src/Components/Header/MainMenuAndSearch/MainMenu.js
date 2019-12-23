import React from 'react';
import { Link } from 'react-router-dom'; 

export default function MainMenu (){
        return(
        <ul className='MenuUL'>
            <li className='mainMenuList'>
                <Link to='/' href='#home'>Home</Link>
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

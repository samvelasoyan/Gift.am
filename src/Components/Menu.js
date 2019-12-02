import React from 'react'

export default function Menu({showSearchBar, animation}) {
    return(
        <div className='menu' style={animation? {transform: 'translateY(0%)'}:{transform: 'translateY(200%)'}}>
            <ul className='list'>
                <li><a href='#Home'>Home</a></li>
                <li><a href='#Categories'>Categories</a></li>
                <li><a href='#Bestsellers'>Bestsellers</a></li>
                <li><a href='#Contact'>About Us</a></li>
                <li><a href='#Search' onClick={showSearchBar}>Search</a></li>
            </ul>
        </div>
    )
}
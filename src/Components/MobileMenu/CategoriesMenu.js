import React,{Component} from 'react';

class Categories extends Component{
    render(){
        return(
        <div className='CategoriesMainMenu'>
            <div className='MobileBackMenu' onClick={this.props.hide}>
                <i className="fas fa-arrow-left"></i>
                <span>Menu</span>
            </div>
            <ul className='CategoiesMenuUL'>
                <li className='CategoriesMenuList'>
                    <a href='#Perfume'>Perfume</a>
                </li>
                <li className='CategoriesMenuList'>
                    <a href='#Jewelery'>Jewelery</a>
                </li>
                <li className='CategoriesMenuList'>
                    <a href='#Flowers'>Flowers</a>
                </li>
                <li className='CategoriesMenuList'>
                    <a href='#Watches'>Watches</a>
                </li>
                <li className='CategoriesMenuList'>
                    <a href='#TeddyBear'>Teddy Bear</a>
                </li>
                <li className='CategoriesMenuList'>
                    <a href='#Beverage'>Beverage</a>
                </li>
                <li className='CategoriesMenuList'>
                    <a href='#Hampers'>Hampers</a>
                </li>
                <li className='CategoriesMenuList'>
                    <a href='#Cakes'>Cakes</a>
                </li>
                <li className='CategoriesMenuList'>
                    <a href='#Ballons'>Ballons</a>
                </li>
            </ul>
        </div>  
        )
    }
}

export default Categories


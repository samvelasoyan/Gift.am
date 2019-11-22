import React,{Component} from 'react';
import Logo from './Logo';
import Search from './Search';

class Header extends Component{
    render(){
        return(
            <header className='header'>
                <Logo/>
                <Search/>
                <div className='register$signin'></div>
            </header>
        )
    }
}
export default Header

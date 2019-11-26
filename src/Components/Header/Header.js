import React,{Component} from 'react';
import Logo from './Logo';
import Search from './Search';
import Account from './Account';

class Header extends Component{
    render(){
        return(
            <header className='header'>
                <Logo/>
                <Search/>
                <Account openLogin={this.props.openLogin}/>
            </header>
        )
    }
}
export default Header

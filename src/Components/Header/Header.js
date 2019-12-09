import React,{Component} from 'react';
import Logo from './Logo';
import Account from './Account';
import MainMenuAndSearch from './MainMenuAndSearch/MainMenuAndSearch';


class Header extends Component{
    render(){
        return(
            <header className='header'>
                <Logo/>
                <MainMenuAndSearch/>
                <Account openAccountMenu={this.props.openAccountMenu}/>
            </header>
        )
    }
}
export default Header

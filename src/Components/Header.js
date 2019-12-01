import React,{Component} from 'react';
import Logo from './Logo';
import Search from './Search';
import Account from './Account';


class Header extends Component{
    render(){
        const isBlur = this.props.AccountMenuBool ? 'header2' : 'header'
        return(
            <header className={isBlur}>
                <Logo/>
                <Search/>
                <Account openAccountMenu={this.props.openAccountMenu}/>
            </header>
        )
    }
}
export default Header

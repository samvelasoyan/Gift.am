import React,{Component,Fragment} from 'react';
import Logo from './Logo';
import Account from './Account';
import MainMenuAndSearch from './MainMenuAndSearch/MainMenuAndSearch';
import MobileHeader from './MobileHeader';

class Header extends Component{

    state={
        width:721
    }

    mobileMenu=()=>{
        if(window.innerWidth < 720){
            return this.setState({width:window.innerWidth})
        }
        else{
            return this.setState({width:721})
        }
    }

    componentDidMount(){
        this.mobileMenu()
    }

    render(){
        window.onresize = this.mobileMenu
        return(
            <header className='header' id='home'>
                {
                    this.state.width < 720 ? 
                    <MobileHeader 
                        openMobileMenu={this.props.openMobileMenu}
                        openAccountMenu={this.props.openAccountMenu} 
                        />
                    :
                    <Fragment>
                        <Logo/>
                        <MainMenuAndSearch loop={this.props.loop}/>
                        <Account 
                            openAccountMenu={this.props.openAccountMenu} 
                            openWishListMenu={this.props.openWishListMenu}
                            openCartMenu={this.props.openCartMenu}
                            />
                    </Fragment>
                }
            </header>
        )
    }
}
export default Header

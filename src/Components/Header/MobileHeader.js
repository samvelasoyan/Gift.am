import React,{Component} from 'react';
import { Link } from "react-router-dom";
import mainLogo from "../../logo.png";

class MobileHeader extends Component{

    render(){
        return(
            <div className="MobileHeaderH">
                <div className="logo">
                    <Link to="/"></Link>
                    <img src={mainLogo} className="App-logo" alt="logo" />
                </div>
                <div className='MobileH MobileSearch'>
                    <i className="fas fa-search"></i>
                </div>
                <div className="MobileH MobileUser" onClick={this.props.openAccountMenu}>
                    <i className="fas fa-user"></i>
                </div>
                <div className="MobileH MobileWishList">
                    <i className="fas fa-heart"></i>
                </div>
                <div className="MobileH MobileCart">
                    <i className="fas fa-shopping-cart"></i>
                </div>
                <div className='MobileH MobileMenuHeader' onClick={this.props.openMobileMenu}>
                    <i className="fas fa-bars"></i>
                </div> 
            </div>
        )
    }
}
export default MobileHeader
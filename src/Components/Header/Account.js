import React,{Component} from 'react';

class Account extends Component{

    render(){

        return(
            <div className='ar'>
            <div className='account' >
                <div className='acc user' onClick={this.props.openAccountMenu}>
                    <i className="fas fa-user"></i>
                    <span>Account</span>                    
                </div>
                <div className='acc wishList'>
                    <i className="fas fa-heart"></i>
                    <span>Wish List</span>
                </div>
                <div className='acc cart'>
                    <i className="fas fa-shopping-cart"></i>
                    <span>Cart</span>
                </div>
            </div>
            </div>
        )
    }
}
export default Account

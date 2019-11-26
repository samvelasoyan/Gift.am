import React,{Component} from 'react';

class Account extends Component{

    render(){

        return(
            <div className='account' onClick={this.props.openLogin}>
                <div className='user'>
                    <i className="fas fa-user"></i>
                    <span>Account</span>                    
                </div>
                <div className='cart'>
                    <i className="fas fa-shopping-cart"></i>
                    <span>Cart</span>
                </div>
            </div>
        )
    }
}
export default Account

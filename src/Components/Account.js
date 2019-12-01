import React,{Component} from 'react';
import Icon from './Icon'

class Account extends Component{

    render(){

        return(
            <div className='account' onClick={this.props.openAccountMenu}>
                <Icon icon='fas fa-user' title='Account'/>
                <Icon icon='fas fa-heart' title='Wish List'/>
                <Icon icon='fas fa-shopping-cart' title='Cart'/>
            </div>
        )
    }
}
export default Account

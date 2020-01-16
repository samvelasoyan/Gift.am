import React, { Component } from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {enterLogInAction, hideLogInAction, popUpAction} from '../../actions/loginRegisterActions'

class Account extends Component {
    state = {
        guestMode: localStorage.getItem('guestMode')
    }

    logIn = () => {
        this.props.enterLogInAction();
        this.props.hideLogInAction();
        this.props.popUpAction();
    };

    render() {
        // console.log(this.props.UMenuRighContent)
        const {guestMode} = this.state
        return (
            <div className="ar">
                <div className="account">
                    <div className="acc user" onClick={()=>this.props.UMenuRighContent('user')}>
                        <i className="fas fa-user"></i>
                        <span>Account</span>
                    </div>
                    <div className="acc wishList" onClick={guestMode === 'off' ? ()=>this.props.UMenuRighContent('wishList') : this.logIn}>
                        <i className="fas fa-heart"></i>
                        <span>Wish List</span>
                    </div>
                    <div className="acc cart" onClick={guestMode === 'off' ? ()=>this.props.UMenuRighContent('cart') : this.logIn}>
                        <i className="fas fa-shopping-cart"></i>
                        <span>Cart</span>
                    </div>
                </div>
            </div>
        );
    }
}
export default connect(
    (state) => {
        return { data: state.getData };
    },
    (dispatch) => {
        return bindActionCreators(
            { popUpAction, enterLogInAction, hideLogInAction },
            dispatch
        );
    }
)(Account);

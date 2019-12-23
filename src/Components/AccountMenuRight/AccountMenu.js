import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
    popUpAction,
    enterLogInAction,
    enterSignUpAction,
    hideSignUpAction,
    hideLogInAction,
    logOut,
} from "../../actions/loginRegisterActions";

class AccountMenu extends Component {
    state = {
        guestMode: localStorage.getItem('guestMode')
    }
    logIn = () => {
        this.props.closeAccountMenu();
        this.props.enterLogInAction();
        this.props.hideLogInAction();
        this.props.popUpAction();
    };

    signUp = () => {
        this.props.closeAccountMenu();
        this.props.enterSignUpAction();
        this.props.hideSignUpAction();
        this.props.popUpAction();
    };
    
    logOut = () => {
        this.props.closeAccountMenu();
        this.props.logOut();
    }

    render() {
        const {guestMode} = this.state
        return (
            <Fragment>
                <div className="AccountMenuMain"></div>
                <div className="AccountMenu" style={{ right: `${this.props.right}` }}>
                    <div className="AccountMenuContent">
                        <div className="AccountHeader">
                            <div className="AccName">
                                <div className="AccNameLogo">
                                    <i className="far fa-user"></i>
                                </div>
                                <div className="AccNameAcc">{guestMode === 'off' ? `${this.props.data.loggedUser.username}` : 'Account'}</div>
                            </div>
                            <div className="AccClose" onClick={this.props.closeAccountMenu}>
                                <i className="fas fa-times"></i>
                            </div>
                        </div>
                        {guestMode === 'off' ? (
                            <Fragment>
                                <div className="AccList AccOrders">
                                    <i className="fas fa-list-ul"></i>
                                    <span>My Orders</span>
                                </div>
                                <div className="AccList AccSignOut" onClick={this.logOut}>
                                    <i className="fas fa-sign-out-alt"></i>
                                    <span>Sign Out</span>
                                </div>
                            </Fragment>
                        ) : (
                            <Fragment>
                                <div className="AccList AccSignIn">
                                    <i className="fas fa-sign-in-alt"></i>
                                    <span onClick={this.logIn}>Sign In</span>
                                </div>
                                <div className="AccList AccCreateAccount">
                                    <i className="fas fa-user-plus"></i>
                                    <span onClick={this.signUp}>Create Account</span>
                                </div>
                            </Fragment>
                        )}
                    </div>
                </div>
            </Fragment>
        );
    }
}
export default connect(
    (state) => {
        return { data: state.getData };
    },
    (dispatch) => {
        return bindActionCreators(
            { popUpAction, enterLogInAction, enterSignUpAction, hideSignUpAction, hideLogInAction, logOut },
            dispatch
        );
    }
)(AccountMenu);

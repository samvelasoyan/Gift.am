import React,{Component,Fragment} from 'react';
import AccountMenu from './AccountMenu';
import WishListMenu from './WishListMenu';
import CartMenu from './CartMenu';
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

class UMenuRight extends Component{
    state={
        AccountMenuBool:false,
        WishListMenuBool:false,
        CartMenuBool:false,
        guestMode: localStorage.getItem('guestMode'),
    }
    logIn = () => {
        this.props.closeUMenuRight()
        this.props.enterLogInAction()
        this.props.hideLogInAction()
        this.props.popUpAction()
    }
    
    signUp = () => {
        this.props.closeUMenuRight()
        this.props.enterSignUpAction()
        this.props.hideSignUpAction()
        this.props.popUpAction()
    }
    chechkContent = () => {
        if(this.props.UMenuRighContent === 'user'){
            this.setState({AccountMenuBool:true,WishListMenuBool:false,CartMenuBool:false})
        }
        else if(this.props.UMenuRighContent === 'wishList'){
            this.setState({AccountMenuBool:false,WishListMenuBool:true,CartMenuBool:false})
        }
        else{
            this.setState({AccountMenuBool:false,WishListMenuBool:false,CartMenuBool:true})
        }
    }
    logOut = () => {
        this.props.closeUMenuRight();
        this.props.logOut();
    }    
    componentDidMount(){
        this.chechkContent()
    }

    render(){
        const loggedUser = this.props.data.loggedUser.username
        return(
            <Fragment>
                <div className='UMenuRightMain'></div>
                <div className='UMenuRight' style={{right:`${this.props.right}`}}>
                    {this.state.AccountMenuBool && <AccountMenu loggedUser={loggedUser} guestMode={this.state.guestMode} logIn={this.logIn} logOut={this.logOut} signUp={this.signUp} closeUMenuRight={this.props.closeUMenuRight}/>}
                    {this.state.WishListMenuBool && <WishListMenu closeUMenuRight={this.props.closeUMenuRight}/>}
                    {this.state.CartMenuBool && <CartMenu closeUMenuRight={this.props.closeUMenuRight}/>}
                </div>
            </Fragment>
        )
    }
}

export default connect(
    (state) => {
        return { data: state.getData };
    },
    (dispatch) => {
        return bindActionCreators({ popUpAction, enterLogInAction, enterSignUpAction, hideSignUpAction, hideLogInAction, logOut },
             dispatch);
    }
)(UMenuRight);

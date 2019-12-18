import React,{Component,Fragment} from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { popUpAction, enterLogInAction, enterSignUpAction, hideSignUpAction, hideLogInAction } from "../../actions/loginRegisterActions";

class AccountMenu extends Component{
    
    logIn = () => {
        this.props.closeAccountMenu()
        this.props.enterLogInAction()
        this.props.hideLogInAction()
        this.props.popUpAction()
    }
    
    signUp = () => {
        this.props.closeAccountMenu()
        this.props.enterSignUpAction()
        this.props.hideSignUpAction()
        this.props.popUpAction()
    }
    render(){
        return(
            <Fragment>
            <div className='AccountMenuMain'></div>
            <div className='AccountMenu' style={{right:`${this.props.right}`}}>
                <div className='AccountMenuContent'>
                    <div className='AccountHeader'>
                        <div className='AccName'>
                            <div className='AccNameLogo'>
                                <i className="far fa-user"></i>
                            </div>
                            <div className='AccNameAcc'>Account</div>
                        </div>
                        <div className='AccClose' onClick={this.props.closeAccountMenu}>
                            <i className="fas fa-times"></i>
                        </div>
                    </div>
                    <div className='AccList AccSignIn'>
                        <i className="fas fa-sign-in-alt"></i>
                        <span onClick={this.logIn}>Sign In</span>
                    </div>
                    <div className='AccList AccCreateAccount'>
                        <i className="fas fa-user-plus"></i>
                        <span onClick={this.signUp}>Create Account</span>
                    </div>
                    {/* <div className='AccList AccOrders'>
                        <i className="fas fa-list-ul"></i>
                        <span>My Orders</span>
                    </div>
                    <div className='AccList AccSignOut'>
                        <i className="fas fa-sign-out-alt"></i>
                        <span>Sign Out</span>
                    </div> */}
                </div>
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
        return bindActionCreators({ popUpAction, enterLogInAction, enterSignUpAction, hideSignUpAction, hideLogInAction }, dispatch);
    }
)(AccountMenu);

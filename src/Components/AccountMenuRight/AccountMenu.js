import React,{Component, Fragment} from 'react';

class AccountMenu extends Component{
    logOut = () => {
        this.props.logOut()
        window.location.reload()
    }
    render(){
        // console.log(this.props.guestMode)
        return(
                <div className='AccountMenuContent'>
                    <div className='AccountHeader'>
                        <div className='AccName'>
                            <div className='AccNameLogo'>
                                <i className="far fa-user"></i>
                            </div>
                            <div className='AccNameAcc'>{this.props.guestMode === 'off' ? `${this.props.loggedUser}` : 'Account'}</div>
                        </div>
                        <div className='AccClose' onClick={this.props.closeUMenuRight}>
                            <i className="fas fa-times"></i>
                        </div>
                    </div>
                    { this.props.guestMode === 'off' ?
                        (
                            <Fragment>
                                {/* <div className='AccList AccOrders'>
                                    <i className="fas fa-list-ul"></i>
                                    <span>My Orders</span>
                                </div> */}
                                <div className='AccList AccSignOut' onClick={this.logOut}>
                                    <i className="fas fa-sign-out-alt"></i>
                                    <span>Sign Out</span>
                                </div>
                            </Fragment>
                        )
                        :
                        (                    
                            <Fragment>
                                <div className='AccList AccSignIn'>
                                    <i className="fas fa-sign-in-alt"></i>
                                    <span onClick={this.props.logIn}>Sign In</span>
                                </div>
                                <div className='AccList AccCreateAccount'>
                                    <i className="fas fa-user-plus"></i>
                                    <span onClick={this.props.signUp}>Create Account</span>
                                </div>
                            </Fragment>
                        )
                    }
                </div>
        )
    }
}
export default AccountMenu

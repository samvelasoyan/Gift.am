import React,{Component} from 'react';


class Login extends Component{
    render(){
        console.log(this.props.register)
        return(
            <div className='LogIn'>
                <form className="LogInForm" action="" >
                    <div className="userName">
                        <label htmlFor="userName">User Name</label>
                        <input type="text" name='userName' id='userName'></input>
                    </div>
                    <div className="password">
                        <label htmlFor="password">Password</label>
                        <input type="text" name='password' id='password'></input>
                    </div>
                    <div className="Log-In">
                        <input type="submit" value='Log In' ></input>
                    </div>
                </form>
                <div>
                    <p>Don't have an account?</p>
                    <div onClick={this.props.register}>Create Account</div>
                </div>
            </div>
        )
    }
}
export default Login

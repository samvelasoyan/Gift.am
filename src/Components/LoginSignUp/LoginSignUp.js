import React,{Component} from 'react';
import Login from './Login';
import SignUp from './SignUp';

class LoginSignUp extends Component{
    state = {
        LoginBool:true,
        SignUpBool:false
    }
    register = () => {
        console.log(4)
        this.setState({SignUpBool:!this.state.SignUpBool})
        // setTimeout(this.setState({LoginBool:!this.state.LoginBool}),1000)
    }

    render(){
        return(
            <div className='LoginSignUp'>
                {this.state.LoginBool && <Login register={this.register}/>}
                {this.state.SignUpBool && <SignUp SignUpBool={this.state.SignUpBool}/>}
            </div>
        )
    }
}
export default LoginSignUp

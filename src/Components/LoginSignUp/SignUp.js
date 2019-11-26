import React,{Component} from 'react';


class SignUp extends Component{
    render(){
        const top = this.props.SignUpBool ? '50%' : '150%'
        const col = this.props.SignUpBool ? 'red' : '150%'

        return(
            <div className='SignUp' 
            style={{top:`${top}`,transform:'translate(-50%,-50%)'}}
            >
                <form className="registerForm" action="" >
                    <div className="name">
                        <label htmlFor="name" style={{color:`${col}`}}>Name</label>
                        <input type="text" name='name' id='name'></input>
                    </div>
                    <div className="surName">
                        <label htmlFor="surName">Surname</label>
                        <input type="text" name='surName' id='surName'></input>
                    </div>
                    <div className="userName">
                        <label htmlFor="userName">User Name</label>
                        <input type="text" name='userName' id='userName'></input>
                    </div>
                    <div className="emailAddress">
                        <label htmlFor="emailAddress">Email Address</label>
                        <input type="text" name='emailAddress' id='emailAddress'></input>
                    </div>
                    <div className="password">
                        <label htmlFor="password">Password</label>
                        <input type="text" name='password' id='password'></input>
                    </div>
                    <div className="passwordAgain">
                        <label htmlFor="passwordAgain">Password Again</label>
                        <input type="text" name='passwordAgain' id='passwordAgain'></input>
                    </div>
                    <div className="createAccount">
                        <input type="submit" value='Create Account' ></input>
                    </div>
                </form>
            </div>
        )
    }
}
export default SignUp

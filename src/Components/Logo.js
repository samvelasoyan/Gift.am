import React,{Component} from 'react';
import logo from '../mainLogo.png';


class Logo extends Component{
    render(){
        return(
            <div className='logo'>
                <img src={logo} className="App-logo" alt="logo" />
            </div>
        )
    }
}
export default Logo

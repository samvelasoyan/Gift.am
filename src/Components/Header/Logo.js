import React,{Component} from 'react';
import mainLogo from '../../logo.png';


class Logo extends Component{
    render(){
        return(
            <div className='logo'>
                <img src={mainLogo} className="App-logo" alt="logo" />
            </div>
        )
    }
}
export default Logo

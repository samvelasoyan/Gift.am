import React,{Component} from 'react';


class MobileMainMenu extends Component{

    render(){
        return(
            <div className='MobileMainMenu'>
                <ul className='MobileMenuUL'>
                    <li className='MobileMenuList'>
                        <a href='#home'>Home</a>
                    </li>
                    <li className='MobileMenuList' onClick={this.props.show}>
                        <span>Categories</span>
                    </li>
                    <li className='MobileMenuList'>
                        <a href='#bestsellers'>Bestsellers</a>
                    </li>
                    <li className='MobileMenuList'>
                        <a href='#aboutUs'>About Us</a>
                    </li>
                </ul>
            </div>
        )
    }
}
export default MobileMainMenu
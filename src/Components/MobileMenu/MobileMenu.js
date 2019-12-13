import React,{Component,Fragment} from 'react';
import MobileMainMenu from './MobileMainMenu';
import CategoriesMenu from './CategoriesMenu';


class MobileMenu extends Component{

    state={
        MobileMainMenuBool:true,
        // CategoriesMenuBool:false
    }
    showCategories=()=>{
        this.setState({
            MobileMainMenuBool:!this.state.MobileMainMenuBool,
            // CategoriesMenuBool:!this.state.CategoriesMenuBool
        })
    }
    render(){
        return(
            <Fragment>
            <div className='MobileMenuMain'></div>
            <div className='MobileMenu' style={{right:`${this.props.right}`}}>
                <div className='MobileMenuContent'>
                    <div className='MobileHeader'>
                        <div className='MobileName' onClick={this.props.closeMobileMenu}>
                            <span className='MobileNameSite'>Gift.am</span>
                        </div>
                        <div className='MobileClose' onClick={this.props.closeMobileMenu}>
                            <i className="fas fa-times"></i>
                        </div>
                    </div>
                    {
                        this.state.MobileMainMenuBool ? 
                        <MobileMainMenu show={this.showCategories}/>
                        :
                        <CategoriesMenu hide={this.showCategories}/>
                    }
                </div>
            </div>
            </Fragment>
        )
    }
}
export default MobileMenu
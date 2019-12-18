import React,{Component} from 'react';
import MainMenu from './MainMenu';
import MainMenuDemo from './MainMenuDemo';
import HeaderSearch from './HeaderSearch';
import HeaderSearchDemo from './HeaderSearchDemo';

class MainMenuAndSearch extends Component{
    state={
        MainMenuBool: true,
        MainMenuDemoBool:false,
        HeaderSearchDemoBool:true,
        HeaderSearchBool:false,
    }
    showMainSearch=()=>{
        this.setState({
            MainMenuBool:!this.state.MainMenuBool,
            MainMenuDemoBool:!this.state.MainMenuDemoBool,
            HeaderSearchDemoBool:!this.state.HeaderSearchDemoBool,
            HeaderSearchBool:!this.state.HeaderSearchBool
        })
    }
    showMainMenu=()=>{
        this.setState({
            MainMenuBool:!this.state.MainMenuBool,
            MainMenuDemoBool:!this.state.MainMenuDemoBool,
            HeaderSearchDemoBool:!this.state.HeaderSearchDemoBool,
            HeaderSearchBool:!this.state.HeaderSearchBool
        })
    }
    render(){
        const styleHeaderSearchBool = this.state.HeaderSearchBool ? {width:'70%'} : {width:'0'}
        return(
            <div className='MainMenuAndSearch'>
                {this.state.MainMenuBool && <MainMenu/>}
                {this.state.MainMenuDemoBool && <MainMenuDemo show={this.showMainMenu}/>}
                {this.state.HeaderSearchDemoBool && <HeaderSearchDemo show={this.showMainSearch}/>}
                {this.state.HeaderSearchBool && <HeaderSearch loop={this.props.loop} styleHeaderSearchBool={styleHeaderSearchBool}/>}
            </div>
        )
    }
}
export default MainMenuAndSearch

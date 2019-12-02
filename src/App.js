import React,{Component} from 'react';
import Header from './Components/Header';
import AccountMenu from './Components/AccountMenu';
import Registration from './Components/Registration'; 
import SlideShow from './Components/SlideShow';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { popUpAction } from "./actions/index.js";

class App extends Component {
  state = {
    HeaderBool:true,
    AccountMenuBool:false,
    AccountMenuPositionRight:'0'
  }

  openAccountMenu = () => {
    this.setState({AccountMenuBool:!this.state.AccountMenuBool})
  }
  closeAccountMenu = () =>{
    this.setState({AccountMenuPositionRight:'-22%'})
    setTimeout(() => {
      this.setState({AccountMenuBool:!this.state.AccountMenuBool,AccountMenuPositionRight:'0'})
    }, 300);
  }
  render(){
    return (
      <div className="App">
        {this.state.HeaderBool && <Header openAccountMenu={this.openAccountMenu} AccountMenuBool={this.state.AccountMenuBool}/>}
        {this.state.AccountMenuBool && <AccountMenu closeAccountMenu={this.closeAccountMenu} right={this.state.AccountMenuPositionRight}/>}
        {this.props.data.edit ? <Registration /> : null}
        <SlideShow />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
      data: state.getData
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ popUpAction }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

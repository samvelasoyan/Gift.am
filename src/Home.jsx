import React,{Component} from 'react';
import Header from './Components/Header/Header';
import Slidebar from './Components/Slidebar/slidebar';
import MobileMenu from './Components/MobileMenu/MobileMenu';
import Registration from './Components/Registration';
import Categories from './Components/Categories';
import Bestsellers from './Components/Bestsellers/BestsellersSlide';
import Footer from './Components/Footer'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { popUpAction } from "./actions/loginRegisterActions";
// import resize from './resize';
import UMenuRight from './Components/AccountMenuRight/UMenuRight';

class Home extends Component {
  state = {
    HeaderBool:true,
    MobileMenuBool:false,
    MobileMenuPositionRight:'0',
    UMenuRightBool:false,
    UMenuRightPositionRight:'0',
    UMenuRighContent:null
  }
  openMobileMenu = () => {
    this.setState({MobileMenuBool:!this.state.MobileMenuBool})
  }
  closeMobileMenu = () =>{
    this.setState({MobileMenuPositionRight:'-50%'},)
    setTimeout(() => {
      this.setState({MobileMenuBool:!this.state.MobileMenuBool,MobileMenuPositionRight:'0'})
    }, 300);
  }

  openUMenuRight = () => {
    document.querySelector('body').style.overflow = 'hidden'
    this.setState({UMenuRightBool:!this.state.UMenuRightBool})
  }

  closeUMenuRight = () =>{
    this.setState({UMenuRightPositionRight:'-25%'},)
    setTimeout(() => {
      this.setState({UMenuRightBool:!this.state.UMenuRightBool,UMenuRightPositionRight:'0'})
      document.querySelector('body').style.overflow = 'auto'
    }, 300);
  }

  UMenuRighContent = (str) =>{
    if(str === 'user'){this.setState({UMenuRighContent:'user'})}
    else if(str === 'wishList'){this.setState({UMenuRighContent:'wishList'})}
    else{this.setState({UMenuRighContent:'cart'})}
    this.openUMenuRight()
  }

  // componentDidMount(){
  //   resize()
  // }
  
  render(){
    const forblur = this.state.UMenuRightBool ? 'blured' : ''
    return (
        <div className="App">
          <div className={forblur}>
            {
              this.state.HeaderBool && 
              <Header openMobileMenu={this.openMobileMenu} UMenuRighContent={this.UMenuRighContent}/>
            }
              <Slidebar />
              <Categories/>
              <Bestsellers/>
              <Footer/>
          </div>
          {this.state.MobileMenuBool && <MobileMenu closeMobileMenu={this.closeMobileMenu} right={this.state.MobileMenuPositionRight}/>}
          {this.state.UMenuRightBool && <UMenuRight UMenuRighContent={this.state.UMenuRighContent} closeUMenuRight={this.closeUMenuRight} right={this.state.UMenuRightPositionRight}/>}
          {this.props.data.template ? <Registration /> : null}
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
import React,{Component} from 'react';
import Header from './Components/Header/Header';
import Slidebar from './Components/Slidebar/slidebar';
import AccountMenu from './Components/AccountMenuRight/AccountMenu';
import WishListMenu from './Components/AccountMenuRight/WishListMenu';
import CartMenu from './Components/AccountMenuRight/CartMenu';
import MobileMenu from './Components/MobileMenu/MobileMenu';
import Registration from './Components/Registration';
import Categories from './Components/Categories';
import Footer from './Components/Footer'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { popUpAction } from "./actions/loginRegisterActions";
// import resize from './resize';

class Home extends Component {
  state = {
    HeaderBool:true,
    AccountMenuBool:false,
    AccountMenuPositionRight:'0',
    WishListMenuBool:false,
    WishListMenuPositionRight:'0',
    CartMenuBool:false,
    CartMenuPositionRight:'0',
    MobileMenuBool:false,
    MobileMenuPositionRight:'0',
  }
  
  openAccountMenu = () => {
    this.setState({AccountMenuBool:!this.state.AccountMenuBool})
  }
  closeAccountMenu = () =>{
    this.setState({AccountMenuPositionRight:'-25%'},)
    setTimeout(() => {
      this.setState({AccountMenuBool:!this.state.AccountMenuBool,AccountMenuPositionRight:'0'})
    }, 300);
  }
  openWishListMenu = () => {
    this.setState({WishListMenuBool:!this.state.WishListMenuBool})
  }
  closeWishListMenu = () =>{
    this.setState({WishListMenuPositionRight:'-25%'},)
    setTimeout(() => {
      this.setState({WishListMenuBool:!this.state.WishListMenuBool,WishListMenuPositionRight:'0'})
    }, 300);
  }
  openCartMenu = () => {
    this.setState({CartMenuBool:!this.state.CartMenuBool})
  }
  closeCartMenu = () =>{
    this.setState({CartMenuPositionRight:'-25%'},)
    setTimeout(() => {
      this.setState({CartMenuBool:!this.state.CartMenuBool,CartMenuPositionRight:'0'})
    }, 300);
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
  // componentDidMount(){
  //   resize()
  // }
  
  render(){
    const forblur = this.state.AccountMenuBool ? 'blured' : ''
    return (
        <div className="App">
          <div className={forblur}>
            {
              this.state.HeaderBool && 
              <Header 
                openAccountMenu={this.openAccountMenu} 
                openMobileMenu={this.openMobileMenu}
                openWishListMenu={this.openWishListMenu}
                openCartMenu={this.openCartMenu}
              />
            }
              <Slidebar />
              <Categories/>
              <Footer/>
          </div>
          {this.state.MobileMenuBool && <MobileMenu closeMobileMenu={this.closeMobileMenu} right={this.state.MobileMenuPositionRight}/>}
          {this.state.AccountMenuBool && <AccountMenu closeAccountMenu={this.closeAccountMenu} right={this.state.AccountMenuPositionRight}/>}
          {this.state.WishListMenuBool && <WishListMenu closeWishListMenu={this.closeWishListMenu} right={this.state.WishListMenuPositionRight}/>}
          {this.state.CartMenuBool && <CartMenu closeCartMenu={this.closeCartMenu} right={this.state.CartMenuPositionRight}/>}
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

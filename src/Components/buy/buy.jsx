import React, { Component } from "react";
import Header from '../Header/Header';
import Footer from '../Footer';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { descriptionAction } from "../../actions/productsActions";
import './buy.css'
import BuyProd from "../Products/BuyProd";
import BuyForm from "./BuyForm";
import UMenuRight from '../AccountMenuRight/UMenuRight';

class Buy extends Component {
    state = {
        popUp: false,
        HeaderBool: true,
        UMenuRightBool:false,
        UMenuRightPositionRight:'0',
        UMenuRighContent:null,
        MobileMenuBool: false,
        MobileMenuPositionRight: "0"
    };
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
      
    openMobileMenu = () => {
        this.setState({ MobileMenuBool: !this.state.MobileMenuBool });
    };
    closeMobileMenu = () => {
        this.setState({ MobileMenuPositionRight: "-50%" });
        setTimeout(() => {
            this.setState({
                MobileMenuBool: !this.state.MobileMenuBool,
                MobileMenuPositionRight: "0"
            });
        }, 300);
    };

    render() {

        const { cart } = this.props.categories

        return (

            <div className="buy">
              <Header openMobileMenu={this.openMobileMenu} UMenuRighContent={this.UMenuRighContent}/>

                <div className="buyConteiner">

                    <div className="buyForm">
                            <BuyForm/>
                    </div>
                    <div className="buyContent">
                        {cart.map((item, index) => <BuyProd {...item} key={index} />)}
                    </div>
                </div>

                <Footer />
                {this.state.UMenuRightBool && (
                    <UMenuRight
                        closeUMenuRight={this.closeUMenuRight}
                        right={this.state.UMenuRightPositionRight}
                        UMenuRighContent={this.state.UMenuRighContent}
                    />
                )}

            </div>

        )
    }
}
export default connect(
    (state) => {
        return { categories: state.categories };
    },
    (dispatch) => {
        return bindActionCreators({ descriptionAction }, dispatch);
    }
)(Buy);
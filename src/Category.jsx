import React, { Component, Fragment } from "react";
import Slider from "react-slick";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer";
import Prod from "./Components/Products/Prod";
import ProdPopUp from "./Components/Products/ProdPopUp";
import MobileMenu from "./Components/MobileMenu/MobileMenu";
import Registration from "./Components/Registration";
import "./styles/category.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { descriptionAction } from "./actions/productsActions";
import { popUpAction } from "./actions/loginRegisterActions";
import { setCategoryAction } from "./actions/routingActions";
import UMenuRight from "./Components/AccountMenuRight/UMenuRight";

class Category extends Component {
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
    popUp = () => {
        this.setState({ popUp: !this.state.popUp });
    };

    componentDidMount() {
        this.props.setCategoryAction(localStorage.getItem('category'))
        setTimeout(() => this.loop());
        window.scrollTo(0, 0);
    }

    loop = () => {
        const { category } = this.props.categories;
        const { products } = this.props.categories;
        const num = Math.floor(products[category].length / 8);
        const pages = [];
        let x = 0,
            y = 8;
        for (let i = 0; i <= num; i++) {
            if (i !== 0) {
                x += 8;
                y += 8;
            }
            products[category].sort((a, b) => a.price - b.price);
            pages[i] = products[category].slice(x, y);
            this.setState({ pages });
        }
    };

    render() {
        const { pages } = this.state;
        return (
            <Fragment>
                <div className={`main-page ${this.state.popUp ? "blured" : null}`}>
                    <Header openMobileMenu={this.openMobileMenu} UMenuRighContent={this.UMenuRighContent}/>
                    <div id="Slider">
                        <Slider
                            speed={500}
                            slidesToShow={1}
                            slidesToScroll={1}
                            infinite={false}
                            dots={true}
                        >
                            {pages &&
                                pages.map((page, index) => {
                                    return (
                                        <div key={index}>
                                            <div
                                                className="product-container"
                                                style={{ display: "flex" }}
                                            >
                                                {page.map((item, index) => {
                                                    return (
                                                        <Prod
                                                            {...item}
                                                            key={index}
                                                            popUp={this.popUp}
                                                        />
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    );
                                })}
                        </Slider>
                    </div>
                    <Footer />
                </div>
                {pages &&
                    pages.map((page) => {
                        return page.map((item, index) => {
                            return item.description.bool ? (
                                <ProdPopUp {...item} key={index} popUp={this.popUp} />
                            ) : null;
                        });
                    })}
                {this.state.MobileMenuBool && (
                    <MobileMenu
                        closeMobileMenu={this.closeMobileMenu}
                        right={this.state.MobileMenuPositionRight}
                    />
                )}
                {this.state.UMenuRightBool && (
                    <UMenuRight
                        closeUMenuRight={this.closeUMenuRight}
                        right={this.state.UMenuRightPositionRight}
                        UMenuRighContent={this.state.UMenuRighContent}
                    />
                )}

                {this.props.data.template ? <Registration /> : null}
            </Fragment>
        );
    }
}

export default connect(
    (state) => {
        return { categories: state.categories, data: state.getData };
    },
    (dispatch) => {
        return bindActionCreators({ descriptionAction, popUpAction,setCategoryAction }, dispatch);
    }
)(Category);

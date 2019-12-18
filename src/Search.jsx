import React, { Component, Fragment } from "react";
import Slider from "react-slick";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer";
import Prod from "./Components/Products/Prod";
import ProdPopUp from "./Components/Products/ProdPopUp";
import AccountMenu from "./Components/AccountMenuRight/AccountMenu";
import WishListMenu from "./Components/AccountMenuRight/WishListMenu";
import CartMenu from "./Components/AccountMenuRight/CartMenu";
import MobileMenu from "./Components/MobileMenu/MobileMenu";
import Registration from "./Components/Registration";
import "./styles/category.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { descriptionAction } from "./actions/productsActions";
import { popUpAction } from "./actions/loginRegisterActions";


class Category extends Component {
    state = {
        popUp: false,
        HeaderBool: true,
        AccountMenuBool: false,
        AccountMenuPositionRight: "0",
        WishListMenuBool: false,
        WishListMenuPositionRight: "0",
        CartMenuBool: false,
        CartMenuPositionRight: "0",
        MobileMenuBool: false,
        MobileMenuPositionRight: "0"
    };

    openAccountMenu = () => {
        this.setState({ AccountMenuBool: !this.state.AccountMenuBool });
    };
    closeAccountMenu = () => {
        this.setState({ AccountMenuPositionRight: "-25%" });
        setTimeout(() => {
            this.setState({
                AccountMenuBool: !this.state.AccountMenuBool,
                AccountMenuPositionRight: "0"
            });
        }, 300);
    };
    openWishListMenu = () => {
        this.setState({ WishListMenuBool: !this.state.WishListMenuBool });
    };
    closeWishListMenu = () => {
        this.setState({ WishListMenuPositionRight: "-25%" });
        setTimeout(() => {
            this.setState({
                WishListMenuBool: !this.state.WishListMenuBool,
                WishListMenuPositionRight: "0"
            });
        }, 300);
    };
    openCartMenu = () => {
        this.setState({ CartMenuBool: !this.state.CartMenuBool });
    };
    closeCartMenu = () => {
        this.setState({ CartMenuPositionRight: "-25%" });
        setTimeout(() => {
            this.setState({ CartMenuBool: !this.state.CartMenuBool, CartMenuPositionRight: "0" });
        }, 300);
    };
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
        this.loop();
        window.scrollTo(0, 0);
    }

    // componentWillReceiveProps(){
    //     this.loop();
    // }

    loop = () => {
        const { searchItems } = this.props.search;
        const num = Math.floor(searchItems.length / 8);
        const pages = [];
        let x = 0,
            y = 8;
        for (let i = 0; i <= num; i++) {
            if (i !== 0) {
                x += 8;
                y += 8;
            }
            searchItems.sort((a, b) => a.price - b.price);
            pages[i] = searchItems.slice(x, y);
            this.setState({ pages });
        }
    };

    render() {
        const { pages } = this.state;
        return (
            <Fragment>
                <div className={`main-page ${this.state.popUp ? "blured" : null}`}>
                    <Header
                        openAccountMenu={this.openAccountMenu}
                        openMobileMenu={this.openMobileMenu}
                        openWishListMenu={this.openWishListMenu}
                        openCartMenu={this.openCartMenu}
                        loop={this.loop}
                    />
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
                                                {page.length > 0 ? (
                                                    page.map((item, index) => {
                                                        return (
                                                            <Prod
                                                                {...item}
                                                                key={index}
                                                                popUp={this.popUp}
                                                            />
                                                        );
                                                    })
                                                ) : (
                                                    <div className="empty-search">
                                                        <h1>Nothing Found!</h1>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                        </Slider>
                    </div>
                    <Footer loop={this.loop}/>
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
                {this.state.AccountMenuBool && (
                    <AccountMenu
                        closeAccountMenu={this.closeAccountMenu}
                        right={this.state.AccountMenuPositionRight}
                    />
                )}
                {this.state.WishListMenuBool && (
                    <WishListMenu
                        closeWishListMenu={this.closeWishListMenu}
                        right={this.state.WishListMenuPositionRight}
                    />
                )}
                {this.state.CartMenuBool && (
                    <CartMenu
                        closeCartMenu={this.closeCartMenu}
                        right={this.state.CartMenuPositionRight}
                    />
                )}

                {this.props.data.template ? <Registration /> : null}
            </Fragment>
        );
    }
}

export default connect(
    (state) => {
        return { search: state.search, data: state.getData };
    },
    (dispatch) => {
        return bindActionCreators({ descriptionAction, popUpAction }, dispatch);
    }
)(Category);

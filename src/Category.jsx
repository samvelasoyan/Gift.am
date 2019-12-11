import React, { Component } from "react";
import Slider from "react-slick";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer";
import Prod from "./Components/Products/Prod";
import ProdPopUp from "./Components/Products/ProdPopUp";
import "./styles/category.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { descriptionAction } from "./actions/index";

class Category extends Component {
    state = {};

    componentDidMount() {
        this.loop();
        window.scrollTo(0, 0);
    }

    loop = () => {
        const { perfume } = this.props.categories.products;
        const num = Math.floor(perfume.length / 8);
        const pages = [];
        let x = 0,
            y = 8;
        for (let i = 0; i <= num; i++) {
            if (i !== 0) {
                x += 8;
                y += 8;
            }
            pages[i] = perfume.slice(x, y);
            this.setState({ pages });
        }
    };

    render() {
        console.log(this.state);
        const { pages } = this.state;
        return (
            <div className="main-page">
                <Header />
                <div id="Slider">
                    <Slider
                        speed={500}
                        slidesToShow={1}
                        slidesToScroll={1}
                        infinite={false}
                        dots={true}
                    >
                        {pages &&
                            pages.map((page) => {
                                return (
                                    <div>
                                        <div
                                            className="product-container"
                                            style={{ display: "flex" }}
                                        >
                                            {page.map((item) => {
                                                return <Prod {...item} key={item.id} />;
                                            })}
                                        </div>
                                    </div>
                                );
                            })}
                    </Slider>
                </div>
                {pages &&
                    pages.map((page) => {
                        return (
                                page.map((item, index) => {
                                    console.log(item.description.bool);
                                    return (
                                        item.description.bool ? <ProdPopUp {...item} key={index} /> : null
                                    );
                                })
                        );
                    })}
                <Footer />
            </div>
        );
    }
}

export default connect(
    (state) => {
        return { categories: state.categories };
    },
    (dispatch) => {
        return bindActionCreators({ descriptionAction }, dispatch);
    }
)(Category);

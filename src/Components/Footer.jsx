import React from "react";
import background from "../images/IMG_14224.jpg";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { searchAction } from "../actions/searchActions";
import { Link } from "react-router-dom";

function Footer({ searchAction, loop }) {
    const searchByTag = (e) => {
        const value = e.target.innerHTML;
        searchAction(value.slice(1, value.length - 1));
        loop && setTimeout(() => loop(), 100)
    };
    return (
        <div
            className="footer"
            id="aboutUs"
            style={{ background: `url(${background}) no-repeat`, backgroundSize: "cover" }}
        >
            <div className="footer-left">
                <h1>Gift.am</h1>
            </div>
            <div className="footer-centre">
                <div>
                    <h3>about us</h3>
                    <p>delivery and payment</p>
                    <p>privacy policy</p>
                    <p>contact us</p>
                </div>
                <Link to="/search">
                    <div onClick={searchByTag}>
                        <h3>tags</h3>
                        <span>#forWomen,</span>
                        <span>#forMen,</span>
                        <span>#forKids,</span>
                        <span>#perfume,</span>
                        <span>#jewelry,</span>
                        <span>#watches,</span>
                        <br />
                        <span>#flowers,</span>
                        <span>#teddybear,</span>
                        <span>#beverage,</span>
                        <span>#sweet,</span>
                        <span>#cakes,</span>
                        <br />
                        <span>#baskets,</span>
                        <span>#balloons,</span>
                        <span>#wine,</span>
                        <span>#roses,</span>
                        <span>#silver,</span>
                        <span>#whiskey,</span>
                        <br />
                        <span>#candy,</span>
                        <span>#giantTeddy,</span>
                        <span>#chocolate,</span>
                        <span>#christmas,</span>
                        <span>#birthday,</span>
                        <br />
                        <span>#helloween,</span>
                        <span>#newYear,</span>
                        <span>#valentine,</span>
                    </div>
                </Link>
            </div>
            <div className="footer-right">
                <span className="soc-icon">
                    <i className="fab fa-facebook-f"></i>
                </span>
                <span className="soc-icon">
                    <i className="fab fa-twitter"></i>
                </span>
                <span className="soc-icon">
                    <span></span>
                    <i className="fab fa-instagram"></i>
                </span>
                <h1>Find us online!</h1>
            </div>
            <div className="to-top">
                <a href="#home">
                    <i className="fas fa-arrow-up"></i>
                </a>
            </div>
        </div>
    );
}

export default connect(
    (state) => {
        return { search: state.search };
    },
    (dispatch) => {
        return bindActionCreators({ searchAction }, dispatch);
    }
)(Footer);

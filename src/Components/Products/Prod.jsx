import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { descriptionAction, addToWishListAction, addToCartAction } from "../../actions/index";

function Prod({ image, name, price, category, id, descriptionAction, addToWishListAction, addToCartAction, popUp }) {
    const togglePopUp = () => {
        popUp();
        descriptionAction(category, id);
        window.scrollTo(0, 0);
    };
    return (
        <div className="product-box">
            <div
                className="prod-image"
                style={{ background: `url(${image}) center / contain no-repeat`}}
                onClick={togglePopUp}
            ></div>
            <div className="prod-description">
                <h3>{name}</h3>
                <span className="add">${price}</span>
                <span className="add to-cart" onClick={()=>{addToCartAction(category, id)}}>
                    <i className="fas fa-shopping-cart"></i>
                </span>
                <span className="add to-wishlist" onClick={()=>{addToWishListAction(category, id)}}>
                    <i className="fas fa-heart"></i>
                </span>
            </div>
            <span className="bttm"></span>
        </div>
    );
}

export default connect(
    (state) => {
        return { categories: state.categories };
    },
    (dispatch) => {
        return bindActionCreators({ descriptionAction, addToWishListAction, addToCartAction }, dispatch);
    }
)(Prod);

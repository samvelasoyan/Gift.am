import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
    descriptionAction,
    addToWishListAction,
    addToCartAction
} from "../../actions/productsActions";
import {
    enterLogInAction,
    hideLogInAction,
    popUpAction
} from '../../actions/loginRegisterActions'

function Prod({
    image,
    name,
    price,
    category,
    id,
    descriptionAction,
    addToWishListAction,
    addToCartAction,
    popUp,
    categories,
    enterLogInAction,
    hideLogInAction,
    popUpAction
}) {
    const togglePopUp = () => {
        popUp();
        descriptionAction(category, id);
        window.scrollTo(0, 0);
    };
    let wish = false;
    categories.list.map((item) => {
        if (item.id === id) {
            return (wish = true);
        }
        return null;
    });
    const guestMode = localStorage.getItem("guestMode");
    const logIn = () => {
        enterLogInAction();
        hideLogInAction();
        popUpAction();
    };
    return (
        <div className="product-box">
            <div
                className="prod-image"
                style={{ background: `url(${image}) center / contain no-repeat` }}
                onClick={togglePopUp}
            ></div>
            <div className="prod-description">
                <h3>{name}</h3>
                <span className="add">${price}</span>
                <span
                    className="add to-cart"
                    onClick={() => {
                        guestMode === 'off' ? addToCartAction(category, id) : logIn();
                    }}
                >
                    <i className="fas fa-shopping-cart"></i>
                </span>
                <span
                    className="add to-wishlist"
                    onClick={() => {
                        guestMode === 'off' ? addToWishListAction(category, id) : logIn();
                    }}
                >
                    {wish ? <i className={`fas fa-heart`}></i> : <i className={`far fa-heart`}></i>}
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
        return bindActionCreators(
            {
                descriptionAction,
                addToWishListAction,
                addToCartAction,
                enterLogInAction,
                hideLogInAction,
                popUpAction
            },
            dispatch
        );
    }
)(Prod);

import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
    descriptionAction,
    addToWishListAction,
    addToCartAction
} from "../../actions/productsActions";
import { enterLogInAction, hideLogInAction, popUpAction } from "../../actions/loginRegisterActions";

function ProdPopUp({
    image,
    name,
    price,
    description,
    id,
    category,
    descriptionAction,
    addToWishListAction,
    addToCartAction,
    popUp,
    categories,
    enterLogInAction,
    hideLogInAction,
    popUpAction
}) {
    const closePopUp = () => {
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
        <div id="popUp">
            <div className="product-pop-up">
                <div
                    className="prod-popup-image"
                    style={{ background: `url(${image}) center / contain no-repeat` }}
                ></div>
                <div className="prod-popup-description">
                    <h1>{name}</h1>
                    <h2>Price: ${price}</h2>
                    <p>{description.txt}</p>
                    <div className="buttons">
                        <span
                            className="to-cart"
                            onClick={() => {
                                guestMode === 'off' ? addToCartAction(category, id) : logIn();
                            }}
                        >
                            <i className="fas fa-shopping-cart"></i>
                        </span>
                        <span
                            className="to-wishlist"
                            onClick={() => {
                                guestMode === 'off' ? addToWishListAction(category, id) : logIn();
                            }}
                        >
                            {wish ? (
                                <i className={`fas fa-heart`}></i>
                            ) : (
                                <i className={`far fa-heart`}></i>
                            )}
                        </span>
                    </div>
                </div>
                <span className="close" onClick={closePopUp}>
                    <i className="fas fa-times"></i>
                </span>
            </div>
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
)(ProdPopUp);

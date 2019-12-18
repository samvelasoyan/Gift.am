import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { descriptionAction, addToWishListAction, addToCartAction } from "../../actions/productsActions";

function ProdPopUp({ image, name, price, description, id, category, descriptionAction, addToWishListAction, addToCartAction,popUp}) {
    const closePopUp = () => {
        popUp()
        descriptionAction(category, id)
        window.scrollTo(0, 0)
    }
    console.log()
    return (
        <div className="product-pop-up">
            <div
                className="prod-popup-image"
                style={{ background: `url(${image}) center / contain no-repeat`}}
            ></div>
            <div className="prod-popup-description">
                <h1>{name}</h1>
                <h2>Price: ${price}</h2>
                <p>{description.txt}</p>
                <div className='buttons'>
                    <span className="to-cart" onClick={()=>addToCartAction(category, id)}>
                    <i className="fas fa-shopping-cart"></i>
                </span>
                <span className="to-wishlist" onClick={()=>addToWishListAction(category, id)}>
                    <i className="fas fa-heart"></i>
                </span>
                </div>
            </div>
            <span className="close" onClick={closePopUp}><i className='fas fa-times'></i></span>
        </div>
    );
}

export default connect(
    (state) => {
        return { products: state.products };
    },
    (dispatch) => {
        return bindActionCreators({ descriptionAction, addToWishListAction, addToCartAction }, dispatch);
    }
)(ProdPopUp);

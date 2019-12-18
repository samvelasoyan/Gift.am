  
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { removeFromWishListAction, addToCartAction } from "../../actions/productsActions";

function ListProd({ image, name, price, category, id, removeFromWishListAction, addToCartAction }) {
    return (
        <div className="cart-product-box">
            <div
                className="cart-prod-image"
                style={{ background: `url(${image}) center / contain no-repeat`}}
            ></div>
            <div className="cart-prod-description">
                <h4>{name}</h4>
                <div className='cart-buttons'>
                    <span className="add">${price}</span>
                    <span className="add to-cart" onClick={()=>addToCartAction(category,id)}>
                        <i className="fas fa-shopping-cart"></i>
                    </span>
                </div>
                <span className='times' onClick={()=>removeFromWishListAction(id)}><i className='fas fa-times'></i></span>
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
        return bindActionCreators({ removeFromWishListAction, addToCartAction }, dispatch);
    }
)(ListProd);
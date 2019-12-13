import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { removeFromCartAction, addQuantityAction, subQuantityAction } from "../../actions/index";

function CartProd({ image, name, price, id, quantity, removeFromCartAction, addQuantityAction, subQuantityAction }) {
    return (
        <div className="cart-product-box">
            <div
                className="cart-prod-image"
                style={{ background: `url(${image}) center / contain no-repeat`}}
            ></div>
            <div className="cart-prod-description">
                <div className='name'>
                    <h3>{name} ${price}</h3>
                </div>
                <div className='cart-buttons'>
                    <span className="minus">
                        <i className="fas fa-minus" onClick={()=>subQuantityAction(id)}></i>
                    </span>
                    <span className="quantity">
                        {quantity}
                    </span>
                    <span className="plus" onClick={()=>addQuantityAction(id)}>
                        <i className="fas fa-plus"></i>
                    </span>
                </div>
                <span className='times' onClick={()=>removeFromCartAction(id)}><i className='fas fa-times'></i></span>
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
        return bindActionCreators({ removeFromCartAction, addQuantityAction, subQuantityAction }, dispatch);
    }
)(CartProd);

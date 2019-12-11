import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { descriptionAction } from "../../actions/index";

function Prod({ image, name, price, category, id, descriptionAction }) {
    return (
        <div className="product-box" onClick={() => descriptionAction(category, id)}>
            <div
                className="prod-image"
                style={{ background: `url(${image})`, backgroundSize: "contain" }}
            ></div>
            <div className="prod-description">
                <h3>{name}</h3>
                <span className="add">${price}</span>
                <span className="add to-cart">
                    <i className="fas fa-shopping-cart"></i>
                </span>
                <span className="add to-wishlist">
                    <i className="fas fa-heart"></i>
                </span>
            </div>
            <span className='bttm'></span>
        </div>
    );
}

export default connect(
    (state) => {
        return { products: state.products };
    },
    (dispatch) => {
        return bindActionCreators({ descriptionAction }, dispatch);
    }
)(Prod);

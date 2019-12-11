import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { descriptionAction } from "../../actions/index";

function ProdPopUp({ image, name, price, description, id, category, descriptionAction}) {
    return (
        <div className="product-pop-up">
            <div
                className="prod-popup-image"
                style={{ background: `url(${image}) no-repeat`, backgroundSize: "contain" }}
            ></div>
            <div className="prod-popup-description">
                <h1>{name}</h1>
                <h2>Price: ${price}</h2>
                <p>{description.txt}</p>
                <div className='buttons'>
                    <span className="to-cart">
                    <i className="fas fa-shopping-cart"></i>
                </span>
                <span className="to-wishlist">
                    <i className="fas fa-heart"></i>
                </span>
                </div>
            </div>
            <span className="close" onClick={()=>{descriptionAction(category, id)}}><i className='fas fa-times'></i></span>
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
)(ProdPopUp);

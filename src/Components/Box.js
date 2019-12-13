import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setCategoryAction } from "../actions/index";

function Box({ background, text, setCategoryAction }) {
    return (
        <div className="box" onClick={()=>setCategoryAction(text)}>
            <Link to={`/categories/${text}`}>
                <div
                    className="front"
                    style={{ background: `url(${background}) no-repeat`, backgroundSize: "cover" }}
                ></div>
                <div className="back">
                    <span>{text}</span>
                </div>
            </Link>
        </div>
    );
}

export default connect(
    (state) => {
        return { categories: state.categories };
    },
    (dispatch) => {
        return bindActionCreators({ setCategoryAction }, dispatch);
    }
)(Box);

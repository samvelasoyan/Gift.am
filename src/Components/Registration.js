import React, { Component } from "react";
import "../styles/Registration.css";
import SignUp from "./SignUp";
import LogIn from "./LogIn";
import Logo from "../mainLogo.png";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { popUpAction } from "../actions/index.js";
import Background from "../images/IMG_14222.jpg";

class Registration extends Component {
    state={
        top: 0
    }
    closeTemplate = () => {
        this.setState({ top: "-100%" });
        setTimeout(() => this.props.popUpAction(), 1000);
    };
    render() {
        return (
            <div
                id="template"
                style={{
                    top: `${this.state.top}`,
                    background: `url(${Background}) no-repeat`,
                    backgroundSize: "100% 100%",
                    backgroundOrigin: "border-box"
                }}
            >
                <span
                    onClick={this.closeTemplate}
                    style={{ background: `url(${Logo}) no-repeat`, backgroundSize: "contain" }}
                ></span>
                <div className="form-container">
                    {this.props.data.signUp && <SignUp />}
                    {this.props.data.logIn && <LogIn />}
                </div>
            </div>
        );
    }
}

export default connect(
    (state) => {
        return { data: state.getData };
    },
    (dispatch) => {
        return bindActionCreators({ popUpAction }, dispatch);
    }
)(Registration);

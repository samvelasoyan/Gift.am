import React, { Component } from "react";
import "../styles/Registration.css";
import SignUp from "./SignUp";
import LogIn from "./LogIn";
import Logo from "../logo.png";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { popUpAction } from "../actions/loginRegisterActions";
import Background1 from "../images/IMG_14222.jpg";
import Background from "../images/presents2.jpg";

class Registration extends Component {
    state = {
        top: 0
    };
    closeTemplate = () => {
        this.setState({ top: "-100%" });
        setTimeout(() => this.props.popUpAction(), 1000);
    };
    render() {
        const {formBool, signUp, logIn} = this.props.data
        return (
            <div
                id="template"
                style={{
                    top: `${this.state.top}`,
                    background: `url(${Background1}) no-repeat`,
                    backgroundSize: "100% 100%",
                    backgroundOrigin: "border-box"
                }}
            >
                <div
                    className="pic-container"
                    style={
                        formBool
                            ? { transform: "translateX(0%)" }
                            : { transform: "translateX(100%)" }
                    }
                >
                    <span
                        onClick={this.closeTemplate}
                        style={{
                            background: `url(${Logo}) no-repeat`,
                            backgroundSize: "100%",
                        }}
                    ></span>
                    <div
                        className="first"
                        style={{
                            background: `url(${Background}) no-repeat`,
                            backgroundSize: "cover"
                        }}
                    ></div>
                    <div className="second"></div>
                    <div className="third">
                        <div
                            className="logo"
                            style={{ background: `url(${Logo}) no-repeat`, backgroundSize: "100%" }}
                        ></div>
                    </div>
                </div>

                <div
                    className="form-container"
                    style={{
                        transform: `translateX(${formBool ? "0%" : "-100%"})`
                    }}
                >
                    {signUp && <SignUp />}
                    {logIn && <LogIn />}
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

import React, { Component } from "react";
import "../styles/Registration.css";
import SignUp from "./SignUp";
import LogIn from "./LogIn";
// import Form from "./Form";
// import Logo from "../images/mainLogo.PNG";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { popUpAction } from "../actions/index.js";

class Registration extends Component {
    state = {
        formBool: true,
        top: 0
    };
    hideForm = () => {
        this.setState({ formBool: !this.state.formBool });
    };
    closeTemplate = () => {
        this.setState({ top: "-100%" });
        setTimeout(() => this.props.popUpAction(), 1000);
    };
    render() {
        return (
            <div id="template" style={{ top: `${this.state.top}` }}>
                <span onClick={this.closeTemplate}>
                    <i className="fas fa-times"></i>
                </span>
                {/* <div
                    className="logo"
                    style={{
                        background: `url(${Logo}) no-repeat`,
                        backgroundSize: "contain"
                    }}
                ></div> */}
                <div className="form-container">
                    {this.props.data.signUp && <SignUp formBool={this.state.formBool} />}
                    {this.props.data.logIn && <LogIn formBool={this.state.formBool} />}
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

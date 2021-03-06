import React, { Component } from "react";
import Input from "./Input";
import { connect } from "react-redux";
import { bindActionCreators} from "redux";
import { signUpAction, logInAction, hideFormAction, logIn } from '../actions/loginRegisterActions'

class LogIn extends Component {
    state = {
        Email: "",
        password: ""
    };
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };
    signUp = () => {
        this.props.signUpAction();
        setTimeout(() => this.props.hideFormAction(), 1);
        setTimeout(() => this.props.logInAction(), 600);
    };
    handleSubmit = (e) => {
        // e.preventDefault()
        this.props.logIn(this.state);
        window.location.reload()

    };
    render() {
        const { Email, password } = this.state;
        return (
            <div
                className="logIn inputs"
                style={this.props.data.formBool ? { left: "-50%" } : { left: "50%" }}
            >
                <form action="" onSubmit={this.handleSubmit} noValidate>
                    <h1 style={{ fontWeight: "normal" }}>Log In</h1>
                    <Input
                        type="text"
                        name="Email"
                        placeholder="Email or Username"
                        handleChange={this.handleChange}
                        labelBool={Email !== ""}
                        icon="fas fa-user"
                    />
                    <Input
                        type="password"
                        name="password"
                        placeholder="Password"
                        handleChange={this.handleChange}
                        labelBool={password !== ""}
                        icon="fas fa-lock"
                    />
                    <div className="button-container">
                        <button type="submit" className="red-button">
                            Log In
                        </button>
                        <p style={{ textAlign: "center", display: "inline-block" }}>
                            Don't have an account?
                        </p>
                        <a href="#template" onClick={this.signUp}>
                            {" "}
                            Sign Up
                        </a>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(
    (state) => {
        return { data: state.getData };
    },
    (dispatch) => {
        return bindActionCreators({ signUpAction, logInAction, hideFormAction, logIn }, dispatch);
    }
)(LogIn);

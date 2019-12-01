import React, { Component } from "react";
import Input from "./Input";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { signUp } from "../actions/index.js";


class LogIn extends Component {
    state = {
        login: "",
        password: ""
    };
    handleChange = e => {
        const {name, value} = e.target;
        this.setState({[name]: value})
    }
    render() {
        const {login, password} = this.state
        return (
            <div className="inputs" style={
                this.props.data.signUp
                    ? { transform: "translateY(100%)" }
                    : { transform: "translateY(-190%)" }
            }>
                <form action="" >
                <h1 style={{ fontWeight: "normal" }}>Log In</h1>
                <Input
                    type="text"
                    name="login"
                    placeholder="Email or Username"
                    handleChange={this.handleChange}
                    labelBool={login !== ""}
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
                    <button type="submit" className='red-button'>Log In</button>
                    <p style={{ textAlign: "center", display: "inline-block" }} className="footer">
                        Don't have an account?
                    </p>
                    <a href="#template" onClick={this.props.signUp}>
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
        return bindActionCreators({ signUp }, dispatch);
    }
)(LogIn);
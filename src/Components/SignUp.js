import React, { Component } from "react";
import Input from "./Input";
import { formValidation, emailRegex } from "./formValidation";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { logInAction, signUpAction, hideFormAction, signUp } from "../actions/loginRegisterActions";

class SignUp extends Component {
    state = {
        form: {
            firstName: null,
            lastName: null,
            username: null,
            email: null,
            password: null,
            confirmPassword: null
        },
        formErrors: {
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (formValidation(this.state)) {
            this.props.signUp(this.state.form);
            this.logIn();
        } else { console.log("FORM NO VALID") }
    };

    handleChange = (e) => {
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };
        let form = { ...this.state.form };
        form[name] = value;

        switch (name) {
            case "firstName":
                formErrors.firstName = value.length < 3 ? "3 characters min!" : "";
                break;
            case "lastName":
                formErrors.lastName = value.length < 3 ? "3 characters min!" : "";
                break;
            case "username":
                formErrors.username = value.length < 6 ? "6 characters min!" : "";
                break;
            case "email":
                formErrors.email = emailRegex.test(value) ? "" : "wrong email address!";
                break;
            case "password":
                formErrors.password = value.length < 6 ? "6 characters min!" : "";
                break;
            case "confirmPassword":
                formErrors.confirmPassword = value !== form.password ? "do not match!" : "";
                break;
            default:
        }

        this.setState({ form, formErrors });
    };

    logIn = () => {
        this.props.logInAction();
        setTimeout(() => {
            this.props.hideFormAction();
        }, 10);
        setTimeout(() => {
            this.props.signUpAction();
        }, 600);
    };

    render() {
        const { form, formErrors } = this.state;
        return (
            <div
                className="signUp inputs"
                style={this.props.data.formBool ? { left: "50%" } : { left: "150%" }}
            >
                <form
                    action="http://192.168.5.69:8003/api/Users/Register"
                    onSubmit={this.handleSubmit}
                    method="POST"
                    noValidate
                >
                    <h1 style={{ fontWeight: "normal" }}>Create your account!</h1>
                    <Input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        handleChange={this.handleChange}
                        labelBool={form.firstName !== null && form.firstName !== ""}
                        formError={formErrors.firstName}
                    />
                    <Input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        handleChange={this.handleChange}
                        labelBool={form.lastName !== null && form.lastName !== ""}
                        formError={formErrors.lastName}
                    />
                    <Input
                        type="text"
                        name="username"
                        placeholder="Username"
                        handleChange={this.handleChange}
                        labelBool={form.username !== null && form.username !== ""}
                        formError={formErrors.username}
                        icon="fas fa-user"
                    />
                    <Input
                        type="text"
                        name="email"
                        placeholder="Email"
                        handleChange={this.handleChange}
                        labelBool={form.email !== null && form.email !== ""}
                        formError={formErrors.email}
                        icon="fas fa-envelope"
                    />
                    <Input
                        type="password"
                        name="password"
                        placeholder="Password"
                        handleChange={this.handleChange}
                        labelBool={form.password !== null && form.password !== ""}
                        formError={formErrors.password}
                        icon="fas fa-lock"
                    />
                    <Input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        handleChange={this.handleChange}
                        labelBool={form.confirmPassword !== null && form.confirmPassword !== ""}
                        formError={formErrors.confirmPassword}
                        icon="fas fa-lock"
                    />
                    <div className="button-container">
                        <button type="submit" className="red-button">
                            Sign Up
                        </button>
                        <p style={{ textAlign: "center", display: "inline-block" }}>
                            Already have an account?
                        </p>
                        <a href="#template" onClick={this.logIn}>
                            {" "}
                            Log In
                        </a>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
            data: state.getData,
            signupData: state.getData.signUp
        };
    },
    (dispatch) => {
        return bindActionCreators({ logInAction, signUpAction, hideFormAction, signUp }, dispatch);
    }
)(SignUp);

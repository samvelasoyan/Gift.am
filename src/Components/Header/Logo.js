import React, { Component } from "react";
import { Link } from "react-router-dom";
import mainLogo from "../../logo.png";

class Logo extends Component {
    render() {
        return (
            <div className="logo">
                <Link to="/"></Link>
                <img src={mainLogo} className="App-logo" alt="logo" />
            </div>
        );
    }
}
export default Logo;

import React, { Component } from "react";
import axios from "axios";

class Account extends Component {
    getUsers = () => {
        axios
            .get("http://192.168.5.69:8003/api/Category/Categories")
            .then((res) => console.log(res));
    };

    render() {
        return (
            <div className="ar">
                <div className="account">
                    <div className="acc user" onClick={this.props.openAccountMenu}>
                        <i className="fas fa-user"></i>
                        <span>Account</span>
                    </div>
                    <div className="acc wishList" onClick={this.getUsers}>
                        <i className="fas fa-heart"></i>
                        <span>Wish List</span>
                    </div>
                    <div className="acc cart">
                        <i className="fas fa-shopping-cart"></i>
                        <span>Cart</span>
                    </div>
                </div>
            </div>
        );
    }
}
export default Account;

import React, { Component, Fragment } from "react";
import Header from "./Components/Header";
import AccountMenu from "./Components/AccountMenu";
import Registration from "./Components/Registration";
import SlideShow from "./Components/SlideShow";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { popUpAction } from "./actions/index.js";

class App extends Component {
    state = {
        HeaderBool: true,
        AccountMenuBool: false,
        AccountMenuPositionRight: "0"
    };

    openAccountMenu = () => {
        this.setState({ AccountMenuBool: !this.state.AccountMenuBool });
    };
    closeAccountMenu = () => {
        this.setState({ AccountMenuPositionRight: "-22%" });
        setTimeout(() => {
            this.setState({
                AccountMenuBool: !this.state.AccountMenuBool,
                AccountMenuPositionRight: "0"
            });
        }, 300);
    };
    render() {
        return (
            <Fragment>
                <div className={this.state.AccountMenuBool ? "App blur" : "App"}>
                    {this.state.HeaderBool && (
                        <Header
                            openAccountMenu={this.openAccountMenu}
                        />
                    )}
                    <SlideShow />
                </div>
                {this.state.AccountMenuBool && (
                    <AccountMenu
                        closeAccountMenu={this.closeAccountMenu}
                        right={this.state.AccountMenuPositionRight}
                    />
                )}
                {this.props.data.template ? <Registration /> : null}
            </Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        data: state.getData
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ popUpAction }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

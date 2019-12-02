import React, { Component } from "react";
import Logo from "./Logo";
import Search from "./Search";
import Menu from "./Menu";
import Account from "./Account";

class Header extends Component {
    state = {
        search: false,
        animation: true
    };

    showSearchBar = () => {
        this.setAnimation()
        setTimeout(()=>this.setState({ search: !this.state.search }), 200);
    };

    setAnimation = () => {
        this.setState({ animation: !this.state.animation });
    };
    render() {
        const isBlur = this.props.AccountMenuBool ? "header2" : "header";
        return (
            <header className={isBlur}>
                <Logo />
                {this.state.search ? (
                    <Search
                        showSearchBar={this.showSearchBar}
                        animation={this.state.animation}
                        setAnimation={this.setAnimation}
                    />
                ) : (
                    <Menu
                        showSearchBar={this.showSearchBar}
                        animation={this.state.animation}
                        setAnimation={this.setAnimation}
                    />
                )}
                <Account openAccountMenu={this.props.openAccountMenu} />
            </header>
        );
    }
}
export default Header;

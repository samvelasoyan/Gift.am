import React, { Component } from "react";
import Logo from "./Logo";
import Search from "./Search";
import Menu from "./Menu";
import Account from "./Account";
import Background from '../images/IMG_14222.jpg'

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
        return (
            <header className='header' style={{background: `url(${Background}) no-repeat`, backgroundSize: '100% 100%', backgroundOrigin: 'border-box'}}>
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

import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setCategoryAction } from "./actions/routingActions";
import { getUserAction } from "./actions/loginRegisterActions";
import Home from "./Home";
import Category from "./Category";
import Search from "./Search";
import Error from "./Error";

class App extends Component {
    componentDidMount() {
        this.props.getUserAction();
    }

    render() {
        const { category } = this.props;
        const { error, loader } = this.props.bool; 
        return (
            <Fragment>
                <div className={`${error || loader ? "blured" : ""} page`}>
                    <Router>
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path={`/categories/${category}`} component={Category} />
                            <Route path={`/search`} component={Search} />
                        </Switch>
                    </Router>
                </div>
                {error ? <Error /> : null}
                {loader&& <div className='loader'>
                    <div className="spinner-grow text-light" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                    <div className="spinner-grow text-light" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                    <div className="spinner-grow text-light" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>}
            </Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        category: state.categories.category,
        value: state.search.value,
        bool: state.getData
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ setCategoryAction, getUserAction }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

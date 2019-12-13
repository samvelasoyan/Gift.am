import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setCategoryAction } from "./actions/index.js";
import Home from "./Home";
import Category from "./Category";

class App extends Component {
    render() {
      const {category} = this.props
        return (
            <div className='page'>
                <Router>
                  <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path={`/categories/${category}`} component={Category} />
                  </Switch>
                </Router>
            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
      category: state.categories.category
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setCategoryAction }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

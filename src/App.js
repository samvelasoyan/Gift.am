import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setCategoryAction } from "./actions/index.js";
import Home from "./Home";
import Category from "./Category";
import Search from "./Search";

class App extends Component {
    render() {
      const { category, value } = this.props
      console.log(value)
        return (
            <div className='page'>
                <Router>
                  <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path={`/categories/${category}`} component={Category} />
                    <Route path={`/search/${value}`} component={Search}/>
                  </Switch>
                </Router>
            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
      category: state.categories.category,
      value: state.search.value,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setCategoryAction }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

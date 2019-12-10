import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Perfume from "./Perfume";
// import Header from './Components/Header/Header';
// import Slidebar from './Components/Slidebar/slidebar';
// import AccountMenu from './Components/AccountMenuRight/AccountMenu';
// import Registration from './Components/Registration';
// import Categories from './Components/Categories';
// import Perfume from './Perfume';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import { popUpAction } from "./actions/index.js";
// // import resize from './resize';

// class App extends Component {
//   state = {
//     HeaderBool:true,
//     AccountMenuBool:false,
//     AccountMenuPositionRight:'0'
//   }

//   openAccountMenu = () => {
//     this.setState({AccountMenuBool:!this.state.AccountMenuBool})
//   }
//   closeAccountMenu = () =>{
//     this.setState({AccountMenuPositionRight:'-25%'},)
//     setTimeout(() => {
//       this.setState({AccountMenuBool:!this.state.AccountMenuBool,AccountMenuPositionRight:'0'})
//     }, 300);
//   }
//   // componentDidMount(){
//   //   resize()
//   // }
//   render(){
//     const forblur = this.state.AccountMenuBool ? 'blured' : ''
//     return (
//       <Router>
//         <Route path="/categories/perfume" component = {Perfume}/>
//         <div className="App">
//           <div className={forblur}>
//             {this.state.HeaderBool && <Header openAccountMenu={this.openAccountMenu}/>}
//             <Slidebar />
//             <Categories/>
//           </div>
//           {this.state.AccountMenuBool && <AccountMenu closeAccountMenu={this.closeAccountMenu} right={this.state.AccountMenuPositionRight}/>}
//           {this.props.data.template ? <Registration /> : null}
//         </div>
//       </Router>
//     );
//   }
// }

// function mapStateToProps(state) {
//   return {
//       data: state.getData
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ popUpAction }, dispatch);
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                  <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/categories/perfume" component={Perfume} />
                  </Switch>
                </Router>
            </div>
        );
    }
}

export default App;

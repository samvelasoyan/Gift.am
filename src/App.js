import React,{Component} from 'react';
import Header from './Components/Header/Header';
import LoginSignUp from './Components/LoginSignUp/LoginSignUp';

class App extends Component {
  state = {
    HeaderBool:true,
    LoginSignUp:false
  }

  openLogin = () => {
    this.setState({LoginSignUp:!this.state.LoginSignUp,HeaderBool:!this.state.HeaderBool})
  }

  render(){
    return (
      <div className="App">
        {this.state.HeaderBool && <Header openLogin={this.openLogin} />}
        {this.state.LoginSignUp && <LoginSignUp/>}
      </div>
    );
  }
}

export default App;

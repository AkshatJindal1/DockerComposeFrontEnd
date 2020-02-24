import React, { Component} from 'react';

import 'bootstrap/dist/css/bootstrap.css';  
import 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import LoginForm from './Components/LoginForm'
import SignUpForm from './Components/SignUpForm'

class App extends Component {
  state = { 
    loginForm: false,
    signupForm: true,
   }

  renderLoginForm =() => {
    this.setState({loginForm: true, signupForm:false})
  }
  renderSignupForm = () => {
    this.setState({loginForm: false, signupForm:true})
  }
  render() {
    const {
      loginForm, signupForm
    } = this.state;
    return (
      <div className = 'container'>
        <br/>
        <button className='btn btn-primary' onClick = {this.renderLoginForm}>Login</button> &nbsp;
        <button className='btn btn-secondary' onClick = {this.renderSignupForm}>Signup</button><br/><br/><br/>

        {loginForm && <LoginForm/>}
        {signupForm && <SignUpForm/>}

      </div>
    );
  }
}

export default App;
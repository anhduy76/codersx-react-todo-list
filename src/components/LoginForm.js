import React, { Component } from 'react';
import './style.css';

class LoginForm extends Component {
  render(){
    return(
      <div className="login-form">
        <h1>Sign In</h1>
        <div className="form userName">
          <p>User Name</p>
          <input placeholder="Bui Anh Duy"></input>
        </div>
        <div className="form password">
          <p>Password</p>
          <input placeholder="***********"></input>
        </div>
        <button className="signInButton">Sign In to CodersX</button>
      </div>
    );
  }
}
export default LoginForm;
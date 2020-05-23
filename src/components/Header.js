import React, { Component } from 'react';
import './style.css';

class Header extends Component {
  render(){
    return(
      <div className="header">
        <button>Go back</button>
        <h1>CodersX</h1>
        <a href="#">Sign Up</a>
      </div>
    );
  }
}

export default Header;

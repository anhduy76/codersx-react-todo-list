import React, { Component } from 'react';
import './style.css';

class TabMenu extends Component {
  render(){
    return(
      <div className="menu">
        <div className="menuItem">
          <i class="fas fa-home"></i>
          <p>HOME</p>
        </div>
        <div className="menuItem">
          <i class="fas fa-gift"></i>
          <p>DEALS</p>
        </div>
        <div className="menuItem">
          <i class="fas fa-cloud-upload-alt"></i>
          <p>UPLOAD</p>
        </div>
        <div className="menuItem">
          <i class="fas fa-mug-hot"></i>
          <p>WORK</p>
        </div>
        <div className="menuItem">
          <i class="fas fa-cog"></i>
          <p>SETTING</p>
        </div>
      </div>
    );
  }
}
 export default TabMenu;
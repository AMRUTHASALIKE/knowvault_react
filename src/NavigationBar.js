import React, { Component } from 'react';
import './App.css';
import KV from './KV.PNG';

class NavigationBar extends Component {
  render() {
    return (
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <img src={KV} alt={"KV"} width={95} height={50} align="left" />	
            <ul className="nav navbar-nav navbar-right">
              <li className="active"><a href="index.html">Home</a></li>
              <li><a href="resource.html">Resource</a></li>
              <li><a href="forum.html">Forum</a></li>
              <li><a href="upload.html">Upload Resources</a></li>
              <li><a href="bugs.html">Bugs</a></li>
              <li><a href="downloads.html">Downloads</a></li>
              <li><a href="signup.html">Register</a></li>
              <li><a href="login.html">Login</a></li>
            </ul>
          </div>
        </nav>
    );
  }
}

export default NavigationBar;
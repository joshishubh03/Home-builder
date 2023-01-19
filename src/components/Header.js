import React from 'react'
import { Link } from 'react-router-dom'
import Signup from './Signup';
const Header = () => {
  return (
    <div>
      <header id="header">
  <div className="container-fluid">
    <div id="logo" className="pull-left">
      <h1><a href="#intro" className="scrollto">Home Builder</a></h1>
      {/* Uncomment below if you prefer to use an image logo */}
      {/* <a href="#intro"><img src="img/logo.png" alt="" title="" /></a>*/}
    </div>
    <nav id="nav-menu-container">
      <ul className="nav-menu">
        <li className="menu-active"><a href="#intro">Home</a></li>
        <li><a href="#portfolio">Login</a></li>
        {/* <li><a href="#team">SignUp</a></li> */}
        <li><a href="#about">About Us</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
        {/* <Link to="/login">SignUP</Link> */}
      </ul>
    </nav>
  </div>
</header>

    </div>
  )
}

export default Header

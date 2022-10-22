import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Link} from "react-router-dom";
import logo from "../images/logo192.png";


const Navbar=()=>{
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">
        <img src={logo} id="navimg" alt="logo"></img>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/"><i class="zmdi zmdi-home zmdi-hc-fw"></i>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact"><i class="zmdi zmdi-settings zmdi-hc-spin"/>Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/signup">Register</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
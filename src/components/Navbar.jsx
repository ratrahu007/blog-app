import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/blo_logo.png'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
         <img src={logo} alt="Logo" width="40" height="40" className="mx-5 me-2 rounded-circle" />
        </Link>
        

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

       { /* Collapsive Nav Links*/}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto ">
            <li className="nav-item mx-3">
              <Link className="nav-link active me-3" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link active me-3" to="/Posts">Post</Link>
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link active me-3" to="/About">About</Link>
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link active me-3" to="/add-post">Add-Blog</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
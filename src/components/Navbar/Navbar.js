import React from 'react'
import "./Navbar.css"
function Navbar() {
  return (
    <div className='header'>
        <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">JobsClue</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">ALL JOBS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">COMPANIES</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">WALK-IN</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">GOVT-JOBS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">INTERNSHIP</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
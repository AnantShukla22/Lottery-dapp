import React from 'react'
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar">
    <div className="container-fluid">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link navtext" aria-current="page">
              Lottery System
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/manager"
              className="nav-link navtext"
              aria-current="page"
            >
              Manger
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/players" className="nav-link navtext">
              Player
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default navbar

import React from "react"
import { Link } from "react-router-dom"

export default function Navbar()  {
  return (
    <header>
      <nav className="navbar-section">
        <div className="vanlife-logo">
          <Link to='/'><img src="/images/vanlife-logo.png" alt="Vanlife Logo" id="vanlife-logo"/></Link>
        </div>
        <div className="nav-links">
          <Link to='/host'>Host</Link>
          <Link to='/about'>About</Link>
          <Link to='/vans'>Vans</Link>
        </div>
      </nav>
    </header>
  )
}

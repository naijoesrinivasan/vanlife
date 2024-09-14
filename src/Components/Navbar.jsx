import React from "react"
import { Link } from "react-router-dom"

export default function Navbar()  {
  return (
    <header>
      <nav className="navbar-section">
        <img src="/images/vanlife-logo.png" alt="Vanlife Logo" />
        <Link className='nav-links' to='/'>Home</Link>
        <Link className='nav-links' to='/about'>About</Link>
        <Link className='nav-links' to='/vans'>Vans</Link>
      </nav>
    </header>
  )
}
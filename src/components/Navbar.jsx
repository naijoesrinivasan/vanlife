
import React from "react"
import { NavLink } from "react-router-dom"

export default function Navbar()  {
  const styles = {
    fontWeight: "600",
    textDecoration: "underline",
    color: "red"
  };

  return (
    <header>
      <nav className="navbar-section">
        <div className="vanlife-logo">
          <NavLink 
            to='/' 
            className={({isActive}) => isActive ? "active-class" : ""}  
            style={({isActive}) => isActive ? styles : null}
          >
            <img src="/images/vanlife-logo.png" alt="Vanlife Logo" id="vanlife-logo"/>
          </NavLink>
        </div>
        <div className="nav-links">
          <NavLink 
            to='/host' 
            className={({isActive}) => isActive ? "active-class" : ""} 
            style={({isActive}) => isActive ? styles : null}
          >
            Host
          </NavLink>
          <NavLink 
            to='/about' 
            className={({isActive}) => isActive ? "active-class" : ""} 
            style={({isActive}) => isActive ? styles : null}
          >
            About
          </NavLink>
          <NavLink 
            to='/vans' 
            className={({isActive}) => isActive ? "active-class" : ""} 
            style={({isActive}) => isActive ? styles : null}
          >
            Vans
          </NavLink>
        </div>
      </nav>
    </header>
  )
}

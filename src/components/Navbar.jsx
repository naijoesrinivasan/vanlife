
import React from "react"
import { NavLink, Link } from "react-router-dom"
import { FaUser } from "react-icons/fa";
import { RiLogoutCircleRFill } from "react-icons/ri";

export default function Navbar()  {
  const styles = {
    fontWeight: "600",
    textDecoration: "underline",
  };

  return (
    <header>
      <nav className="navbar-section">
        <div className="crestline-logo-section">
          <Link to='/' >
            <img src="/images/logos/Crestline_transparent-.png" alt="Crestline Logo" id="crestline-logo"/>
          </Link>
        </div>
        <div className="nav-links">
          <NavLink 
            to='/host' 
            style={({isActive}) => isActive ? styles : null}
          >
            Host
          </NavLink>
          <NavLink 
            to='/about' 
            style={({isActive}) => isActive ? styles : null}
          >
            About
          </NavLink>
          <NavLink 
            to='/vans' 
            style={({isActive}) => isActive ? styles : null}
          >
            Vans
          </NavLink>
          <NavLink 
            to='/login' 
            style={({isActive}) => isActive ? styles : null}
          >
            <FaUser />
          </NavLink>
          <NavLink 
            to='/login' 
            onClick={() => localStorage.removeItem("loggedIn")}
          >
            <RiLogoutCircleRFill />
          </NavLink>
        </div>
      </nav>
    </header>
  )
}


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
          <NavLink 
            to='/login' 
            className={({isActive}) => isActive ? "active-class" : ""} 
            style={({isActive}) => isActive ? styles : null}
          >
            <FaUser />
          </NavLink>
          <NavLink 
            to='/login' 
            className={({isActive}) => isActive ? "active-class" : ""} 
            style={({isActive}) => isActive ? styles : null}
            onClick={() => localStorage.removeItem("loggedIn")}
          >
            <RiLogoutCircleRFill />
          </NavLink>
        </div>
      </nav>
    </header>
  )
}

import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

export default function HostLayout() {
  return (
    <main>
      <nav className='host-nav-links'>
        <NavLink 
          to='.' 
          end 
          className={({isActive}) => isActive ? "active-host-link" : ""}
        >
          Dashboard
        </NavLink>
        <NavLink 
          to='income' 
          className={({isActive}) => isActive ? "active-host-link" : ""}
        >
          Income
        </NavLink>
        <NavLink 
          to='vans' 
          className={({isActive}) => isActive ? "active-host-link" : ""}
        >
          Vans
        </NavLink>
        <NavLink 
          to='reviews' 
          className={({isActive}) => isActive ? "active-host-link" : ""}
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </main>
  )
}

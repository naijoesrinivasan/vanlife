import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export default function HostLayout() {
  return (
    <>
      <nav className='host-nav-links'>
        <Link to='.'>Dashboard</Link>
        <Link to='income'>Income</Link>
        <Link to='vans'>Vans</Link>
        <Link to='reviews'>Reviews</Link>
      </nav>
      <Outlet />
    </>
  )
}

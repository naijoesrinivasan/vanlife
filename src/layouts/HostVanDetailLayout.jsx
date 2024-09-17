import React, { useEffect, useState } from 'react';
import { useParams, Outlet, NavLink, Link, useLoaderData } from 'react-router-dom';
import { getHostVans } from '../api';

export async function loader({ params })  {
  return getHostVans(params.id)
}

export default function HostVanDetail() {
  const hostVanDetail = useLoaderData();

  return (
    <main>
      <Link to='..' relative='path'><p>&larr;Back to all vans</p></Link>
      <section className="host-van-detail-card">
        {hostVanDetail.map(van => {
          return (
            <>
              <div className='host-van-detail-card-top'>
                <img src={van.imageUrl} alt="" />
                <div>
                  <button>{van.type}</button>
                  <p style={{display: "flex", flexDirection: "column"}}>{van.name} <span style={{}}>${van.price}/day</span></p>
                </div>
              </div>
              <div className='host-van-detail-card-navlinks'>
                <NavLink to='.'><p>Details</p></NavLink>
                <NavLink to='pricing'><p>Pricing</p></NavLink>
                <NavLink to='photos'><p>Photos</p></NavLink>
              </div>
            </>
          )
        })}
        <Outlet context={hostVanDetail}/>
      </section>
    </main>
  )
}

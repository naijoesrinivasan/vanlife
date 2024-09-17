import React, { useEffect, useState } from 'react';
import { useParams, Outlet, NavLink, Link, useLoaderData } from 'react-router-dom';
import { getVan } from '../api';

export async function loader({ params })  {
  return getVan(params.id)
}

export default function HostVanDetail() {
  const van = useLoaderData();
  console.log(van);
  const styles = {
    fontWeight: "600",
    textDecoration: "underline",
  };

  return (
    <section className='van-detail-layout-wrapper'>
      <Link to='..' relative='path'><p>&larr;Back to all vans</p></Link>
      <section className="host-van-detail-card">
        {van && <>
              <div className='host-van-detail-card-top'>
                <img src={van.imageUrl} alt="" />
                <div>
                  <button className={`${van.type} van-options-btn`}>{van.type}</button>
                  <p style={{display: "flex", flexDirection: "column"}}>{van.name} <span style={{}}>${van.price}/day</span></p>
                </div>
              </div>
              <div className='host-van-detail-card-navlinks'>
                <NavLink to='.'><p>Details</p></NavLink>
                <NavLink to='pricing'><p>Pricing</p></NavLink>
                <NavLink to='photos'><p>Photos</p></NavLink>
              </div>
            </>
          }
        <Outlet context={van}/>
      </section>
    </section>
  )
}

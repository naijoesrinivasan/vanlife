import React, { useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom';
import { getHostVans } from '../../api';

export async function loader()  {
  return getHostVans();
}

export default function HostVans() {
  const hostVans = useLoaderData();

  console.log(hostVans);

  return (
    <main className='host-vans-wrapper'>
      <h1>Your Listed Vans</h1>
      <section className="host-vans-cards-wrapper">
        {hostVans.map(van => {
          return (
            <Link to={van.id}>
              <div className="host-van-card">
                <img src={van.imageUrl} alt={`Image of ${van.name}`} />
                <p>{van.name} <span style={{color: "#4D4D4D"}}>{van.price}/day</span></p>
              </div>
            </Link>
          ) 
        })}
      </section>
    </main>
  )
}

import React, { Suspense } from 'react'
import { Link, useLoaderData, defer, Await } from 'react-router-dom';
import { getHostVans } from '../../api';

export async function loader()  {
  return defer({vans: getHostVans()});
}

export default function HostVans() {
  const vansPromise = useLoaderData();

  return (
    <section className='host-vans-wrapper'>
      <h1>Your Listed Vans</h1>
      <section className="host-vans-cards-wrapper">
      <Suspense fallback={<h2>Loading host vans...</h2>}>
      <Await resolve={vansPromise.vans}>

        {(hostVans) => {
          return hostVans.map(van => {
            return (
              <Link to={van.id}>
                <div className="host-van-card">
                  <img src={van.imageUrl} alt={`Image of ${van.name}`} />
                  <p>{van.name} <span style={{color: "white"}}>{van.price}/day</span></p>
                </div>
              </Link>
            ) 
          })
        }}
      
      </Await>
      </Suspense>
      </section>
    </section>
  )
}

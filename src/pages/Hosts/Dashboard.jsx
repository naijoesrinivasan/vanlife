import React from 'react';
import { Rating } from '@mui/material';
import { getHostVans } from '../../api';
import { Suspense } from 'react';
import { Await, useLoaderData, defer, Link } from 'react-router-dom';

export async function loader()  {
  return defer({vans: getHostVans()});
}

export default function Dashboard() {
  const vansPromise = useLoaderData();
  const styles = {
    textDecoration: "underline",
    fontWeight: "bold"
  }
  return (
    <div className='dashboard-section-wrapper'>
      <section className="dashboard-welcome">
        <h1>Welcome!</h1>
        <div className="dashboard-income">
          <p>Income last <span style={styles}>3 months</span></p>
          <p>Details</p>
        </div>
        <h1>$5,173</h1>
      </section>
      <section className="dashboard-review">
        <h1>Review score <span><Rating value={1} max={1}/> 5/5</span></h1>
        <p>Details</p>
      </section>
      <section className="dashboard-listed-vans">
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
    </div>
  )
}

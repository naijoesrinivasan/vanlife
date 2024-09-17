import React from 'react'
import { useOutletContext } from 'react-router-dom';

export default function Details() {
  const hostVan = useOutletContext();
  console.log("Details page: ", hostVan);
  const spanStyles = {
    fontWeight: 300,
    fontSize: "16px",
    color: "#AAAAAA"
  };

  return (
    <section className='host-van-detail-outlet'>
      {hostVan && 
      <>
        <p>Name: <span style={spanStyles}>{hostVan.name}</span></p>
        <p>Category: <span style={spanStyles}>{hostVan.type}</span></p>
        <p>Description: <span style={spanStyles}>{hostVan.description}</span></p>
      </>
      }
    </section>
  )
}

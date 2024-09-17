import React from 'react'
import { useOutletContext } from 'react-router-dom';

export default function Details() {
  const hostVan = useOutletContext();
  console.log("Details page: ",hostVan);

  return (
    <main>
      {hostVan && 
      <>
        <p>Name: {hostVan[0].name}</p>
        <p>Category: {hostVan[0].type}</p>
        <p>Description: {hostVan[0].description}</p>
      </>
      }
    </main>
  )
}

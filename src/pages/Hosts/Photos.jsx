import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function Photos() {
  const hostVan = useOutletContext();

  return (
    <main>
    { hostVan && <img src={hostVan[0].imageUrl} style={{maxWidth: "30%"}} alt="" /> }
    </main>
  )
}

import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function Photos() {
  const hostVan = useOutletContext();

  return (
    <section>
    { hostVan && <img src={hostVan.imageUrl} style={{width: "150px", borderRadius: "6px"}} alt="" /> }
    </section>
  )
}

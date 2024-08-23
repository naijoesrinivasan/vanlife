import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export default function Vans() {
  const [vans, setVans] = useState([])

  useEffect(() => {
    fetch('/api/vans')
      .then(res => res.json())
      .then(data => setVans(data.vans))
  }, [])

  const vanElements = vans.map((van) => {
    return (
        <div className="van" key={van.id}>
          <Link to={van.id} aria-label={`View details for ${van.name}, priced at $${van.price} per day`}>
            <img src={van.imageUrl} className="van-image" alt={`Image of ${van.name}`} />
            <div className="van-name-price">
              <p>{van.name}</p>
              <div className="van-price">
                <p>${van.price}</p>
                <p>/day</p>
              </div>
            </div>
            <button className={`${van.type} van-type-btn`}>{van.type}</button>
          </Link>
        </div>
    )
  })

  return(
    <section className="vans-section">
      <div className="vans-content">
        <h1>Explore our van options </h1>
        <div className="van-filter-section">
          <button className="van-options-btn">Simple</button>
          <button className="van-options-btn">Luxury</button>
          <button className="van-options-btn">Rugged</button>
          <p>Clear filters</p>
        </div>
      </div>
      <div className="vans-list">
        {vans ? vanElements : <h1>Putting some vans here tomorrow 🚐. Chill Bill for now</h1>}      
      </div>
    </section>
  )
}
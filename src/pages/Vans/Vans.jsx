import React from "react";
import { Link, useSearchParams, useLoaderData, defer, Await } from "react-router-dom";
import { Suspense } from "react";
import { getVans } from "../../api";

export async function loader()  {
  return defer({vans: getVans()});
}

export default function Vans() {
  const vansPromise = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");

  function handleFilter(type) {
    const currSearchParams = new URLSearchParams(searchParams);

    type ? currSearchParams.set("type", type) : currSearchParams.delete("type");
    setSearchParams(currSearchParams);
  }

  return(
    <section className="vans-section">
    <Suspense fallback={<h1>Loading vans...</h1>}>
        <Await resolve={vansPromise.vans}>
          {(vans) => {
                const filteredVans = typeFilter ? vans.filter((van) => van.type === typeFilter) : vans;

                const vanElements = filteredVans.map((van) => {
                  return (
                      <div className="van" key={van.id}>
                        <Link to={van.id} state={{search: `?${searchParams.toString()}`, type: typeFilter }} aria-label={`View details for ${van.name}, priced at $${van.price} per day`}>
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


                return (
                  <>
                    <div className="vans-content">
                      <h1>Explore our van options </h1>
                      <div className="van-filter-section">
                        <button 
                          className={`van-options-btn ${typeFilter === 'simple' ? "simple" : ""}`} 
                          onClick={() => handleFilter("simple")}
                        >
                          Simple
                        </button>
                        <button 
                          className={`van-options-btn ${typeFilter === 'luxury' ? "luxury" : ""}`} 
                          onClick={() => handleFilter("luxury")}
                        >
                          Luxury
                        </button>
                        <button 
                          className={`van-options-btn ${typeFilter === 'rugged' ? "rugged" : ""}`} 
                          onClick={() => handleFilter("rugged")}
                        >
                          Rugged
                        </button>
                        {typeFilter &&
                        <p 
                          style={{textDecoration: "underline", fontSize: "16px", cursor: "pointer"}} 
                          onClick={() => handleFilter(null)}
                        >
                          Clear filters
                        </p>}
                      </div>
                    </div>
                    <div className="vans-list">
                      {vanElements}      
                    </div>
                  </>
                )
          }}
        </Await>
    </Suspense>
    </section>
  )
}
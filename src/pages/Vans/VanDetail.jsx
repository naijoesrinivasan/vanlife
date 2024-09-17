import React from "react";
import { Link, useLocation, useLoaderData } from "react-router-dom";
import { getVan } from "../../api";

export async function loader({params})  {
  return getVan(params.id);
}

function Van(props){
  const van = props.props
  console.log(van)
  return(
     <div className="van-detail">
       <img className="van-detail-image" src={van.imageUrl} alt="" />
       <div className="van-detail-content">
          <button className={`${van.type} van-type-btn`}>{van.type}</button>
          <h1>{van.name}</h1>
          <h2>${van.price}<span>/day</span></h2>
          <article>{van.description}</article>
          <button className="rent-van"><h3>Rent this van</h3></button>
       </div>
     </div>
  )
}

export default function VanDetail(props) {
  const van = useLoaderData();
  const location = useLocation();
  console.log(location);

  const search = location.state?.search || "";
  const type = location.state?.type || "all";


  return(
    <section className="van-detail-section">
      <Link to={`..${search}`} relative="path"><p>&larr; Back to { type } vans</p></Link>
      {van && <Van props={van} />}
    </section>
  )
}
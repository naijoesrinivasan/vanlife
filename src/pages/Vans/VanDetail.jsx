import React, {useState, useEffect} from "react";
import { useParams, Link } from "react-router-dom";

function Van(props){
  const van = props.props
  console.log(van)
  return(
     <div className="van-detail">
       <img className="van-image" src={van.imageUrl} alt="" />
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
  const {id} = useParams()
  const [van, setVan] = useState(null)

  useEffect(() => {
    const path = `/api/vans/${id}`
    fetch(path)
      .then(res => res.json())
      .then(data => setVan(data.van))
  }, [id])

  return(
    <section className="van-detail-section">
      <Link to='/vans'><p>&larr; Back to all vans</p></Link>
      {van && <Van props={van} />}
    </section>
  )
}
import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <main className="about-section">
      <img src="/images/about-background.png" alt="" style={{width:"100%"}}/>
      <section className="about-content">
        <section className="about-brag">
          <h1>Don’t squeeze in a sedan when you could relax in a van.</h1> 
          <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified 
          before each trip to ensure your travel plans can go off without a hitch.(Hitch costs extra 😉)</p>   
          <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
        </section>
        <section className="explore-vans">
          <h2>Your destination is waiting.</h2>
          <h2>Your van is ready.</h2>
          <Link to='/vans'><button id='explore-van-btn'><h3>Explore our vans</h3></button></Link>
        </section>      
      </section>
    </main>
  )
}
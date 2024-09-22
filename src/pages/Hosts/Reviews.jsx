import React from 'react';
import { Rating, Box, Typography } from '@mui/material';

export default function Reviews() {
  const styles = {
    textDecoration: "underline",
    fontWeight: "bold"
  }
  const monthStyles = {
    color: "grey"
  }

  return (
    <div className='reviews-section-wrapper'>
      <section className="reviews-title-section">
        <h1>Reviews</h1>
        <p>Last <span style={styles}>3 months</span></p>
      </section>
      <section className="review-chart">
        <div className="overall-rating">
          <h1>5.0</h1>
          <Rating value={1} max={1}/>
          <p>overall rating</p>
        </div>
        <div className="reviews-stars-section">
          <div className='lines'>
            <span className='no-stars'>5 stars</span>
            <span className="line"></span>
            <span className='percentage'>97%</span>
          </div>
          <div className='lines'>
            <span className='no-stars'>4 stars</span>
            <span className="line"></span>
            <span className='percentage'>2%</span>
          </div>
          <div className='lines'>
            <span className='no-stars'>3 stars</span>
            <span className="line"></span>
            <span className='percentage'>1%</span>
          </div>
          <div className='lines'>
            <span className='no-stars'>2 stars</span>
            <span className="line"></span>
            <span className='percentage'>0%</span>
          </div>
          <div className='lines'>
            <span className='no-stars'>1 star</span>
            <span className="line"></span>
            <span className='percentage'>0%</span>
          </div>
        </div>
      </section>
      <section className="reviews-wrapper">
        <h3>Reviews (2)</h3>
        <div className="review">
          <Rating value={5}/>
          <p>Elliot, <span style={monthStyles}>February 4, 2024</span></p>
          <p>The Beach Bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue.
              Super clean when we picked it up and the host is very understanding. Higly recommend!</p>
        </div>
        <div className="review">
          <Rating value={5}/>
          <p>Sandy, <span style={monthStyles}>April 17, 2024</span></p>
          <p>This is the third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!</p>
        </div>
      </section>
    </div>
  )
}

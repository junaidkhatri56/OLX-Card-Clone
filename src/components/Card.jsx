import React from 'react';
import './Card.css'; // Make sure to import your updated CSS

function Card({ src, price, title, location, date }) {
  return (
    <div className="card">
      <img src={src} alt="Product" />
      <div className="content">
        <h3 className="price">{price}</h3>
        <h3>{title}</h3>
        <p className="location">{location}</p>
        <p className="date">{date}</p>
      </div>
    </div>
  );
}

export default Card;

import React from 'react';

const Product = ({ name, price, imageUrl }) => (
  <div className="card mb-3">
    <img src={imageUrl} className="card-img-top" alt={name} />
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <p className="card-text">Price: ₱{price}</p>
    </div>
  </div>
);

export default Product;

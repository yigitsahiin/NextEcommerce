import React from 'react';
import { items } from './Data';

const ProductDetail = ({ id }) => {
  const product = items.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6 img">
          <img src={product.imgSrc} alt={product.title} />
        </div>
        <div className="col-md-6">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <h2>{product.price} ₹</h2>
          <a href={product.amazonLink} className="btn btn-warning">
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

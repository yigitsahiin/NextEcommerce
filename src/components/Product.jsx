import React from 'react';
import { useRouter } from 'next/navigation';
import { items } from './Data';
import { BsFillCartCheckFill } from 'react-icons/bs';

const Product = ({ items, cart, setCart }) => {
  const router = useRouter();

  const handleDetail = (id) => {
    router.push(`/product/${id}`);
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="product-grid">
      {items.map((product) => (
        <div className="card" key={product.id}>
          <img
            src={product.imgSrc}
            className="card-img-top"
            alt={product.title}
            onClick={() => handleDetail(product.id)}
          />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
            <button onClick={() => addToCart(product)} className="btn btn-primary mx-3">
              Add to Cart
            </button>
            <button className="btn btn-warning">{product.price} TL</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;

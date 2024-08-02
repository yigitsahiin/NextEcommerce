import React from 'react';

const Cart = ({ cart = [], setCart }) => {
  return (
    <>
      <div className="container my-5" style={{ width: '54%' }}>
        {cart.length === 0 ? (
          <div className="text-center">
            <h1>Your Cart is Empty</h1>
            <a href="/" className="btn btn-warning">
              Continue Shopping...
            </a>
          </div>
        ) : (
          cart.map((product) => (
            <div key={product.id} className="card mb-3 my-5" style={{ width: '700px' }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img 
                    src={product.imgSrc} 
                    className="img-fluid rounded-start" 
                    alt={product.title} 
                    style={{ maxWidth: '100%', height: 'auto' }} 
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body text-center">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <button className="btn btn-primary mx-3">{product.price} ₹</button>
                    <button className="btn btn-warning">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      {cart.length > 0 && (
        <div
          className="container text-center my-5"
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <button className="btn btn-warning mx-5">CheckOut</button>
          <button onClick={() => setCart([])} className="btn btn-danger">
            Clear Cart
          </button>
        </div>
      )}
    </>
  );
};

export default Cart;

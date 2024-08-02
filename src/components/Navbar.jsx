"use client";

import React, { useState } from 'react';
import { usePathname } from 'next/navigation'; 
import { items } from './Data';
import { BsFillCartCheckFill } from 'react-icons/bs';

const Navbar = ({ setData, cart }) => {
  const pathname = usePathname(); 
  const [searchTerm, setSearchTerm] = useState('');

  const filterByCategory = (category) => {
    const filteredItems = items.filter((product) => product.category === category);
    setData(filteredItems);
  };

  const filterByPrice = (price) => {
    const filteredItems = items.filter((product) => product.price >= price);
    setData(filteredItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `/search/${searchTerm}`;
    setSearchTerm('');
  };

  console.log('Current Path:', pathname); 

  return (
    <>
      <header className="sticky-top">
        <div className="nav-bar">
          <a href="/" className="brand">
            TeknoMarkt
          </a>
          <form onSubmit={handleSubmit} className="search-bar">
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              placeholder="Ürün Ara"
            />
          </form>
          <a href="/cart" className="cart">
            <button type="button" className="btn btn-primary position-relative">
              <BsFillCartCheckFill style={{ fontSize: '1.5rem' }} />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
          </a>
        </div>
        {pathname === '/' && (
          <div className="nav-bar-wrapper">
            <div className="items">Filter by {'->'}</div>
            <div onClick={() => setData(items)} className="items">
              No Filter
            </div>
            <div onClick={() => filterByCategory('mobiles')} className="items">
              Mobiles
            </div>
            <div onClick={() => filterByCategory('laptops')} className="items">
              Laptops
            </div>
            <div onClick={() => filterByCategory('tablets')} className="items">
              Tablets
            </div>
            <div onClick={() => filterByPrice(50000)} className="items">
              Price &gt; 50K
            </div>
            <div onClick={() => filterByPrice(100000)} className="items">
              Price &gt; 100K
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;

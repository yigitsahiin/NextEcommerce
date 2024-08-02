"use client"; 

import React from 'react';
import { useRouter } from 'next/navigation'; 
import { items } from './Data'; 

const SearchItem = ({ term }) => {
  const router = useRouter();
  const searchResults = items.filter((item) =>
    item.title.toLowerCase().includes(term.toLowerCase())
  );

  return (
    <div>
      {searchResults.length === 0 ? (
        <p>No results found</p>
      ) : (
        <div className="search-results">
          {searchResults.map((item) => (
            <div key={item.id} className="search-item">
              <h5>{item.title}</h5>
              <p>{item.description}</p>
              <button onClick={() => router.push(`/product/${item.id}`)}>
                View Details
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchItem;

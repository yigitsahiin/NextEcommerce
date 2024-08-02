"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Product from "../components/Product";
import { items } from "../components/Data";

const HomePage = () => {
  const [data, setData] = useState(items);
  const [cart, setCart] = useState([]);

  return (
    <>
      <Navbar setData={setData} cart={cart} />
      <Product items={data} cart={cart} setCart={setCart} />
    </>
  );
};

export default HomePage;

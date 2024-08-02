"use client";

import React, { useState } from "react";
import Cart from "../../components/Cart";
import { items } from "../../components/Data";

const CartPage = () => {
  const [cart, setCart] = useState([]);

  return <Cart cart={cart} setCart={setCart} />;
};

export default CartPage;

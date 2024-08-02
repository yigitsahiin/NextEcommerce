"use client";
import React from "react";
import ProductDetail from "../../../components/ProductDetail";

const ProductDetailPage = ({ params }) => {
  const { id } = params;
  return <ProductDetail id={id} />;
};

export default ProductDetailPage;

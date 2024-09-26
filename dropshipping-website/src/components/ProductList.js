// src/components/ProductList.js

import React from "react";
import ProductCard from "./ProductCard";
import "./ProductList.css";

/**
 * The ProductList component receives an array of products and maps them to individual ProductCard components.
 */
const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;

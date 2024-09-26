// src/pages/Products.js

import React, { useEffect, useState } from "react"; // Import React and hooks
import ProductList from "../components/ProductList"; // Import the ProductList component
import { fetchProducts } from "../api/productsAPI"; // Import the function to fetch products
import "./Products.css"; // Import CSS styles for this component

/**
 * The Products component fetches and displays a list of products.
 */
const Products = () => {
  const [products, setProducts] = useState([]); // State to hold products
  const [loading, setLoading] = useState(true); // State to manage loading state

  // Fetch products when the component mounts
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const fetchedProducts = await fetchProducts(); // Call the API to fetch products
        setProducts(fetchedProducts); // Update the products state
      } catch (error) {
        console.error("Error fetching products: ", error); // Log error if fetching fails
      } finally {
        setLoading(false); // Set loading to false once fetching is complete
      }
    };

    loadProducts(); // Call the function to load products
  }, []); // Empty dependency array to run once on mount

  // Show a loading message while fetching products
  if (loading) {
    return <div>Loading...</div>;
  }

  // Render the list of products once fetched
  return (
    <div className="products-page">
      <h1>Our Products</h1>
      <ProductList products={products} />{" "}
      {/* Pass fetched products to ProductList */}
    </div>
  );
};

export default Products; // Export the Products component

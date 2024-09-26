import axios from "axios";

// Define your API endpoint here
const API_ENDPOINT = "YOUR_DROPSHIPPING_API_ENDPOINT";

/**
 * Fetch products from the dropshipping API.
 * @returns {Promise<Array>} A promise that resolves to an array of products.
 */
export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${API_ENDPOINT}/products`);
    return response.data.products; // Assuming the API returns an object with a 'products' array
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error; // Rethrow the error for handling in the component
  }
};

/**
 * Upload a new product to the dropshipping API.
 * @param {Object} product - The product details.
 * @returns {Promise} A promise that resolves when the product is uploaded.
 */
export const uploadProduct = async (product) => {
  try {
    const response = await axios.post(`${API_ENDPOINT}/upload`, product);
    return response.data; // Assuming the API returns a confirmation message or the uploaded product details
  } catch (error) {
    console.error("Error uploading product:", error);
    throw error; // Rethrow the error for handling in the component
  }
};

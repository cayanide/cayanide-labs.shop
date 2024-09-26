import React from "react";
import { Route, Redirect } from "react-router-dom";

// Sample function to check if the user is an admin
const isAdmin = () => {
  // Replace this logic with your actual authentication logic
  const user = JSON.parse(localStorage.getItem("user")); // Example: Getting user data from localStorage
  return user && user.role === "admin"; // Check if user exists and is an admin
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAdmin() ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

export default PrivateRoute;

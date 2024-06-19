// src/components/Logout.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear authentication token from local storage
    localStorage.removeItem('authToken');

    // Clear cookies if needed
    document.cookie = "authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    // Redirect to the login page
    navigate('/');
  }, [navigate]);

  return null; // No UI needed, just perform logout and redirect
};

export default Logout;

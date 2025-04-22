
import React, { useEffect } from "react";
import ApprenticesPage from "./ApprenticesPage";
import { useNavigate } from "react-router-dom";

// Ensures the /apprentice-hub route renders the full ApprenticesPage component
const ApprenticeHub = () => {
  const navigate = useNavigate();
  
  // Set apprentice role flag when visiting this page
  useEffect(() => {
    localStorage.setItem('preferredRole', 'apprentice');
  }, []);
  
  return <ApprenticesPage />;
};

export default ApprenticeHub;


import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import LoadingSpinner from "@/components/LoadingSpinner";

const ApprenticesPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/apprentices');
  }, [navigate]);

  return (
    <MainLayout>
      <div className="container flex items-center justify-center h-screen">
        <LoadingSpinner />
      </div>
    </MainLayout>
  );
};

export default ApprenticesPage;

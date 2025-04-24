
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import CalculatorTools from "@/components/technical/CalculatorTools";
import BackButton from "@/components/navigation/BackButton";

const CalculatorToolsPage = () => {
  return (
    <MainLayout>
      <div className="container py-8">
        <BackButton />
        <div className="max-w-4xl mx-auto">
          <CalculatorTools />
        </div>
      </div>
    </MainLayout>
  );
};

export default CalculatorToolsPage;

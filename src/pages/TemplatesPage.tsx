
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import BackButton from "@/components/navigation/BackButton";
import TemplatesSection from "@/components/technical/templates/TemplatesSection";
import "../components/technical/templates/printStyles.css";

const TemplatesPage = () => {
  return (
    <MainLayout>
      <div className="container py-8">
        <BackButton />
        <div className="max-w-4xl mx-auto">
          <TemplatesSection />
        </div>
      </div>
    </MainLayout>
  );
};

export default TemplatesPage;


import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import BackButton from "@/components/navigation/BackButton";
import { InvoiceManager } from "@/components/technical/invoice/InvoiceManager";

const InvoiceManagerPage = () => {
  return (
    <MainLayout>
      <div className="container py-8">
        <BackButton />
        <div className="max-w-4xl mx-auto">
          <InvoiceManager />
        </div>
      </div>
    </MainLayout>
  );
};

export default InvoiceManagerPage;

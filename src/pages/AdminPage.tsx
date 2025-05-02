
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import TutorApprovals from "@/components/admin/TutorApprovals";

const AdminPage = () => {
  return (
    <MainLayout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-6 text-primary">Admin Dashboard</h1>
        <div className="space-y-8">
          <section>
            <TutorApprovals />
          </section>
        </div>
      </div>
    </MainLayout>
  );
};

export default AdminPage;

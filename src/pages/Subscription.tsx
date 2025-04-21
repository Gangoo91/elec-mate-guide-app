
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import SubscriptionContent from "@/components/subscription/SubscriptionContent";
import { SubscriptionProvider } from "@/contexts/SubscriptionContext";

const Subscription = () => {
  return (
    <MainLayout>
      <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center bg-[#151812] px-1 py-6 sm:px-3 md:px-2">
        <SubscriptionProvider>
          <SubscriptionContent />
        </SubscriptionProvider>
      </div>
    </MainLayout>
  );
};

export default Subscription;

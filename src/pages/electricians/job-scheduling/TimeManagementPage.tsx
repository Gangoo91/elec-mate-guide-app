
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { TimeClockCard } from "@/components/jobs/TimeClockCard";
import { WeeklySummaryCard } from "@/components/jobs/WeeklySummaryCard";
import { TimeHistoryView } from "@/components/jobs/TimeHistoryView";
import { useTimeEntries } from "@/hooks/useTimeEntries";

const TimeManagementPage = () => {
  const { weekData, isLoading, refetch } = useTimeEntries();

  return (
    <MainLayout>
      <div className="container py-8">
        <PageHeader
          title="Time Management"
          description="Track work hours, travel time, and job durations efficiently."
        />
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <WeeklySummaryCard weekData={weekData} loading={isLoading} />
            <TimeClockCard />
          </div>
          
          <div className="mt-8">
            <TimeHistoryView />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default TimeManagementPage;

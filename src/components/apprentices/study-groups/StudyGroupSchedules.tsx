
import React from 'react';
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Calendar, ExternalLink } from "lucide-react";
import type { StudyGroupSchedule } from "@/types/studyGroups";

interface StudyGroupSchedulesProps {
  schedules: StudyGroupSchedule[];
  isOwner: boolean;
}

const StudyGroupSchedules = ({ schedules, isOwner }: StudyGroupSchedulesProps) => {
  return (
    <Card className="bg-[#22251e] border-[#FFC900]/20 mt-6">
      <CardHeader>
        <CardTitle className="text-[#FFC900]">Upcoming Meetings</CardTitle>
      </CardHeader>
      <CardContent>
        {schedules.length > 0 ? (
          <div className="space-y-4">
            {schedules.map((schedule) => (
              <div key={schedule.id} className="p-4 border border-[#FFC900]/20 rounded-md">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-[#FFC900]">{schedule.day_of_week}</h4>
                  <span className="text-[#FFC900]/80">{schedule.start_time} ({schedule.duration_minutes} minutes)</span>
                </div>
                {schedule.meeting_link && (
                  <div className="mt-2">
                    <a 
                      href={schedule.meeting_link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[#FFC900] hover:underline"
                    >
                      <ExternalLink size={16} />
                      Join Meeting
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-6 text-[#FFC900]/60">
            <Calendar className="mx-auto h-12 w-12 mb-2 opacity-50" />
            <p>No meetings scheduled yet.</p>
            {isOwner && (
              <p className="mt-2 text-sm">Click the calendar icon on the group card to schedule a meeting.</p>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default StudyGroupSchedules;

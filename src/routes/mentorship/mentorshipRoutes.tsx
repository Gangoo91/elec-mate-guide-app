
import React from 'react';
import { RouteObject } from 'react-router-dom';
import Mentorship from "@/pages/Mentorship";
import FindMentors from "@/pages/FindMentors";
import MyMentors from "@/pages/MyMentors";
import MentorshipGuidePage from "@/pages/MentorshipGuide";
import ScheduleSessions from "@/pages/ScheduleSessions";
import PendingRequests from "@/pages/PendingRequests";
import ActiveMentorships from "@/pages/ActiveMentorships";

// Define all mentorship-related routes
const mentorshipRoutes: RouteObject[] = [
  // Apprentice mentorship routes
  {
    path: "/apprentices/mentorship",
    element: <Mentorship />
  },
  {
    path: "/apprentices/mentorship/find-mentors",
    element: <FindMentors />
  },
  {
    path: "/apprentices/mentorship/my-mentors",
    element: <MyMentors />
  },
  {
    path: "/apprentices/mentorship/guide",
    element: <MentorshipGuidePage />
  },
  {
    path: "/apprentices/mentorship/schedule",
    element: <ScheduleSessions />
  },
  
  // Electrician mentorship routes
  {
    path: "/electricians/mentorship",
    element: <Mentorship />
  },
  {
    path: "/electricians/mentorship/pending-requests",
    element: <PendingRequests />
  },
  {
    path: "/electricians/mentorship/active",
    element: <ActiveMentorships />
  },
  {
    path: "/electricians/mentorship/guide",
    element: <MentorshipGuidePage />
  },
];

export default mentorshipRoutes;

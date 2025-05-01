
import React from 'react';
import { RouteObject } from 'react-router-dom';
import Mentorship from "@/pages/Mentorship";

// Define all mentorship-related routes
const mentorshipRoutes: RouteObject[] = [
  // Apprentice mentorship routes
  {
    path: "/apprentices/mentorship",
    element: <Mentorship />
  },
  {
    path: "/apprentices/mentorship/find-mentors",
    element: <Mentorship />
  },
  {
    path: "/apprentices/mentorship/my-mentors",
    element: <Mentorship />
  },
  {
    path: "/apprentices/mentorship/guide",
    element: <Mentorship />
  },
  {
    path: "/apprentices/mentorship/schedule",
    element: <Mentorship />
  },
  
  // Electrician mentorship routes
  {
    path: "/electricians/mentorship",
    element: <Mentorship />
  },
  {
    path: "/electricians/mentorship/pending-requests",
    element: <Mentorship />
  },
  {
    path: "/electricians/mentorship/active",
    element: <Mentorship />
  },
  {
    path: "/electricians/mentorship/guide",
    element: <Mentorship />
  },
];

export default mentorshipRoutes;

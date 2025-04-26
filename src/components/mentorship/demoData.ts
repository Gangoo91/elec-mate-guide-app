
import { Mentor } from "@/types/mentor";
import { MentorshipRequest } from "./MentorshipRequestList";

export const demoMentors: Mentor[] = [
  {
    id: "1",
    user_id: "1",
    name: "Sarah Johnson",
    title: "Master Electrician",
    experience: "15+ years",
    specialties: ["Commercial", "Industrial"],
    availability: "High",
  },
  {
    id: "2",
    user_id: "2",
    name: "David Miller",
    title: "Electrical Engineer",
    experience: "12 years",
    specialties: ["Renewable Energy", "Smart Home"],
    availability: "Medium",
  },
  {
    id: "3",
    user_id: "3",
    name: "Michael Chen",
    title: "Project Manager",
    experience: "8 years",
    specialties: ["Residential", "Lighting"],
    availability: "Low",
  },
  {
    id: "4",
    user_id: "4",
    name: "Emily Rodriguez",
    title: "Licensed Electrician",
    experience: "10 years",
    specialties: ["Safety", "Code Compliance"],
    availability: "High",
  },
  {
    id: "5",
    user_id: "5",
    name: "James Wilson",
    title: "Solar Installation Expert",
    experience: "6 years",
    specialties: ["Solar", "Renewable Systems"],
    availability: "Medium",
  },
  {
    id: "6",
    user_id: "6",
    name: "Alexandra Kim",
    title: "Systems Designer",
    experience: "9 years",
    specialties: ["Building Automation", "Smart Systems"],
    availability: "Low",
  },
];

export const demoMentorshipRequests: MentorshipRequest[] = [
  {
    id: "1",
    apprenticeName: "Thomas Johnson",
    apprenticeId: "user-123",
    message: "I'm currently in my second year of apprenticeship and struggling with three-phase systems. I'd love some guidance on practical applications and common troubleshooting techniques.",
    requestDate: "2025-04-15T14:30:00Z",
    status: "pending",
    expertise: ["Three-Phase Systems", "Troubleshooting"]
  },
  {
    id: "2",
    apprenticeName: "Sarah Williams",
    apprenticeId: "user-456",
    message: "I'm preparing for my NVQ Level 3 assessment and would appreciate some mentoring on motor control circuits and industrial installations. I have my practical exam in 6 weeks.",
    requestDate: "2025-04-18T09:15:00Z",
    status: "pending",
    expertise: ["Industrial", "Motor Control"]
  },
  {
    id: "3",
    apprenticeName: "Michael Chen",
    apprenticeId: "user-789",
    message: "I've been working on residential installations but want to transition to commercial projects. Could you share insights on the main differences and what additional skills I should focus on?",
    requestDate: "2025-04-10T11:45:00Z",
    status: "accepted",
    expertise: ["Commercial", "Career Development"]
  },
];


export interface Mentor {
  id: string;
  user_id: string;
  name: string;
  title: string;
  experience: string;
  specialties: string[];
  availability: "High" | "Medium" | "Low";
}

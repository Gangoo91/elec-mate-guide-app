
import * as z from "zod";

export const ProfileFormSchema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  phone_number: z.string().optional(),
  location: z.string().optional(),
  qualification_level: z.string().optional(),
  bio: z.string().optional(),
});

export type ProfileFormValues = z.infer<typeof ProfileFormSchema>;

export const qualificationLevels = [
  "Apprentice",
  "Electrical Mate",
  "Electrician", 
  "Advanced Electrician",
  "Commissioning Tech",
  "Commissioning Engineer",
  "Electrical Inspector",
  "Electrical Engineer",
  "Electrical Designer",
  "Other"
] as const;


import * as z from "zod";

export const ProfileFormSchema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  phone_number: z.string().optional(),
  location: z.string().optional(),
  qualification_level: z.string().optional(),
  bio: z.string().max(500, "Bio must be 500 characters or less").optional(),
  years_experience: z.string().optional(),
  avatar_url: z.string().optional(),
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

export const experienceYears = [
  "Less than 1 year",
  "1-2 years",
  "3-5 years",
  "5-10 years",
  "10+ years"
] as const;

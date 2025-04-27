
import * as z from "zod";

export const studyGroupSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  topic: z.string().min(2, "Topic is required"),
  level: z.string().min(1, "Level is required"),
  maxParticipants: z.number().min(2).max(50),
  meetingLink: z.string().optional(),
  tags: z.array(z.string()).optional(),
  is_private: z.boolean().default(false),
  study_materials: z.array(z.any()).optional(),
});

export type StudyGroupFormValues = z.infer<typeof studyGroupSchema>;

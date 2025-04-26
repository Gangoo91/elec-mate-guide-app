
import * as z from "zod";

export const projectSchema = z.object({
  name: z.string().min(2, { message: "Project name must be at least 2 characters." }),
  client_name: z.string().min(2, { message: "Client name is required." }),
  status: z.enum(["planning", "in-progress", "on-hold", "completed", "cancelled"]),
  description: z.string().optional(),
  deadline: z.string().optional(),
  budget: z.number().positive().optional(),
  progress: z.number().min(0).max(100).optional(),
});

export type ProjectFormData = z.infer<typeof projectSchema>;

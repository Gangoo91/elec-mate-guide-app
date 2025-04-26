
import { z } from "zod";

export const jobFormSchema = z.object({
  clientName: z.string().min(2, "Client name must be at least 2 characters"),
  address: z.string().min(5, "Address must be at least 5 characters"),
  jobType: z.string().min(2, "Job type must be at least 2 characters"),
  date: z.string().min(1, "Date is required"),
  startTime: z.string().min(1, "Start time is required"),
  endTime: z.string().min(1, "End time is required"),
  notes: z.string().optional(),
});

export type JobFormData = z.infer<typeof jobFormSchema>;

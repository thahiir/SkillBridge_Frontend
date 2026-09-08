import { z } from "zod";

export const taskSchema = z.object({

    title: z
        .string()
        .min(3, "Title must be at least 3 characters")
        .max(100, "Title cannot exceed 100 characters"),

    description: z
        .string()
        .max(500, "Description cannot exceed 500 characters")
        .optional(),

    status: z.enum([
        "Pending",
        "In Progress",
        "Completed",
    ]),

    priority: z.enum([
        "Low",
        "Medium",
        "High",
    ]),

    dueDate: z
        .string()
        .min(1, "Due date is required"),
});
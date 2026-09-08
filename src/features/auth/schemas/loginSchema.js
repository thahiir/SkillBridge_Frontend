import { z } from "zod";

export const loginSchema = z.object({

    Email: z

        .string()

        .min(1, "Email is required")

        .email("Invalid email address"),

    Password: z

        .string()

        .min(6, "Password must be at least 6 characters"),

    remember: z.boolean().optional(),

});
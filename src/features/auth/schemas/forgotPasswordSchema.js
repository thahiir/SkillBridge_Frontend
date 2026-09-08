import { z } from "zod";

export const forgotPasswordSchema = z.object({

    Email: z
        .string()
        .trim()
        .min(1, "Email is required")
        .email("Please enter a valid email address")
        .max(100, "Email is too long"),

});
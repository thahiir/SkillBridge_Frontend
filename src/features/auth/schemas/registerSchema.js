import { z } from "zod";

export const registerSchema = z.object({

    Fullname: z
        .string()
        .min(3, "Full name must contain at least 3 characters"),

    Email: z
        .string()
        .email("Please enter a valid email"),

    PhoneNo: z
        .string()
        .transform((value) =>
            value.replace(/[\s-]/g, "")
        )
        .refine(
            (value) =>
                /^\+?[1-9]\d{7,14}$/.test(value),
            {
                message: "Please enter a valid phone number",
            }
        ),
    Password: z
            .string()
            .min(8, "Password must be at least 8 characters")
            .max(50, "Password must not exceed 50 characters")
            .regex(
                /[A-Z]/,
                "Password must contain at least one uppercase letter"
            )
            .regex(
                /[a-z]/,
                "Password must contain at least one lowercase letter"
            )
            .regex(
                /[0-9]/,
                "Password must contain at least one number"
            )
            .regex(
                /[^A-Za-z0-9]/,
                "Password must contain at least one special character"
            ),
    ConfirmPassword: z
        .string()
        .min(1,"Please confirm your password"),

    terms: z.literal(true, {
        errorMap: () => ({
            message: "You must accept Terms & Conditions",
        }),
    }),

}).refine(

    (data) => data.Password === data.ConfirmPassword,

    {
        path: ["ConfirmPassword"],
        message: "Passwords do not match",
    }

);
import { z } from "zod";

export const resetPasswordSchema = z

    .object({

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

            .min(1, "Please confirm your password"),

    })

    .refine(

        (data) => data.Password === data.ConfirmPassword,

        {

            path: ["ConfirmPassword"],

            message: "Passwords do not match",

        }

    );
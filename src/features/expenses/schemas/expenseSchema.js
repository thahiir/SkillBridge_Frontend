import { z } from "zod";

export const expenseSchema = z.object({

    title: z
        .string()
        .min(3, "Title must be at least 3 characters"),

    amount: z
        .coerce
        .number()
        .positive("Amount must be greater than 0"),

    category: z.string().min(1, "Select category"),

    paymentMethod: z.string().min(1, "Select payment method"),

    notes: z.string().optional(),

    date: z.string().optional(),

});
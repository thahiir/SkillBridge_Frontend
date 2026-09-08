import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { expenseSchema } from "../schemas/expenseSchema";
import useCreateExpense from "../hooks/useCreateExpense";
import useUpdateExpense from "../hooks/useUpdateExpense";

const ExpenseForm = ({ expense = null, onSuccess, onClose }) => {

    const { create, loading } = useCreateExpense();

    const {

        register,

        handleSubmit,

        reset,

        formState: { errors },

    } = useForm({

        resolver: zodResolver(expenseSchema),

        defaultValues: {

            title: expense?.title || "",

            amount: expense?.amount || "",

            category: expense?.category || "Food",

            paymentMethod: expense?.paymentMethod || "Cash",

            notes: expense?.notes || "",

            date: expense?.date
                ? expense.date.slice(0,10)
                : "",

        },

    });

    const {update} = useUpdateExpense();

    const onSubmit = async (data) => {

            if (expense) {

                await update(expense._id, data);

            } else {

                await create(data);

            }

            reset();

            onSuccess?.();

            onClose?.();

        };

    return (

        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
        >

            {/* Title */}

            <div>

                <label className="mb-2 block text-sm font-medium text-slate-700">

                    Expense Title

                </label>

                <input
                    type="text"
                    placeholder="Enter expense title"
                    {...register("title")}
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-indigo-500 focus:outline-none"
                />

                {errors.title && (

                    <p className="mt-1 text-sm text-red-500">

                        {errors.title.message}

                    </p>

                )}

            </div>

            {/* Amount */}

            <div>

                <label className="mb-2 block text-sm font-medium text-slate-700">

                    Amount

                </label>

                <input
                    type="number"
                    placeholder="Enter amount"
                    {...register("amount")}
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-indigo-500 focus:outline-none"
                />

                {errors.amount && (

                    <p className="mt-1 text-sm text-red-500">

                        {errors.amount.message}

                    </p>

                )}

            </div>

            {/* Category */}

            <div>

                <label className="mb-2 block text-sm font-medium text-slate-700">

                    Category

                </label>

                <select
                    {...register("category")}
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-indigo-500 focus:outline-none"
                >

                    <option value="Food">Food</option>
                    <option value="Transport">Transport</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Bills">Bills</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Education">Education</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Travel">Travel</option>
                    <option value="Others">Others</option>

                </select>

            </div>

            {/* Payment Method */}

            <div>

                <label className="mb-2 block text-sm font-medium text-slate-700">

                    Payment Method

                </label>

                <select
                    {...register("paymentMethod")}
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-indigo-500 focus:outline-none"
                >

                    <option value="Cash">Cash</option>
                    <option value="UPI">UPI</option>
                    <option value="Debit Card">Debit Card</option>
                    <option value="Credit Card">Credit Card</option>
                    <option value="Net Banking">Net Banking</option>
                    <option value="Wallet">Wallet</option>

                </select>

            </div>

            {/* Notes */}

            <div>

                <label className="mb-2 block text-sm font-medium text-slate-700">

                    Notes

                </label>

                <textarea
                    rows={4}
                    placeholder="Additional notes..."
                    {...register("notes")}
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-indigo-500 focus:outline-none"
                />

            </div>

            {/* Date */}

            <div>

                <label className="mb-2 block text-sm font-medium text-slate-700">

                    Date

                </label>

                <input
                    type="date"
                    {...register("date")}
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-indigo-500 focus:outline-none"
                />

                {errors.date && (

                    <p className="mt-1 text-sm text-red-500">

                        {errors.date.message}

                    </p>

                )}

            </div>

            {/* Submit */}

            <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-xl bg-indigo-600 py-3 font-semibold text-white"
                >

                {
                    loading

                        ? expense

                            ? "Updating Expense..."

                            : "Creating Expense..."

                        : expense

                            ? "Update Expense"

                            : "Create Expense"

                }

                </button>

        </form>

    );

};

export default ExpenseForm;
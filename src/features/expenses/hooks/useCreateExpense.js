import { useState } from "react";
import toast from "react-hot-toast";

import { createExpense } from "../api/expenseApi";

const useCreateExpense = () => {

    const [loading, setLoading] = useState(false);

    const create = async (expenseData) => {

        try {

            setLoading(true);

            const response = await createExpense(expenseData);

            toast.success("Expense Created");

            return response;

        } catch (err) {

            toast.error(

                err.response?.data?.message ||

                "Failed to create expense"

            );

            throw err;

        } finally {

            setLoading(false);

        }

    };

    return {

        create,

        loading,

    };

};

export default useCreateExpense;
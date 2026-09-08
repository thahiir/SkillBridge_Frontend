import { useState } from "react";
import toast from "react-hot-toast";

import { updateExpense } from "../api/expenseApi";

const useUpdateExpense = () => {

    const [loading, setLoading] = useState(false);

    const update = async (id, expenseData) => {

        try {

            setLoading(true);

            const response = await updateExpense(id, expenseData);

            toast.success("Expense Updated");

            return response;

        } catch (err) {

            toast.error(
                err.response?.data?.message ||
                "Failed to update expense"
            );

            throw err;

        } finally {

            setLoading(false);

        }

    };

    return {

        update,

        loading,

    };

};

export default useUpdateExpense;
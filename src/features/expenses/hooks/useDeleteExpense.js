import { useState } from "react";
import toast from "react-hot-toast";

import { deleteExpense } from "../api/expenseApi";

const useDeleteExpense = () => {

    const [loading, setLoading] = useState(false);

    const removeExpense = async (id) => {

        try {

            setLoading(true);

            const response = await deleteExpense(id);

            toast.success("Expense Deleted");

            return response;

        } catch (err) {

            toast.error(
                err.response?.data?.message ||
                "Failed to delete expense"
            );

            throw err;

        } finally {

            setLoading(false);

        }

    };

    return {

        removeExpense,

        loading,

    };

};

export default useDeleteExpense;
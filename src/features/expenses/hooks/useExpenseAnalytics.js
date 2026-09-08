import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import {
    getExpenseSummary,
    getMonthlyExpenses,
    getCategoryExpenses,
} from "../api/expenseApi";

const useExpenseAnalytics = () => {

    const [summary, setSummary] = useState(null);
    const [monthly, setMonthly] = useState([]);
    const [categories, setCategories] = useState([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchAnalytics = async () => {

        try {

            setLoading(true);

            const [

                summaryRes,
                monthlyRes,
                categoryRes,

            ] = await Promise.all([

                getExpenseSummary(),
                getMonthlyExpenses(),
                getCategoryExpenses(),

            ]);

            setSummary(summaryRes.summary);

            setMonthly(monthlyRes.monthly);

            setCategories(categoryRes.category);

            setError(null);

        } catch (err) {

            setError(err);

            toast.error(
                err.response?.data?.message ||
                "Failed to load expense analytics."
            );

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        fetchAnalytics();

    }, []);

    return {

        summary,

        monthly,

        categories,

        loading,

        error,

        fetchAnalytics,

    };

};

export default useExpenseAnalytics;
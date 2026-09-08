import { useEffect, useState } from "react";

import {
    getDashboardAnalytics,
    getTaskAnalytics,
    getExpenseAnalytics,
    getMonthlyExpenses,
    getCategoryExpenses,
} from "../api/analyticsApi";

const useAnalytics = () => {

    const [analytics, setAnalytics] = useState({
        dashboard: null,
        tasks: null,
        expenses: null,
        monthlyExpenses: [],
        categoryExpenses: [],
    });

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);

    const fetchAnalytics = async () => {

        try {

            setLoading(true);

            setError(null);

            const [
                dashboard,
                tasks,
                expenses,
                monthly,
                category,
            ] = await Promise.all([

                getDashboardAnalytics(),

                getTaskAnalytics(),

                getExpenseAnalytics(),

                getMonthlyExpenses(),

                getCategoryExpenses(),

            ]);

            setAnalytics({

                dashboard: dashboard.dashboard,

                tasks: tasks.summary,

                expenses: expenses.summary,

                monthlyExpenses: monthly.monthly || [],

                categoryExpenses: category.category || [],

            });

        } catch (error) {

            console.error(
                "Analytics Error:",
                error
            );

            setError(
                error.response?.data?.message ||
                "Unable to load analytics."
            );

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        fetchAnalytics();

    }, []);

    return {

        ...analytics,

        loading,

        error,

        fetchAnalytics,

    };

};

export default useAnalytics;
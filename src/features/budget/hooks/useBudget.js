import {
    useCallback,
    useEffect,
    useState,
} from "react";

import {
    getMonthlyBudget,
    saveMonthlyBudget,
    getMonthlySpending,
} from "../api/budgetApi";


const useBudget = () => {

    const currentDate = new Date();

    const [month, setMonth] = useState(
        currentDate.getMonth() + 1
    );

    const [year, setYear] = useState(
        currentDate.getFullYear()
    );

    const [budget, setBudget] = useState(null);

    // NEW
    const [totalSpent, setTotalSpent] = useState(0);

    const [loading, setLoading] = useState(true);

    const [saving, setSaving] = useState(false);

    const [error, setError] = useState(null);

    const [spending, setSpending] = useState({
        totalSpent:0,
        transactionCount:0,
    })


    /*
    |--------------------------------------------------------------------------
    | Fetch Budget + Monthly Spending
    |--------------------------------------------------------------------------
    */
    const fetchBudget = useCallback(
    async () => {

        try {

            setLoading(true);
            setError(null);

            const [
                budgetResponse,
                spendingResponse,
            ] = await Promise.all([

                getMonthlyBudget(
                    month,
                    year
                ),

                getMonthlySpending(
                    month,
                    year
                ),

            ]);

            setBudget(
                budgetResponse.data.data
            );

            setSpending({
                totalSpent:
                    spendingResponse.data.totalSpent || 0,

                transactionCount:
                    spendingResponse.data.transactionCount || 0,
            });

        } catch (error) {

            console.error(
                "Fetch Budget Error:",
                error
            );

            setError(
                error.response?.data?.message ||
                "Failed to load budget"
            );

        } finally {

            setLoading(false);

        }

    },
    [month, year]
);


    /*
    |--------------------------------------------------------------------------
    | Save Budget
    |--------------------------------------------------------------------------
    */

    const saveBudget = async (
        budgetData
    ) => {

        try {

            setSaving(true);

            setError(null);

            const response =
                await saveMonthlyBudget({
                    ...budgetData,

                    month,

                    year,
                });

            setBudget(
                response.data
            );

            return response.data;

        } catch (error) {

            console.error(
                "Save Budget Error:",
                error
            );

            setError(
                error.response?.data
                    ?.message ||
                "Failed to save budget"
            );

            throw error;

        } finally {

            setSaving(false);
        }
    };


    /*
    |--------------------------------------------------------------------------
    | Fetch When Month/Year Changes
    |--------------------------------------------------------------------------
    */

    useEffect(() => {

        fetchBudget();

    }, [fetchBudget]);


    return {

        budget,

        spending,

        month,

        year,

        setMonth,

        setYear,

        loading,

        saving,

        error,

        fetchBudget,

        saveBudget,
    };
};


export default useBudget;
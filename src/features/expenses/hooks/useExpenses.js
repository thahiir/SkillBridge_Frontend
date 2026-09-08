import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { getExpenses } from "../api/expenseApi";

const useExpenses = () => {

    const [expenses, setExpenses] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("");
    const [sort, setSort] = useState("-date");
    const [page, setPage] = useState(1);

    const fetchExpenses = async () => {

        try {

            setLoading(true);

            const response = await getExpenses({
                search,
                category,
                paymentMethod,
                sort,
                page,
            });

            setExpenses(response.expenses);

            setError(null);

        } catch (err) {

            setError(err);

            toast.error(
                err.response?.data?.message ||
                "Failed to load expenses"
            );

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        fetchExpenses();

    }, [search, category, paymentMethod, sort, page]);

    return {

        expenses,

        loading,

        error,

        
        fetchExpenses,

        search,
        setSearch,

        category,
        setCategory,

        paymentMethod,
        setPaymentMethod,

        sort,
        setSort,

        page,
        setPage,

    };

};

export default useExpenses;
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { getTaskSummary } from "../api/taskApi";

const useTaskSummary = () => {

    const [summary, setSummary] = useState({
        total: 0,
        pending: 0,
        inProgress: 0,
        completed: 0,
    });

    const [loading, setLoading] = useState(true);

    const fetchSummary = async () => {

        try {

            setLoading(true);

            const response = await getTaskSummary();

            setSummary(response.summary);

        } catch (err) {

            toast.error(
                err.response?.data?.message ||
                "Failed to load task summary"
            );

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        fetchSummary();

    }, []);

    return {

        summary,

        loading,

        fetchSummary,

    };

};

export default useTaskSummary;
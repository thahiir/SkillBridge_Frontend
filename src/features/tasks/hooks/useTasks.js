import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getTasks } from "../api/taskApi";


const useTasks = () => {

    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("");
    const [priority, setPriority] = useState("");
    const [sort, setSort] = useState("-createdAt");

    const [page, setPage] = useState(1);
    const [pagination, setPagination] = useState({});

    const fetchTasks = async () => {

        try {

            setLoading(true);

            const response = await getTasks({
                search,
                status,
                priority,
                sort,
                page,
                limit:10,
            });

            setTasks(response.tasks);

            setError(null);

            setPagination(response.pagination);

        } catch (err) {

            setError(err);

            toast.error(
                err.response?.data?.message ||
                "Failed to load tasks"
            );

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        fetchTasks();

    }, [search, status, priority, sort, page]);

    return {

        tasks,

        loading,

        error,

        fetchTasks,

        search,
        setSearch,

        status,
        setStatus,

        priority,
        setPriority,

        sort,
        setSort,

        page,
        setPage,

        pagination

    };

};

export default useTasks;
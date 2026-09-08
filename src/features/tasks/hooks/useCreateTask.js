import { useState } from "react";
import toast from "react-hot-toast";

import { createTask } from "../api/taskApi";

const useCreateTask = () => {

    const [loading, setLoading] = useState(false);

    const create = async (data) => {

        try {

            setLoading(true);

            const response = await createTask(data);

            toast.success("Task created successfully");

            return response;

        } catch (err) {

            toast.error(
                err.response?.data?.message ||
                "Unable to create task"
            );

            throw err;

        } finally {

            setLoading(false);

        }

    };

    return {

        loading,

        create,

    };

};

export default useCreateTask;
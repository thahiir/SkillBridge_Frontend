import { updateTask } from "../api/taskApi";
import toast from "react-hot-toast";

const useUpdateTask = () => {

    const update = async (id, taskData) => {

        try {

            await updateTask(id, taskData);

            toast.success("Task updated successfully");

        } catch (err) {

            toast.error(
                err.response?.data?.message ||
                "Failed to update task"
            );

            throw err;

        }

    };

    return { update };

};

export default useUpdateTask;
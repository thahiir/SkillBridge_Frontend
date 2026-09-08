import { deleteTask } from "../api/taskApi";
import toast from "react-hot-toast";

const useDeleteTask = () => {

    const removeTask = async (id) => {

        try {

            await deleteTask(id);

            toast.success("Task deleted successfully");

        } catch (err) {

            toast.error(
                err.response?.data?.message ||
                "Unable to delete task"
            );

            throw err;

        }

    };

    return { removeTask };

};

export default useDeleteTask;
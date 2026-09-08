import toast from "react-hot-toast";

import { deleteNotification } from "../api/notificationApi";

const useDeleteNotification = () => {

    const removeNotification = async (id) => {

        try {

            const response = await deleteNotification(id);

            toast.success(
                response.message || "Notification deleted successfully."
            );

            return response;

        } catch (err) {

            toast.error(
                err.response?.data?.message ||
                "Failed to delete notification."
            );

            throw err;

        }

    };

    return {

        removeNotification,

    };

};

export default useDeleteNotification;
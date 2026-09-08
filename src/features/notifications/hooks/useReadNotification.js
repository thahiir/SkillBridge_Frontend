import toast from "react-hot-toast";

import { markNotificationAsRead } from "../api/notificationApi";

const useReadNotification = () => {

    const markAsRead = async (id) => {

        try {

            const response = await markNotificationAsRead(id);

            toast.success(
                response.message || "Notification marked as read."
            );

            return response;

        } catch (err) {

            toast.error(
                err.response?.data?.message ||
                "Failed to mark notification as read."
            );

            throw err;

        }

    };

    return {

        markAsRead,

    };

};

export default useReadNotification;